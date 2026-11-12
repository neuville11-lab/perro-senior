import { writeFile } from 'node:fs/promises';

const outputPath = new URL('../prices.json', import.meta.url);
const asins = [
  'B0BNLWVPHD', 'B0859YRVFG', 'B08B32YPQH', 'B008EX52NU',
  'B0B355XMH5', 'B003W5RRGU', 'B0009YUDTU', 'B0GYZGBT6R',
  'B07D5VWMQF', 'B00T25450U', 'B0BNMVS45Y', 'B0G4W273Z9',
  'B0F8VXZCL7'
];

function emptyPrices(asOf = new Date().toISOString()) {
  return { marketplace: 'www.amazon.es', asOf, items: {} };
}

async function main() {
  const { AMAZON_CREATOR_CLIENT_ID: clientId, AMAZON_CREATOR_CLIENT_SECRET: clientSecret, AMAZON_PARTNER_TAG: partnerTag } = process.env;
  if (!clientId || !clientSecret || !partnerTag) {
    await writeFile(outputPath, `${JSON.stringify(emptyPrices(null), null, 2)}\n`);
    console.log('Amazon Creators API secrets not configured; publishing the price fallback state.');
    return;
  }

  try {
    const tokenResponse = await fetch('https://api.amazon.co.uk/auth/o2/token', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ grant_type: 'client_credentials', client_id: clientId, client_secret: clientSecret, scope: 'creatorsapi::default' })
    });
    if (!tokenResponse.ok) throw new Error(`Amazon token request failed (${tokenResponse.status})`);
    const { access_token: token } = await tokenResponse.json();
    if (!token) throw new Error('Amazon token response did not include an access token');

    const response = await fetch('https://creatorsapi.amazon/catalog/v1/getItems', {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json', 'x-marketplace': 'www.amazon.es' },
      body: JSON.stringify({
        itemIds: asins,
        itemIdType: 'ASIN',
        marketplace: 'www.amazon.es',
        partnerTag,
        resources: ['offersV2.listings.price', 'offersV2.listings.isBuyBoxWinner']
      })
    });
    if (!response.ok) throw new Error(`Amazon GetItems request failed (${response.status})`);
    const data = await response.json();
    const items = {};
    for (const item of data.itemsResult?.items ?? []) {
      const listings = item.offersV2?.listings ?? [];
      const listing = listings.find(offer => offer.isBuyBoxWinner) ?? listings[0];
      const money = listing?.price?.money ?? listing?.price?.Money ?? {};
      items[item.asin] = {
        amount: typeof money.amount === 'number' ? money.amount : null,
        displayAmount: money.displayAmount ?? null,
        currency: money.currency ?? null,
        available: Boolean(listing),
        url: item.detailPageURL ?? null
      };
    }
    await writeFile(outputPath, `${JSON.stringify({ ...emptyPrices(), items }, null, 2)}\n`);
    console.log(`Fetched current price data for ${Object.keys(items).length} Amazon items.`);
  } catch (error) {
    await writeFile(outputPath, `${JSON.stringify(emptyPrices(null), null, 2)}\n`);
    console.error(`Amazon price refresh unavailable: ${error.message}`);
  }
}

await main();


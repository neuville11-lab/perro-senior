const products = [
  {
    id: 'eheyciga-xl', name: 'EHEYCIGA cama ortopédica XL', category: 'Descanso', type: 'bed', asin: 'B0BNLWVPHD', image: 'assets/eheyciga-xl.jpg', affiliateUrl: 'https://link.amazon/B0dwsSzKx',
    summary: 'Cama tipo sofá de 112 × 81 cm con núcleo de espuma reversible y funda extraíble.',
    ideal: 'Perros grandes que agradecen una superficie amplia y un borde donde apoyar la cabeza.',
    details: { 'Medidas': '112 × 81 cm (XL)', 'Tipo': 'Sofá con bordes en tres lados', 'Núcleo': 'Espuma reversible: viscoelástica y perfil tipo huevera', 'Limpieza': 'Funda extraíble y lavable; consultar etiqueta', 'A tener en cuenta': 'Mide al perro estirado y revisa la altura del borde y el acceso.' },
    source: 'Ficha de producto', sourceUrl: 'https://todopetshop.com/productos/cama-eheyciga-sofa-ortopedica-xl', rank: 1
  },
  {
    id: 'bedsure-l', name: 'Bedsure colchón ortopédico L', category: 'Descanso', type: 'mattress', asin: 'B0859YRVFG', image: 'assets/bedsure-colchon-l.png', affiliateUrl: 'https://link.amazon/B0dKBUHLx',
    summary: 'Colchón de espuma con superficie de tipo huevera, funda extraíble y base antideslizante.',
    ideal: 'Perros medianos que prefieren una cama de perfil bajo y una superficie abierta. Confirma la variante y la talla.',
    details: { 'Medidas': 'Talla L; confirma variante en Amazon', 'Tipo': 'Colchón plano', 'Núcleo': 'Espuma de perfil tipo huevera', 'Limpieza': 'Funda extraíble; retirar la espuma antes del lavado', 'A tener en cuenta': 'Las fichas pueden agrupar varias tallas y colores.' },
    source: 'Ficha de producto', sourceUrl: 'https://todopetshop.com/productos/bedsure-colchon-ortopedico-l', rank: 2
  },
  {
    id: 'trixie-ramp', name: 'TRIXIE rampa telescópica 39479', category: 'Movilidad', type: 'ramp', asin: 'B08B32YPQH', image: 'assets/trixie-rampa.png', affiliateUrl: 'https://link.amazon/B02ggguTT',
    summary: 'Rampa telescópica de aluminio y TPR para facilitar el acceso al coche. Medidas indicadas: 40 × 78–175 cm; 6,8 kg; hasta 90 kg.',
    ideal: 'Perros que pueden caminar por la rampa, pero necesitan evitar el salto al maletero.',
    details: { 'Medidas': '40 × 78–175 cm', 'Peso': '6,8 kg', 'Capacidad indicada': 'Hasta 90 kg', 'Superficie': 'TPR antideslizante', 'A tener en cuenta': 'Mide la altura del maletero; la longitud determina la pendiente.' },
    source: 'Ficha oficial TRIXIE', sourceUrl: 'https://www.trixie.es/Rampa-Telescopica-3-Pasos-aluminio/TPR', rank: 3
  },
  {
    id: 'petsafe-carelift', name: 'PetSafe CareLift arnés integral', category: 'Movilidad', type: 'harness', asin: 'B008EX52NU', image: 'assets/petsafe-carelift.png', affiliateUrl: 'https://link.amazon/B0863CufK',
    summary: 'Arnés de soporte de cuerpo completo con asas y correa de hombro en tallas compatibles.',
    ideal: 'Perros que requieren ayuda para levantarse o desplazarse, siguiendo orientación veterinaria.',
    details: { 'Tipo': 'Soporte de cuerpo completo', 'Ajuste': 'Tallas y modelos distintos', 'Asistencia': 'Asas; algunos modelos incluyen correa de hombro', 'Limpieza': 'Lavable a máquina según fabricante', 'A tener en cuenta': 'Escoge modelo y talla por las medidas del perro; no levantar si le causa dolor.' },
    source: 'Ficha oficial PetSafe', sourceUrl: 'https://support.petsafe.net/product-support/carelift-support-harness/', rank: 4
  },
  {
    id: 'ruffwear-webmaster', name: 'Ruffwear Web Master arnés', category: 'Movilidad', type: 'harness', asin: 'B0B355XMH5', image: 'assets/ruffwear-web-master.png', affiliateUrl: 'https://link.amazon/B0dSLrnfv',
    summary: 'Arnés ajustable con asa dorsal reforzada y varios puntos de sujeción.',
    ideal: 'Paseos y ayuda ligera en obstáculos para perros que mantienen movilidad. No sustituye a un arnés de elevación.',
    details: { 'Tipo': 'Arnés multiuso de tres correas', 'Ajuste': 'Cuatro puntos; tallas por contorno torácico', 'Asistencia': 'Asa acolchada para apoyo equilibrado', 'Materiales': 'Panel posterior acolchado y transpirable', 'A tener en cuenta': 'No sustituye a un arnés de elevación; ajusta sin rozar.' },
    source: 'Ficha oficial Ruffwear', sourceUrl: 'https://ruffwear.com/products/web-master-harness', rank: 5
  },
  {
    id: 'yumove-senior', name: 'YuMOVE Articulaciones para perros mayores', category: 'Articulaciones', type: 'supplement', asin: 'B003W5RRGU', image: 'assets/yumove-articulaciones.png', affiliateUrl: 'https://link.amazon/B0cZSXgiZ',
    summary: 'Complemento masticable; la fórmula, los ingredientes y la ración dependen de la variante y deben revisarse en la etiqueta.',
    ideal: 'Solo si el veterinario considera que un suplemento es apropiado para ese perro.',
    details: { 'Formato': 'Comprimidos masticables', 'Variantes': 'Adulto, sénior y distintos tamaños de envase', 'Ingredientes': 'Revisa la etiqueta de la variante concreta', 'Ración': 'Según peso e instrucciones del envase', 'A tener en cuenta': 'Consulta al veterinario por medicación, dieta y situación clínica.' },
    source: 'Web oficial YuMOVE', sourceUrl: 'https://es.yumove.com/', rank: 6
  },
  {
    id: 'simple-solution-diaper', name: 'Simple Solution pañal lavable', category: 'Higiene', type: 'diaper', asin: 'B0009YUDTU', image: 'assets/simple-solution-panal.jpg', affiliateUrl: 'https://link.amazon/B03GmTIAi',
    summary: 'Pañal reutilizable para perras con forro absorbente y ajuste regulable.',
    ideal: 'Gestión de escapes ocasionales cuando la causa ya se ha valorado con el veterinario.',
    details: { 'Tipo': 'Pañal lavable para perras', 'Tallas': 'Varias; mide la cintura junto a las patas traseras', 'Cierre': 'Bandas ajustables', 'Limpieza': 'Lavable; seguir indicaciones del fabricante', 'A tener en cuenta': 'Cambiarlo con frecuencia y mantener la piel limpia y seca.' },
    source: 'Ficha oficial Simple Solution', sourceUrl: 'https://simplesolution.com/products/washable-female-dog-diaper', rank: 7
  }
];

let currentFilter = 'Todos';
const grid = document.querySelector('#product-grid');
const comparisonOutput = document.querySelector('#comparison-output');
const comparisonPicker = document.querySelector('#comparison-picker');
const comparisonCount = document.querySelector('#comparison-count');
const selectionStorageKey = 'perroSenior.compareSelection';
const selectedProducts = new Set();
try {
  const savedSelection = JSON.parse(localStorage.getItem(selectionStorageKey) || '[]');
  savedSelection.filter(id => products.some(product => product.id === id)).forEach(id => selectedProducts.add(id));
} catch { /* local comparison still works if storage is unavailable */ }
const incomingProduct = new URLSearchParams(window.location.search).get('producto');
if (comparisonPicker && selectedProducts.size < 4 && products.some(product => product.id === incomingProduct)) selectedProducts.add(incomingProduct);
if (comparisonPicker && incomingProduct) window.history.replaceState(null, '', `${window.location.pathname}#comparador`);
function saveSelection() {
  try { localStorage.setItem(selectionStorageKey, JSON.stringify([...selectedProducts])); } catch { /* selection remains in memory for this visit */ }
}
saveSelection();

function art(type) {
  if (type === 'harness') return '<div class="illustration harness-illo"><span class="strap"></span><span class="strap s2"></span><span class="ring"></span><span class="support"></span></div>';
  if (type === 'ramp') return '<div class="illustration ramp-illo"><span class="ramp-board"></span><span class="ramp-leg"></span><span class="ramp-dash"></span></div>';
  if (type === 'mattress') return '<div class="illustration mattress-illo"><span class="mattress"></span><span class="mattress-top"></span><span class="mattress-stitch"></span></div>';
  if (type === 'supplement') return '<div class="illustration supplement-illo"><span class="jar"></span><span class="jar-lid"></span><span class="jar-label">+</span><span class="leaf">✳</span></div>';
  if (type === 'diaper') return '<div class="illustration diaper-illo"><span class="diaper"></span><span class="diaper-belt"></span><span class="diaper-mark">♡</span></div>';
  return '<div class="illustration bed-illo"><span class="bed-shape"></span><span class="bed-pillow"></span><span class="bed-fold"></span></div>';
}

function amazonProduct(product) {
  return product.affiliateUrl || `https://www.amazon.es/dp/${product.asin}`;
}

let amazonPrices = { asOf: null, items: {} };

function currentPrice(product) {
  const entry = amazonPrices.items?.[product.asin];
  if (!entry?.displayAmount || !amazonPrices.asOf) return 'Precio: consultar en Amazon';
  const checked = new Intl.DateTimeFormat('es-ES', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Madrid' }).format(new Date(amazonPrices.asOf));
  return `Precio: ${entry.displayAmount} · actualizado ${checked}`;
}

async function loadAmazonPrices() {
  try {
    const response = await fetch(`prices.json?v=${Date.now()}`, { cache: 'no-store' });
    if (!response.ok) return;
    amazonPrices = await response.json();
    if (grid) renderProducts();
loadAmazonPrices();
    if (comparisonPicker) renderComparison();
  } catch { /* Keep the Amazon link as the price fallback if the feed is unavailable. */ }
}

function renderProducts() {
  if (!grid) return;
  const visibleProducts = products.filter(product => currentFilter === 'Todos' || product.category === currentFilter);
  grid.innerHTML = visibleProducts.map((product, index) => `<article class="product-card" style="--delay:${index * 35}ms">
    <div class="product-art art-${product.type}"><img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async"><span class="product-badge">${product.category.toUpperCase()}</span></div>
    <div class="product-info"><h3>${product.name}</h3><p>${product.summary}</p>
      <div class="product-detail"><span>ENCAJA SI</span><b>${product.ideal}</b></div>
      <div class="product-footer"><span class="example-price">${currentPrice(product)}</span><a class="product-link" href="${amazonProduct(product)}" target="_blank" rel="sponsored nofollow noopener noreferrer">Ver producto en Amazon <span>↗</span></a></div>
      <div class="history-link">Ficha: <a href="${product.sourceUrl}" target="_blank" rel="noopener noreferrer">${product.source} ↗</a></div>
      <a class="compare-choice-link" href="comparador.html?producto=${product.id}#comparador">Comparar este producto <span>↗</span></a>
    </div></article>`).join('');
}

function renderComparison() {
  const chosen = products.filter(product => selectedProducts.has(product.id));
  comparisonCount.textContent = `${chosen.length} de 4 seleccionados`;
  if (chosen.length < 2) {
    comparisonOutput.className = 'comparison-empty';
    comparisonOutput.innerHTML = `<span class="compare-empty-icon">⇄</span><b>${chosen.length === 0 ? 'Elige dos productos para empezar' : 'Añade un producto más'}</b><small>Verás miniaturas, enlaces y características en columnas paralelas.</small>`;
    return;
  }
  const rows = ['Categoría', ...new Set(chosen.flatMap(product => Object.keys(product.details)))];
  comparisonOutput.className = 'comparison-results';
  comparisonOutput.innerHTML = `<div class="comparison-products-wrap"><div class="comparison-products" style="--compare-columns:${chosen.length}">${chosen.map(product => `<article class="comparison-product"><div class="comparison-product-image art-${product.type}"><img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async"></div><div class="comparison-product-info"><span class="table-category">${product.category}</span><h3>${product.name}</h3><p class="compare-price">${currentPrice(product)}</p><a class="amazon-button" href="${amazonProduct(product)}" target="_blank" rel="sponsored nofollow noopener noreferrer">Ver en Amazon <span>↗</span></a><button class="remove-product" type="button" data-remove-product="${product.id}">Quitar</button></div></article>`).join('')}</div></div><div class="comparison-table-wrap"><table class="comparison-table"><thead><tr><th scope="col">Características</th>${chosen.map(product => `<th scope="col"><span class="table-category">${product.category}</span><b>${product.name}</b></th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr><th scope="row">${row}</th>${chosen.map(product => `<td>${row === 'Categoría' ? product.category : (product.details[row] || '—')}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="comparison-footnote">La disponibilidad y las variantes cambian. Confirma los detalles en Amazon antes de comprar.</p>`;
}

function renderPicker() {
  comparisonPicker.innerHTML = products.map(product => {
    const isSelected = selectedProducts.has(product.id);
    const isFull = selectedProducts.size >= 4 && !isSelected;
    return `<article class="picker-card ${isSelected ? 'is-selected' : ''}"><div class="picker-image art-${product.type}"><img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy" decoding="async"></div><div class="picker-info"><span class="table-category">${product.category}</span><b>${product.name}</b><button type="button" class="picker-action" data-picker-product="${product.id}" ${isFull ? 'disabled' : ''}>${isSelected ? 'Añadido ✓' : 'Añadir +'}</button></div></article>`;
  }).join('');
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active')?.classList.remove('active');
  button.classList.add('active');
  currentFilter = button.dataset.filter;
  renderProducts();
}));

if (comparisonPicker) comparisonPicker.addEventListener('click', event => {
  const button = event.target.closest('[data-picker-product]');
  if (!button || button.disabled) return;
  const id = button.dataset.pickerProduct;
  if (selectedProducts.has(id)) selectedProducts.delete(id);
  else if (selectedProducts.size < 4) selectedProducts.add(id);
  saveSelection();
  renderPicker();
  renderComparison();
});

if (comparisonOutput) comparisonOutput.addEventListener('click', event => {
  const button = event.target.closest('[data-remove-product]');
  if (!button) return;
  selectedProducts.delete(button.dataset.removeProduct);
  saveSelection();
  renderPicker();
  renderComparison();
});

document.querySelector('#clear-comparison')?.addEventListener('click', () => {
  selectedProducts.clear();
  saveSelection();
  renderPicker();
  renderComparison();
});

const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const opened = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!opened));
  document.querySelector('#main-nav').classList.toggle('nav-open', !opened);
});
document.querySelectorAll('#main-nav a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  document.querySelector('#main-nav').classList.remove('nav-open');
}));

if (grid) renderProducts();
if (comparisonPicker) {
  renderPicker();
  renderComparison();
}


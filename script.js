const products = [
  {
    id: 'eheyciga-xl', name: 'EHEYCIGA cama ortopédica XL', category: 'Descanso', type: 'bed', asin: 'B0BNLWVPHD',
    summary: 'Cama tipo sofá de 112 × 81 cm con núcleo de espuma reversible y funda extraíble.',
    ideal: 'Perros grandes que agradecen una superficie amplia y un borde donde apoyar la cabeza.',
    details: { 'Medidas': '112 × 81 cm (XL)', 'Tipo': 'Sofá con bordes en tres lados', 'Núcleo': 'Espuma reversible: viscoelástica y perfil tipo huevera', 'Limpieza': 'Funda extraíble y lavable; consultar etiqueta', 'A tener en cuenta': 'Mide al perro estirado y revisa la altura del borde y el acceso.' },
    source: 'Ficha de producto', sourceUrl: 'https://todopetshop.com/productos/cama-eheyciga-sofa-ortopedica-xl', rank: 1
  },
  {
    id: 'bedsure-l', name: 'Bedsure colchón ortopédico L', category: 'Descanso', type: 'mattress', asin: 'B0859YRVFG',
    summary: 'Colchón de espuma con superficie de tipo huevera, funda extraíble y base antideslizante.',
    ideal: 'Perros medianos que prefieren una cama de perfil bajo y una superficie abierta.',
    details: { 'Medidas': 'Talla L; confirma variante en Amazon', 'Tipo': 'Colchón plano', 'Núcleo': 'Espuma de perfil tipo huevera', 'Limpieza': 'Funda extraíble; retirar la espuma antes del lavado', 'A tener en cuenta': 'Las fichas pueden agrupar varias tallas y colores.' },
    source: 'Ficha de producto', sourceUrl: 'https://todopetshop.com/productos/bedsure-colchon-ortopedico-l', rank: 2
  },
  {
    id: 'trixie-ramp', name: 'TRIXIE rampa telescópica 39479', category: 'Movilidad', type: 'ramp', asin: 'B08B32YPQH',
    summary: 'Rampa telescópica de aluminio y TPR para facilitar el acceso al coche.',
    ideal: 'Perros que pueden caminar por la rampa, pero necesitan evitar el salto al maletero.',
    details: { 'Medidas': '40 × 78–175 cm', 'Peso': '6,8 kg', 'Capacidad indicada': 'Hasta 90 kg', 'Superficie': 'TPR antideslizante', 'A tener en cuenta': 'Mide la altura del maletero; la longitud determina la pendiente.' },
    source: 'Ficha oficial TRIXIE', sourceUrl: 'https://www.trixie.es/Rampa-Telescopica-3-Pasos-aluminio/TPR', rank: 3
  },
  {
    id: 'petsafe-carelift', name: 'PetSafe CareLift arnés integral', category: 'Movilidad', type: 'harness', asin: 'B008EX52NU',
    summary: 'Arnés de soporte de cuerpo completo con asas y correa de hombro en tallas compatibles.',
    ideal: 'Perros que requieren ayuda para levantarse o desplazarse, siguiendo orientación veterinaria.',
    details: { 'Tipo': 'Soporte de cuerpo completo', 'Ajuste': 'Tallas y modelos distintos', 'Asistencia': 'Asas; algunos modelos incluyen correa de hombro', 'Limpieza': 'Lavable a máquina según fabricante', 'A tener en cuenta': 'Escoge modelo y talla por las medidas del perro; no levantar si le causa dolor.' },
    source: 'Ficha oficial PetSafe', sourceUrl: 'https://support.petsafe.net/product-support/carelift-support-harness/', rank: 4
  },
  {
    id: 'ruffwear-webmaster', name: 'Ruffwear Web Master arnés', category: 'Movilidad', type: 'harness', asin: 'B0B355XMH5',
    summary: 'Arnés ajustable con asa dorsal reforzada y varios puntos de sujeción.',
    ideal: 'Paseos y ayuda ligera en obstáculos para perros que mantienen movilidad.',
    details: { 'Tipo': 'Arnés multiuso de tres correas', 'Ajuste': 'Cuatro puntos; tallas por contorno torácico', 'Asistencia': 'Asa acolchada para apoyo equilibrado', 'Materiales': 'Panel posterior acolchado y transpirable', 'A tener en cuenta': 'No sustituye a un arnés de elevación; ajusta sin rozar.' },
    source: 'Ficha oficial Ruffwear', sourceUrl: 'https://ruffwear.com/products/web-master-harness', rank: 5
  },
  {
    id: 'yumove-senior', name: 'YuMOVE Articulaciones para perros mayores', category: 'Articulaciones', type: 'supplement', asin: 'B003W5RRGU',
    summary: 'Complemento masticable de YuMOVE; la fórmula y la ración dependen de la variante.',
    ideal: 'Solo si el veterinario considera que un suplemento es apropiado para ese perro.',
    details: { 'Formato': 'Comprimidos masticables', 'Variantes': 'Adulto, sénior y distintos tamaños de envase', 'Ingredientes': 'Revisa la etiqueta de la variante concreta', 'Ración': 'Según peso e instrucciones del envase', 'A tener en cuenta': 'Consulta al veterinario por medicación, dieta y situación clínica.' },
    source: 'Web oficial YuMOVE', sourceUrl: 'https://es.yumove.com/', rank: 6
  },
  {
    id: 'simple-solution-diaper', name: 'Simple Solution pañal lavable', category: 'Higiene', type: 'diaper', asin: 'B0009YUDTU',
    summary: 'Pañal reutilizable para perras con forro absorbente y ajuste regulable.',
    ideal: 'Gestión de escapes ocasionales cuando la causa ya se ha valorado con el veterinario.',
    details: { 'Tipo': 'Pañal lavable para perras', 'Tallas': 'Varias; mide la cintura junto a las patas traseras', 'Cierre': 'Bandas ajustables', 'Limpieza': 'Lavable; seguir indicaciones del fabricante', 'A tener en cuenta': 'Cambiarlo con frecuencia y mantener la piel limpia y seca.' },
    source: 'Ficha oficial Simple Solution', sourceUrl: 'https://simplesolution.com/products/washable-female-dog-diaper', rank: 7
  }
];

let currentFilter = 'Todos';
const selectedProducts = new Set();
const grid = document.querySelector('#product-grid');
const comparisonOutput = document.querySelector('#comparison-output');

function art(type) {
  if (type === 'harness') return '<div class="illustration harness-illo"><span class="strap"></span><span class="strap s2"></span><span class="ring"></span><span class="support"></span></div>';
  if (type === 'ramp') return '<div class="illustration ramp-illo"><span class="ramp-board"></span><span class="ramp-leg"></span><span class="ramp-dash"></span></div>';
  if (type === 'mattress') return '<div class="illustration mattress-illo"><span class="mattress"></span><span class="mattress-top"></span><span class="mattress-stitch"></span></div>';
  if (type === 'supplement') return '<div class="illustration supplement-illo"><span class="jar"></span><span class="jar-lid"></span><span class="jar-label">+</span><span class="leaf">✳</span></div>';
  if (type === 'diaper') return '<div class="illustration diaper-illo"><span class="diaper"></span><span class="diaper-belt"></span><span class="diaper-mark">♡</span></div>';
  return '<div class="illustration bed-illo"><span class="bed-shape"></span><span class="bed-pillow"></span><span class="bed-fold"></span></div>';
}

function amazonProduct(product) {
  return `https://www.amazon.es/dp/${product.asin}`;
}

function renderProducts() {
  const visibleProducts = products.filter(product => currentFilter === 'Todos' || product.category === currentFilter);
  grid.innerHTML = visibleProducts.map((product, index) => `<article class="product-card" style="--delay:${index * 35}ms">
    <div class="product-art art-${product.type}">${art(product.type)}<span class="product-badge">${product.category.toUpperCase()}</span><span class="photo-note">Foto oficial pendiente</span></div>
    <div class="product-info"><h3>${product.name}</h3><p>${product.summary}</p>
      <div class="product-detail"><span>ENCAJA SI</span><b>${product.ideal}</b></div>
      <div class="product-footer"><span class="example-price">Precio: consultar en Amazon</span><a class="product-link" href="${amazonProduct(product)}" target="_blank" rel="noopener noreferrer nofollow">Ver producto en Amazon <span>↗</span></a></div>
      <div class="history-link">Ficha: <a href="${product.sourceUrl}" target="_blank" rel="noopener noreferrer">${product.source} ↗</a></div>
      <label class="compare-choice"><input type="checkbox" data-select-product="${product.id}" ${selectedProducts.has(product.id) ? 'checked' : ''}><span>Añadir al comparador</span></label>
    </div></article>`).join('');
}

function renderComparison() {
  const chosen = products.filter(product => selectedProducts.has(product.id));
  if (chosen.length < 2) {
    comparisonOutput.className = 'comparison-empty';
    comparisonOutput.textContent = `Selecciona ${chosen.length === 0 ? 'dos' : 'un producto más'} para ver la comparación completa. Puedes elegir hasta cuatro.`;
    return;
  }
  const rows = ['Categoría', ...new Set(chosen.flatMap(product => Object.keys(product.details)))];
  comparisonOutput.className = 'comparison-table-wrap';
  comparisonOutput.innerHTML = `<table class="comparison-table"><thead><tr><th scope="col">Detalle</th>${chosen.map(product => `<th scope="col"><span class="table-category">${product.category}</span><b>${product.name}</b><a href="${amazonProduct(product)}" target="_blank" rel="noopener noreferrer nofollow">Ver en Amazon ↗</a></th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr><th scope="row">${row}</th>${chosen.map(product => `<td>${row === 'Categoría' ? product.category : (product.details[row] || '—')}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="comparison-footnote">La disponibilidad y las variantes pueden cambiar. Confirma los detalles en la ficha del producto.</p>`;
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active')?.classList.remove('active');
  button.classList.add('active');
  currentFilter = button.dataset.filter;
  renderProducts();
}));

grid.addEventListener('change', event => {
  const checkbox = event.target.closest('[data-select-product]');
  if (!checkbox) return;
  if (checkbox.checked && selectedProducts.size >= 4) {
    checkbox.checked = false;
    comparisonOutput.className = 'comparison-empty comparison-limit';
    comparisonOutput.textContent = 'Puedes comparar hasta cuatro productos a la vez.';
    window.setTimeout(renderComparison, 1800);
    return;
  }
  if (checkbox.checked) selectedProducts.add(checkbox.dataset.selectProduct);
  else selectedProducts.delete(checkbox.dataset.selectProduct);
  renderComparison();
});

document.querySelector('#clear-comparison').addEventListener('click', () => {
  selectedProducts.clear();
  renderProducts();
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

renderProducts();
renderComparison();


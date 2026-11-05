const items = [
  { name: 'Cama de apoyo envolvente', category: 'Descanso', type: 'bed', summary: 'Borde mullido y base de apoyo para su rincón de descanso.', ideal: 'Perros que disfrutan dormir acurrucados', care: 'Funda extraíble · revisar medidas', price: 0, badge: 'DESCANSO', score: 1 },
  { name: 'Arnés de soporte trasero', category: 'Movilidad', type: 'harness', summary: 'Ayuda a acompañar algunos movimientos con soporte ajustable.', ideal: 'Paseos asistidos por recomendación profesional', care: 'Ajuste regulable · varios tallajes', price: 0, badge: 'MOVILIDAD', score: 2 },
  { name: 'Rampa plegable antideslizante', category: 'Movilidad', type: 'ramp', summary: 'Una alternativa gradual para subir a superficies elevadas.', ideal: 'Hogares con coche o sofá alto', care: 'Superficie con agarre · medir altura', price: 0, badge: 'MOVILIDAD', score: 3 },
  { name: 'Colchoneta viscoelástica', category: 'Descanso', type: 'mattress', summary: 'Superficie amplia con capas de distinta firmeza.', ideal: 'Perros que prefieren estirarse al dormir', care: 'Funda lavable · comprobar grosor', price: 0, badge: 'DESCANSO', score: 4 },
  { name: 'Suplemento articular para perros', category: 'Recuperación', type: 'supplement', summary: 'Formato orientativo para hablar de ingredientes y etiquetado.', ideal: 'Solo tras consultar al veterinario', care: 'Revisar ingredientes y dosis con su veterinario', price: 0, badge: 'RECUPERACIÓN', score: 5 },
  { name: 'Escalón bajo para sofá', category: 'Movilidad', type: 'step', summary: 'Peldaño de apoyo para reducir saltos en casa.', ideal: 'Perros pequeños o con saltos menos cómodos', care: 'Base estable · revisar altura y peso', price: 0, badge: 'MOVILIDAD', score: 6 },
];
let currentFilter = 'Todos';
const grid = document.querySelector('#product-grid');
function art(type) {
  if (type === 'harness') return '<div class="illustration harness-illo"><span class="strap"></span><span class="strap s2"></span><span class="ring"></span><span class="support"></span></div>';
  if (type === 'ramp') return '<div class="illustration ramp-illo"><span class="ramp-board"></span><span class="ramp-leg"></span><span class="ramp-dash"></span></div>';
  if (type === 'mattress') return '<div class="illustration mattress-illo"><span class="mattress"></span><span class="mattress-top"></span><span class="mattress-stitch"></span></div>';
  if (type === 'supplement') return '<div class="illustration supplement-illo"><span class="jar"></span><span class="jar-lid"></span><span class="jar-label">+</span><span class="leaf">✳</span></div>';
  if (type === 'step') return '<div class="illustration step-illo"><span class="step-shape"></span><span class="step-seam"></span></div>';
  return '<div class="illustration bed-illo"><span class="bed-shape"></span><span class="bed-pillow"></span><span class="bed-fold"></span></div>';
}
function render() {
  let products = items.filter(p => currentFilter === 'Todos' || p.category === currentFilter);
  const sort = document.querySelector('#sort-select')?.value;
  if (sort === 'name') products.sort((a,b) => a.name.localeCompare(b.name, 'es'));
  if (sort === 'price') products.sort((a,b) => a.score-b.score);
  if (sort === 'recommended') products.sort((a,b) => a.score-b.score);
  grid.innerHTML = products.map((p, i) => `<article class="product-card" style="--delay:${i * 45}ms"><div class="product-art art-${p.type}">${art(p.type)}<span class="product-badge">${p.badge}</span><button class="save-button" aria-label="Guardar ${p.name}" title="Guardar">♡</button></div><div class="product-info"><h3>${p.name}</h3><p>${p.summary}</p><div class="product-detail"><span>MEJOR PARA</span><b>${p.ideal}</b></div><div class="product-detail care-detail"><span>EN QUÉ FIJARSE</span><b>${p.care}</b></div><div class="product-footer"><span class="example-price">Producto de ejemplo</span><a href="#precios" class="product-link">Ver qué comparar <span>↗</span></a></div><div class="history-link">El precio real y su historial aparecerán al integrar fuentes aprobadas.</div></div></article>`).join('');
  grid.querySelectorAll('.save-button').forEach(btn => btn.addEventListener('click', () => { btn.classList.toggle('saved'); btn.textContent = btn.classList.contains('saved') ? '♥' : '♡'; btn.setAttribute('aria-pressed', btn.classList.contains('saved')); }));
}
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => { document.querySelector('.filter.active')?.classList.remove('active'); btn.classList.add('active'); currentFilter = btn.dataset.filter; render(); }));
document.querySelector('#sort-select').addEventListener('change', render);
document.querySelectorAll('[data-jump-filter]').forEach(a => a.addEventListener('click', () => { currentFilter = a.dataset.jumpFilter; document.querySelectorAll('.filter').forEach(b => b.classList.toggle('active', b.dataset.filter === currentFilter)); render(); }));
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => { const opened = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!opened)); document.querySelector('#main-nav').classList.toggle('nav-open', !opened); });
document.querySelectorAll('#main-nav a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); document.querySelector('#main-nav').classList.remove('nav-open'); }));
render();


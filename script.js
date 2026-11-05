const products = [
  { name: 'EHEYCIGA cama sofá ortopédica XL', category: 'Descanso', type: 'bed', summary: 'Colchón de doble cara: espuma viscoelástica y perfil tipo huevera, con bordes en tres lados.', ideal: 'Perros grandes que agradecen una superficie amplia y un borde donde apoyar la cabeza.', compare: 'Mide al perro estirado; comprueba el grosor, la altura de entrada y la funda lavable.', query: 'EHEYCIGA cama perro ortopedica XL 112x81', rank: 1, source: 'Ficha de producto', sourceUrl: 'https://todopetshop.com/productos/cama-eheyciga-sofa-ortopedica-xl' },
  { name: 'Bedsure cama ortopédica para perro', category: 'Descanso', type: 'mattress', summary: 'Cama de espuma con funda extraíble y base impermeable, disponible en varias tallas.', ideal: 'Perros medianos que necesitan una cama amplia de perfil más bajo.', compare: 'Confirma medidas exactas de la variante: las reseñas pueden agrupar varias tallas.', query: 'Bedsure cama ortopedica perro 89x64 espuma viscoelastica', rank: 2, source: 'Comparativa de camas', sourceUrl: 'https://www.petdealscorner.com/es/cama-ortopedica-perro/' },
  { name: 'Feandrea escalera de 2 peldaños', category: 'Movilidad', type: 'step', summary: 'Peldaños de espuma de alta densidad con funda lavable y base antideslizante.', ideal: 'Perros pequeños que aún pueden subir escalones y necesitan llegar a un sofá bajo.', compare: 'Mide el mueble y verifica la carga admitida; no es equivalente a una rampa para todo perro.', query: 'Feandrea escaleras perros 2 peldaños PPS022GN01', rank: 3, source: 'Ficha de producto', sourceUrl: 'https://www.comparar.net/precios/escaleras-mascotas-4400875810474511003.html' },
  { name: 'TRIXIE 39479 rampa telescópica', category: 'Movilidad', type: 'ramp', summary: 'Rampa de aluminio y TPR, ajustable de 78 a 175 cm; TRIXIE indica capacidad de hasta 90 kg.', ideal: 'Perros que siguen caminando pero necesitan evitar el salto al coche.', compare: 'Mide la altura del maletero; la longitud determina la pendiente. Pesa 6,8 kg.', query: 'TRIXIE 39479 rampa telescopica perro B08B32YPQH', rank: 4, source: 'Ficha oficial TRIXIE', sourceUrl: 'https://www.trixie.es/Rampa-Telescopica-3-Pasos-aluminio/TPR' },
  { name: 'Ortocanis arnés integral ORT039', category: 'Movilidad', type: 'harness', summary: 'Arnés de asistencia para ayudar a sostener al perro al caminar; con varias zonas de ajuste.', ideal: 'Perros con movilidad reducida cuando el veterinario o rehabilitador recomienda asistencia manual.', compare: 'Talla y ajuste son esenciales. Introducirlo poco a poco y revisar la piel por si aparecen roces.', query: 'Ortocanis arnes integral ORT039 perro Amazon', rank: 5, source: 'Manual y ficha de seguridad', sourceUrl: 'https://m.media-amazon.com/images/I/5190ETqdaxL.pdf' },
  { name: 'Ruffwear Web Master Harness', category: 'Movilidad', type: 'harness', summary: 'Arnés de paseo con asa dorsal y varios puntos de ajuste; pensado para control y asistencia ligera.', ideal: 'Paseos, obstáculos y ayuda puntual sin levantar al perro por el cuello.', compare: 'No sustituye un arnés ortopédico de elevación; mide el contorno del pecho y ajusta sin rozar.', query: 'Ruffwear Web Master arnes perro Amazon España', rank: 6, source: 'Descripción del fabricante/distribuidor', sourceUrl: 'https://www.ortocanis.com/es/ayudas-tecnicas/webmaster-arnes-canino-ruffwear.html' },
  { name: 'EchoSmile carrito plegable hasta 40 kg', category: 'Movilidad', type: 'stroller', summary: 'Cochecito plegable con ruedas todoterreno y suspensión para trayectos en los que caminar ya cuesta.', ideal: 'Perros que quieren seguir saliendo, pero no pueden completar todo el paseo andando.', compare: 'Verifica carga, medidas interiores, entrada y peso del carrito; acostúmbrale gradualmente.', query: 'EchoSmile carrito perro plegable hasta 40 kg Amazon', rank: 7, source: 'Ficha de producto', sourceUrl: 'https://amiceed.com/producto/carrito-plegable-echosmile-para-perros-hasta-40-kg-azul-y-blanco/' },
  { name: 'YuMOVE Articulaciones para perros sénior', category: 'Articulaciones', type: 'supplement', summary: 'Complemento masticable de la marca YuMOVE; sus variantes cambian por edad, tamaño y formato.', ideal: 'Solo si el veterinario considera adecuado añadir un suplemento a su caso.', compare: 'Comprueba la variante de edad y peso, ingredientes, ración diaria y compatibilidad con su dieta o medicación.', query: 'YuMOVE articulaciones perros senior +8 Amazon España', rank: 8, source: 'Web oficial YuMOVE', sourceUrl: 'https://es.yumove.com/' },
  { name: 'Pañal lavable Simple Solution', category: 'Higiene', type: 'diaper', summary: 'Pañal reutilizable para perras; una ayuda práctica para gestionar escapes en casa.', ideal: 'Perros con incontinencia ya evaluada o periodos puntuales en que se necesita protección.', compare: 'Mide la cintura, revisa la talla y cambia el pañal con frecuencia para mantener la piel seca.', query: 'Simple Solution pañal lavable perra Amazon España', rank: 9, source: 'Ficha de producto', sourceUrl: 'https://www.amazon.es/s?k=Simple+Solution+washable+female+dog+diaper' },
  { name: 'Alfombrillas antideslizantes para zonas de paso', category: 'Movilidad', type: 'mat', summary: 'Tapetes o caminos con base adherente para aumentar el agarre en suelos lisos.', ideal: 'Perros que patinan al levantarse o caminar por casa.', compare: 'Busca base estable, bordes planos y superficie lavable; fíjalas para que no se arruguen.', query: 'alfombrilla antideslizante perro suelo casa Amazon', rank: 10, source: 'Búsqueda de Amazon España', sourceUrl: 'https://www.amazon.es/s?k=alfombrilla+antideslizante+perro+suelo+casa' },
  { name: 'Empapadores lavables para perro', category: 'Higiene', type: 'pad', summary: 'Protección absorbente reutilizable para camas, transportines o zonas de descanso.', ideal: 'Hogares que necesitan proteger superficies ante escapes ocasionales.', compare: 'Compara medidas, capacidad absorbente, agarre inferior y lavados recomendados.', query: 'empapador lavable perro reutilizable Amazon España', rank: 11, source: 'Búsqueda de Amazon España', sourceUrl: 'https://www.amazon.es/s?k=empapador+lavable+perro+reutilizable' },
];

let currentFilter = 'Todos';
const grid = document.querySelector('#product-grid');

function art(type) {
  if (type === 'harness') return '<div class="illustration harness-illo"><span class="strap"></span><span class="strap s2"></span><span class="ring"></span><span class="support"></span></div>';
  if (type === 'ramp') return '<div class="illustration ramp-illo"><span class="ramp-board"></span><span class="ramp-leg"></span><span class="ramp-dash"></span></div>';
  if (type === 'mattress') return '<div class="illustration mattress-illo"><span class="mattress"></span><span class="mattress-top"></span><span class="mattress-stitch"></span></div>';
  if (type === 'supplement') return '<div class="illustration supplement-illo"><span class="jar"></span><span class="jar-lid"></span><span class="jar-label">+</span><span class="leaf">✳</span></div>';
  if (type === 'step') return '<div class="illustration step-illo"><span class="step-shape"></span><span class="step-seam"></span></div>';
  if (type === 'stroller') return '<div class="illustration stroller-illo"><span class="stroller-basket"></span><span class="stroller-canopy"></span><span class="stroller-handle"></span><i></i><b></b></div>';
  if (type === 'diaper') return '<div class="illustration diaper-illo"><span class="diaper"></span><span class="diaper-belt"></span><span class="diaper-mark">♡</span></div>';
  if (type === 'mat' || type === 'pad') return '<div class="illustration mat-illo"><span class="floor-mat"></span><span class="mat-fold"></span><span class="mat-paw">🐾</span></div>';
  return '<div class="illustration bed-illo"><span class="bed-shape"></span><span class="bed-pillow"></span><span class="bed-fold"></span></div>';
}

function amazonSearch(query) {
  return `https://www.amazon.es/s?k=${encodeURIComponent(query)}`;
}

function render() {
  let visibleProducts = products.filter(product => currentFilter === 'Todos' || product.category === currentFilter);
  const sort = document.querySelector('#sort-select')?.value;
  if (sort === 'name') visibleProducts = [...visibleProducts].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  else visibleProducts = [...visibleProducts].sort((a, b) => a.rank - b.rank);

  grid.innerHTML = visibleProducts.map((product, index) => `<article class="product-card" style="--delay:${index * 35}ms">
    <div class="product-art art-${product.type}">${art(product.type)}<span class="product-badge">${product.category.toUpperCase()}</span></div>
    <div class="product-info"><h3>${product.name}</h3><p>${product.summary}</p>
      <div class="product-detail"><span>ENCAJA SI</span><b>${product.ideal}</b></div>
      <div class="product-detail care-detail"><span>ANTES DE ELEGIR</span><b>${product.compare}</b></div>
      <div class="product-footer"><span class="example-price">Precio: consultar en Amazon</span><a class="product-link" href="${amazonSearch(product.query)}" target="_blank" rel="noopener noreferrer nofollow">Ver en Amazon <span>↗</span></a></div>
      <div class="history-link">Características: <a href="${product.sourceUrl}" target="_blank" rel="noopener noreferrer">${product.source} ↗</a></div>
    </div></article>`).join('');
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter.active')?.classList.remove('active');
  button.classList.add('active');
  currentFilter = button.dataset.filter;
  render();
}));
document.querySelector('#sort-select').addEventListener('change', render);
document.querySelectorAll('[data-jump-filter]').forEach(link => link.addEventListener('click', () => {
  currentFilter = link.dataset.jumpFilter;
  document.querySelectorAll('.filter').forEach(button => button.classList.toggle('active', button.dataset.filter === currentFilter));
  render();
}));

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

render();


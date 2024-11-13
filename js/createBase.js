// Crear el overlay
const overlay = document.createElement('div')
overlay.className = 'overlay'
overlay.id = 'overlay'
overlay.onclick = 'closeCesta(),closeAside(),closePerfil()'

// Crear el nav
const nav = document.createElement('nav');

const logo = document.createElement('a');
logo.href = 'index.html';
logo.className = 'logo';
nav.appendChild(logo);

const buscador = document.createElement('div');
buscador.className = 'buscador';
nav.appendChild(buscador);

const categoriasTodas = document.createElement('div');
categoriasTodas.onclick = 'showAside()';
categoriasTodas.className = 'categoriasTodas';
categoriasTodas.innerHTML = '<i class="fa-solid fa-bars"></i>Todas las categorías'
buscador.appendChild(categoriasTodas);

const buscar = document.createElement('div');
buscar.className = 'search';
buscador.appendChild(buscar);

const buscar__input = document.createElement('input');
buscar__input.placeholder = 'Buscar';
buscar__input.type = 'text';
buscar__input.id = 'searchInput';
buscar.appendChild(buscar__input)

const buscar__reset = document.createElement('button');
buscar__reset.className = 'resetSearch';
buscar__reset.onclick = 'cleanSearch()';
buscar__reset.innerHTML = '<i class="fa-solid fa-xmark"></i>';
buscar.appendChild(buscar__reset);

const buscar__button = document.createElement('button');
buscar__button.onclick = 'search()';
buscar.appendChild(buscar__button);

const buscar__button__img = document.createElement('img');
buscar__button__img.src
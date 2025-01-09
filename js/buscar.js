console.log('buscar.js conectado')

const searchInput = document.getElementById('searchInput');
const resetButton = document.querySelector('.resetSearch');

searchInput.addEventListener('focus', function() {
    resetButton.style.display = 'flex';
    showSearch();
});

searchInput.addEventListener('blur', function() {
    if (!searchInput.value) {
        resetButton.style.display = 'none';
    }
});

function cleanSearch() {
    searchInput.value = '';
    resetButton.style.display = 'none';
    closeSearch();
}

async function cargarTodosLosProductos(pagina) {
    const categorias = 8;
    const productos = [];

    try {
        for (let i = 1; i <= categorias; i++) {
            let response;
            if (pagina == 'index') {
                response = await fetch(`json/products/categoria${i}.json`);
            } else if (pagina == null){
                response = await fetch(`../../json/products/categoria${i}.json`);
            }
            const data = await response.json();
            productos.push(...data.slice(1));
        }
        console.log('Productos cargados:', productos);
    } catch {
        console.error('Error al cargar los productos.');
    }

    return productos;
}

function buscarProductos(productos, criterio) {
    if (!criterio) {
        return [];
    }
    const lowerCriterio = criterio.toLowerCase();
    return productos.filter(producto => {
        return producto.nombre.toLowerCase().includes(lowerCriterio);
    });
}

async function search(event) {
    event.preventDefault();

    const productos = await cargarTodosLosProductos(localStorage.getItem('paginaSearch'));
    const criterio = searchInput.value;
    const resultados = buscarProductos(productos, criterio);
    console.log('Resultados de la búsqueda:', resultados);

    const contenedor = document.getElementById('buscarUl');  
    contenedor.innerHTML = '';

    document.getElementById('overlaySearch').classList.add('visible');

    if (resultados.length === 0) {
        contenedor.innerHTML = '<li>No se encontraron resultados.</li>';
        return;
    }

    resultados.forEach(producto => {
        const divProducto = document.createElement('li');
        divProducto.onclick = function() {
            showProduct(divProducto);
        }
        divProducto.className = 'producto';
        if (producto.oferta == true) {
            divProducto.classList.add('oferta');
        };

        const imagenDiv = document.createElement('div');
        imagenDiv.className = 'imagenDiv';
        const imagen = document.createElement('img');
        if (localStorage.getItem('paginaSearch') == 'index') {
            imagen.src = producto.imagen;
        } else {
            imagen.src = '../../' + producto.imagen;
        }

        const nombre = document.createElement('h2');
        nombre.className = 'nombre';
        nombre.textContent = producto.nombre;

        const precio = document.createElement('h3');
        precio.className = 'precio';
        precio.textContent = `$${producto.precio}`;

        const precioDescuento = document.createElement('h4');
        precioDescuento.className = 'precioDescuento'
        const descuento = document.createElement('span');
        descuento.className = 'descuento';

        if (producto.oferta == true) {
            precioDescuento.textContent = `$${producto.precioDesc}`;

            descuento.textContent = `-${producto.porcentDesc}`;
        }

        const descripcion = document.createElement('p');
        descripcion.className = 'descripcion';
        descripcion.textContent = producto.descripcion;
        descripcion.style = 'display: none;';

        divProducto.appendChild(imagenDiv);
        imagenDiv.appendChild(imagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(precio);
        divProducto.appendChild(descripcion);

        if (producto.oferta == true) {
            divProducto.appendChild(precioDescuento);
            divProducto.appendChild(descuento);
        }

        contenedor.appendChild(divProducto);
    });
}

function showSearch () {
    document.getElementById('overlaySearch').classList.add('visible');
}

function closeSearch() {
    document.getElementById('buscarUl').innerHTML = '';
    document.getElementById('overlaySearch').classList.remove('visible'); 
    cleanSearch();
}

localStorage.removeItem('paginaSearch');
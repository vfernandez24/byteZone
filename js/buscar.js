console.log('buscar.js conectado')

const searchInput = document.getElementById('searchInput');
const resetButton = document.querySelector('.resetSearch');

searchInput.addEventListener('focus', function() {
    resetButton.style.display = 'flex';
});

searchInput.addEventListener('blur', function() {
    if (!searchInput.value) {
        resetButton.style.display = 'none';
    }
});

function cleanSearch() {
    searchInput.value = '';
    resetButton.style.display = 'none';
}

async function cargarTodosLosProductos() {
    const categorias = 8;
    const productos = [];

    try {
        for (let i = 1; i <= categorias; i++) {
            const response = await fetch(`json/products/categoria${i}.json`);
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

async function search() {
    const productos = await cargarTodosLosProductos();
    const criterio = searchInput.value;
    const resultados = buscarProductos(productos, criterio);
    console.log('Resultados de la búsqueda:', resultados);

    const contenedor = document.getElementById('buscarUl');  
    contenedor.innerHTML = '';

    if (resultados.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    resultados.forEach(producto => {
        const divProducto = document.createElement('li');
        divProducto.className = 'producto';

        const imagenDiv = document.createElement('div');
        imagenDiv.className = 'imagenDiv';
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;

        const nombre = document.createElement('h3');
        nombre.className = 'nombre';
        nombre.textContent = producto.nombre;

        const precio = document.createElement('h4');
        precio.className = 'precio';
        precio.textContent = `$${producto.precio}`;

        const descripcion = document.createElement('p');
        descripcion.className = 'descripcion';
        descripcion.textContent = producto.descripcion;
        descripcion.style = 'display: none;';

        divProducto.appendChild(imagenDiv);
        imagenDiv.appendChild(imagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(precio);
        divProducto.appendChild(descripcion);

        contenedor.appendChild(divProducto);
    });
}
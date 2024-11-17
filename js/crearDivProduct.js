//? Categoria => Numero de la categoria para buscar archivo
//? Indice => Numero del producto dentro de la categoria
//? idSection => Div donde van a ir los productos

// Función para cargar un producto específico desde un archivo JSON
async function cargarProductoEspecifico(categoria, indice, idSection) {
    let response;
    
    try {
        switch (categoria) {
            case 1:
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria1.json');
                break;
            case 2: 
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria2.json');
                break;
            case 3: 
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria3.json');
                break;
            case 4: 
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria4.json');
                break;
            case 5: 
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria5.json');
                break;
            case 6: 
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria6.json');
                break;
            case 7: 
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria7.json');
                break;
            case 8: 
                // Cargar y analizar el archivo JSON
                response = await fetch('json/products/categoria8.json');
                break;
            default:
                console.error('Categoría no válida.');
                return;
        }

        const productos = await response.json();

        // Verifica si el índice existe en el arreglo
        if (indice < 0 || indice >= productos.length) {
            console.error('Producto no encontrado.');
            return;
        }
        
        // Selecciona el producto específico
        const producto = productos[indice];
        const contenedor = document.getElementById(idSection);

        // Crear el contenedor para el producto
        const divProducto = document.createElement('div');
        divProducto.className = 'box';
        divProducto.onclick = function() {
            showProduct(this);
        }

        if (producto.oferta == true) {
            divProducto.classList.add('oferta');
        }

        // Crear el div de la imagen
        const imagenDiv = document.createElement('div');
        imagenDiv.className = 'img';

        // Crear el elemento de imagen
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.loading = 'lazy'

        // Crear el elemento de nombre
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;

        // Crear el elemento de precio
        const precio = document.createElement('h3');
        precio.textContent = `$${producto.precio}`;
        
        // Crear los elementos extra de los productos en oferta
        const precioDescuento = document.createElement('h4');
        const descuento = document.createElement('span');

        // Poner el text de los elementos extra de los productos en oferta
        if (producto.oferta == true) {
            // Crear el nuevo precio
            precioDescuento.textContent = `$${producto.precioDesc}`;

            // Crear la etiqueta de descuento
            descuento.textContent = `-${producto.porcentDesc}`;
        }

        // Crear la descripcion (display: none)
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        descripcion.style = 'display: none;';

        // Agregar todos los elementos al div del producto
        divProducto.appendChild(imagenDiv);
        imagenDiv.appendChild(imagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(precio);
        divProducto.appendChild(descripcion);

        if (producto.oferta == true) {
            divProducto.appendChild(precioDescuento);
            divProducto.appendChild(descuento);
        }

        // Agregar el div del producto al contenedor principal
        contenedor.appendChild(divProducto);
    } catch (error) {
        console.error('Error al cargar el producto:', error);
    }
}

const showProduct = (div) => {
    document.getElementById('overlay').classList.add('visible');
    document.getElementById('overlayProduct').classList.add('visible');
}

const closeProduct = () => {
    document.getElementById('overlay').classList.remove('visible');
    document.getElementById('overlayProduct').classList.remove('visible');
}
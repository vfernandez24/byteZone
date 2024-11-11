// Función para cargar un producto específico desde un archivo JSON
async function cargarProductoEspecifico(indice) {
    try {
        // Cargar y analizar el archivo JSON
        const response = await fetch('json/products.json');
        const productos = await response.json();

        // Verifica si el índice existe en el arreglo
        if (indice < 0 || indice >= productos.length) {
            console.error('Producto no encontrado.');
            return;
        }
        
        // Selecciona el producto específico
        const producto = productos[indice];
        const contenedor = document.getElementById('contenedor-producto');

        // Crear el contenedor para el producto
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';

        // Crear el elemento de imagen
        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        // Crear el elemento de nombre
        const nombre = document.createElement('h2');
        nombre.textContent = producto.nombre;

        // Crear el elemento de precio
        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio}`;

        // Crear el elemento de descripción
        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;

        // Agregar todos los elementos al div del producto
        divProducto.appendChild(imagen);
        divProducto.appendChild(nombre);
        divProducto.appendChild(precio);
        divProducto.appendChild(descripcion);

        // Agregar el div del producto al contenedor principal
        contenedor.appendChild(divProducto);
    } catch (error) {
        console.error('Error al cargar el producto:', error);
    }
}

// Llamar a la función para cargar el producto específico (índice 3 para el cuarto producto)
cargarProductoEspecifico(3); // Cambia el índice para seleccionar otro producto
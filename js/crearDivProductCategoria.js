console.log('crearDivProductCategoria.js conectado')

//? Categoria => Numero de la categoria para buscar archivo
//? Indice => Numero del producto dentro de la categoria
//? idSection => Div donde van a ir los productos

async function cargarProductoEspecifico(categoria, indice, idSection) {
    let response;
    
    try {
        switch (categoria) {
            case 1:
                response = await fetch('../../json/products/categoria1.json');
                break;
            case 2: 
                response = await fetch('../../json/products/categoria2.json');
                break;
            case 3: 
                response = await fetch('../../json/products/categoria3.json');
                break;
            case 4: 
                response = await fetch('../../json/products/categoria4.json');
                break;
            case 5: 
                response = await fetch('../../json/products/categoria5.json');
                break;
            case 6: 
                response = await fetch('../../json/products/categoria6.json');
                break;
            case 7: 
                response = await fetch('../../json/products/categoria7.json');
                break;
            case 8: 
                response = await fetch('../../json/products/categoria8.json');
                break;
            default:
                console.error('Categoría no válida.');
                return;
        }

        const productos = await response.json();

        let maxPrice = parseFloat(productos[0]);
        sessionStorage.setItem('maxPrice', maxPrice);
        console.log(sessionStorage.getItem('maxPrice'));

        if (indice < 0 || indice >= productos.length) {
            console.error('Producto no encontrado.');
            return;
        }
        
        const producto = productos[indice];
        const contenedor = document.getElementById(idSection);

        const divProducto = document.createElement('div');
        divProducto.className = 'box';
        divProducto.name = 'hola';
        divProducto.onclick = function() {
            showProduct(this);
        }

        if (producto.oferta == true) {
            divProducto.classList.add('oferta');
        }

        const imagenDiv = document.createElement('div');
        imagenDiv.className = 'img';

        const imagen = document.createElement('img');
        imagen.className = 'imagen';
        imagen.src = '../../'+producto.imagen;
        imagen.alt = producto.nombre;
        imagen.loading = 'lazy'

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
    } catch (error) {
        console.error('Error al cargar el producto:', error);
    }
}


const showProduct = (div) => {
    document.getElementById("body").style.overflowY = "hidden";
    const overlay = document.getElementById('overlay');
    const overlayProduct = document.getElementById('overlayProduct');
    if (overlayProduct) {
        overlay.classList.add('visible');
        overlayProduct.classList.add('visible');
    } else {
        console.error('No se encontró el overlayProduct.');
        return;
    }

    if (div.classList.contains('oferta')) {
        overlayProduct.classList.add('oferta');
    } else {
        overlayProduct.classList.remove('oferta');
    }

    const nombre = div.querySelector('.nombre')?.textContent || 'Nombre no disponible';
    const precio = div.querySelector('.precio')?.textContent || 'Precio no disponible';
    const descripcion = div.querySelector('.descripcion')?.textContent || 'Descripción no disponible';
    const imagen = div.querySelector('img')?.src || '';
    let descuento, precioDesc;

    if (div.classList.contains('oferta')) {
        descuento = div.querySelector('span').textContent;
        precioDesc = div.querySelector('h4').textContent;
    }

    const productImg = document.getElementById('productImg');
    const productTitulo = document.getElementById('product__titulo');
    const productPrecio = document.getElementById('product__precio');
    const productDescripcion = document.getElementById('product__description');
    const productDescuento = document.getElementById('product__descuento');
    const productPrecioDesc = document.getElementById('product__precioDesc');

    
    if (productImg && productTitulo && productPrecio && productDescripcion) {
        productImg.src = imagen;
        productTitulo.textContent = nombre;
        productPrecio.textContent = precio;
        productDescripcion.textContent = descripcion;
    } else {
        console.error('No se encontraron los elementos del producto dentro del overlay.');
        return;
    }
    
    if (div.classList.contains('oferta')) {
        if (productDescuento && productPrecioDesc) {
            productDescuento.textContent = descuento;
            productPrecioDesc.textContent = precioDesc;
        } else {
            console.error('No se encontraron los elementos del producto dentro del overlay.');
            return;
        }
    }
}

const closeProduct = () => {
    document.getElementById('overlay').classList.remove('visible');
    document.getElementById('overlayProduct').classList.remove('visible');
    document.getElementById("body").style.overflowY = "auto";
}
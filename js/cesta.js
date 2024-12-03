console.log("cesta.js conectado")

const showCesta = () => {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("overlay").classList.add("visible");
    document.getElementById("cesta").classList.add("visible");
};

const closeCesta = () => {
    document.getElementById("body").style.overflowY = "auto"
    document.getElementById("overlay").classList.remove("visible")
    document.getElementById("cesta").classList.remove("visible")
}

const deleteProducto = (span) => {
    let cestaProducts = parseInt(localStorage.getItem('productosCesta'));
    cestaProducts -= 1;
    localStorage.setItem('productosCesta', cestaProducts);

    document.getElementById('productosCesta').textContent = localStorage.getItem('productosCesta');

    const li = span.parentElement
    li.remove()

    localStorage.setItem('contentUl', document.getElementById('cestaUl').innerHTML);

    const ul = document.getElementById('cestaUl');
    if (localStorage.getItem('contentUl') == '') {
        ul.classList.add('default');
        ul.innerHTML = innerUlDefault;
    }
}

const addProduct = (button) => {
    if (localStorage.getItem('productosCesta') == 0) {
        document.getElementById('cestaUl').innerHTML = '';
        document.getElementById('cestaUl').classList.remove('default');
    }

    let cestaProducts = parseInt(localStorage.getItem('productosCesta'));
    cestaProducts += 1;
    localStorage.setItem('productosCesta', cestaProducts);

    document.getElementById('productosCesta').textContent = localStorage.getItem('productosCesta');

    const product = button.parentElement;
    const img = product.querySelector('img').src;
    const nombre = product.querySelector('h2').textContent;
    const precio = product.querySelector('h3').textContent;

    if (product.classList.contains('oferta')) {
        const precioDesc = product.querySelector('h4').textContent;
        const descuento = product.querySelector('span').textContent;
    }

    // Crear un nuevo li
    const newLi = document.createElement('li');
    document.getElementById('cestaUl').appendChild(newLi);

        // Crear el contenido del li
        const liImg = document.createElement('img');
        liImg.src = img;
        newLi.appendChild(liImg);

        const liNombre = document.createElement('h2');
        liNombre.textContent = nombre;
        newLi.appendChild(liNombre);

        const liPrecio = document.createElement('h3');
        liPrecio.textContent = precio;
        newLi.appendChild(liPrecio);

        const liButton = document.createElement('button');
        liButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        liButton.className = 'deleteBtn';
        liButton.onclick = function() {
            deleteProducto(this);
        };
        newLi.appendChild(liButton);

    localStorage.setItem('contentUl', document.getElementById('cestaUl').innerHTML)
}

let innerUlDefault = `
    <img src="assets/noProductsCart.svg" alt"">
    <h1 class"cestaH1">No tienes actualmente ningún producto en tu cesta</h1>
`;

function contentCesta() {
    const ul = document.getElementById('cestaUl');
    ul.classList.remove('default');
    ul.innerHTML = localStorage.getItem('contentUl');

    if (localStorage.getItem('contentUl') == null || localStorage.getItem('contentUl') == '') {
        ul.classList.add('default');
        ul.innerHTML = innerUlDefault;
        return
    }

    ul.querySelectorAll('button').forEach(button => {
        button.onclick = function () {
        deleteProducto(this);
        };
    });
}

contentCesta();
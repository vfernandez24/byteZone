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
    const li = span.parentElement
    li.remove()
}

const addProduct = (button) => {
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
}

let innerUlDefault = `
    <img src="assets/noProductsCart.svg" alt"">
    <h1 class"cestaH1">No tienes actualmente ningún producto en tu cesta</h1>
`;

function contentCesta() {
    const ul = document.getElementById('cestaUl');
    ul.innerHTML = localStorage.getItem('contentUl');
    ul.classList.remove('default');

    if (localStorage.getItem('contentUl') == null) {
        ul.classList.add('default');
        ul.innerHTML = innerUlDefault;
    }
}

contentCesta();
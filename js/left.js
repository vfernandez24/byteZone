console.log('left.js conectado');


//! Funcionamiento del filtro por oferta
const right = document.getElementById('right')

const neutroOferta = () => {
    Array.from(right.querySelectorAll('div')).forEach(box => {
        box.classList.remove('hidden');
    });
};

const conOferta = () => {
    Array.from(right.querySelectorAll('div')).forEach(box => {
        if (!box.classList.contains('oferta')) {
            box.classList.add('hidden');
        } else {
            box.classList.remove('hidden');
        }
    });
};

const sinOferta = () => {
    Array.from(right.querySelectorAll('div')).forEach(box => {
        if (box.classList.contains('oferta')) {
            box.classList.add('hidden');
        } else {
            box.classList.remove('hidden');
        }
    });
};

//! Funcionamiento del filtro de precio
const minCircle = document.querySelector('.circuloMin');
const maxCircle = document.querySelector('.circuloMax');
const line = document.querySelector('.lineaPrecio');
const priceValues = document.querySelector('.valoresPrecio');
const boxes = document.querySelectorAll('.box');

let minPrice = 0;
let maxPrice;
let isDraggingMin = false;
let isDraggingMax = false;

function updatePricesIni() {
    console.log('updatePricesIni ejecutándose');
    console.log('cambiando maxValue')
    const maxValue = parseFloat(sessionStorage.getItem('maxPrice'));
    console.log(maxValue);
    console.log('cambiando maxPrice');
    maxPrice = parseFloat(sessionStorage.getItem('maxPrice'));
    console.log(maxPrice)

    console.log('cambiando el p')
    priceValues.textContent = `0$ - ${maxValue}$`;
    console.log(priceValues.textContent);
};

function updatePricesTouch() {
    console.log('updatePricesTouch ejecutándose');
    const lineWidth = line.offsetWidth;
    const minPosition = parseInt(minCircle.style.left || '0');
    const maxPosition = parseInt(maxCircle.style.left || `${lineWidth}px`);

    const minValue = Math.round((minPosition / lineWidth) * maxPrice);
    const maxValue = Math.round((maxPosition / lineWidth) * maxPrice);

    priceValues.textContent = `${minValue}$ - ${maxValue}$`;

    filterProducts(minValue, maxValue);
};

function handleDrag(event, circle, isTouch = false) {
    const lineRect = line.getBoundingClientRect();
    const lineWidth = line.offsetWidth;
    let clientX;

    if (isTouch) {
        clientX = event.touches[0].clientX;
    } else {
        clientX = event.clientX;
    }

    let newLeft = clientX - lineRect.left;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > lineWidth) newLeft = lineWidth;

    const otherCircle = circle === minCircle ? maxCircle : minCircle;
    const otherLeft = parseInt(otherCircle.style.left || `${lineWidth}px`);

    if (circle === minCircle && newLeft >= otherLeft) {
        newLeft = otherLeft - 1;
    } else if (circle === maxCircle && newLeft <= otherLeft) {
        newLeft = otherLeft + 1;
    }

    circle.style.left = `${newLeft}px`;

    updatePricesTouch();
}

function desactivarFiltros(circle) {
    if (circle == 'min') {
        isDraggingMin = true;
    } else if (circle == 'max') {
    isDraggingMax = true;
    }
    document.getElementById('neutroOferta').checked = true;
    document.getElementById('ordenardefault').checked = true;
}

minCircle.addEventListener('mousedown', () => desactivarFiltros('min'));
minCircle.addEventListener('touchstart', () => desactivarFiltros('min'), { passive: false });

maxCircle.addEventListener('mousedown', () => desactivarFiltros('max'));
maxCircle.addEventListener('touchstart', () => desactivarFiltros('max'), { passive: false });

document.addEventListener('mousemove', (event) => {
    if (isDraggingMin) handleDrag(event, minCircle);
    if (isDraggingMax) handleDrag(event, maxCircle);
});
document.addEventListener('touchmove', (event) => {
    if (isDraggingMin || isDraggingMax) {
        event.preventDefault();
        const circle = isDraggingMin ? minCircle : maxCircle;
        handleDrag(event, circle, true);
    }
}, { passive: false });

document.addEventListener('mouseup', () => {
    isDraggingMin = false;
    isDraggingMax = false;
});
document.addEventListener('touchend', () => {
    isDraggingMin = false;
    isDraggingMax = false;
}, { passive: true });

const lineWidth = line.offsetWidth;
minCircle.style.left = '0px';
maxCircle.style.left = `${lineWidth}px`;

function filterProducts(min, max) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {

        let priceText = '';
        if (box.classList.contains('oferta')) {
            priceText = box.querySelector('h4')?.textContent;
        } else {
            priceText = box.querySelector('h3')?.textContent;
        }
        const price = parseFloat(priceText.replace('$', ''));
        
        if (price >= min && price <= max) {
            box.classList.remove('hidden');
        } else {
            box.classList.add('hidden');
        }
    });
};
document.addEventListener('DOMContentLoaded', () => {
    setTimeout( () => {
        updatePricesIni();
        sessionStorage.setItem('rightContent', right.innerHTML); 
    }, 100);
})

//! Funcionalidad del filtro para ordenar los productos
function obtenerPrecio(div) {
    if (div.classList.contains('oferta')) {
        return parseFloat(div.querySelector('h4').textContent.replace('$', ''));
    } else {
        return parseFloat(div.querySelector('h3').textContent.replace('$', ''));
    }
}
function order(e) {
    const boxes = Array.from(document.querySelectorAll('.box'));
    switch (e) {
        case "default":
            right.innerHTML = sessionStorage.getItem('rightContent');
            break;
            case "precioAsc": 
                right.innerHTML = '';
                const ordenarPrecioAsc = boxes.sort((a, b) => {
                    const precioA = obtenerPrecio(a);
                    const precioB = obtenerPrecio(b); 
                    return precioA - precioB;
                });
                ordenarPrecioAsc.forEach(div => right.appendChild(div));   
                break;
            case "precioDes":
                right.innerHTML = '';
                const ordenarPrecioDes = boxes.sort((a, b) => {
                    const precioA = obtenerPrecio(a);
                    const precioB = obtenerPrecio(b);
                    return precioB - precioA;
                });
                ordenarPrecioDes.forEach(div => right.appendChild(div));   
                break;
            case "nombreAsc":
                right.innerHTML = '';
                    const ordenarNombreAsc = boxes.sort((a, b) => {
                    const nombreA = a.querySelector('h2').textContent.toLowerCase();
                    const nombreB = b.querySelector('h2').textContent.toLowerCase(); 
                    return nombreA.localeCompare(nombreB);
                });
                ordenarNombreAsc.forEach(div => right.appendChild(div));   
                break;
            case "nombreDes":
                const ordenarNombreDes = boxes.sort((a, b) => {
                    const nombreA = a.querySelector('h2').textContent.toLowerCase();
                    const nombreB = b.querySelector('h2').textContent.toLowerCase(); 
                    return nombreB.localeCompare(nombreA);
                });
                ordenarNombreDes.forEach(div => right.appendChild(div));
                break;
    };
}

//! Funcionalidad para esconder el left
const toggleLeft = () => {
    const left = document.getElementById('left');
    left.classList.toggle('hidden');
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('fa-chevron-left');
    arrow.classList.toggle('fa-chevron-right');
}

const element = document.querySelector('#left');
const mediaQuery = window.matchMedia('(max-width: 900px)');
function handleMediaQueryChange(e) {
    if (e.matches) {
        toggleLeft();
    }
}
mediaQuery.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);
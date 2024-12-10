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

// Función para actualizar los precios
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

// Función para manejar el arrastre
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

// Eventos para el círculo mínimo
minCircle.addEventListener('mousedown', () => isDraggingMin = true);
minCircle.addEventListener('touchstart', (event) => {
    isDraggingMin = true;
    event.preventDefault();
}, { passive: false });

// Eventos para el círculo máximo
maxCircle.addEventListener('mousedown', () => isDraggingMax = true);
maxCircle.addEventListener('touchstart', (event) => {
    isDraggingMax = true;
    event.preventDefault();
}, { passive: false });

// Movimiento del mouse y táctil
document.addEventListener('mousemove', (event) => {
    if (isDraggingMin) handleDrag(event, minCircle);
    if (isDraggingMax) handleDrag(event, maxCircle);
});
document.addEventListener('touchmove', (event) => {
    event.preventDefault();
    if (isDraggingMin) handleDrag(event, minCircle, true);
    if (isDraggingMax) handleDrag(event, maxCircle, true);
}, { passive: false });

// Finalización del arrastre
document.addEventListener('mouseup', () => {
    isDraggingMin = false;
    isDraggingMax = false;
});
document.addEventListener('touchend', () => {
    isDraggingMin = false;
    isDraggingMax = false;
}, { passive: false });

// Inicializar las posiciones de los círculos
const lineWidth = line.offsetWidth;
minCircle.style.left = '0px';
maxCircle.style.left = `${lineWidth}px`;

// Filtrar productos
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
    }, 100);
})

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
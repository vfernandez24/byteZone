console.log('left.js conectado');


//? Funcionamiento del filtro por oferta
const right = document.getElementById('right')
const btnOferta = document.getElementById('conOferta');
const btnSinOferta = document.getElementById('sinOferta');

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

//? Funcionamiento del filtro de precio
const minCircle = document.querySelector('.circuloMin');
const maxCircle = document.querySelector('.circuloMax');
const line = document.querySelector('.lineaPrecio');
const priceValues = document.querySelector('.valoresPrecio');

let minPrice = 0; // Valor inicial mínimo del rango.
let maxPrice = 1000; // Valor inicial máximo del rango.
let isDraggingMin = false; // Flag para saber si el círculo mínimo está siendo arrastrado.
let isDraggingMax = false; // Flag para saber si el círculo máximo está siendo arrastrado.

// Función para actualizar los precios
const updatePrices = () => {
    const lineWidth = line.offsetWidth; // Ancho de la línea.
    const minPosition = parseInt(minCircle.style.left || '0'); // Posición del círculo mínimo.
    const maxPosition = parseInt(maxCircle.style.left || `${lineWidth}px`); // Posición del círculo máximo.

    // Convertir las posiciones a valores de precio
    const minValue = Math.round((minPosition / lineWidth) * maxPrice);
    const maxValue = Math.round((maxPosition / lineWidth) * maxPrice);

    // Actualizar el texto del rango de precios
    priceValues.textContent = `${minValue}$ - ${maxValue}$`;
};

// Función para manejar el arrastre
const handleDrag = (event, circle) => {
    const lineRect = line.getBoundingClientRect(); // Coordenadas absolutas de la línea.
    const lineWidth = line.offsetWidth; // Ancho total de la línea.
    let newLeft = event.clientX - lineRect.left; // Nueva posición basada en el mouse.

    // Limitar el movimiento dentro del rango
    if (newLeft < 0) newLeft = 0;
    if (newLeft > lineWidth) newLeft = lineWidth;

    // No permitir que los círculos se crucen
    const otherCircle = circle === minCircle ? maxCircle : minCircle;
    const otherLeft = parseInt(otherCircle.style.left || `${lineWidth}px`);

    if (circle === minCircle && newLeft >= otherLeft) {
        newLeft = otherLeft - 1;
    } else if (circle === maxCircle && newLeft <= otherLeft) {
        newLeft = otherLeft + 1;
    }

    // Actualizar la posición del círculo
    circle.style.left = `${newLeft}px`;
    updatePrices();
};

// Eventos para el círculo mínimo
minCircle.addEventListener('mousedown', () => isDraggingMin = true);
document.addEventListener('mousemove', (event) => {
    if (isDraggingMin) handleDrag(event, minCircle);
});
document.addEventListener('mouseup', () => isDraggingMin = false);

// Eventos para el círculo máximo
maxCircle.addEventListener('mousedown', () => isDraggingMax = true);
document.addEventListener('mousemove', (event) => {
    if (isDraggingMax) handleDrag(event, maxCircle);
});
document.addEventListener('mouseup', () => isDraggingMax = false);

// Inicializar las posiciones
minCircle.style.left = '0px';
maxCircle.style.left = `${line.offsetWidth}px`;
updatePrices();


//? Funcionalidad para esconder el left
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

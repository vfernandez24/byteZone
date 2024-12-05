console.log('left.js conectado');

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

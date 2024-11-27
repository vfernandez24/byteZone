const toggleLeft = () => {
    const left = document.getElementById('left');
    left.classList.toggle('hidden');
    const arrow = document.getElementById('arrow');
    arrow.classList.toggle('fa-chevron-left');
    arrow.classList.toggle('fa-chevron-right');
}

// Seleccionar el elemento al que deseas añadir/eliminar la clase
const element = document.querySelector('#left');

// Crear un MediaQueryList para el ancho máximo de 900px
const mediaQuery = window.matchMedia('(max-width: 900px)');

// Función para manejar los cambios en la media query
function handleMediaQueryChange(e) {
    if (e.matches) {
        // Si el dispositivo tiene un ancho menor o igual a 900px
        toggleLeft();
    }
}

// Agregar un listener para cambios en la media query
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Ejecutar la función al cargar la página para manejar el estado inicial
handleMediaQueryChange(mediaQuery);

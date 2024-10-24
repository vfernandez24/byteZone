const searchInput = document.getElementById('searchInput');
const resetButton = document.querySelector('.resetSearch');

// Mostrar el botón cuando el input tiene el foco
searchInput.addEventListener('focus', function() {
    resetButton.style.display = 'flex';
});

// Opcional: Ocultar el botón cuando el input pierde el foco
searchInput.addEventListener('blur', function() {
    if (!searchInput.value) { // Solo lo oculta si el input está vacío
        resetButton.style.display = 'none';
    }
});

function cleanSearch() {
    searchInput.value = '';
    resetButton.style.display = 'none'; // Ocultar el botón al limpiar la búsqueda
}
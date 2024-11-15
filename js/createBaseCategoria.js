document.addEventListener('DOMContentLoaded', (categoria) => {
    const h1 = document.createElement('h1');
    let nombreCat = '';
    switch (categoria) {
        case 1:
            nombreCat = 'Accesorios para Smartphones';
            return;
        case 2:
            nombreCat = 'Tecnología de Salud';
            return;
        case 3:
            nombreCat = 'Hogar Inteligente';
            return;
        case 4:
            nombreCat = 'Electrónica de Entretenimiento';
            return;
        case 5:
            nombreCat = 'Fotografía y Videografía';
            return;
        case 6:
            nombreCat = 'Accesorios para juegos';
            return;
        case 7:
            nombreCat = 'Accesorios para Ordenadores';
            return;
        case 8:
            nombreCat = 'Accesorios para Tablets';
            return;
    }

    const grid = document.createElement('div');
    grid.class = 'grid';
    body.appendChild(grid);
})
const container = document.getElementById('container');

const cargarContenido = (categoria) => {
    const h1 = document.createElement('h1');
    let nombreCat = '';
    switch (categoria) {
        case 1:
            nombreCat = 'Accesorios para Smartphones';
            break;
        case 2:
            nombreCat = 'Tecnología de Salud';
            break;
        case 3:
            nombreCat = 'Hogar Inteligente';
            break;
        case 4:
            nombreCat = 'Electrónica de Entretenimiento';
            break;
        case 5:
            nombreCat = 'Fotografía y Videografía';
            break;
        case 6:
            nombreCat = 'Accesorios para juegos';
            break;
        case 7:
            nombreCat = 'Accesorios para Ordenadores';
            break;
        case 8:
            nombreCat = 'Accesorios para Tablets';
            break;
        default: 
            console.error("Categoría no reconocida:", categoria);
    }

    h1.innerText = nombreCat + ' :: Productos';
    container.appendChild(h1);

    // Crear el grid
    const grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);

    // Crear el left
    const left = document.createElement('div');
    left.id = 'left';
    left.className = 'left';
    grid.appendChild(left);

    // close
    const left__close = document.createElement('button');
    left__close.className = 'close';
    left__close.innerHTML = '<i id="arrow" class="fa-solid fa-chevron-left"></i>'
    left__close.onclick = function () {
        toggleLeft();
    };
    left.appendChild(left__close);

    // h3
    const left__h3 = document.createElement('h3');
    left__h3.innerText = 'Filtros';
    left.appendChild(left__h3);

    // form 
    const left__form = document.createElement('form');
    left__form.id = 'filtersForm';
    left.appendChild(left__form);

    // oferta
    const form__oferta = document.createElement('div');
    form__oferta.className = 'filter';
    left__form.appendChild(form__oferta);

        // h4
        const oferta__h4 = document.createElement('h4');
        oferta__h4.innerText = 'Oferta';
        form__oferta.appendChild(oferta__h4);

        // oferta ul
        const oferta__ul = document.createElement('ul');
        form__oferta.appendChild(oferta__ul);

            // opcion neutra
            const liOferta = document.createElement('li');
            oferta__ul.appendChild(liOferta);

                const inputOferta = document.createElement('input');
                inputOferta.type = 'radio';
                inputOferta.id = 'neutroOferta';
                inputOferta.name = 'option';
                inputOferta.checked = true;
                inputOferta.onchange = function() {
                    neutroOferta();
                };
                liOferta.appendChild(inputOferta);

                const labelOferta = document.createElement('label');
                labelOferta.htmlFor = 'neutroOferta';
                labelOferta.textContent = 'Sin filtrar';
                liOferta.appendChild(labelOferta);

            // opcion con oferta
            const liConOferta = document.createElement('li');
            oferta__ul.appendChild(liConOferta);

                const inputConOferta = document.createElement('input');
                inputConOferta.type = 'radio';
                inputConOferta.id = 'conOferta';
                inputConOferta.name = 'option';
                inputConOferta.onchange = function() {
                    conOferta();
                };
                liConOferta.appendChild(inputConOferta);

                const labelConOferta = document.createElement('label');
                labelConOferta.htmlFor = 'conOferta';
                labelConOferta.textContent = 'Con oferta';
                liConOferta.appendChild(labelConOferta);

            // opcion sin oferta
            const liSinOferta = document.createElement('li');
            oferta__ul.appendChild(liSinOferta);

                const inputSinOferta = document.createElement('input');
                inputSinOferta.type = 'radio';
                inputSinOferta.id = 'sinOferta';
                inputSinOferta.name = 'option';
                inputSinOferta.onchange = function() {
                    sinOferta();
                };
                liSinOferta.appendChild(inputSinOferta);

                const labelSinOferta = document.createElement('label');
                labelSinOferta.htmlFor = 'sinOferta';
                labelSinOferta.textContent = 'Sin oferta';
                liSinOferta.appendChild(labelSinOferta);

    // Precio
    const form__Precio = document.createElement('div');
    form__Precio.className = 'filterPrice';
    left__form.appendChild(form__Precio);

        // h2 
        const precio__h2 = document.createElement('h2');
        precio__h2.textContent = 'Rango de precio';
        form__Precio.appendChild(precio__h2);

        // rango
        const precio__div = document.createElement('div');
        precio__div.className = 'filtroPrecio';
        form__Precio.appendChild(precio__div);

            // linea
            const precio__line = document.createElement('div');
            precio__line.className = 'lineaPrecio';
            precio__div.appendChild(precio__line);

            // circulo min
            const precio__minCirc = document.createElement('div');
            precio__minCirc.className = 'circuloPrecio circuloMin';
            precio__div.appendChild(precio__minCirc);

            // circulo max
            const precio__maxCirc = document.createElement('div');
            precio__maxCirc.className = 'circuloPrecio circuloMax';
            precio__div.appendChild(precio__maxCirc);

        // p 
        const precio__p = document.createElement('p');
        precio__p.className = 'valoresPrecio';
        precio__p.textContent = '';
        form__Precio.appendChild(precio__p);


    // Crear el right
    const right = document.createElement('div');
    right.id = 'right';
    right.className = 'right';
    grid.appendChild(right);
};

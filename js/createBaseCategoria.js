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

    const grid = document.createElement('div');
    grid.className = 'grid';
    container.appendChild(grid);

    const left = document.createElement('div');
    left.id = 'left';
    left.className = 'left';
    grid.appendChild(left);

    const left__close = document.createElement('button');
    left__close.className = 'close';
    left__close.innerHTML = '<i id="arrow" class="fa-solid fa-chevron-left"></i>'
    left__close.onclick = function () {
        toggleLeft();
    };
    left.appendChild(left__close);

    const left__h3 = document.createElement('h3');
    left__h3.innerText = 'Filtros';
    left.appendChild(left__h3);

    const left__form = document.createElement('form');
    left__form.id = 'filtersForm';
    left.appendChild(left__form);

    const form__oferta = document.createElement('div');
    form__oferta.className = 'filter';
    left__form.appendChild(form__oferta);

        const oferta__h4 = document.createElement('h4');
        oferta__h4.innerText = 'Oferta';
        form__oferta.appendChild(oferta__h4);

        const oferta__ul = document.createElement('ul');
        form__oferta.appendChild(oferta__ul);

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

    const form__Precio = document.createElement('div');
    form__Precio.className = 'filterPrice';
    left__form.appendChild(form__Precio);

        const precio__h2 = document.createElement('h4');
        precio__h2.textContent = 'Rango de precio';
        form__Precio.appendChild(precio__h2);

        const precio__div = document.createElement('div');
        precio__div.className = 'filtroPrecio';
        form__Precio.appendChild(precio__div);

            const precio__line = document.createElement('div');
            precio__line.className = 'lineaPrecio';
            precio__div.appendChild(precio__line);

            const precio__minCirc = document.createElement('div');
            precio__minCirc.className = 'circuloPrecio circuloMin';
            precio__div.appendChild(precio__minCirc);

            const precio__maxCirc = document.createElement('div');
            precio__maxCirc.className = 'circuloPrecio circuloMax';
            precio__div.appendChild(precio__maxCirc);

        const precio__p = document.createElement('p');
        precio__p.className = 'valoresPrecio';
        precio__p.textContent = '';
        form__Precio.appendChild(precio__p);

    const ordenar = document.createElement('div');
    ordenar.className = 'ordenarDiv filter';
    ordenar.style.marginTop = '20px';
    left__form.appendChild(ordenar);

        const ordenar__h4 = document.createElement('h4');
        ordenar__h4.textContent = 'Ordenar';
        ordenar.appendChild(ordenar__h4);

        const ordenar__default = document.createElement('li');
        ordenar.appendChild(ordenar__default);

                const default__input = document.createElement('input');
                default__input.type = 'radio';
                default__input.name = 'optionOrdenar';
                default__input.checked = true;
                default__input.id = 'ordenardefault';
                default__input.onchange = function() {
                    order("default");
                };
                ordenar__default.appendChild(default__input);

                const default__label = document.createElement('label');
                default__label.innerHTML = '<i class="fa-solid fa-arrow-up"></i>Sin ordenar';
                default__label.htmlFor = 'ordenardefault';
                ordenar__default.appendChild(default__label);

        const ordenar__precioAsc = document.createElement('li');
        ordenar.appendChild(ordenar__precioAsc);

                const precioAsc__input = document.createElement('input');
                precioAsc__input.type = 'radio';
                precioAsc__input.name = 'optionOrdenar';
                precioAsc__input.id = 'ordenarPrecioAsc';
                precioAsc__input.onchange = function() {
                    order("precioAsc");
                };
                ordenar__precioAsc.appendChild(precioAsc__input);

                const precioAsc__label = document.createElement('label');
                precioAsc__label.innerHTML = '<i class="fa-solid fa-arrow-up"></i>Por precio';
                precioAsc__label.htmlFor = 'ordenarPrecioAsc';
                ordenar__precioAsc.appendChild(precioAsc__label);

        const ordenar__precioDes = document.createElement('li');
        ordenar.appendChild(ordenar__precioDes);

                const precioDes__input = document.createElement('input');
                precioDes__input.type = 'radio';
                precioDes__input.name = 'optionOrdenar';
                precioDes__input.id = 'ordenarPrecioDes';
                precioDes__input.onchange = function() {
                    order("precioDes");
                };
                ordenar__precioDes.appendChild(precioDes__input);

                const precioDes__label = document.createElement('label');
                precioDes__label.innerHTML = '<i class="fa-solid fa-arrow-down"></i>Por precio';
                precioDes__label.htmlFor = 'ordenarPrecioDes';
                ordenar__precioDes.appendChild(precioDes__label);

        const ordenar__nombreAsc = document.createElement('li');
        ordenar.appendChild(ordenar__nombreAsc);

                const nombreAsc__input = document.createElement('input');
                nombreAsc__input.type = 'radio';
                nombreAsc__input.name = 'optionOrdenar';
                nombreAsc__input.id = 'ordenarNombreAsc';
                nombreAsc__input.onchange = function() {
                    order("nombreAsc");
                };
                ordenar__nombreAsc.appendChild(nombreAsc__input);

                const nombreAsc__label = document.createElement('label');
                nombreAsc__label.innerHTML = '<i class="fa-solid fa-arrow-up"></i>Por nombre';
                nombreAsc__label.htmlFor = 'ordenarNombreAsc';
                ordenar__nombreAsc.appendChild(nombreAsc__label);

        const ordenar__nombreDes = document.createElement('li');
        ordenar.appendChild(ordenar__nombreDes);

                const nombreDes__input = document.createElement('input');
                nombreDes__input.type = 'radio';
                nombreDes__input.name = 'optionOrdenar';
                nombreDes__input.id = 'ordenarNombreDes';
                nombreDes__input.onchange = function() {
                    order("nombreDes");
                };
                ordenar__nombreDes.appendChild(nombreDes__input);

                const nombreDes__label = document.createElement('label');
                nombreDes__label.innerHTML = '<i class="fa-solid fa-arrow-down"></i>Por nombre';
                nombreDes__label.htmlFor = 'ordenarNombreDes';
                ordenar__nombreDes.appendChild(nombreDes__label);

    const right = document.createElement('div');
    right.id = 'right';
    right.className = 'right';
    grid.appendChild(right);
};

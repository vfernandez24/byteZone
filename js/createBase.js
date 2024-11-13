const body = document.getElementById('body');

// Crear el overlay
const overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.id = 'overlay';
overlay.onclick = 'closeCesta(),closeAside(),closePerfil()';
body.appendChild(overlay);

// Crear el nav
const nav = document.createElement('nav');
body.appendChild(nav);

    // Logo
    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.className = 'logo';
    nav.appendChild(logo);

        // Img
        const logo__img = document.createElement('img');
        logo__img.src = '../images/Nombre.png'

    // Buscador
    const buscador = document.createElement('div');
    buscador.className = 'buscador';
    nav.appendChild(buscador);

        // Categorias
        const categoriasTodas = document.createElement('div');
        categoriasTodas.onclick = 'showAside()';
        categoriasTodas.className = 'categoriasTodas';
        categoriasTodas.innerHTML = '<i class="fa-solid fa-bars"></i>Todas las categorías'
        buscador.appendChild(categoriasTodas);

        const buscar = document.createElement('div');
        buscar.className = 'search';
        buscador.appendChild(buscar);

            const buscar__input = document.createElement('input');
            buscar__input.placeholder = 'Buscar';
            buscar__input.type = 'text';
            buscar__input.id = 'searchInput';
            buscar.appendChild(buscar__input)

            const buscar__reset = document.createElement('button');
            buscar__reset.className = 'resetSearch';
            buscar__reset.onclick = 'cleanSearch()';
            buscar__reset.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            buscar.appendChild(buscar__reset);

            const buscar__button = document.createElement('button');
            buscar__button.onclick = 'search()';
            buscar.appendChild(buscar__button);

            const buscar__button__img = document.createElement('img');
            buscar__button__img.src = 'assets/buscar.svg';
            buscar__button.appendChild(buscar__button__img);

    // Botones func
    const containerBtn = document.createElement('div');
    containerBtn.className = 'containerBtn';
    nav.appendChild(containerBtn);

        // Button theme
        const btnTheme = document.createElement('button')
        btnTheme.onclick = 'toggleTheme()';
        btnTheme.innerHTML = '<i id="btnTheme" class="fa-solid fa-moon"></i>';
        containerBtn.appendChild(btnTheme);

        // Button cesta
        const btnCesta = document.createElement('button');
        btnCuenta.onclick = 'showCesta()';
        btnCesta.className = 'shopCart';

            // Img
            const btnCesta__img = document.createElement('img');
            btnCesta__img.src = 'assets/shopCart.svg';
            btnCesta.appendChild(btnCesta__img);

            // P
            const btnCesta__p = document.createElement('img');
            btnCesta__p.id = 'productosCesta';
            btnCesta__p.innerText = '0';
            btnCesta.appendChild(btnCesta__p);

        // Button perfil
        const btnCuenta = document.createElement('button')
        btnCuenta.onclick = 'showPerfil()';
        btnCuenta.className = 'account';

// Crear el hr
const hr = document.createElement('hr');
body.appendChild(hr)

// Crear la cesta
const cesta = document.createElement('div')
cesta.className = 'overlayDiv cesta';
cesta.id = 'cesta';
body.appendChild(cesta);

    // Button cerar
    const cesta__button = document.createElement('button');
    cesta__button.onclick = 'closeCesta()';
    cesta__button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cesta.appendChild(cesta__button);

    // h3
    const cesta__h3 = document.createElement('h3');
    cesta__h3.innerText = 'Tu cesta de la compra';
    cesta.appendChild(cesta__h3);
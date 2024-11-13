const body = document.getElementById('body');

// Crear el overlay
const overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.id = 'overlay';
overlay.addEventListener('click', () => {
    closeAside();
    closeCesta();
    closePerfil();
})
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
        logo.appendChild(logo__img)

    // Buscador
    const buscador = document.createElement('div');
    buscador.className = 'buscador';
    nav.appendChild(buscador);

        // Categorias
        const categoriasTodas = document.createElement('div');
        categoriasTodas.onclick = function() {
            showAside();
        };
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
            buscar__reset.onclick = function() {
                cleanSearch()
            };
            buscar__reset.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            buscar.appendChild(buscar__reset);

            const buscar__button = document.createElement('button');
            buscar__button.onclick = function() {
                search();
            };
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
        btnTheme.onclick = function() {
            toggleTheme()
        };
        btnTheme.innerHTML = '<i id="btnTheme" class="fa-solid fa-moon"></i>';
        containerBtn.appendChild(btnTheme);

        // Botón "Cesta"
        const btnCesta = document.createElement('button');
        btnCesta.onclick = function() {
            showCesta();
        };
        btnCesta.className = 'shopCart';
        containerBtn.appendChild(btnCesta);

        // Imagen dentro del botón "Cesta"
        const btnCesta__img = document.createElement('img');
        btnCesta__img.src = 'assets/shopCart.svg';
        btnCesta.appendChild(btnCesta__img);

        // Contador de productos (cambia a 'p' en lugar de 'img')
        const btnCesta__p = document.createElement('p');
        btnCesta__p.id = 'productosCesta';
        btnCesta__p.innerText = '0';
        btnCesta.appendChild(btnCesta__p);


        // Button perfil
        const btnCuenta = document.createElement('button')
        btnCuenta.onclick = function() {
            showPerfil();
        };
        btnCuenta.innerHTML = '<i class="fa-solid fa-user"></i>';
        btnCuenta.className = 'account';
        containerBtn.appendChild(btnCuenta);

// Crear el hr
const hr = document.createElement('hr');
body.appendChild(hr)

// Crear la cesta
const cesta = document.createElement('div')
cesta.className = 'overlayDiv cesta';
cesta.id = 'cesta';
body.appendChild(cesta);

    // Button cerrar
    const cesta__button = document.createElement('button');
    cesta__button.onclick = function() {
        closeCesta();
    };
    cesta__button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    cesta.appendChild(cesta__button);

    // h3
    const cesta__h3 = document.createElement('h3');
    cesta__h3.innerText = 'Tu cesta de la compra';
    cesta.appendChild(cesta__h3);

    // ul 
    const cesta__ul = document.createElement('ul');
    cesta.appendChild(cesta__ul);

// Crear el perfil
const perfil = document.createElement('div');
perfil.id = 'perfil';
perfil.className = 'overlayDiv perfil';
body.appendChild(perfil);

    // Buttor cerrar
    const perfil__cerrar = document.createElement('button');
    perfil__cerrar.onclick = function() {
        closePerfil();
    }
    perfil__cerrar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    perfil.appendChild(perfil__cerrar);

    // Perfil (noCuenta)
    const noCuenta = document.createElement('div');
    noCuenta.id = 'noCuenta';
    perfil.appendChild(noCuenta);

        // h3
        const noCuenta__h3 = document.createElement('h3');
        noCuenta__h3.innerText = '¡Vaya!, parece que no tienes una cuenta activa en este dispositivo'
        noCuenta.appendChild(noCuenta__h3);

        // registrar (a)
        const noCuenta__reg = document.createElement('a');
        noCuenta__reg.style = 'margin-top: 100px;';
        noCuenta__reg.href = '../pages/registrar.html';
        noCuenta__reg.innerText = 'Regístrate';
        noCuenta.appendChild(noCuenta__reg);

        // iniciar sesion (a)
        const noCuenta__ini = document.createElement('a');
        noCuenta__ini.href = '../pages/iniciodesesion.html';
        noCuenta__ini.innerText = 'Iniciar Sesión';
        noCuenta.appendChild(noCuenta__ini);

    // Perfil (siCuenta)
    const siCuenta = document.createElement('div');
    siCuenta.id = 'siCuenta';
    perfil.appendChild(siCuenta);

        // h3
        const siCuenta__h3 = document.createElement('h3');
        siCuenta__h3.innerText = 'Tu cuenta';
        siCuenta.appendChild(siCuenta__h3);

        // h4 frase-1
        const siCuenta__h4 = document.createElement('h4');
        siCuenta__h4.id = 'frase-1';
        siCuenta.appendChild(siCuenta__h4);
const body = document.getElementById('body');

// Crear el overlay
const overlay = document.createElement('div');
overlay.className = 'overlay';
overlay.id = 'overlay';
overlay.addEventListener('click', () => {
    closeAside();
    closeCesta();
    closePerfil();
    closeProduct();
})
body.appendChild(overlay);

// Crear el nav
const nav = document.createElement('nav');
body.appendChild(nav);

    // bars
    const btnBars = document.createElement('button');
    btnBars.innerHTML = '<i class="fa-solid fa-bars"></i>'
    btnBars.className = 'btnBars';
    btnBars.onclick = function() {
        showAside();
    }
    nav.appendChild(btnBars);

    // Logo
    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.className = 'logo';
    nav.appendChild(logo);

        // Img
        const logo__imgGrande = document.createElement('img');
        logo__imgGrande.src = 'images/Nombre.png'
        logo__imgGrande.className = 'logoImg grande'
        logo.appendChild(logo__imgGrande)

        // Img 
        const logo__imgPequeno = document.createElement('img');
        logo__imgPequeno.src = 'images/Simbolo.png'
        logo__imgPequeno.className = 'logoImg pequeno'
        logo.appendChild(logo__imgPequeno)

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
        if (localStorage.getItem('productosCesta') == null) {
            localStorage.setItem('productosCesta', 0)
        }
        btnCesta__p.innerText = localStorage.getItem('productosCesta');
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
    cesta__ul.id = 'cestaUl';
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
        noCuenta__reg.href = 'pages/registrar.html';
        noCuenta__reg.innerText = 'Regístrate';
        noCuenta.appendChild(noCuenta__reg);

        // iniciar sesion (a)
        const noCuenta__ini = document.createElement('a');
        noCuenta__ini.href = 'pages/iniciodesesion.html';
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

        // h5 nombre
        const siCuenta__h5Nombre = document.createElement('h5');
        siCuenta__h5Nombre.innerText = 'Nombre Completo:';
        siCuenta.appendChild(siCuenta__h5Nombre);

        // p nombre
        const siCuenta__pNombre = document.createElement('p');
        siCuenta__pNombre.id = 'nombre-1';
        siCuenta__pNombre.innerText = ' ';
        siCuenta.appendChild(siCuenta__pNombre);

        // h5 correo
        const siCuenta__h5Correo = document.createElement('h5');
        siCuenta__h5Correo.innerText = 'Correo Electrónico:';
        siCuenta.appendChild(siCuenta__h5Correo);

        // p correo
        const siCuenta__pCorreo = document.createElement('p');
        siCuenta__pCorreo.id = 'correo-1';
        siCuenta__pCorreo.innerText = ' ';
        siCuenta.appendChild(siCuenta__pCorreo);

        // h5 password
        const siCuenta__h5password = document.createElement('h5');
        siCuenta__h5password.innerText = 'Contraseña:';
        siCuenta.appendChild(siCuenta__h5password);

        // p password
        const siCuenta__pPassword = document.createElement('p');
        siCuenta__pPassword.id = 'password-1';
        siCuenta__pPassword.innerText = ' ';
        siCuenta.appendChild(siCuenta__pPassword);

        //button cerrar sesion
        const siCuenta__button = document.createElement('button');
        siCuenta__button.className = 'cerrarSesion';
        siCuenta__button.innerText = 'Cerrar sesión';
        siCuenta__button.onclick = function() {
            cerrarSesion();
        };
        siCuenta.appendChild(siCuenta__button);

// Crear el overlay product
const product = document.createElement('div');
product.className = 'overlayDiv overlayProduct';
product.id = 'overlayProduct';
body.appendChild(product);

        // button cerar
        const product__cerrar = document.createElement('button');
        product__cerrar.onclick = function() {
            closeProduct();
        }
        product__cerrar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        product.appendChild(product__cerrar);

        // imagen
        const product__divImg = document.createElement('div');
        product__divImg.className = 'divImg';
        product.appendChild(product__divImg);

            // img
            const product__img = document.createElement('img');
            product__img.id = 'productImg';
            product__divImg.appendChild(product__img);

        // titulo y precio
        const product__h = document.createElement('div');
        product__h.className = 'productH';
        product.appendChild(product__h);

            // titulo
            const product__titulo = document.createElement('h2');
            product__titulo.id = 'product__titulo';
            product__titulo.textContent = ' ';
            product__h.appendChild(product__titulo);

            // precio h3
            const product__precio = document.createElement('h3');
            product__precio.id = 'product__precio';
            product__precio.textContent = ' ';
            product__h.appendChild(product__precio);

            // precio h4
            const product__precioDesc = document.createElement('h4');
            product__precioDesc.id = 'product__precioDesc';
            product__precioDesc.textContent = '';
            product__h.appendChild(product__precioDesc);

        // descripcion
        const product__descripcion = document.createElement('p');
        product__descripcion.textContent = ' ';
        product__descripcion.id = 'product__description';
        product.appendChild(product__descripcion);

        // span 
        const product__descuento = document.createElement('span');
        product__descuento.textContent = '';
        product__descuento.id = 'product__descuento';
        product.appendChild(product__descuento);

        // button
        const product__button = document.createElement('button');
        product__button.className = 'addCesta';
        product__button.onclick = function() {
            addProduct(this)
        };
        product.appendChild(product__button);

            // img 
            const product__buttonImg = document.createElement('img');
            product__buttonImg.src = 'assets/addShopCart.svg'
            product__button.appendChild(product__buttonImg);

// Crear el aside
const aside = document.createElement('aside');
aside.id = 'aside';
body.appendChild(aside);

    // button cerrar
    const aside__button = document.createElement('button');
    aside__button.onclick = function() {
        closeAside();
    };
    aside__button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    aside.appendChild(aside__button);

    // h2 
    const aside__h2 = document.createElement('h2');
    aside__h2.innerText = 'Categorías';
    aside.appendChild(aside__h2);

    // ul
    const aside__ul = document.createElement('ul');
    aside__ul.innerHTML = `
        <li><a href="pages/categorias/accesoriosParaSmartphones.html"><i class="fa-solid fa-mobile-alt"></i>Accesorios para Smartphones</a></li>
        <li><a href="pages/categorias/accesoriosParaJuegos.html"><i class="fa-solid fa-gamepad"></i>Accesorios para juegos</a></li>
        <li><a href="pages/categorias/accesoriosParaOrdenadores.html"><i class="fa-solid fa-computer"></i>Accesorios para Ordenadores</a></li>
        <li><a href="pages/categorias/accesoriosParaTablets.html"><i class="fa-solid fa-tablet-alt"></i>Accesorios para Tablets</a></li>
        <li><a href="pages/categorias/hogar.html"><i class="fa-solid fa-home"></i>Hogar Inteligente</a></li>
        <li><a href="pages/categorias/salud.html"><i class="fa-solid fa-heartbeat"></i>Tecnología de Salud</a></li>
        <li><a href="pages/categorias/fotografia.html"><i class="fa-solid fa-camera"></i>Fotografía y Videografía</a></li>
        <li><a href="pages/categorias/entretenimiento.html"><i class="fa-solid fa-tv"></i>Electrónica de Entretenimiento</a></li>
        `;
    aside.appendChild(aside__ul);
console.log("perfil.js conectado");

const showPerfil = () => {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("overlay").classList.add("visible");
    document.getElementById("perfil").classList.add("visible");
};

const closePerfil = () => {
    document.getElementById("body").style.overflowY = "auto";
    document.getElementById("overlay").classList.remove("visible");
    document.getElementById("perfil").classList.remove("visible");
};

const paginaPerfil = () => {

};

const datosPerfil = (pagina) => {
    const checkBox = document.getElementById('acept');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    if (password1.value !== '' && password2.value !== '' && password1.value == password2.value && checkBox.value == 'on') {
        if (pagina == 'registrar') {
            console.log('registrar')
        } else if (pagina == 'iniciarSesion') {
        
        }

        password1.value = ''
        password2.value = ''
        checkBox.value = 'off'

    } else {
        if ((password1.value == '' && password2.value == '') || password1.value !== password2.value) {
            let label1 = password1.parentElement;
            label1.classList.add('red')
            let label2 = password2.parentElement;
            label2.classList.add('red')
            console.log('passwordWrong')
        }
        if (checkBox.value == 'off') {
            let label = checkBox.parentElement;
            label.querySelector('#checkmark').classList.add('red')
        }
    }
}

let cuentaActiva = localStorage.getItem("cuentaActiva");

if (cuentaActiva === null) {
    cuentaActiva = 0;
    localStorage.setItem("cuentaActiva", cuentaActiva);
}

if (cuentaActiva==0) {
    document.getElementById('siCuenta').style.display = 'none'
    document.getElementById('noCuenta').style.display = 'flex'
} else if (cuentaActiva==1) {
    document.getElementById('noCuenta').style.display = 'none'
    document.getElementById('siCuenta').style.display = 'block'
}

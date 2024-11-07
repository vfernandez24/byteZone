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

const datosPerfil = (pagina) => {
    if(pagina=='registrar'){

    }else if(pagina=='iniciarSesion'){
        
    }
}
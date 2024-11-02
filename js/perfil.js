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

console.log("perfil.js conectado");

let clickPerfil = 0
// clickPerfil = localStorage.getItem('clickPerfil')

const showPerfil = () => {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("overlay").classList.add("visible");
    document.getElementById("perfil").classList.add("visible");
    clickPerfil++;
    localStorage.setItem('clickPerfil', clickPerfil)
};

const closePerfil = () => {
    document.getElementById("body").style.overflowY = "auto";
    document.getElementById("overlay").classList.remove("visible");
    document.getElementById("perfil").classList.remove("visible");
};

const paginaPerfil = () => {

};
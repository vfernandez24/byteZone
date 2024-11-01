console.log('cesta.js conectado')

const showCesta = () => {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("overlay").classList.add("visible");
    document.getElementById("cesta").classList.add("visible");
};

const closeCesta = () => {
    document.getElementById('body').style.overflowY = 'auto'
    document.getElementById('overlay').classList.remove('visible')
    document.getElementById('cesta').classList.remove('visible')
}
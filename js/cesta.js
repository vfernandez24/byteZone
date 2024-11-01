console.log('cesta.js conectado')

const showCesta = () => {
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("overlayCesta").classList.add("visible");
    document.getElementById("cesta").classList.add("visible");
};

const closeCesta = () => {
    document.getElementById('body').style.overflowY = 'auto'
    document.getElementById('overlayCesta').classList.remove('visible')
    document.getElementById('cesta').classList.remove('visible')
}
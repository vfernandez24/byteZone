console.log('autoCreateBox.js conectado');

const autoCreate = (cat) => {
    sessionStorage.setItem('categoriaPagina', cat)
    for (let i = 1; i < 25; i++) {
        cargarProductoEspecifico(cat, i, 'right');
    }
}
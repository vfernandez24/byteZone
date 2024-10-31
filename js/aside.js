console.log('aside.js conectado')

function showAside() {
    document.getElementById('body').style.overflowY = 'hidden'
    document.getElementById('overlay').classList.add('visible')
    document.getElementById('aside').classList.add('visible')
}

function closeAside() {
    document.getElementById('body').style.overflowY = 'Auto'
    document.getElementById('overlay').classList.remove('visible')
    document.getElementById('aside').classList.remove('visible')
}
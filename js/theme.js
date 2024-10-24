console.log('theme.js conectado')

function toggleTheme() {
    document.getElementById('body').classList.toggle('dark')
    document.getElementById('btnTheme').classList.toggle('fa-moon')
    document.getElementById('btnTheme').classList.toggle('fa-sun')
}
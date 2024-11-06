console.log('lenght.js conectado')

const textarea = document.getElementById("mensaje"),
    lenghtInicial = 0,
    lenght = document.getElementById("mensajeLenght"),
    i = 0;

const lenghtChange = () => {
    const caracteresRestantes = 200 - textarea.value.length;
    lenght.textContent = `${caracteresRestantes}`;
}

let correo = document.getElementById("email").value;
let asunto = document.getElementById("titulo").value;
let mensaje = document.getElementById("mensaje").value;

const enviar = () => {
    correo = document.getElementById("email").value;
    asunto = document.getElementById("titulo").value;
    mensaje = document.getElementById("mensaje").value;

    console.log(correo, asunto, mensaje)

    document.getElementById("email").value = '';
    document.getElementById("titulo").value = "";
    document.getElementById("mensaje").value = "";
}
// Crear el footer
const footer = document.createElement('footer');
footer.id = 'footer';
footer.innerHTML = '<ul onclick="showUl(this)"><span><i class="fa-solid fa-chevron-up"></i></span><h3>Sobre nosotros</h3><nav class="navFooter"><li><a href="aboutus.html">About us</a></li><li><a href="terminosycondiciones.html">Terminos y condiciones</a></li><li><a href="politicaprivacidad.html">Política de privacidad</a></li><li><a href="api.html">API</a></li><li><a href="reseñas.html">Reseñas</a></li></nav></ul><ul onclick="showUl(this)"><span><i class="fa-solid fa-chevron-up"></i></span><h3>Contacto</h3><nav class="navFooter"><li><a href="contacto.html">Contacto</a></li><li><a href="ayuda.html">Ayuda</a></li><li><a href="devoluciones.html">Devoluciones</a></li></nav></ul><ul onclick="showUl(this)"><span><i class="fa-solid fa-chevron-up"></i></span><h3>Redes Sociales</h3><nav class="navFooter"><li><a href="https://instagram.com"><i class="fa-brands fa-instagram"></i>Instagram</a></li><li><a href="https://x.com"><i class="fa-brands fa-x-twitter"></i>Twitter</a></li><li><a href="https://github.com/vfernandez24"><i class="fa-brands fa-github"></i>Github</a></li><li><a href="https://linkedin.com"><i class="fa-brands fa-linkedin"></i>Linkedin</a></li><li><a href="https://facebook.com"><i class="fa-brands fa-facebook"></i>Facebook</a></li><li><a href="https://youtube.com"><i class="fa-brands fa-youtube"></i>Youtube</a></li><li><a href="https://tiktok.com"><i class="fa-brands fa-tiktok"></i>Tik Tok</a></li></nav></ul>';
body.appendChild(footer);

    // Crear la foto 
    const footer__ul = document.createElement('ul');
    footer__ul.className = 'footer__ul--1';
    footer.appendChild(footer__ul);

        const footer__ulImg = document.createElement('img');
        footer__ulImg.src = '../../images/Isologo.png';
        footer__ulImg.style = 'height: 60%;';
        footer__ul.appendChild(footer__ulImg);
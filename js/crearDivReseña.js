console.log('crearDivReseña.js conectado');

async function cargarReseñaEspecifica(pagina, indice, idSection) {
    try {
        let response;
        if (pagina == 'index.html') {
            response = await fetch('json/reseñas/reseñas.json');
        } else if (pagina == 'reseñas.html') {
            response = await fetch('../../json/reseñas/reseñas.json');
        }
        const reseñas = await response.json();

        const reseña = reseñas[indice];

        const reseñaDiv = document.createElement('div');
        reseñaDiv.className = 'box boxRes';
        document.getElementById(idSection).appendChild(reseñaDiv);

        const top = document.createElement('div');
        top.className = 'reseñaTop';
        reseñaDiv.appendChild(top);
        
        const topImg = document.createElement('img');
        topImg.src = pagina == 'index.html' ? reseña.foto : '../../' + reseña.foto;
        top.appendChild(topImg);

        const topDiv = document.createElement('div');
        top.appendChild(topDiv);

        const topUser = document.createElement('h2');
        topUser.textContent = pagina.perfil;
        topDiv.appendChild(topUser);

        const topStars = document.createElement('h3');
        topStars.className = `${reseña.estrellas}star`;
        topStars.innerHTML = `
            <i class="fa-solid fa-star" id="star1"></i>
            <i class="fa-solid fa-star" id="star2"></i>
            <i class="fa-solid fa-star" id="star3"><i>
            <i class="fa-solid fa-star" id="star4"><i>
            <i class="fa-solid fa-star" id="star5"><i>
        `;
        topDiv.appendChild(topStars);

        const bottom = document.createElement('div');
        bottom.className = 'reseñaBottom';
        bottom.textContent = reseña.texto;
        reseñaDiv.appendChild(bottom);

    } catch (error) {
        console.error('Error al cargar la reseña: ', error);
    }
}
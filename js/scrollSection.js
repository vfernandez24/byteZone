console.log('scrollSection.js conectado');

const sectionLeft = (btnLeft) => {
    let sectionContainer = btnLeft.parentElement;
    let section = sectionContainer.querySelector('.section');
    section.scrollLeft -= 260;

    if (section.scrollLeft <= 260) {
        btnLeft.classList.add('hidden')
    }
}

const sectionRight = (btnRight) => {
    let sectionContainer = btnRight.parentElement;

    let section = sectionContainer.querySelector(".section");
    section.scrollLeft += 260; 
    
    let btnLeft = sectionContainer.querySelector('.btnLeft')
    btnLeft.classList.remove('hidden')

    if (section.scrollLeft + section.clientWidth >= section.scrollWidth) {
        section.scrollLeft = 0;
        btnLeft.classList.add('hidden')
    }

}

const actualizarBtn = (section) => {
    
    const sectionContainer = section.parentElement
    const btnLeft = sectionContainer.querySelector('.btnLeft')

    
};
const sectionLeft = (btnLeft) => {
    let sectionContainer = btnLeft.parentElement;
    let section = sectionContainer.querySelector('.section');
    section.scrollLeft -= 265;

    if (section.scrollLeft <= 265) {
        btnLeft.classList.add('hidden')
    }
}

const sectionRight = (btnRight) => {
    let sectionContainer = btnRight.parentElement;

    let section = sectionContainer.querySelector(".section");
    section.scrollLeft += 265; 
    
    let btnLeft = sectionContainer.querySelector('.btnLeft')
    btnLeft.classList.remove('hidden')

    if (section.scrollLeft + section.clientWidth >= section.scrollWidth) {
        section.scrollLeft = 0;
        btnLeft.classList.add('hidden')
    }

}
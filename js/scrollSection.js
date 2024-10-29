function sectionLeft(btnLeft) {
    let section = btnLeft.parentElement;
    section.scrollLeft -= 260;
}

function sectionRight(btnRight) {
    let section = btnRight.parentElement
    section.scrollLeft += 260; 
}
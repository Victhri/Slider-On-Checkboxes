const arrowLeft = document.getElementById('slider-arrow-left');
const arrowRight = document.getElementById('slider-arrow-right');
const dots = document.querySelectorAll('.dot');

dots.forEach(item => {
    item.addEventListener('change', arrowsLogic)
})

function arrowsLogic(event) {
    let index = Array.prototype.indexOf.call(dots, event.target);
    arrowLeft.setAttribute('for', index === 0 ? dots[dots.length-1].id : dots[index-1].id);
    arrowRight.setAttribute('for', index === dots.length-1 ? dots[0].id : dots[index+1].id);
}
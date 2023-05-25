let currentSlider = 0;

function leftSlide() {
    currentSlider--;
    document.querySelector(".slider").style.transform = `translateX(-${currentSlider}00%)`
    console.log(currentSlider);
}
function rightSlide() {
    currentSlider++;
    if(currentSlider == )
    document.querySelector(".slider").style.transform = `translateX(-${currentSlider}00%)`;
}
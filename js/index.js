let currentIndex = 0;

function slide(direction) {
    const sliderImages = document.querySelector('.slider-images');
    const totalImages = document.querySelectorAll('.slider-images img').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const translateValue = -100 * currentIndex + '%';
    sliderImages.style.transform = 'translateX(' + translateValue + ')';
}

document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("productImage");
    var overlay = document.getElementById("overlay");
    var enlargedImage = document.getElementById("enlargedImage");

    image.addEventListener("click", function () {
        overlay.style.display = "flex";
        enlargedImage.src = image.src;
    });
});

function closeOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
}
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }
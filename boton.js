const aBtn = document.getElementById('aBtn');
const bBtn = document.getElementById('bBtn');
const slides = document.querySelectorAll('.slides');

let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

aBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

bBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});
showSlide(currentSlide);

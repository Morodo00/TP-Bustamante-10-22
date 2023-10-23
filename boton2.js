const aBt = document.getElementById('aBt');
const bBt = document.getElementById('bBt');
const slide = document.querySelectorAll('.slide');

let currentSlid = 0;

function showSlide(n) {
    slide[currentSlid].style.display = 'none';
    currentSlid = (n + slide.length) % slide.length;
    slide[currentSlid].style.display = 'block';
}

aBt.addEventListener('click', () => {
    showSlide(currentSlid - 1);
});

bBt.addEventListener('click', () => {
    showSlide(currentSlid + 1);
});

showSlide(currentSlid);

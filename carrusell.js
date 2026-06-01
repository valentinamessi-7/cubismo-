const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {
    slides[current].classList.remove("active");
    current = index;
    slides[current].classList.add("active");
}

function nextSlide() {
    let next = current + 1;
    if (next >= slides.length) {
        next = 0;
    }
    showSlide(next);
}

function prevSlide() {
    let prev = current - 1;
    if (prev < 0) {
        prev = slides.length - 1;
    }
    showSlide(prev);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

/**/
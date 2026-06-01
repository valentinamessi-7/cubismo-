// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ===== SUBMENÚS EN MÓVIL =====
const menuItemsWithSubmenu = document.querySelectorAll(".menu > li");

menuItemsWithSubmenu.forEach(item => {
    const link = item.querySelector("a");
    const submenu = item.querySelector(".submenu");

    if (submenu) {
        link.addEventListener("click", (e) => {
            // Solo en móvil y tablet
            if (window.innerWidth < 1200) {
                e.preventDefault();

                // Cierra otros submenús abiertos
                document.querySelectorAll(".submenu.active").forEach(sub => {
                    if (sub !== submenu) {
                        sub.classList.remove("active");
                    }
                });

                submenu.classList.toggle("active");
            }
        });
    }
});

// ===== SLIDER =====
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
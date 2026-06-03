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
        let firstClick = false; // bandera para controlar clics

        link.addEventListener("click", (e) => {
            if (window.innerWidth < 1200) {
                if (!firstClick) {
                    // Primer clic: abre submenu y bloquea navegación
                    e.preventDefault();

                    document.querySelectorAll(".submenu.active").forEach(sub => {
                        if (sub !== submenu) {
                            sub.classList.remove("active");
                        }
                    });

                    submenu.classList.toggle("active");
                    firstClick = true;
                } else {
                    // Segundo clic: permite la navegación
                    firstClick = false;
                }
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
// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// ===== SUBMENÚS EN MÓVIL =====
const menuItemsWithSubmenu = document.querySelectorAll(".menu > li");

menuItemsWithSubmenu.forEach(item => {
  const link = item.querySelector("a");
  const submenu = item.querySelector(".submenu");

  if (submenu && link) {
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

// Proyectos.js

export function iniciarSliderProyectos() {
    const slides = document.querySelectorAll(".slide-item");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let current = 0;
    let autoPlay;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "next-1", "next-2", "next-3", "next-4", "next-5");

            if (i === index) {
                slide.classList.add("active");
            } else if (i === (index + 1) % slides.length) {
                slide.classList.add("next-1");
            } else if (i === (index + 2) % slides.length) {
                slide.classList.add("next-2");
            } else if (i === (index + 3) % slides.length) {
                slide.classList.add("next-3");
            } else if (i === (index + 4) % slides.length) {
                slide.classList.add("next-4");
            } else if (i === (index + 5) % slides.length) {
                slide.classList.add("next-5");
            }
        });
    }

    // Funciones de control manual
    function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
        reiniciarAutoPlay();
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    }

    // Eventos botones
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Mostrar el primer slide 
    showSlide(current);
}

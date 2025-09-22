export function iniciarSliderProyectos() {
    const slides = document.querySelectorAll(".slide-item");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let current = 0;
    let autoPlay;

    // // Variables para el deslizamiento
    // let touchStartX = 0;
    // let touchEndX = 0;
    // const swipeThreshold = 50; // Mínimo de píxeles para considerar un deslizamiento

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "next-1", "next-2", "next-3", "next-4", "next-5");
            
            // Lógica para mostrar solo el slide activo en móviles
            if (window.innerWidth <= 768) {
                if (i === index) {
                    slide.classList.add("active");
                }
            } else {
                // Tu lógica actual para escritorio
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
        reiniciarAutoPlay();
    }

    // Eventos de botones
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Eventos de deslizamiento
    const sliderContainer = document.querySelector(".slider-container");
    if (sliderContainer) {
        sliderContainer.addEventListener("touchstart", e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        sliderContainer.addEventListener("touchend", e => {
            touchEndX = e.changedTouches[0].screenX;
            handleGesture();
        });
    }

    // Mostrar el primer slide
    showSlide(current);
}
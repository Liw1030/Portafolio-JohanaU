export function iniciarAnimacionBienvenida() {
    const ids = ['titulo1', 'titulo2'];

    ids.forEach(id => {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.warn(`No se encontró #${id} en el DOM`);
            return;
        }

        const texto = elemento.textContent;
        const letrasSeparadas = texto.split('').map(letra => {
            return letra === ' ' ? `<span>&nbsp;</span>` : `<span>${letra}</span>`;
        }).join('');
        elemento.innerHTML = letrasSeparadas;

        anime({
            targets: `#${id} span`,
            translateX: [
                { value: '-3rem', duration: 0 }, // posición inicial fuera de pantalla
                { value: '0rem', easing: 'easeOutExpo', duration: 800 }
            ],
            opacity: [
                { value: 0, duration: 0 },
                { value: 1, duration: 800, easing: 'linear' }
            ],
            rotate: {
                value: '-1turn',
                duration: 1000,
                easing: 'easeOutElastic(1, .8)'
            },
            delay: anime.stagger(100),
            loop: false
        });
    });
}

export function animarIconosBienvenida() {
    const iconos = document.querySelectorAll('.iconSquare');


    iconos.forEach(icono => {
        const mode = icono.classList.contains('blend') ? 'add' : 'replace';
        let hasHovered = false;

        // Animación continua tipo pulso
        icono.animate(
            [
                { transform: 'scale(0.8)' },
                { transform: 'scale(1)' }
            ],
            {
                duration: 1000,
                iterations: Infinity,
                direction: 'alternate',
                composite: mode
            }
        );

        // Hover: solo una vez
        icono.addEventListener('mouseenter', () => {
            if (hasHovered) return;
            hasHovered = true;

            icono.animate(
                [{ transform: 'scale(1.5)' }],
                {
                    duration: 250,
                    fill: 'forwards',
                    composite: mode
                }
            );
        });
    });

}
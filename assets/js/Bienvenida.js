/**
 * Anima la entrada de los títulos de la sección de bienvenida letra por letra,
 * simulando un efecto de escritura.
 */
export function iniciarAnimacionBienvenida() {
    const ids = ['titulo1', 'titulo2'];

    ids.forEach(id => {
        const elemento = document.getElementById(id);
        if (!elemento) {
            console.warn(`No se encontró #${id} en el DOM.`);
            return;
        }

        const texto = elemento.textContent;
        // Split the text into letters and wrap each one in a span.
        const letrasSeparadas = texto.split('').map(letra => {
            return letra === ' ' ? `<span>&nbsp;</span>` : `<span class="letra">${letra}</span>`;
        }).join('');
        
        elemento.innerHTML = letrasSeparadas;

        anime({
            targets: `#${id} .letra`,
            opacity: [0, 1], // Fades from invisible to visible
            translateX: [
                { value: '0.2em', duration: 0 },
                { value: '0em', easing: 'easeOutExpo', duration: 800 }
            ],
            delay: anime.stagger(80) // A small delay between each letter
        });
    });
}
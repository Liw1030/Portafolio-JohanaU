import { iniciarAnimacionBienvenida } from './Bienvenida.js';
import { iniciarSliderProyectos } from './Proyectos.js';

let bienvenidaAnimada = false; // Variable de estado para controlar la animación

// Función principal para cargar todos los componentes HTML de forma asíncrona.
async function cargarComponentes() {
    const nav = await fetch('../partials/navbar.html').then(r => r.text());
    document.getElementById('navbar').innerHTML = nav;
    
    activarNavEnScroll();
    
    const bienvenida = await fetch('../partials/sectionBienvenida.html').then(r => r.text());
    document.getElementById('sectionBienvenida').innerHTML = bienvenida;

    // Solo ejecuta la animación si aún no se ha hecho
    if (!bienvenidaAnimada) {
        iniciarAnimacionBienvenida();
        bienvenidaAnimada = true;
    }

    const sobreMi = await fetch('../partials/sectionSobreMi.html').then(r => r.text());
    document.getElementById('sectionSobreMi').innerHTML = sobreMi;

    const proyectos = await fetch('../partials/sectionProyectos.html').then(r => r.text());
    document.getElementById('sectionProyectos').innerHTML = proyectos;
    iniciarSliderProyectos();

    const conocimiento = await fetch('../partials/sectionConocimientos.html').then(r => r.text());
    document.getElementById('sectionConocimientos').innerHTML = conocimiento;

    const contacto = await fetch('../partials/sectionContactame.html').then(r => r.text());
    document.getElementById('sectionContactame').innerHTML = contacto;
}

// Inicia el proceso de carga de componentes
cargarComponentes();

// Add the function to handle the active navbar link logic
function activarNavEnScroll() {
    const navLinks = document.querySelectorAll("#navbar .nav-link");
    const sections = document.querySelectorAll("section[id]");

    const actualizarNavActivo = () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("nav-active");
            if (link.href.includes(currentSection)) {
                link.classList.add("nav-active");
            }
        });
    };

    window.addEventListener("scroll", actualizarNavActivo);
    actualizarNavActivo(); 

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            navLinks.forEach(l => l.classList.remove("nav-active"));
            this.classList.add("nav-active");
        });
    });
}
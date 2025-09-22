import { iniciarAnimacionBienvenida, animarIconosBienvenida } from './Bienvenida.js';
import { iniciarSliderProyectos } from './Proyectos.js';

async function cargarComponentes() {
    // Navbar
    const nav = await fetch('../partials/navbar.html').then(r => r.text());
    document.getElementById('navbar').innerHTML = nav;

    // Bienvenida
    const bienvenida = await fetch('../partials/sectionBienvenida.html').then(r => r.text());
    document.getElementById('sectionBienvenida').innerHTML = bienvenida;
    iniciarAnimacionBienvenida();
    animarIconosBienvenida();

    // Sobre mi
    const sobreMi = await fetch('../partials/sectionSobreMi.html').then(r => r.text());
    document.getElementById('sectionSobreMi').innerHTML = sobreMi;

    // Proyectos
    const proyectos = await fetch('../partials/sectionProyectos.html').then(r => r.text());
    document.getElementById('sectionProyectos').innerHTML = proyectos;
    iniciarSliderProyectos();

    const contacto = await fetch('../partials/sectionContactame.html').then(r =>r.text());
    document.getElementById('sectionContactame').innerHTML = contacto;
}

cargarComponentes();

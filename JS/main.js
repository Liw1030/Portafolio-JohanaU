import { iniciarAnimacionBienvenida, animarIconosBienvenida } from './Bienvenida.js';
import { iniciarSliderProyectos } from './Proyectos.js';

async function cargarComponentes() {
    // Navbar
    const nav = await fetch('components/navbar.html').then(r => r.text());
    document.getElementById('navbar').innerHTML = nav;

    // Bienvenida
    const bienvenida = await fetch('components/sectionBienvenida.html').then(r => r.text());
    document.getElementById('sectionBienvenida').innerHTML = bienvenida;
    iniciarAnimacionBienvenida();
    animarIconosBienvenida();

    // Sobre mi
    const sobreMi = await fetch('components/sectionSobreMi.html').then(r => r.text());
    document.getElementById('sectionSobreMi').innerHTML = sobreMi;

    // Proyectos
    const proyectos = await fetch('components/sectionProyectos.html').then(r => r.text());
    document.getElementById('sectionProyectos').innerHTML = proyectos;
    iniciarSliderProyectos();

    const contacto = await fetch('components/sectionContactame.html').then(r =>r.text());
    document.getElementById('sectionContactame').innerHTML = contacto;
}

cargarComponentes();

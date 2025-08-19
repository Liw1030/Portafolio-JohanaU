import { iniciarAnimacionBienvenida, animarIconosBienvenida} from './Bievenida.js';

fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
});

fetch('components/sectionBienvenida.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sectionBienvenida').innerHTML = data;
    iniciarAnimacionBienvenida()
    animarIconosBienvenida()
});

fetch('components/sectionSobreMi.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sectionSobreMi').innerHTML = data;
});

// fetch('components/sectionProyectos.html')
//     .then(response => response.text())
//     .then(data => {
//     document.getElementById('sectionProyectos').innerHTML = data;
// });


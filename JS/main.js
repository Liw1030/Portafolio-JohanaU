fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('navbar').innerHTML = data;
});

fetch('components/sectionBienvenida.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sectionBienvenida').innerHTML = data;
});

fetch('components/sectionProyectos.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sectionProyectos').innerHTML = data;
});

fetch('components/sectionSobreMi.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sectionSobreMi').innerHTML = data;
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

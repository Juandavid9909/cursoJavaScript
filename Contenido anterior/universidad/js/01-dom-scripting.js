let elemento;

elemento = document;
elemento = document.all; // Todo el HTML en forma de arreglo
elemento = document.head;
elemento = document.body;
elemento = document.domain; // URL sin protocolo
elemento = document.URL; // URL completa
elemento = document.characterSet; // UTF-8
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];

elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].getAttribute("src");

// Scripts
elemento = document.scripts;

elemento = document.images;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(function(imagen) {
    console.log(imagen);
});

console.log(imagenesArr);
// Pregunta el nombre al usuario
const nombre = prompt("Cual es tu nombre?");

// Toma el nombre y lo muestra en pantalla
document.querySelector(".contenido").innerHTML = `${ nombre } está aprendiendo JavaScript Moderno`;

// eslint js/app.js --fix
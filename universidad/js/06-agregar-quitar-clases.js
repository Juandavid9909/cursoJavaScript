const enlaces = document.querySelectorAll(".enlace");
const navegacion = document.querySelector("#principal");

enlaces[0].remove(); // Eliminar elementos
navegacion.removeChild(enlaces[0]); // Eliminar desde elemento padre

console.log(navegacion);

const primerLi = document.querySelector(".enlace");

let elemento;

// Obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList.add("nueva-clase");
elemento = primerLi.classList.remove("nueva-clase");
elemento = primerLi.classList;

// Leer atributos
elemento = primerLi.getAttribute("href");
primerLi.setAttribute("href", "http://facebook.com");
primerLi.setAttribute("data-id", 20);
elemento = primerLi.hasAttribute("data-id");
primerLi.removeAttribute("data-id");

elemento = primerLi;

console.log(elemento);
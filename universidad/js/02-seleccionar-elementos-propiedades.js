// Seleccionando elementos y aplicándole propiedades

// getElementById
let encabezado;

// elemento = document.getElementById("hero").id;
// elemento = document.getElementById("hero").className;
encabezado = document.getElementById("encabezado"); // innerText y textContent traen el texto
encabezado.style.background = "#333";
encabezado.style.color = "#FFF";
encabezado.style.padding = "20px";

// Cambiar el texto
encabezado.textContent = "Los mejores Cursos";
encabezado.innerText = "Los mejores Cursos";

console.log(encabezado);


// Seleccionando un elemento

// Query Selector
const encabezado = document.querySelector("#encabezado");

// Aplicar CSS
encabezado.style.background = "#333";
encabezado.style.color = "#FFF";
encabezado.style.padding = "20px";
encabezado.textContent = "Los mejores cursos";

let enlace;

enlace = document.querySelector("#principal a:first-child");
enlace = document.querySelector("#principal a:nth-child(3)");
enlace = document.querySelector("#principal a:last-child");

console.log(enlace);


// Seleccionando múltiples elementos

let enlace = document.getElementsByClassName("enlace")[3];

// CSS
enlace.style.background = "#333";
enlace.textContent = "Nuevo enlace";

const listaEnlaces = document.querySelector("#principal").getElementsByClassName("enlace");

const links = document.getElementsByTagName("a");

links[18].style.color = "red";
links[18].textContent = "Nuevo enlace";

let enlaces = Array.from(links);

enlaces.forEach(function(enlace) {
    console.log(enlace.textContent);
});

const enlaces = document.querySelectorAll("#principal .enlace");

enlaces[1].style.background = "red";
enlaces[1].textContent = "Nuevo enlace";

console.log(enlaces);

const enlaces = document.querySelectorAll("#principal a:nth-child(odd");

enlaces.forEach(function(impares) {
    impares.style.backgroundColor = "red";
    impares.style.color = "white";
});

console.log(enlaces);
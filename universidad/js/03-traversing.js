// Traversing del padre al hijo

const navegacion = document.querySelector("#principal");

console.log(navegacion.children); // Elementos hijos
console.log(navegacion.children[0].nodeName); // Nombre de la etiqueta HTML
console.log(navegacion.children[0].nodeType); // Tipo de nodo

// 1 = Elementos
// 2 = Atributos
// 3 = Text Node
// 8 = Comentarios
// 9 = Documentos
// 10 = DOCTYPE

console.log(navegacion.children[0].textContent = "Nuevo Enlace");

const barra = document.querySelector(".barra");

console.log(barra.children[0].children[0].children);

const cursos = document.querySelectorAll(".card");

console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
console.log(cursos[0].childElementCount);


// Traversing del hijo al padre

const enlaces = document.querySelectorAll(".enlace");

console.log(enlaces[0].parentElement); // Elemento padre, también sirve parentNode

const cursos = document.querySelectorAll(".card");

console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = "Hola desde traversing");

const enlaces = document.querySelectorAll(".enlace");

console.log(enlaces[4].previousElementSibling); // Accede a el hermano anterior
console.log(enlaces[0].nextElementSibling); // Accede a el hermano siguiente
const navegacion = document.querySelector(".navegacion");

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion);
// console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
// console.log(navegacion.children); // Devuelve los elementos hijos
// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

const card = document.querySelector(".card");

// card.children[1].children[1].textContent = "Nuevo heading desde traversing DOM";

// card.children[0].src = "img/hacer3.jpg";

// console.log(card.children[1].children[1].textContent);

// Traversion de hijo al padre
// console.log(card.parentNode.parentElement.parentElement);

console.log(card.nextElementSibling.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling);
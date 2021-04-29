// Agregar a Local Storage
localStorage.setItem("nombre", "Juan");

const nombre = localStorage.getItem("nombre");

localStorage.removeItem("nombre");

localStorage.clear();

console.log(nombre);


// Session Storage
sessionStorage.setItem("nombre", "Juan");
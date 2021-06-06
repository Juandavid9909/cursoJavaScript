const nav = document.querySelector(".navegacion");

// Registrar un evento - click, mouseenter, mouseout, mousedown, mouseup, dblcliick
nav.addEventListener("mouseenter", () => {
    console.log("Entrando en la navegación");
    nav.style.backgroundColor = "white";
});

nav.addEventListener("mouseout", () => {
    console.log("Saliendo en la navegación");
    nav.style.backgroundColor = "transparent";
});

// mousedown - similar al click
// click
// dblclick = doble click
//mouseup - cuando sueltas el mouse
// Variables
const encabezado = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll(".enlace");
const boton = document.querySelector("#vaciar-carrito");

// Click
boton.addEventListener("click", obtenerEvento);

// Doble click
boton.addEventListener("dblclick", obtenerEvento);

// Mouse Enter
boton.addEventListener("mouseenter", obtenerEvento);

// Mouse Leave
boton.addEventListener("mouseleave", obtenerEvento);

// Mouse Over
boton.addEventListener("mouseover", obtenerEvento);

// Mouse Out
boton.addEventListener("mouseout", obtenerEvento);

// Mouse Down
boton.addEventListener("mousedown", obtenerEvento);

// Mouse Up
boton.addEventListener("mouseup", obtenerEvento);

encabezado.addEventListener("mousemove", obtenerEvento);

function obtenerEvento(e) {
    console.log(`Evento: ${ e.type }`);
}
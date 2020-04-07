// Variables
const busqueda = document.querySelector("#buscador");

// Key Down
busqueda.addEventListener("keydown", obtenerEvento);

// Key Up
busqueda.addEventListener("keyup", obtenerEvento);

// Key Press
busqueda.addEventListener("keypress", obtenerEvento);

// Focus
busqueda.addEventListener("focus", obtenerEvento);

// Blur
busqueda.addEventListener("blur", obtenerEvento); // Cuando se deselecciona el input

// Cut
busqueda.addEventListener("cut", obtenerEvento);

// Copy
busqueda.addEventListener("copy", obtenerEvento);

// Paste
busqueda.addEventListener("paste", obtenerEvento);

// Input
busqueda.addEventListener("input", obtenerEvento);

// Change
busqueda.addEventListener("change", obtenerEvento);

function obtenerEvento(e) {
    // console.log(busqueda.value);

    document.querySelector("#encabezado").innerText = busqueda.value;

    console.log(`Evento: ${ e.type }`);
}
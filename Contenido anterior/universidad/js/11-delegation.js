// Delegation
document.body.addEventListener("click", eliminarELemento);

function eliminarELemento(e) {
    e.preventDefault();

    console.log("Click!");

    console.log(e.target.classList);

    if (e.target.classList.contains("borrar-curso")) {
        console.log(e.target.parentElement.parentElement.remove());
    }

    if (e.target.classList.contains("agregar-carrito")) {
        console.log("Curso agregado");
    }
}
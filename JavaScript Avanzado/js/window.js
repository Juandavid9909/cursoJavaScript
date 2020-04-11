// Window binding
function obtenerAuto() {
    console.log(`Mi auto es de color ${ this.color }`);
}

const color = "Negro"; // undefined
window.color = "Negro"; // Color Negro

obtenerAuto();
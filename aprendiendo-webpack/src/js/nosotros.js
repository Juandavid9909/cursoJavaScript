import "../css/styles.scss";

class Cliente {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const cliente = new Cliente("Juan");
console.log(cliente);

console.log("Desde nosotros");
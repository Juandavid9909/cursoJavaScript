// Generadores
function* crearGenerador() {
    // yield
    yield 1;
    yield "Nombre";
    yield 3 + 3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

// *************************************************
function* nuevoGenerador(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

// Creamos el carrito
const carrito = ["Producto 1", "Producto 2", "Producto 3", "Producto 4"];

// Recorremos el iterador
let iterador = nuevoGenerador(carrito);

console.log(iterador.next().value);
// console.log(iterador.next().done);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
let carrito = new Set();

carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");

// Comprobar que un valor exista
console.log(carrito.has("Guitarra"));

// Eliminar algo del set
// carrito.delete("Camisa");

// carrito.clear();

// Recorrer set con foreach
// carrito.forEach((producto, index) => {
//     console.log(`${ index }: ${ producto }`);
// });

// Convertir un set a Arreglo
const arregloCarrito = [...carrito];

console.log(arregloCarrito);

// let numeros = new Set([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4]);

// console.log(numeros);
// console.log(numeros.size);

// console.log(carrito);
// console.log(carrito.size);
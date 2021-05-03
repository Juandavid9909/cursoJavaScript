const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// const nombre = producto.nombre;

// Destructuring
const { nombre } = producto;

console.log(nombre);

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];

// const [primero, segundo, tercero] = numeros;
const [primero, , tercero] = numeros;

console.log(tercero);
console.log(primero);
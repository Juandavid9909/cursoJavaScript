const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Verifica que la condición se cumpla en todos los elementos
const resultado = carrito.every(producto => producto.precio < 500);
console.log(resultado);

// Para verificar que al menos una cumpla la condición
const resultado2 = carrito.some(producto => producto.precio < 500);
console.log(resultado2);
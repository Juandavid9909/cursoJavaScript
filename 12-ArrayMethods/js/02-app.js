const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

meses.forEach((mes, i) => {
    if (mes === "Abril") {
        console.log(`Encontrado con el indice ${ i }`);
    }
});

// Encontrar el índice de abril
const indice = meses.findIndex(mes => mes === "Abril");
console.log(indice);

// Encontrar un indice en un arreglo de objetos...
const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2);
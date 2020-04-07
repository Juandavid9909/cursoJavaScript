// Crear un arreglo
const numeros = [10, 20, 30, 40, 50, 60];

// console.log(numeros);

// Arreglo de Strings (método alternativo)
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");

// console.log(Array.isArray(meses)); // Verificar si es Array


// Añadir en un arreglo
meses[4] = "Mayo";

meses.push("Junio"); // Añadir en la última posición
meses.unshift("Mes 0"); // Añadir al inicio del arreglo

// Eliminar un elemento de un arreglo
meses.pop(); // Eliminar el último elemento
meses.shift(); // Eliminar el primer elemento
meses.splice(2, 1); // Quitar un rango (posición que quieres quitar, qué tan lejos quieres ir)

// Revertir
meses.reverse();

// Unir im arreglo con otro
let arreglo1 = [1, 2, 3],
    arreglo2 = [9, 8, 7];

// console.log(arreglo1.concat(arreglo2));

// Ordenar un arreglo
const frutas = ["Platano", "Manzana", "Fresa", "Naranja", "Zanahoria"];
frutas.sort();

// console.log(frutas);

// Ordenar numeros
arreglo1 = [3, 9, 91, 92, 23, 45, 21, 56, 1, 100, 10];

arreglo1.sort(function(x, y) {
    return x - y;
});

console.log(arreglo1);

// Encontrar un elemento en el arreglo
// console.log(meses.indexOf("Abril"));
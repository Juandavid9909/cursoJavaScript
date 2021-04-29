// String
const nombre1 = "Pedro"; // String
const nombre2 = new String("Pedro"); // Objeto

console.log(typeof nombre2);
console.log(nombre2);

if (nombre1 === nombre2) {
    console.log("Sí, iguales");
} else {
    console.log("No, diferentes");
}

// Números
const numero1 = 20;
const numero2 = new Number(20);

console.log(numero1);
console.log(numero2);

// Booleanos
const boolean1 = true;
const boolean2 = new Boolean(true);

console.log(boolean1);
console.log(boolean2);

// Funciones
const funcion1 = function(a, b) {
    return a + b;
}

const funcion2 = new Function("a", "b", "return 1 + 2");

console.log(funcion1(2, 3));
console.log(funcion2(1, 2));

// Objetos
const persona1 = {
    nombre: "Juan"
}
const persona2 = new Object({ nombre: "Juan" });

console.log(persona1);
console.log(persona2);

// Arreglos
const arreglo1 = [1, 2, 3, 4];
const arreglo2 = new Array(1, 2, 3, 4);

console.log(arreglo1);
console.log(arreglo2);
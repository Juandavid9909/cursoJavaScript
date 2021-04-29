// SYMBOL
const simbolo = Symbol();
const simbolo2 = Symbol("Descripción aquí");

console.log(simbolo2);

// ************************************************
let nombre = Symbol();
let apellido = Symbol();

// Crear una persona
let persona = {};
persona.nombre = "Juan"
persona[nombre] = "Juan";
persona[apellido] = "Varela";
persona.saldo = 100;
persona.tipoCliente = "Normal";

console.log(persona[nombre]);

for (let i in persona) {
    console.log(`${ i }: ${ persona[i] }`);
}
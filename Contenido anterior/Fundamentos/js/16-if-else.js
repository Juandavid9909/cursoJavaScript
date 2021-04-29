// const edad = 19;

if (edad > 18) {
    console.log("Sí puedes entrar al sitio");
} else {
    console.log("No puedes entrar al sitio");
}

// Comprobar que una variable tiene un valor
let puntaje;

if (typeof puntaje != "undefined") {
    console.log(`El puntaje fue de ${ puntaje }`);
} else {
    console.log(`No hay puntaje`);
}

let efectivo = 500;
let totalCarrito = 300;

if (efectivo > totalCarrito) {
    console.log("Pago Correcto");
} else {
    console.log("Fondos Insuficientes");
}


let hora = 20;

if (hora > 0 && hora <= 10) {
    console.log("Buenos días");
} else if (hora > 10 && hora <= 18) {
    console.log("Buenas tardes");
} else if (hora > 18 && hora <= 24) {
    console.log("Buenas noches");
} else {
    console.log("Hora no válida");
}

let puntaje = 100;

if (puntaje < 150) {
    console.log("Puntaje < 150");
} else if (puntaje < 200) {
    console.log("Puntaje < 200");
}


// Operador ||
let efectivo = 300,
    credito = 300,
    disponible = efectivo + credito,
    totalCarrito = 500;

if (totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible) {
    console.log("Puedo pagar");
} else {
    console.log("No puedo pagar");
}


// Ternario
const logueado = true;

console.log(logueado === true ? "Sí se logueó" : "No se logueó");
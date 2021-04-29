const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set("nombre", "juan");
datos.set("profesion", "desarrollador web");

// Entries iterador
// entries a las ciudades
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}

// entries para las ordens
for (let entradas of ordenes.entries()) {
    console.log(entradas);
}

// entries para el MAP
for (let entrada of datos.entries()) {
    console.log(entrada);
}

// Values iterador
// values a las ciudades
for (let entrada of ciudades) { // Por defecto en los arreglos no se pone el values()
    console.log(entrada);
}

// values para las ordenes
for (let entradas of ordenes.values()) {
    console.log(entradas);
}

// values para el MAP
for (let entrada of datos.values()) {
    console.log(entrada);
}

// Keys iterados
// keys a las ciudades
for (let entrada of ciudades.keys()) {
    console.log(entrada);
}

// keys para las ordenes
for (let entradas of ordenes.keys()) {
    console.log(entradas);
}

// keys para el MAP
for (let entrada of datos.keys()) {
    console.log(entrada);
}

// Default
for (let entrada of ciudades) {
    console.log(entrada);
}

for (let entradas of ordenes) {
    console.log(entradas);
}

for (let entrada of datos) {
    console.log(entrada);
}


// Strings
const mensaje = "Aprendiendo JavaScript";

for (let letra of mensaje) {
    console.log(letra);
}


// Node interador
const enlaces = document.getElementsByTagName("a");

for (let enlace of enlaces) {
    console.log(enlace.href);
}
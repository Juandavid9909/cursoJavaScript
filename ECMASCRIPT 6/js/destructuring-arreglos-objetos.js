//
const ciudades = ["Londres", "New York", "Madrid", "Paris"];

// const [primeraCiudad, segundaCiudad] = ciudades;
const [, , ciudad, paris] = ciudades;

console.log(ciudad);
console.log(paris);

// ***********************************************
const ciudades = ["Londres", "New York", "Madrid", "Paris", {
    idioma: "ingles"
}];

[idioma] = ciudades;

console.log(idioma);

// ***********************************************
// Ejemplo avanzado
const cliente = {
    tipo: "Premium",
    saldo: 30000,
    datos: {
        nombre: "Pedro",
        apellido: "Perez",
        residencia: {
            ciudad: "Mexico"
        }
    },
    movimientos: ["12-03-2018", "12-03-2017", "12-03-2016"]
};

let {
    tipo,
    datos,
    datos: { residencia },
    movimientos: [uno, dos]
} = cliente;

console.log(uno);
console.log(dos);
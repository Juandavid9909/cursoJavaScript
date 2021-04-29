const cliente = {
    nombre: "Alejandra",
    tipo: "Premium"
}

nombre = "Pedro";
tipo = "Gold";

({ nombre, tipo } = cliente);

// *********************************
const cliente = {
    tipo: "Premium",
    nombre: "Antonio",
    datos: {
        ubicacion: {
            ciudad: "Jalisco",
            pais: "Meximo"
        },
        cuenta: {
            desde: "10-12-2012",
            saldo: 4000
        }
    }
}

let { datos: { ubicacion } } = cliente;

let { datos: { cuenta } } = cliente;

// **********************************
const cliente = {
    nombre: "Pedro"
};

let { nombre, tipo = "Básico", saldo = 0 } = cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);
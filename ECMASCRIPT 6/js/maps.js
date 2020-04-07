// MAPS
let cliente = new Map();
cliente.set("nombre", "Karen");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);

// Acceder a los valores
// console.log(cliente.get("nombre"));
// console.log(cliente.get("tipo"));
// console.log(cliente.get("saldo"));

// Métodos para los maps
// Tamaño del map
// console.log(cliente.size);
// Si queremos comprobar que un valor existe
// console.log(cliente.has("apellido"));
// Obtener valor
// console.log(cliente.get("tipo"));

// Borrar un elemento del map
// cliente.delete("nombre");
// console.log(cliente.size);

cliente.clear();
console.log(cliente);

// **************************************************
const paciente = new Map(
    [
        ["nombre", "paciente"],
        ["habitacion", "No Definido"]
    ]
);

paciente.set("nombre", "Antonio");
paciente.set("habitacion", 400);
paciente.set("habitacion", 500);

// for each en un map
paciente.forEach((datos, index) => {
    console.log(`${ index }: ${ datos }`);
});

console.log(paciente);
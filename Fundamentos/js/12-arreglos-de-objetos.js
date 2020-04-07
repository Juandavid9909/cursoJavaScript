// Arreglo de Objetos
const autos = [{
        modelo: "Mustang",
        motor: 6.2
    },
    {
        modelo: "Camaro",
        motor: 6.1
    },
    {
        modelo: "Challenger",
        motor: 6.3
    }
];

for (let i = 0; i < autos.length; i++) {
    console.log(`${ autos[i].modelo } ${ autos[i].motor }`);
}
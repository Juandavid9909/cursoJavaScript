// This con Implicit binding
const usuario = {
    nombre: "Juan",
    edad: 20,
    presentacion() {
        console.log(`Mi nombre es ${ this.nombre } y tengo ${ this.edad }`);
    },
    mascota: {
        nombre: "Hook",
        edad: 1,
        presentacion() {
            console.log(`Mi nombre es ${ this.nombre } y tengo ${ this.edad }`);
        }
    }
}

usuario.presentacion();
usuario.mascota.presentacion();


// ****************************************************************
// Explicit binding
function persona(el1, el2) {
    console.log(`Hola, soy ${ this.nombre } y me gusta el ${ el1 } y ${ el2 }`);
}

const informacion = {
    nombre: "Juan",
    trabajo: "Programador"
}

const generosMusicales = ["Heavy Metal", "Rock"];

// Explicit binding con .call, cuando pasas arreglo debes colocar todas las posiciones
persona.call(informacion, generosMusicales[0], generosMusicales[1]);

// Explicit binding con .apply, (sí toma un arreglo)
persona.apply(informacion, generosMusicales);

// Explicit binding .bind
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
nuevaFn;


// ****************************************************************
// New binding
function Automovil(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Automovil("Camaro", "Negro");

console.log(auto);
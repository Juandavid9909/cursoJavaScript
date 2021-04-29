// Function Declaration
// function saludar() {
//     console.log("Hola Miguel");
// }

// saludar();

function saludar(nombre = "Visitante") {
    return `Hola ${ nombre }`;
}

let saludo;

saludo = saludar();

console.log(saludo);

// Function Expression

const saludar = function(nombre = "Visitante", edad = 20, trabajo = "desarrollador web") {
    return `hola, tienes ${ edad }, profesion ${ trabajo } y te llamas ${ nombre }`;
};

console.log(saludar("Juan"));


// IIFE

(function(tecnologia) {
    console.log(`Aprendiendo ${ tecnologia }`);
})("JavaScript");

// Métodos de propiedad
// Cuando una función se pone dentro de un objeto

const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción id ${ id }`);
    },
    pausar: function() {
        console.log(`Pause a la música`);
    }
};

// Los métodos también pueden guardarse / crearse fuera del objeto
musica.borrar = function(id) {
    console.log(`Borrando la canción con el ID ${ id }`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(2);
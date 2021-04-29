// Crear Objeto

const persona = {
    nombre: "Miguel",
    apellido: "Martinez",
    profesion: "Diseñador gráfico",
    email: "correo@correo.com",
    edad: 20,
    musica: ["Trance", "Rock", "Grunge"],
    hogar: {
        ciudad: "Guadalajara",
        pais: "Mexico"
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
};

persona.musica.push("Alternativo");

console.log(persona.nacimiento());
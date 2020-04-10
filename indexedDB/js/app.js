let DB;

// Selectores de la Interfaz
const form = document.querySelector("form"),
    nombreMascota = document.querySelector("#mascota"),
    nombreCliente = document.querySelector("#cliente"),
    telefono = document.querySelector("#telefono"),
    fecha = document.querySelector("#fecha"),
    hora = document.querySelector("#hora"),
    sintomas = document.querySelector("#sintomas"),
    citas = document.querySelector("#citas"),
    headingAdministra = document.querySelector("#administra");

// Esperar por el DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    // Crear la base de datos
    let crearDB = window.indexedDB.open("citas", 1);

    // Si hay un error enviarlo a la consola
    crearDB.error = function() {
        console.log("Hubo un error");
    }

    // Si todo está bien entonces muestra en consola, y asignar la base de datos
    crearDB.onsuccess = function() {
        // console.log("Todo listo");

        // Asignar a la base de datos
        DB = crearDB.result;
        // console.log(DB);
    }

    // Este método sólo corre una vez y ideal para crear el Schema de la base de datos
    crearDB.onupgradeneeded = function(e) {
        // El evento es la misma base de datos
        let db = e.target.result;

        // Definir el objectstore, toma 2 parámetros: el nombre de la base de datos y el segundo las opciones
        // keypath es el índice de la base de datos
        let objectStore = db.createObjectStore("citas", { keyPath: "key", autoIncrement: true });

        // Crear los índices y campos de la base de datos, createIndex: 3 parámetros, nombre, keypath y opciones
        objectStore.createIndex("mascota", "mascota", { unique: false });
        objectStore.createIndex("cliente", "cliente", { unique: false });
        objectStore.createIndex("telefono", "telefono", { unique: false });
        objectStore.createIndex("fecha", "fecha", { unique: false });
        objectStore.createIndex("hora", "hora", { unique: false });
        objectStore.createIndex("sintomas", "sintomas", { unique: false });
    }
});
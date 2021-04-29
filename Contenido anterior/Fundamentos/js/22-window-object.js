// prompt
const nombre = prompt();
console.log(`Bienvenido ${ nombre }`);

// confirm
if (confirm("¿Eliminar?")) {
    console.log("Eliminado");
} else {
    console.log("Nada pasó");
}

let altura,
    anchura;

altura = window.outerHeight;
anchura = window.outerWidth;

console.log(altura); // Tamaño de la altura de la pantalla en pixeles
console.log(anchura); // Tamaño de la anchura de la pantalla en pixeles

// Ubicación

let ubicacion;

ubicacion = window.location;
ubicacion = window.location.host; // Dirección URL (hostname también)
ubicacion = window.location.port; // Puerto
ubicacion = window.location.search; // Variables GET en la URL
ubicacion.location.href = "http://twitter.com"; // Redireccionar desde JavaScript
window.history.go(-2); // Regresa a las páginas guardadas en el historial

console.log(ubicacion);

// Navigator
ubicacion = window.navigator; // Información del navegador
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;
ubicacion = window.navigator.language;
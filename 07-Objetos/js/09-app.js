'use strict';

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.seal(producto); // Sólo permite modificar, no agregar ni eliminar

producto.disponible = false;
// producto.imagen = "imagen,jpg";

console.log(producto);

console.log(Object.isSealed(producto));
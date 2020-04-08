// Exportar variables
export const nombreCliente = "Juan";
export let ahorro = 20;

// Exportar funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${ nombre } - Ahorro: ${ ahorro }`;
}

// Exportar una clase
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${ this.nombre } - Ahorro: ${ this.ahorro }`;
    }
}
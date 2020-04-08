import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js';
// import * as clientes from "./cliente.js";
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as informacionEmpresa, Empresa } from './empresa.js';

// console.log(nombreCliente);
// console.log(nombreEmpresa);
// console.log(ahorro);
// console.log(ahorroEmpresa);
// console.log(categoria);

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());

// // Info cliente
// const info = mostrarInformacion(nombreCliente, ahorro);
// console.log(info);
// // Info empresa
// const infoEmpresa = informacionEmpresa(nombreEmpresa, ahorro, categoria);
// console.log(infoEmpresa);

// Utilizar la clase
let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInformacion());
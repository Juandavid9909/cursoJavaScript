let valor, expReg;

expReg = /[0-9]/;
valor = 1992;

// Una fecha con exp regular 20-10-2018
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = "20-10-2018";

// Hora 10:30
expReg = /\d\d:\d\d/;
valor = "10:30";

// Hora 10:30 AM
expReg = /\d\d:\d\d \D\D/;
valor = "10:30 AM";

expReg = /\d+/;
valor = 1021;

// Negar la expresion
expReg = /[^0-9]/;
valor = 1992;

// La sintaxis {1, 2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = "10-10-2018";
valor = "1-1-2018";
valor = "1-100-2018";
valor = "10-10-203";

// Letras o números
expReg = /\w+/;
valor = "Mensaje de prueba";
valor = 1234;
valor = " ";

// Revusar que sean puros números
expReg = /\d+/;
valor = 1234;
valor = "Hola";

expReg = /([0-9])\w+/;
valor = 1234;
valor = "Hola mundo";

// Texto sean puras mayúsculas
expReg = /([A-Z])\w+/;
valor = "hola mundo";
valor = 1234;
valor = "MENSAJE EN MAYUSCULAS";

// Letras en minusculas
expReg = /([a-z])\w+/;
valor = "hola mundo";
valor = 1234;
valor = "MENSAJE EN MAYUSCULAS";

console.log(expReg.test(valor));
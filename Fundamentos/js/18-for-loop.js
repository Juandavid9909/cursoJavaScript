// For Loops
for (let i = 1; i <= 100; i++) {
    if (i == 5) {
        console.log("Voy en el 5");
        // continue; // Salta al siguiente ciclo
        break; // Rompe el ciclo
    }
    console.log(`${ i }`);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(`El número ${ i } es par`);
    } else {
        console.log(`El número ${ i } es impar`);
    }
}

const arregloProductos = ["Camisa", "Boleto", "Guitarra", "Disco"];

for (let i = 0; i < arregloProductos.length; i++) {
    console.log(`Tu producto ${ arregloProductos[i] } fue agregado`);
}
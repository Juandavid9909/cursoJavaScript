var a = "a";
let b = "b";
const c = "c";

// Scope de la función
function funcionScope() {
    var a = "A";
    let b = "B";
    const c = "C";
    console.log("FUNCIÓN: " + a, b, c);
}

funcionScope();
// Scope de Bloque {}
if (true) {
    var a = "AA";
    let b = "BB";
    const c = "CC";
    console.log("BLOQUE: " + a, b, c);
}

// for
for (var a = 0; a < 10; a++) {
    console.log(a);
}

for (let b = 0; b < 10; b++) {
    console.log(b);
}

console.log("GLOBALES: " + a, b, c);
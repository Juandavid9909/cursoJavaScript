let i = 0;

while (i < 10) {
    if (i === 5) {
        console.log("Cinco");
        i++;
        continue;
    }

    console.log(`Número: ${ i }`);

    i++;
}

const musica = ["Cancion 1", "Cancion 2", "Cancion 3"];
i = 0;

while (i < musica.length) {
    console.log(`Reproduciendo la canción: ${ musica[i] }`);
    i++;
}

i = 0;

do {
    console.log(`Número ${ i }`);
    i++;
} while (i < 10);
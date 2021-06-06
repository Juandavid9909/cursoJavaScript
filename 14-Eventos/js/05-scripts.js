window.addEventListener("scroll", () => {
    // const scrollPX = window.scrollY;

    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);

    if (ubicacion.top < 100) {
        console.log("El elemento ya esta visible");
    } else {
        console.log("Aún no, da más scroll");
    }
});
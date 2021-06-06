const busqueda = document.querySelector(".busqueda");

busqueda.addEventListener("input", (e) => {
    if (e.target.value === "") {
        console.log("Fallo la validacion");
    }
});

// keydown, keyup
// blur funciona cuando escribimos y damos click afuera del input
// copy pasa cuando usamos ctrl + c
// paste pasa cuando usamos ctrl + v
// cut pasa cuando usamos ctrl + x
// input pasa cuando haces cualquiera de los eventos a excepción del blur
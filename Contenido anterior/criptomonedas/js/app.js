const cotizador = new API("3de5aefc294da0dbc7264531462e3b5668e49c8177abb6a64d823880d88d9c00");
const ui = new Interfaz();

// Leer el formulario
const formulario = document.querySelector("#formulario");

// EventListener
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Leer la moneda seleccionada
    const monedaSelect = document.querySelector("#moneda");
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector("#criptomoneda");
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    // Comprobar que ambos campos tengan algo seleccionado
    if (monedaSeleccionada === "" || criptoMonedaSeleccionada === "") {
        // Arrojar una alerta de error
        ui.mostrarMensaje("Ambos campos son obligatorios", "alert bg-danger text-center");
    } else {
        // Todo bien, consultar la API
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
            });
    }
});
class EventBrite {
    constructor() {
        this.token_auth = "KQ6T5CN3LULDSCVSSDHL";
        this.ordenar = "date";
    }

    // Mostrar resultados de la búsqueda
    async obtenerEventos(evento, categoria) {
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${ evento }&sort_by=${ this.ordenar }&categories=${ categoria }&token=${ this.token_auth }`);

        // Esperar la respuesta del evento y devolverlo como JSON
        const eventos = await respuestaEvento.json();

        return {
            eventos
        }
    }

    // Obtener las categorias en init()
    async obtenerCategorias() {
        // Consultar las categorias a la REST API de eventbrite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${ this.token_auth }`);

        // Esperar la respuesta de as categorias y devolver el JSON
        const categorias = await respuestaCategorias.json();

        // Devolvemos el resultado
        return {
            categorias
        }
    }
}
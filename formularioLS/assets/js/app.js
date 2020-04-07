// Variables
const listaTweets = document.getElementById("lista-tweets");

// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando se envía el formulario
    document.querySelector("#formulario").addEventListener("submit", agregarTweet);

    // Borrar Tweets
    listaTweets.addEventListener("click", borrarTweet);

    // Contenido cargado
    document.addEventListener("DOMContentLoaded", localStorageListo);
}

// Funciones
// Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();

    // Leer el valor del textarea
    const tweet = document.getElementById("tweet").value;

    // Crear botón de eliminar
    const botonBorrar = document.createElement("a");
    botonBorrar.classList = "borrar-tweet";
    botonBorrar.innerText = "X";

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement("li");
    li.innerText = tweet;

    // Añade el botón de borrar al tweet
    li.appendChild(botonBorrar);

    // Añade el tweet a la lista
    listaTweets.appendChild(li);

    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}

// Eliminar el Tweet del DOM
function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === "borrar-tweet") {
        e.target.parentElement.remove();

        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
        // Crear botón de eliminar
        const botonBorrar = document.createElement("a");
        botonBorrar.classList = "borrar-tweet";
        botonBorrar.innerText = "X";

        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement("li");
        li.innerText = tweet;

        // Añade el botón de borrar al tweet
        li.appendChild(botonBorrar);

        // Añade el tweet a la lista
        listaTweets.appendChild(li);
    });
}

// Agregar tweet a Local Storage
function agregarTweetLocalStorage(tweet) {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    // Añadir el nuevo Tweet
    tweets.push(tweet);

    // Convertir de String a Array para Local Storage
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Comprobar que hayan elementos en Local Storage, retorna un arreglo
function obtenerTweetsLocalStorage() {
    let tweets;

    // Revisar los valores de Local Storage
    if (localStorage.getItem("tweets") === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }

    return tweets;
}

// Eliminar tweet de Local Storage
function borrarTweetLocalStorage(tweet) {
    let tweets, tweetborrar;

    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index) {
        if (tweetBorrar === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem("tweets", JSON.stringify(tweets));
}
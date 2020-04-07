// Crear enlace
const enlace = document.createElement("a");

// Agregamos una clase
enlace.className = "enlace";

// Añadir id
enlace.id = "nuevo-id";

// Añadir atributo href
enlace.setAttribute("href", "#");

// Añadir text
enlace.textContent = "Nuevo enlace";
// enlace.appendChild(document.createTextNode("Nuevo enlace")); // Sirve también

// Agregarlo al HTML
document.querySelector("#secundaria").appendChild(enlace);

console.log(enlace);
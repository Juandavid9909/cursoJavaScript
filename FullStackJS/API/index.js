const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

// Crear el servidor
const app = express();

// Habilitar cors
const whitelist = ["http://localhost:3000"];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some(dominio => dominio === origin);

        if (existe) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    }
}

// app.use(cors(corsOptions));
app.use(cors());

// Conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitar routing
app.use("/", routes());

// Puerto y arrancar el servidor
app.listen(4000, () => {
    console.log("Servidor funcionando");
});
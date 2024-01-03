// App that will be served on the server
// App express que usa JSON e tem o controle do cors
const express = require("express")
const cors = require("cors")
const routes = require("./routes/routes");

require("dotenv").config()

// Express instance
const app = express()

app.use(express.json()) // configurado formato json
app.use(cors()) // sem nenhuma config especifica, sem trava de acesso
app.use(routes) // usar as rotas criadas

module.exports = app
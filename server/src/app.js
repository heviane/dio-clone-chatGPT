const express = require("express")
const cors = require("cors");
const routes = require("./routes/routes");

require("dotenv").config()

const app = express() // Express instance

app.use(express.json()) 
app.use(cors()) // without any specific config, without access lock
app.use(routes)         

module.exports = app
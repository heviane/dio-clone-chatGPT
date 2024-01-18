// Responsibility: How the user will access the controller.
// controller (function) will be called via the route.
// Summary: User hits the route, which calls controller, receiving the model

const express = require("express");
const promptControlller = require("../controllers/prompt-controller");

// create instance of routes from within express
// returns a route tree, we can hang routes here
const routes = express.Router();

routes.post('api/prompt', promptControlller.sendText);

module.exports = routes; // export the route tree

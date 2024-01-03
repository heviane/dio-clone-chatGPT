// Responsavel por como o usuário vai acessar o controller
// Temos um server, o controller (q é uma função) vai ser chamado através da rota
// Então, user bate na rota, que chama controller, recebendo o model

const express = require("express");
const promptControlller = require("../controllers/prompt-controller");

// criar instancia de rotas de dentro do express
// retorna uma arvore de rotas, podemos pendurar rotas aqui
const routes = express.Router();

routes.post('api/prompt', promptControlller.sendText);

module.exports = routes; // exportar a arvore de rotas

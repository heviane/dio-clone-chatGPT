// Server configuration file
// Server contains an app inside it (app.js)
const app = require("./app")

// process é o processo atual que está executando
// env é o arquivo de configuração (dotenv)
// PORT é a constante configurada dentro do file .env
// OU default porta 3000
const port = process.env.PORT || 3000 

app.listen(port, () => (
  console.log(`Server listening on port ${port}`)  
))

// Dentro do dir /server
// node src/server
// watch é para reiniciar automaticamente 
// node --watch src/server
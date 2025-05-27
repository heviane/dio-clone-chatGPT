const app = require("./app")

const port = process.env.PORT || 3000 

app.listen(port, () => (
  console.log(`Server listening on port ${port} `)  
))

// ---------- Inicializar o servidor (não reinicia automaticamente em alterações)
// cd server
// node src/server.js

// ---------- Inicializar em modo watch (reinicia automaticamente em alterações)
// cd server
// node --watch src/server.js

// ---------- Inicializar o servidor com nodemon (reinicia automaticamente em alterações)
// ---------- script in package.json com nodemon
// cd server
// npm run start


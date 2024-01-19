const app = require("./app")

// "process" is the current process that is running
// "env" is the "dotenv" configuration file

const port = process.env.PORT || 3000 

app.listen(port, () => (
  console.log(`Server listening on port ${port} `)  
))

// ---------- 
// cd server
// node src/server.js

// ---------- script in package.json
// cd server
// npm run start

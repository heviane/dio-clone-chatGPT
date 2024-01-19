const axios = require("axios");

async function main() {
  try {
    const response = await axios.get("http://localhost:3000");
    return response.data;
  } catch (error) {
    console.error(error.response.data);
    return "Erro ao processar a requisição";
  }
}

main().then(response => console.log(response));

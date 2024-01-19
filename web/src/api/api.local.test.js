const axios = require("axios");

async function main() {
  try {
    const prompt = "hello world em python";
    const response = await axios.post("http://localhost:5000/api/prompt", prompt)
    return response.data //.choices[0].message.content;
  } catch (error) {
    console.error(error.response.data);
    return "Error processing request";
  }
}

main().then(response => console.log(response));

// ========== Run /Test
// cd web
// node src/api/api.local.test.js
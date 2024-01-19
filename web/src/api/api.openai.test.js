const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

async function main() {
  try {
    const apiKey = "...copy and paste here..."
    const prompt = "hello world em python";
    const model  = "gpt-3.5-turbo";

    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: model,
            messages: [{role: "user", content: prompt}],
            temperature: 0.7
        },
        {
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            },
        }
    );
    return response.data.choices[0].message.content;

  } catch (error) {
    console.error(error.response.data);
    return "Error processing request";
  }
}

main().then(response => console.log(response));

// ========== Run /Test
// cd web
// node src/api/api.openai.test.js

/* ------ https://platform.openai.com/docs/api-reference/
    curl https://api.openai.com/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Say this is a test!"}],
        "temperature": 0.7
    }'
*/
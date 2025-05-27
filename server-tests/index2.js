import 'dotenv/config'; 
import OpenAI from "openai"; // Importar o cliente OpenAI

// Inicializar o cliente OpenAI com sua chave
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um assistente prestativo." },
        { role: "user", content: "Qual é a capital da França?" }
      ],
      max_tokens: 50,
    });

    console.log("Resposta da OpenAI (ES Modules):");
    console.log(chatCompletion.choices[0].message.content);

  } catch (error) {
    if (error.response) {
      console.error("Erro na API da OpenAI:");
      console.error(error.response.status);
      console.error(error.response.data);
    } else {
      console.error("Erro ao chamar a API da OpenAI:", error.message);
    }
  }
}

// Chamar a função principal
main();

/*
  $ node index2.js
  Erro ao chamar a API da OpenAI: 429 You exceeded your current quota, please check your plan and billing details.
  For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
*/
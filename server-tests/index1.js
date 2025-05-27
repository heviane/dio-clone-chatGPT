import OpenAI from "openai";  // Importar o cliente OpenAI 
import 'dotenv/config'; // Importar variáveis de ambiente do arquivo .env

// Inicializa o cliente da OpenAI.
//    A API Key é lida de process.env.OPENAI_API_KEY.
//    É fundamental que você tenha um arquivo .env na raiz do seu projeto com:
//    OPENAI_API_KEY=sua_chave_secreta_aqui
//    E que o .env esteja no seu .gitignore!
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a one-sentence bedtime story about a unicorn.",
});

console.log(response.output_text);

/*
    throw new Errors.OpenAIError("The OPENAI_API_KEY environment variable is missing or empty; 
    either provide it, or instantiate the OpenAI client with an apiKey option, 
    like new OpenAI({ apiKey: 'My API Key' }).");
                    ^
    OpenAIError: The OPENAI_API_KEY environment variable is missing or empty; 
    either provide it, or instantiate the OpenAI client with an 
    apiKey option, like new OpenAI({ apiKey: 'My API Key' }).
*/
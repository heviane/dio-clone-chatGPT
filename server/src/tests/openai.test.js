import { OpenAI } from "openai";
import dotenv from 'dotenv'; // npm install dotenv
dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPEN_AI_KEY})

async function main() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      prompt: 'What is your assistance?',
      max_tokens: 50,
    });
    console.log(completion.choices[0].text);
  } catch (error) {
    console.error(error);
  }
}
main();

/* 
  ------------------------ ERRORS
    - OpenAIError: The OPENAI_API_KEY environment variable is missing or empty; 
    either provide it, or instantiate the OpenAI client with an apiKey option, 
    like new OpenAI({ apiKey: 'My API Key' }).

      *** CORREÇÃO: Executar de dentro do diretório server, senão ERROR acima.
      cd server
      node src/tests/openai-test.js

    - RateLimitError: 429 You exceeded your current quota, please check your plan and billing details. 
      For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors
      type: insufficient_quota
      status: 429

      *** CORREÇÃO: ????
*/
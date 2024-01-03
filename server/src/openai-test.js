import { OpenAI } from "openai";
import dotenv from 'dotenv'; // npm install dotenv
dotenv.config();

const openai = new OpenAI({apiKey: process.env.OPEN_AI_KEY})

async function main() {
  try {
    const completion = await openai.complete({
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
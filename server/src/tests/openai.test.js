const { OpenAI } = require("openai");
const dotenv = require("dotenv");

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
  cd server
  node src/tests/openai.test.js

  - ERROR
  
    *** RateLimitError: 429 You exceeded your current quota, please check your plan and billing details. 
    For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors
      
      type: insufficient_quota
      status: 429
      Cause: 
        - You have run out of credits or hit your maximum monthly spend.
      Solution: 
        - Buy more credits (https://platform.openai.com/account/billing) 
        or 
        - Learn how to increase your limits (https://platform.openai.com/account/limits)
        
        *** Criei uma conta nova ***

    *** BadRequestError: 400 'messages' is a required property
      In "openai2.test.js" return:
        error: {
          message: "'messages' is a required property",
          type: 'invalid_request_error',
          param: null,
          code: null
        },
        code: null,
        param: null,
        type: 'invalid_request_error'
*/
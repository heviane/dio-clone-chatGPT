// index.js (ou seu arquivo principal, com "type": "module" no package.json)

// 1. Importa a função 'config' do pacote 'dotenv'.
//    'dotenv/config' é a forma moderna de carregar variáveis de ambiente com ES Modules.
import 'dotenv/config';

// 2. Importa a classe 'OpenAI' do SDK oficial.
import OpenAI from "openai";

// 3. Inicializa o cliente da OpenAI.
//    A API Key é lida de process.env.OPENAI_API_KEY.
//    É fundamental que você tenha um arquivo .env na raiz do seu projeto com:
//    OPENAI_API_KEY=sua_chave_secreta_aqui
//    E que o .env esteja no seu .gitignore!
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateBedtimeStory() {
  try {
    // 4. Chama o método 'chat.completions.create' para gerar texto.
    //    Este é o endpoint correto para usar modelos como GPT-3.5 Turbo ou GPT-4.
    //    - 'model': Use um modelo existente, como "gpt-3.5-turbo", "gpt-4", ou "gpt-4o".
    //    - 'messages': É um array de objetos, onde cada objeto representa uma "fala"
    //      no chat. 'role' pode ser "system", "user" ou "assistant".
    //      - 'system': Define o comportamento geral do assistente.
    //      - 'user': A entrada do usuário.
    //    - 'max_tokens': Limita o comprimento da resposta.
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // OU "gpt-4o", "gpt-4" - ajuste conforme sua necessidade
      messages: [
        {
          role: "system",
          content: "Você é um contador de histórias de ninar conciso e gentil.",
        },
        {
          role: "user",
          content: "Escreva uma história de ninar de uma frase sobre um unicórnio.",
        },
      ],
      max_tokens: 30, // Suficiente para uma frase curta
      temperature: 0.7, // Controla a criatividade da resposta (0.0 a 1.0)
    });

    // 5. Acessa o conteúdo da resposta.
    //    O texto gerado está em response.choices[0].message.content.
    const story = response.choices[0].message.content;
    console.log("História de ninar gerada:");
    console.log(story);

  } catch (error) {
    // 6. Tratamento de erros:
    //    Verifica se o erro tem uma resposta da API (ex: erro de autenticação, limite de taxa).
    if (error instanceof OpenAI.APIError) {
      console.error("Erro da API da OpenAI:");
      console.error(`Status: ${error.status}`); // Código de status HTTP (ex: 401, 429, 500)
      console.error(`Mensagem: ${error.message}`); // Mensagem de erro da API
      console.error(`Código: ${error.code}`); // Código de erro específico da OpenAI
      console.error(`Tipo: ${error.type}`); // Tipo de erro
    } else {
      // Outros erros (ex: problema de rede, erro no seu código)
      console.error("Ocorreu um erro ao gerar a história:", error);
    }
  }
}

// Chama a função para iniciar o processo de geração da história.
generateBedtimeStory();

/*
    $ node index3.js
    Erro da API da OpenAI:
    Status: 429
    Mensagem: 429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.
    Código: insufficient_quota
    Tipo: insufficient_quota
*/
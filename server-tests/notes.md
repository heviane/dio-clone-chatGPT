# Notes

## API Key

- Gerar uma Api Key no site **[platform.openai.com/](https://platform.openai.com/)**
- Adicionar as configurações do projeto através do arquivo **.env**
- Adicionar este arquivo ao **.gitignore**

## scripts

```bash

    # inicializar um projeto node
    npm init -y

    # instalar a api openai >>> add package.json
    npm install openai

    # variáveis de ambiente para manter a chave segura
    npm install dotenv

```

## Node

- Adicionar a linha abaixo ao arquivo package.json para especificar que será usado
**módulos ES (ECMAScript Modules)** ao invés do **CommonJS tradicional**.

    ```json
        "type": "module",
    ```

Esta é a abordagem mais limpa e moderna. Ela define que todos os arquivos .js dentro do seu projeto (ou subdiretórios que não tenham seu próprio package.json com type: "commonjs") serão tratados como módulos ES.

Agora, você pode usar a sintaxe **import** e **export**.

```text
    const { OpenAI } = require('openai'); // CommonJS tradicional
    import OpenAI from "openai";          // módulos ES (ECMAScript Modules)
```

### Como trabalhar com as duas abordagens (Dica para migrar projetos legados)

Extensão .mjs para Módulos ES (Menos Comum)

Esta abordagem é usada quando você quer misturar módulos CommonJS e ES no mesmo projeto, ou se você tem um legado CommonJS e quer introduzir ES Modules gradualmente.

Renomeie seus arquivos JavaScript que usarão import/export de .js para .mjs.

Por exemplo, se seu arquivo principal é index.js, renomeie-o para index.mjs.

Atualize o script de inicialização no seu package.json para apontar para o novo nome do arquivo:

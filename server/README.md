# Getting Started with Node

Project for learning Javascript and Node (v17.7.1).

## Configuration

Não consegui executar com "--watch", deu erro: "node: bad option: --watch".
Obs: a opção "--watch" não é reconhecida pela versão do Node.js que você está usando.
**watch** é para reinicializar o server automaticamente a cada alteração no app,
sempre usado para testar a app.

Solution: usar Nodemon

1. **Instalação**

```bash
npm install --save-dev nodemon
```

2. **Editar arquivo de configuração "package.json"**

Remover o script abaixo:

```json
"scripts": {
    "start": "node --watch src/server"
  }
```

Incluir o script abaixo:

```json
"scripts": {
  "start": "nodemon src/server"
}
```

## Execution

```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:5555](http://localhost:5555) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## OBS

Não estou usando "type: module" no "package.json".
Portanto ao invés de fazer "import", faço "require" nos arquivos.

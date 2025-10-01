# Fastify API - Projeto de Estudos

Este é um repositório de aprendizado focado na construção de APIs robustas e performáticas com Node.js. O objetivo é explorar as melhores práticas do ecossistema moderno, utilizando ferramentas que garantem segurança de tipos e validação de dados de ponta a ponta.

## ✨ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript. Utilizamos as flags `--experimental-strip-types` e `--watch` para rodar TypeScript nativamente, proporcionando um fluxo de desenvolvimento rápido e sem a necessidade de um passo de compilação explícito.
- **TypeScript**: Para adicionar tipagem estática, o que aumenta a segurança, a legibilidade e a manutenibilidade do código.
- **Fastify**: Um framework web de alta performance e baixo overhead, focado na velocidade e na experiência do desenvolvedor.
- **Zod**: Para declaração e validação de schemas, garantindo que os dados que entram e saem da API estejam sempre no formato correto.
- **fastify-type-provider-zod**: Uma biblioteca que integra Zod ao Fastify, proporcionando autocomplete e segurança de tipos 100% inferidos a partir dos schemas de validação.

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação em seu ambiente local.

### Pré-requisitos

- Node.js (versão 22.x ou superior, para suporte nativo a `.env` e TS)
- npm (geralmente instalado com o Node.js)

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/Renan-Gimenez/fastify-api.git
    cd fastify-api
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Crie o arquivo de variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto, seguindo o exemplo do script `dev`.
    ```env
    # .env
    PORT=3333
    ```

### Executando a Aplicação

- **Modo de Desenvolvimento:**
  Para rodar o servidor em modo de desenvolvimento com hot-reload:

  ```bash
  npm run dev
  ```

  O servidor estará disponível em `http://localhost:3333`.

- **Modo de Produção:**
  Para rodar o servidor em modo de produção:
  ```bash
  npm run start
  ```

## Endpoints da API

Atualmente, a API possui os seguintes endpoints:

### Health Check

- **`GET /health`**
- **Descrição**: Verifica se a API está online.
- **Resposta de Sucesso (200)**:
  ```
  OK
  ```

### Cow Say

- **`GET /cow-say/:message`**
- **Descrição**: Retorna uma mensagem com um emoji de vaca.
- **Resposta de Sucesso (200)**:
  ```json
  {
    "message": "🐄 sua-mensagem-aqui"
  }
  ```

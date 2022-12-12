# Petshop - Pet Care, website desenvolvido para o trabalho interdisciplinar de M2! - 2022/2

## Componentes

Este projeto é composto por:

- Uma SPA com React (front-end);

- Uma API com Node.js e Firebase (back-end);

- Um chatbot com base no Telegram/Telegraf.

## Instalação / Configuração

Em seu terminal, clone o projeto com `git clone https://github.com/AndreMatioski02/api_node_m2.git`

- Acesse a pasta "api" com o comando `cd api`, e instale suas dependências com `npm i`

- Por padrão, a API irá rodar na URL [http://localhost:3001](http://localhost:3001)

- Retorne à pasta raíz com o comando `cd ..`

- Repita o procedimento acima para as pastas "ui" e "chatbot"

**Atenção: Para rodar tanto a API quanto o front-end, utilize `npm start`. Para rodar o chatbot, utilize `node index.js`. É preciso rodar ambos ao mesmo tempo para que os métodos funcionem corretamente.**

# API

A API, desenvolvida em Node.js e com armazenamento no Firebase, faz referência a um petshop, nomeado Pet Care. Este possui, no momento, 4 models, sendo eles:

- Employees ([http://localhost:3001/api/employees](http://localhost:3000/api/employees));

- Animals ([http://localhost:3001/api/animals](http://localhost:3000/api/animals));

- Clients ([http://localhost:3001/api/clients](http://localhost:3000/api/clients));

- Services ([http://localhost:3001/api/services](http://localhost:3000/api/services)).

Todos estes models possuem dados cadastrados no banco Firebase, e podem ser alterados por meio dos métodos HTTP desenvolvidos na API. A mesma conta, também, com autenticação via token JWT, e criptografia básica de senha de usuário.

# Front-end

O front-end, desenvolvido em React + TS, permite ao usuário efetuar seu login, e então, acessar o CRUD. O CRUD do petshop conta com a atualização e utilização, em tempo real, dos métodos HTTP da API.

As rotas do CRUD são acessíveis apenas se o usuário estiver logado. Tal login, após efetuado, salva o token JWT no Local Storage, permitindo que as rotas do CRUD verifiquem se o mesmo existe, habilitando ou não as opções para o usuário.

# Chatbot

O chatbot, com base no Telegram/Telegraf, permite a criação e armazenamento em sessão de uma lista de compras para o petshop. Proporciona, também, um teclado virtual, caso não seja possível utilizar o físico.

Também, em conexão e consumo da API, o chatbot é capaz de listar os profissionais cadastrados na API, utilizando o método GET.

# Documentação base do React (Create React App)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

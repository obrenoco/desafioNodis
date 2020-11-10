<h3 align="center">
  <img src="https://i.imgur.com/EZVI01c.png" width="150px"/>
</h3> 
<p align="center"><strong> Desafio Nodis Front-End</strong></p>

<p  align="center">
  <a  href="">
  <img  src="https://img.shields.io/github/stars/obrenoco/desafioNodis"/>
  </a>
  <img  src="https://img.shields.io/github/forks/obrenoco/desafioNodis"/>
  </>
</p>

<p align="center">
  <img src ="https://media.giphy.com/media/pU5bBW7txXipUunqSI/giphy.gif" width="150px"  />
  <img src ="https://media.giphy.com/media/7yVOqwPqTxEyBAjZ3j/giphy.gif" width="150px"  />
</p>


# :pushpin: Roadmap

* [:rocket: Features](#rocket-features)

* [:robot: Tecnologias](#robot-tecnologias)

* [:construction_worker: Instalação](#construction_worker-instalação)

* [:closed_book: License](#closed_book-license)


<br />

# :rocket: Features
O desafio consistem em criar uma aplicação mobile (React Native) que permita a navegação entre 2 telas, são elas:
<br />
<p>🔥 Home do app em que são listados todos os produtos</p>
<p>🔥 Página de detalhes de um produto, onde seja possível editar os campos daquele determiado produto</p>

- Na home, ao clicar em um produto, o usuário deve ser redirecionado para a página de detalhe desse produto.

- Na tela de detalhe do produto, o usuário deve poder editar todos os campos do produto. Essa mudança deve refletir na listagem, caso seja necessário.

<br />

## :robot: Tecnologias

- [x] [React Native](https://reactnative.dev/docs/next/getting-started) & React
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Apollo Client](https://www.apollographql.com/docs/react/)
- [x] [Json GraphQL Server](https://github.com/marmelab/json-graphql-server)
- [x] [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [x] [Styled components](https://styled-components.com/)
- [x] [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)



<br />

# :construction_worker: Instalação


URLs SSH fornecem acesso a um repositório Git via SSH, um protocolo seguro. Se você usar uma chave SSH registrada em sua conta do Github, clone o projeto usando este comando:


```git clone git@github.com:obrenoco/desafioNodis```


Apos fazer o clone, rode no seu terminal:`yarn install`.<br />

e em seguida: 
<br/>
1. Rode `yarn start`

2. Rode o servidor `npx json-graphql-server src/database/database.js`

3. Abra o seu emulador (Android ou iOS)

## Android
4. Rode `yarn run android`

## iOS
** Em src/app , altere `uri: 'http://10.0.2.2:3000'` para `uri: 'http://localhost:3000'`.
<br />
4. Rode `yarn run ios`

   
<br />


# :closed_book: License


Released in 2020.

Made with love by [Breno Romeiro](https://github.com/obrenoco) 💜🚀

# Desafio Nodis - Frontend

## Instruções Gerais

Faça um repositório público no Github, desenvolva seu código nele e ao final nos envie a URL para que possamos avaliar o resultado do desafio. Utilize o README para nos passar quaisquer informações que julgar interessante/necessárias como rodar o projeto, decisões tomadas, etc.

Não definimos um tempo para o desafio ser feito, **é você quem deve nos passar uma data limite para a entrega do desafio**.

## O Desafio

O desafio consistem em criar uma aplicação mobile (React Native) que permita a navegação entre 2 telas, são elas:

- Home do app em que são listados todos os produtos;
- Página de detalhes de um produto, onde seja possível editar os campos daquele determiado produto;

A proposta aqui é que você tenha total liberdade de criar o layout das páginas. Para te auxiliar, são disponibilizados aquivos com a logo e a fonte da Nodis.

Na home, ao clicar em um produto, o usuário deve ser redirecionado para a página de detalhe desse produto.

Na tela de detalhe do produto, o usuário deve poder editar todos os campos do produto. Essa mudança deve refletir na listagem, caso seja necessário.

Essa é a base do desafio, você pode nos surpreender com quaisquer detalhes que quiser :D

## Assets

Utilizar a logo da Nodis e a fonte fornecida.

## API

A biblioteca json-graphql-server roda uma API GraphQL a partir de um arquivo Javascript, que disponibilizamos junto do teste: **database.js**

Para rodar a API, basta rodar o comando: `npx json-graphql-server caminho-do-arquivo/database.js`

A API roda por padrão em http://localhost:3000/, caso você queira rodar em outra porta basta passar o parâmetro no comando acima: `--p <nova porta>`

Se quiser dar uma olhada na lib, aqui está o link: https://github.com/marmelab/json-graphql-server

## O que nós esperamos do seu desafio

- Usar React e React Native;
- Usar [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html);
- Utilizar [Apollo Client](https://www.apollographql.com/docs/react/) para realizar as consultas a API;
- Estilização básica com [Styled components](https://styled-components.com/);
- Aplicação dividida em componentes claros, de responsabilidade única e facilmente reutilizáveis;
- Tratamento adequado de possíveis erros;

## O que nos impressionaria (famoso bônus)

- Typescript
- Testes automatizados (ex: [Jest](https://jestjs.io/docs/en/tutorial-react-native));
- [Manipulação de cache](https://www.apollographql.com/docs/react/caching/cache-interaction/) das requisições com Apollo Client
- Utilizar listas virtualizadas (ex. [FlatList](https://reactnative.dev/docs/flatlist))
- Usar [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow);

## O que avaliaremos do seu desafio

- Histórico de commits do git;
- As instruções de como rodar o projeto;
- Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código;
- Alcance dos objetivos propostos;
- Componentização e extensibilidade dos componentes Javascript;

## Dicas

### DO

- Componentes pequenos e claros;
- Features do ES6 que simplificam o código, como object destructuring, rest operator, etc;
- Se você tiver disponibilidade, teste sua aplicação em Android e iOS, mas pode ficar tranquilo, isso não é requisito, garanta que esteja tudo ok na plataform que você conseguir desenvolver.

### DON'T

- Código duplicado;
- Funções/Classes longos demais;
- Muitos if/else;
- Uso de estruturas de dados inadequados;
- Funções/métodos com muitos parâmetros;
- Console.log no envio final;
- Retornar estado de erro em vez de levantar exceção;

# Desafio Front-end Promobit

![https://i.imgur.com/zXcHUzX.png](https://i.imgur.com/zXcHUzX.png)

## **👾 Rodando o App**

Para executar o projeto, siga-os passos abaixo:

1. Clonando o projeto:

    ````
    $ git clone https://github.com/rhuanbello/promobit-front-end-challenge.git .
    ````

2. Instalando as dependências e inicializando o projeto:

    ````
    $ yarn && yarn dev
    ````


3. O app estará disponível no endereço [http://localhost:3000/](http://localhost:3000/)

---

## **🚀 Tecnologias**

Esse projeto foi desenvolvido com as seguintes ferramentas:

<details>
    <summary>React.js</summary>
<p>

- Biblioteca open-source JavaScript. Utilizada para a criação de componentes reutilizáveis, como é o caso do componente `<Header />` e `<MoviesList />`, presentes tanto na página Home quanto na página MovieDetails.

</p>
</details>

<details>
    <summary>Vite.js</summary>
<p>

- Vite.js foi o Build Tool utilizado para implementar o ambiente de desenvolvimento para o React.js. É uma ferramenta extremamente perfomática, e já traz consigo o Hot Module Replacement

</p>
</details>

<details>
    <summary>TypeScript</summary>
<p>

- TypeScript é um superset do ES6. Foi utilizado para que simplificasse a leitura e o debug do código, promovendo mais produtividade através das tipagens.

</p>
</details>

<details>
    <summary>Styled Components</summary>
<p>

- Também conhecido como CSS-in-JS, foi utilizado para criar componentes estilizados através das Templates Literals, além de condicionais de estilo.

</p>
</details>

<details>
    <summary>React Router Dom</summary>
<p>

- Utilizado para criação de rotas dinâmicas, como a página MovieDetails, que renderiza o filme selecionado através do ID que é passado como parâmetro na URL.

</p>
</details>

<details>
    <summary>Axios</summary>
<p>

- Axios foi o cliente HTTP utilizado para fazer as requisições à API TMDB. 

</p>
</details>

<details>
    <summary>Material UI</summary>
<p>

- Biblioteca de componentes utilizada para criar a barra de pesquisa.

</p>
</details>

<details>
    <summary>React Icons</summary>
<p>

- Pacote de ícones que nos fornece fácil acesso à diversas coleções, como o Feather Icons.

</p>
</details>

<details>
    <summary>Moment.js</summary>
<p>

- Utilizado para formatar as datas de lançamento dos títulos.

</p>
</details>

<details>
    <summary>Dotenv</summary>
<p>

- Módulo utilizado para armazenar as variáveis de ambiente, como a API KEY.

</p>
</details>

---

## Estrutura da Aplicação

- pages
    - **Home**
        - `<GenresBanner />`
        - `<MoviesList />`
        - `<Pagination />`
    - **MovieDetails**
        - `<MovieBanner />`
        - `<MovieCredits />`
        - `<MoviesList />`
    - **Error404**

---

## Requisitos

- [x]  O usuário deve ter acesso a uma listagem dos filmes mais populares do dia
- [x]  O usuário deve conseguir paginar a lista para encontrar novos filmes
- [x]  O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem
- [x]  O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

## Requisitos não funcionais

- [x]  O app deverá ser criado usando [React](https://reactjs.org/)
- [x]  Na raiz do projeto, será necessário incluir um arquivo `README.md` com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.
- [x]  O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge
- [x]  O app deverá ser responsivo

## Extras

- [x]  O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
- [x]  O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
- [x]  A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa

## Bônus

- [x]  Mecanismo de pesquisa por filmes, exibe resultados contando com o pôster, título, ano e avaliação. Ao clicar, redireciona o usuário à página com detalhes sobre o filme

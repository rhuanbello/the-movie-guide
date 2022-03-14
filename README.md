# The Movie Guide 📽

![Untitled](https://i.imgur.com/GEqLZq1.png)

Você pode acessá-lo com este [link](https://the-movie-guide.vercel.app).

## ****💻 Sobre****


The Movie Guide é uma aplicação que reune informações sobre artistas e produções, o site também permite que usuários pesquisem e avaliem seus **filmes** favoritos, além de mudar a foto, nome de usuário e outras informações de seu perfil.

O deploy para produção foi feito com Vercel, e está disponibilizado neste [endereço](https://the-movie-guide.vercel.app/).

## 🚀 Tecnologias


The Movie Guide foi desenvolvido utilizando as seguintes tecnologias:

- React.js
- TypeScript
- Styled Components
- Redux
- React Router Dom
- The Movie Database API
- Framer Motion
- Material UI
- Vercel
- Vite.js
- Dropzone

## ****✨ Features****


Algumas features que valem a pena destacar:

- Upload de Imagens e alterar informações do usuário em “Meu Perfil”;
- Pesquisa por título ou ator/atriz;
- Avaliar filmes, adicionar aos favoritos ou à lista de já assistidos e recuperá-los em “Meu Perfil”;
- Recomendações de filmes;
- Filtro acumulativo de gêneros na Página Inicial;
- Alterne entre filmes populares, filmes em cartaz, filmes em lançamento ou mais bem avaliados;
- Scroll Infinito na página de Pessoas Populares;
- Paginação na Página Inicial;

## Rodando o App

Para executar o projeto, siga-os passos abaixo:

```jsx
# Clonando o projeto
$ git clone https://github.com/rhuanbello/the-movie-guide.git .
# Instalando as dependências e iniciando o projeto
$ yarn && yarn dev
```

O app estará disponível no endereço: [http://localhost:3000/](http://localhost:3000/)

## 🎨 **Design de Interface**


- A Interface do projeto foi desenvolvida utilizando o software Figma, você pode visualizar o layout através [desse link.](https://www.figma.com/file/Ki1aqCoScQ9kDV4YJ5ex1r/Movies-Guide?node-id=0%3A1)

## Estrutura de Componentes da Aplicação

- pages
    - **Home**
        - `<Header />`
        - `<GenresBanner />`
        - `<MoviesList />`
        - `<Pagination />`
    - **MovieDetails**
        - `<Header />`
        - `<MovieBanner />`
        - `<MovieCredits />`
        - `<MoviesList />`
    - MyProfile
        - `<Header />`
        - `<ProfileCover />`
        - `<MoviesList />`
    - PopularPerson
        - `<Header />`
        - `<PersonCards />`
    - PersonDetails
        - `<Header />`
        - `<PersonBanner />`
        - `<PersonCredits />`
        - `<MoviesList />`

## **📝 Licença**


Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/birobirobiro/nlw-heat-origin-v2/blob/main/.github/LICENSE.md) para mais detalhes.

Desenvolvido com 💛 por Rhuan Bello 👁️‍🗨️

![https://wakatime.com/badge/user/7c8afd8e-6490-43bb-b980-a081626d34af/project/f90fcd9a-60a4-4d94-822f-526b8277f0bc.svg](https://wakatime.com/badge/user/7c8afd8e-6490-43bb-b980-a081626d34af/project/f90fcd9a-60a4-4d94-822f-526b8277f0bc.svg)

# React/Tailwind Template

[![Netlify Status](https://api.netlify.com/api/v1/badges/81727ed8-0b52-4733-8e65-4af7ecba803b/deploy-status)](https://app.netlify.com/sites/gustavokuze/deploys)

Aqui você encontra o código do template por trás do meu novo site [gustavokuze.com](https://gustavokuze.com/)

![image](https://user-images.githubusercontent.com/25889391/95791729-58e74780-0cb8-11eb-97c7-a77d41d66473.png)
____

## Docs

- [Rodando o projeto](#rodando-o-projeto)
- [Menu Dinâmico](#menu-dinâmico)
- [Portfólio dinâmico](#portfólio-dinâmico)
- [Estilização](#estilização)
  - [Sobre Tematização](#sobre-tematização)
- [Gostou do projeto?](#gostou-do-projeto)
- [Direito de Cópia e distribuição](#direito-de-cópia-e-distribuição)

### Rodando o projeto

1. Instale as dependências com `yarn` ou `npm i`

2. Execute o projeto com `yarn start` ou `npm run start`

**NOTA**: Caso não queira reconstruir o css do Tailwind toda vez que for iniciar o projeto, execute o script `yarn s`, que irá apenas iniciar o servidor do React.

### Menu Dinâmico

Os itens do menu de navegação superior (`NavBar`) e rodapé (`Footer`) são definidos de maneira dinâmica no arquivo `constants/menu.js`. 

Esse arquivo de configurações exporta um array de objetos (itens), cada um com as seguintes propriedades:

``` javascript
{
    label: 'Mais', // String - Texto que aparecerá no menu
    hideInNavbar: false, // Boolean - esconde o item na navbar
    hideInFooter: false, // Boolean - esconde o item no rodapé,
     items: [ // array de itens - Renderiza um dropdown na Navbar
      {
        label: 'Anotações',
        action: '/tips', // String ou function - rota ou função "onClick"
      },
    ],
},
```
### Portfólio dinâmico

As sessões do portólio são criadas dinamicamente utilizando o componente `WorksSection`

Esse componente aceitar as seguintes propriedades:

| Propriedade     |     Tipo      | Descrição |
| --------------- | :-----------: | :-------- |
| title           |   string    |       Título da sessão  |
| description     |   string    |        Descrição da sessão |
| backgroundClass |   string    |        className aplicado ao container principal |
| invert          |   boolean    |        Define se as imagens e informações devem ser intercaladas à cada linha |
| customDivider   |   React Component    |        Por padrão, um `<hr />` é adicionado ao final de uma sessão. Essa prop lhe permite definir um componente diferente |
| works           |   array    |        Array de itens (`work`) a serem renderizados |
| disclaimer      |   React Component    |        Mensagem que irá aparecer ao final da sessão |

Cada `work` é um objeto com as seguintes propriedades:

``` javascript
{
    title: 'Site do Mercadinho da Esquina',
    description:
        'Uma landing page feita para alavancar o negócio do seu Zé',
    img: '/img/projects-previews/imagem_projeto.jpg',
    projectLink: 'https://gustavokuze.com', // Endereço de hospedagem do projeto
    sourceCodeLink:
    'https://github.com/REPO/mercadinho', // Endereço para o repositório do projeto. Caso não seja informado, o botão "Ver código" não é renderizado
    year: '2020', // valor mostrado na badge ao lado do título
},

```
### Estilização

- Existem duas formas fáceis de estilizar um componente nesse projeto: Utilizando classes do [TailWindCSS](https://tailwindcss.com/), ou utilizando [styled-components](https://styled-components.com/)
- As animações `CSS` puras são definidas no arquivo `styles/animations.css`
- As animações de componentes React são controladas pela biblioteca [react-reveal](https://www.react-reveal.com/)

#### Sobre Tematização

- Os temas do site são definidos no arquivo `styles/theme.js`
- Você pode acessar o tema atual através da propriedade `settings.theme` do redux
- Os temas são salvos em `LocalStorage` automaticamente. Qualquer alteração feita no arquivo de temas exige que o `LocalStorage` do seu navegador seja limpo para surtirem efeito
- Um tema é dividido em duas partes: `classes` e `colors`. No objeto `classes` devem ser definidas as classes taildwind que serão utilizadas (E.x. "purple-500"), e em `colors` as cores hexadecimais utilizadas por `styled-components` ou estilizações puras.
- Atualmente existem dois temas "light" e "dark" (padrão). Mas você pode adicionar mais temas facilmente respeitando as definições do arquivo `styles/theme.js`

![image](https://user-images.githubusercontent.com/25889391/95791751-61d81900-0cb8-11eb-8c22-5ab2ec269ea4.png)

## Gostou do projeto?

- Me ajude clicando em `Star` ⭐ aí em cima 👆
- Compartilhe o projeto no Linkedin
- Me adicione lá também [Meu Linkedin](https://www.linkedin.com/in/gustavo-kuze) 🙋‍♂️

____

## Direito de Cópia e distribuição

Você pode utilizar esse código (template) como base em seus projetos pessoais, a fim de criar seu próprio portfólio, contanto que deixe o acesso público ao seu repositório  (**código aberto**) e me dê os devidos créditos. 😉

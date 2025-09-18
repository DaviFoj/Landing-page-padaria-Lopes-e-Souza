# 🍞 Landing Page - Padaria Lopes e Souza

Este é o repositório da landing page para a **Padaria Lopes e Souza**, um projeto criado para estabelecer uma presença online moderna e atraente para a padaria. A página foi desenvolvida como uma *Single Page Application* (SPA) utilizando React, com foco em design responsivo, usabilidade e apresentação visual dos produtos.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📄 Índice

* [Visão Geral](#-visão-geral)
* [✨ Funcionalidades](#-funcionalidades)
* [🎨 Paleta de Cores](#-paleta-de-cores)
* [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
* [📂 Estrutura de Pastas](#-estrutura-de-pastas)
* [🚀 Como Rodar o Projeto](#-como-rodar-o-projeto)
* [📝 Próximos Passos](#-próximos-passos)

## 🖼️ Visão Geral

A página foi projetada para ser um ponto de contato digital centralizado para os clientes da padaria. Ela apresenta informações essenciais de forma clara e objetiva, incentivando o contato e a realização de encomendas através de CTAs (Chamadas para Ação) bem posicionados. O destaque principal é a vitrine virtual, que exibe fotos de alta qualidade dos produtos de forma apetitosa.

*(Sugestão: Adicione aqui um print da sua página quando estiver finalizada!)*

## ✨ Funcionalidades

-   **Vitrine Virtual Dinâmica:** Uma galeria de imagens com efeito de sobreposição (hover) que revela o nome do produto, criando uma experiência interativa.
-   **Design Moderno e Responsivo:** A interface se adapta perfeitamente a desktops, tablets e smartphones.
-   **Seções Informativas:** Áreas dedicadas para apresentar os tipos de produtos, serviços de encomenda, horários de funcionamento e informações de contato.
-   **Contato Rápido:** Links diretos para ligar para os números de telefone e iniciar uma conversa no WhatsApp.
-   **Identidade Visual Consistente:** A paleta de cores e o estilo foram baseados no logo da padaria para reforçar a marca.

## 🎨 Paleta de Cores

| Cor                 | Hexadecimal                                                  | Uso Principal                 |
| ------------------- | ------------------------------------------------------------ | ----------------------------- |
| 🟩 **Verde Principal** | `#2a4d32`                                                    | Fundos, rodapé e textos escuros |
|  яр **Verde Destaque** | `#a8e063`                                                    | Botões, links e títulos       |
| ⬜ **Branco Texto** | `#f5f5f5`                                                    | Textos principais e ícones    |

## 🛠️ Tecnologias Utilizadas

-   **[React.js](https://reactjs.org/):** Biblioteca principal para a construção da interface de usuário.
-   **[Styled Components](https://styled-components.com/):** Para a estilização dos componentes de forma isolada e organizada.
-   **[React Icons](https://react-icons.github.io/react-icons/):** Para a utilização de ícones vetoriais de alta qualidade.
-   **CSS3:** Utilização de variáveis CSS para o tema, Flexbox e Grid Layout para a estruturação das seções.

## 📂 Estrutura de Pastas

O projeto foi organizado com uma arquitetura baseada em componentes para facilitar a manutenção e escalabilidade.

```
/padaria-lopes-souza
|
├── /public
│   └── index.html
|
├── /src
│   ├── /assets
│   │   ├── logo.jpg
│   │   └── /vitrine
│   │       └── (imagens dos produtos)
│   │
│   ├── /components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Gallery.js
│   │   ├── Products.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
|
├── package.json
└── README.md
```

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

**Passos:**
1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/padaria-lopes-souza.git](https://github.com/seu-usuario/padaria-lopes-souza.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd padaria-lopes-souza
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
    A aplicação estará disponível em `http://localhost:3000`.

## 📝 Próximos Passos

-   [ ] Implementar um formulário de contato funcional.
-   [ ] Criar uma página dedicada para o cardápio completo.
-   [ ] Adicionar animações sutis de entrada para as seções.
-   [ ] Otimizar as imagens e o código para melhor performance (SEO).

---

Feito com ❤️ por **[Davi Figueiredo]**.

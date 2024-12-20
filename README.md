# XPTO

Repositório criado para o xxxx

### Pré-requisitos

- **[Node.JS](http://nodejs.org/download/)** - Versão 20 ou superior;

### Pacotes do projeto:

- [Cypress](https://www.cypress.io/)
- [Mustache](https://www.npmjs.com/package/mustache)
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [Ajv JSON schema validator](https://www.npmjs.com/package/ajv)
- [Cypress Visual Regression](https://www.npmjs.com/package/cypress-visual-regression)

### Instalação

1. Baixe o projeto e vá até a pasta do projeto:

   ```sh
   $ cd <nome_repositorio>/
   ```

2. Informe o comando abaixo para realizar a instalação das dependências:

   ```sh
   $ npm install
   ```

## Configuração

**Abaixo temos a estrutura básica do projeto (por pastas):**

```bash

├── .github
│   ├── templates
│   │   ├── summary.md (modelo de sumário para integração com Github Actions)
│   ├── worflows
│   │   ├── main.yml
│   │   ├── workflow.yml
├── cypress
│   ├── e2e (cenários web)
│   │   ├── wikipedia
│   |   │   ├── home.cy.js
│   ├── fixture (massa para stubs, spies, schemas)
│   │   ├── userSchema.json
│   ├── pages (mapeamento de elementos de página)
│   │   ├── home-page.js
│   │   ├── search-result-page.js
│   ├── reports (relatórios de execução)
│   ├── snapshots (regressão visual)
│   ├── support
│   │   ├── api-commands.js (custom commands de API)
│   │   ├── commands.js (custom commands Web)
│   │   ├── e2e.js (configuração dos testes e2e e custom commands)
│   │   ├── test-summary.js (cria sumários por navegador - caso ocorra problemas no Github Actions)
├── .gitignore
├── cypress.config.js (configurações do Cypress)
├── package.json (dependências e scripts disponíveis para execução do projeto)
├── README.md
```

## Cenários de teste

1. Teste para a query user do [GraphqlZero](https://graphqlzero.almansi.me/#example-top)
2. Testes E2E na página da [Wikipedia](https://www.wikipedia.org/)
   2.1 Verificação da página principal
   2.2 Realizar uma busca e verificação pelo termo "Brasil"

## Executando os testes

1. Para rodar `TODOS` em modo `headless` os testes, basta executar o seguinte comando:

   ```sh
   $ npm run test
   ```

2. Para rodar em modo `interativo` os testes, basta executar o seguinte comando:

   ```sh
   $ npm run cy:open
   ```

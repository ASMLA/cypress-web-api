# Desafio Quality Assurance - WEB (Wikipedia) + API (GraphqlZero)
 
Repositório criado para o desafio de automação da empresa Winnin

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
├── cypress
│   ├── e2e (cenários web)
│   │   ├── wikipedia
│   |   │   ├── home.cy.js
│   ├── fixture (massa para stubs, spies, schemas)
│   │   ├── userSchema.json
│   ├── pages (mapeamento de elementos de página)
│   │   ├── home-page.js
│   │   ├── article-page.js
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

## Entendimento sobre o GitHubActions:

O arquivo *main.yml* descreve um conjunto de tarefas que são executadas automaticamente toda vez que alguém envia novas alterações no código (faz um "push") para a branch principal ("main") do projeto, abre um pedido de mudança (pull request) para essa branch, ou aciona manualmente o processo.

1. *Quando o código é atualizado ou revisado*, esse "fluxo de trabalho" é iniciado.  
2. Ele *baixa o código mais recente* do repositório (como se fosse fazer o download para o computador dele).  
3. Em seguida, ele *instala o navegador Google Chrome* para fazer testes automatizados.  
4. Com o Chrome pronto, *roda testes automáticos* do site ou aplicativo para verificar se tudo está funcionando corretamente.  
5. Depois de executar os testes, ele *gera relatórios* mostrando o que deu certo, o que deu errado e tira "fotos" da tela (snapshots) para comparar se a aparência do site está igual ao esperado.  
6. Por fim, esses relatórios e imagens são *guardados em arquivos* que podem ser consultados mais tarde por qualquer pessoa da equipe.

Resumindo: esse fluxo garante que sempre que houver mudanças no código, testes sejam realizados automaticamente e as informações sobre o resultado desses testes fiquem disponíveis para análise. Isso ajuda a encontrar problemas cedo e manter a qualidade do projeto.

const Ajv = require('ajv');
const ajv = new Ajv();
const userSchema = require('../fixtures/userSchema.json');

Cypress.Commands.add('getUserById', (id) => {
    // Define a query GraphQL
      const query = `
        query {
          user(id: ${id}) {
            id
            username
            email
            address {
              geo {
                lat
                lng
              }
            }
          }
        }
      `;
  
      // Faz a requisição GraphQL
      cy.request({
        method: 'POST',
        url: 'https://graphqlzero.almansi.me/api',
        body: {
          query: query,
          variables: {}
        }
      }).then((response) => {
        // Valida o status
        expect(response.status).to.eq(200);

        // Validação do schema usando AJV
        const validate = ajv.compile(userSchema);
        const valid = validate(response.body);

        if (!valid) {
        // Caso não seja válido, exibe os erros do schema
        console.error(validate.errors);
        }
        
        expect(valid, 'Validação do schema').to.be.true;

        // Você ainda pode manter as validações adicionais, se desejar
        const user = response.body.data.user;
        expect(user.id).to.eq(String(id));
      });
})
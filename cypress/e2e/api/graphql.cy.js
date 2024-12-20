/// <reference types="cypress" />


context('Teste de Consulta GraphQLZero', () => {
    it('Deve retornar os dados do usuário com id = 1', () => {
      cy.getUserById(1);
    });
  });
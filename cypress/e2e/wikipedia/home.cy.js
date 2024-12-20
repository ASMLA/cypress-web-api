/// <reference types="cypress" />

context('Testes E2E na página da Wikipedia', () => {
    beforeEach(() => {
      cy.goToWikipediaWebsite();
    })

    describe('Verificação da página principal', () => {
        it('Validar elementos de página principal', () => {
            cy.checkMainElementsOfTheMainPage();
        })
    })


    describe('Realizar uma busca e verificação pelo termo "Brasil"', () => {
        it('Realizar busca pelo termo "Brasil"', () => {
            cy.searchByTerm("Brasil");
        })

        it('Validar elementos de página "Brasil"', () => {
            cy.checkElementsOfTheTermPage("Brasil")
        })
    })
})
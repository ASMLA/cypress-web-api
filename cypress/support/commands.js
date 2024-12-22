import homePage from "../pages/home-page";
import articlePage from "../pages/article-page";

Cypress.Commands.add('goToWikipediaWebsite', () => {
    cy.clearCookies();
    cy.intercept('GET', '/portal/wikipedia.org/**').as('getHomeInfos');
    cy.viewport(1280, 720);
    cy.visit('https://www.wikipedia.org');
    
    // Verifica se o popup de doação aparece
    cy.get('body').then(($body) => {
        // Verifica se o popup de doação está presente no DOM
        if ($body.find('.fundraising-popup').length > 0) {
        cy.log('Popup de doação encontrado, fechando...');
        // Clica no botão de fechar do popup
        cy.get('.fundraising-popup .close-button')
            .click()
            .should('not.exist'); // Verifica que o popup foi fechado
        } else {
        cy.log('Nenhum popup de doação encontrado.');
        }
    });
    
    cy.wait('@getHomeInfos').its('response.statusCode').should('eq', 200);
    cy.compareSnapshot("home", {failSilently: true, errorThreshold: 1});
})


Cypress.Commands.add('checkMainElementsOfTheMainPage', () => {
    homePage.checkThePageTitle();
    homePage.checkTheLogo();
    homePage.checkLinkPortugueseArticles();
    homePage.checkLinkRussianArticles();
    homePage.checkLinkGermanArticles();
    homePage.checkLinkSpanishArticles();
    homePage.checkLinkItalianArticles();
    homePage.checkLinkEnglishArticles();
    homePage.checkLinkJapaneseArticles();
    homePage.checkLinkFrenchArticles();
    homePage.checkLinkChineseArticles();
    homePage.checkLinkPersianArticles();
    homePage.checkInputSearch();
    homePage.checkButtonSearch();
    homePage.checkButtonReadWikipediaInYourLanguage();
})


Cypress.Commands.add('searchByTerm', (term) => {
    if (typeof term !== 'string') {
        throw new TypeError('The parameter used is not of type string.')
    }
    cy.checkMainElementsOfTheMainPage();
    homePage.performSearchByTerm(term);
})

Cypress.Commands.add('checkElementsOfTheTermPage', (term) => {
    cy.searchByTerm(term);
    articlePage.checkLogoWikipedia();
    articlePage.checkTitleBrazil(term);
    articlePage.checkTextNote(term);
    articlePage.checkTableHeaderBold();
    articlePage.checkTableHeaderSubtitle(term);
    articlePage.checkImgFlagBrazil();
    articlePage.checkImgCoatOfArms();
    articlePage.checkImgMapMundi();
    articlePage.checkPage();
})
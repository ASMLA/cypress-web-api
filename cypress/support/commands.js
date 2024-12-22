import homePage from "../pages/home-page";
import articlePage from "../pages/article-page";

Cypress.Commands.add('goToWikipediaWebsite', () => {
    cy.clearCookies();
    cy.intercept('GET', '/portal/wikipedia.org/**').as('getHomeInfos');
    cy.visit('https://www.wikipedia.org');
    cy.wait('@getHomeInfos').its('response.statusCode').should('eq', 200);
    // Intercepta a requisição do popup
    cy.intercept('GET', '**/popup-endpoint').as('popupRequest');

    // Interage com o botão ou ação que dispara o popup
    cy.get('.trigger-button').click();

    // Aguarda a requisição e interage com o popup
    cy.wait('@popupRequest');
    cy.get('.popup-selector', { timeout: 5000 })
    .should('exist')
    .then(() => {
        cy.get('.popup-close-button').click();
    })
    .catch(() => {
        cy.log('Popup não apareceu.');
    });
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
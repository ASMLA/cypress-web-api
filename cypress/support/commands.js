import homePage from "../pages/home-page";
import articlePage from "../pages/article-page";

Cypress.Commands.add('goToWikipediaWebsite', () => {
    cy.clearCookies();
    cy.intercept('GET', '/portal/wikipedia.org/**').as('getHomeInfos');
    cy.visit('https://www.wikipedia.org');
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
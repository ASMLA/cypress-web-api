/// <reference types="cypress" />

class HomePage {
    elements = {
        titlePage: '.central-textlogo',
        centralFeatureLogo: 'img[class*=central-featured-logo]',
        linkPortugueseArticles: '#js-link-box-pt',
        linkRussianArticles: '#js-link-box-ru',
        linkGermanArticles: '#js-link-box-de',
        linkSpanishArticles: '#js-link-box-es',
        linkItalianArticles: '#js-link-box-it',
        linkEnglishArticles: '#js-link-box-en',
        linkJapaneseArticles: '#js-link-box-ja',
        linkFrenchArticles: '#js-link-box-fr',
        linkChineseArticles: '#js-link-box-zh',
        linkPersianArticles: '#js-link-box-fa',
        inputSearch: '#searchInput',
        buttonSearch: '.pure-button',
        buttonReadWikipediaInYourLanguage: '#js-lang-list-button',
        divListLanguages: '#js-lang-lists'
    }

    checkThePageTitle(){
        cy.wait('@loadRequest');
        cy.get(this.elements.titlePage).should('be.visible').compareSnapshot("title", {errorThreshold: 1});
        cy.contains('Wikipedia A enciclopédia livre');
        return this;
    }

    checkTheLogo(){
        cy.get(this.elements.centralFeatureLogo).should('be.visible').compareSnapshot("logo", {errorThreshold: 1});
        return this;
    }

    checkLinkPortugueseArticles() {
        cy.get(this.elements.linkPortugueseArticles).should('be.visible').compareSnapshot("link-pt", {errorThreshold: 1});
        cy.contains('Português');
        return this;
    }

    checkLinkRussianArticles() {
        cy.get(this.elements.linkRussianArticles).should('be.visible').compareSnapshot("link-ru", {errorThreshold: 1});
        cy.contains('Русский');
        return this;
    }

    checkLinkGermanArticles() {
        cy.get(this.elements.linkGermanArticles).should('be.visible').compareSnapshot("link-ge", {errorThreshold: 1});
        cy.contains('Deutsch');
        return this;
    }

    checkLinkSpanishArticles() {
        cy.get(this.elements.linkSpanishArticles).should('be.visible').compareSnapshot("link-es", {errorThreshold: 1});
        cy.contains('Español');
        return this;
    }

    checkLinkItalianArticles() {
        cy.get(this.elements.linkItalianArticles).should('be.visible').compareSnapshot("link-it", {errorThreshold: 1});
        cy.contains('Italiano');
        return this;
    }

    checkLinkEnglishArticles() {
        cy.get(this.elements.linkEnglishArticles).should('be.visible').compareSnapshot("link-en", {errorThreshold: 1});
        cy.contains('English');
        return this;
    }

    checkLinkJapaneseArticles() {
        cy.get(this.elements.linkJapaneseArticles).should('be.visible').compareSnapshot("link-jp", {errorThreshold: 1});
        cy.contains('日本語');
        return this;
    }

    checkLinkFrenchArticles() {
        cy.get(this.elements.linkFrenchArticles).should('be.visible').compareSnapshot("link-fr", {errorThreshold: 1});
        cy.contains('Français');
        return this;
    }

    checkLinkChineseArticles() {
        cy.get(this.elements.linkChineseArticles).should('be.visible').compareSnapshot("link-cn", {errorThreshold: 1});
        cy.contains('中文');
        return this;
    }

    checkLinkPersianArticles() {
        cy.get(this.elements.linkPersianArticles).should('be.visible').compareSnapshot("link-pe", {errorThreshold: 1});
        cy.contains('فارسی');
        return this;
    }

    checkInputSearch() {
        cy.get(this.elements.inputSearch).should('be.visible').compareSnapshot("input-search", {errorThreshold: 1});
        return this;
    }

    checkButtonSearch() {
        cy.get(this.elements.buttonSearch).should('be.visible').compareSnapshot("button-search", {errorThreshold: 1});
        return this;
    }

    checkButtonReadWikipediaInYourLanguage() {
        cy.get(this.elements.buttonReadWikipediaInYourLanguage).should('be.visible').compareSnapshot("button-list-lang", {errorThreshold: 1});
        cy.contains('Ler a Wikipédia na sua língua');
        return this;
    }

    performSearchByTerm(term){
        cy.get(this.elements.inputSearch).type(term);
        cy.get(this.elements.buttonSearch).click();
    }

    showListOfLanguages() {
        cy.get(this.elements.divListLanguages).should('be.visible').compareSnapshot("show-all-list-lang", {errorThreshold: 1});
        return this;
    }
}

export default new HomePage();
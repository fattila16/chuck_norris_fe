describe('General features', () => {
    it('Loads the page without error', () => {
        cy.visit('localhost:3000');
    });

    it('Navigates to the Categories page Categories Nagivation Item if clicked', () => {
        cy.visit('localhost:3000');
        cy.get('a[href="/categories"]').first().click();
        cy.url().should('eq', 'http://localhost:3000/categories');
    });

    it('Navigates to the Search page if Search Nagivation Item is clicked', () => {
        cy.visit('localhost:3000');
        cy.get('a[href="/search"]').first().click();
        cy.url().should('eq', 'http://localhost:3000/search');
    });

    it('Navigates to the Home page if Banner is clicked', () => {
        cy.visit('localhost:3000');
        cy.get('img[alt="chuck_banner"]').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('Should switch from LTR to RTL if the Toggle is toggled', () => {
        cy.visit('localhost:3000');
        cy.get('label[for="switch"]').first().click();
        cy.get('body').invoke('attr', 'dir').should('eq', 'rtl');
    });
});

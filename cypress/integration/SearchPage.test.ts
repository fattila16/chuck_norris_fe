describe('Search Page features', () => {
    it('Loads the page without error', () => {
        cy.visit('localhost:3000/categories');
        cy.get('h2').should(($h2) => {
            const text = $h2.text();
            expect(text.length).to.be.greaterThan(0);
        });
    });

    it('Returns results for a search query', () => {
        cy.visit('localhost:3000/search');
        cy.get('input[type="text"]').type('Charlie');
        cy.get('*[class^="Card"]').should('have.length.greaterThan', 3);
    });
});

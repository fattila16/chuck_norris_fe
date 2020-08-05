describe('Categories Page features', () => {
    it('Loads the page without error', () => {
        cy.visit('localhost:3000/categories');
        cy.get('h2').should(($h2) => {
            const text = $h2.text();
            expect(text.length).to.be.greaterThan(0);
        });
    });

    it('Adds a new URL param to the URL if a category is clicked', () => {
        cy.visit('localhost:3000/categories');
        cy.get('button[id="animal"]').click();
        cy.url().should('eq', 'http://localhost:3000/categories?category=animal');
    });

    it('Display a category related random fact, if category is choosen', () => {
        cy.visit('localhost:3000/categories');
        cy.get('button[id="fashion"]').click();
        cy.contains('button', 'Another one').click();
        cy.get('h2').contains('fashion');
    });
});

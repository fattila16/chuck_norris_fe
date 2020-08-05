describe('Main page features', () => {
    it('Loads the page without error', () => {
        cy.visit('localhost:3000/');
        cy.get('h2').should(($h2) => {
            const text = $h2.text();
            expect(text.length).to.be.greaterThan(0);
        });
    });

    it('Displays a new random fact if Another one button is clicked', () => {
        cy.visit('localhost:3000/');
        const text = cy.get('h2').invoke('text');
        cy.get('button').click();
        const newText = cy.get('h2').invoke('text');

        expect(text).to.not.eql(newText);
    });
});

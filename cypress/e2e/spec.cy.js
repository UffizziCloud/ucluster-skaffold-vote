describe('Should open sign-in page', () => {
    it('Will be redirected to sign-in page when visiting /', () => {
        cy.visit('/');
        cy.get('#a').should('be.visible');
    });
});

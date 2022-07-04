describe('my first test', () => {
    
    it('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','index.html')
    });
    
});

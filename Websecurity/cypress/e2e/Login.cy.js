describe('working with inputs', () => {
    
    before('visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });

    it('should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')
    });
    
    it('should fill the check box', () => {
        cy.get('#user_remember_me').click({ force: true })
    });
});
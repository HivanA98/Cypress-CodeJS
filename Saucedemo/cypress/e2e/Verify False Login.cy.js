/// <reference types="cypress" />

describe('my first test', () => {
    
    it('visit standard_user', () => {
        cy.visit('https://www.saucedemo.com')
        
        cy.fixture("user").then(user => {
            cy.get("#user-name").type(user.username);
            cy.get("#password").type(user.wrongpassword);
             })
    
            cy.get('input#login-button.submit-button.btn_action').click()
            cy.get('.error-message-container').should('be.visible')
        });
    });

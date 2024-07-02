/// <reference types="cypress" />

describe('my first test', () => {
    
    it('visit standard_user', () => {
        cy.visit('https://www.saucedemo.com/')
        
        cy.fixture("user").then(user => {
            cy.get("#user-name").type(user.username);
            cy.get("#password").type(user.password);
             })
    
        cy.get('input#login-button.submit-button.btn_action').click()
        cy.get('button#add-to-cart-sauce-labs-backpack.btn.btn_primary.btn_small.btn_inventory').click()
        cy.get('button#add-to-cart-sauce-labs-bike-light.btn.btn_primary.btn_small.btn_inventory').click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click()
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('a')
        cy.get('#last-name').type('a')
        cy.get('#postal-code').type('a')
        cy.get('#continue').click()
        cy.get('#finish').click()
        });
    });

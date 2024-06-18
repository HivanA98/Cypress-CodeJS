/// <reference types="cypress" />

describe('Technical Test', () => {
    
    
    it('Assignment', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.fixture("user").then(user => {
            cy.get('[minlength="2"]').type(user.Name);

            cy.get('[name="email"]').type(user.Email);

            cy.get('#exampleInputPassword1').type(user.password);

            cy.get('[name="bday"]').type(user.Birthday)
             })

        cy.get('#exampleCheck1').click()

        cy.get('#exampleFormControlSelect1').select('Male')

        cy.get('#inlineRadio1').click()

        cy.get('#inlineRadio3').should('not.be.checked')
        
        cy.get('[type="submit"]').click()

        cy.get('[class="alert alert-success alert-dismissible"]').contains('The Form has been submitted successfully!.')

        });
    });

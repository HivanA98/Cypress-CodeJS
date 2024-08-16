/// <reference types="cypress" />
import steps from 'step.js'

describe('Technical Test', () => {
    
    
    it('Assignment', () => {
        cy.visit('/angularpractice/')

        cy.fixture("user").then(user => {
            cy.get(steps.InputName).type(user.Name);

            cy.get(steps.InputEmail).type(user.Email);

            cy.get(steps.InputPassword).type(user.password);

            cy.get(steps.InputBirthday).type(user.Birthday)
             })

        cy.get('#exampleCheck1').click()

        cy.get('#exampleFormControlSelect1').select('Male')

        cy.get('#inlineRadio1').click()

        cy.get('#inlineRadio3').should('not.be.checked')
        
        cy.get('[type="submit"]').click()

        cy.get('[class="alert alert-success alert-dismissible"]').contains('The Form has been submitted successfully!.')

        });
    });

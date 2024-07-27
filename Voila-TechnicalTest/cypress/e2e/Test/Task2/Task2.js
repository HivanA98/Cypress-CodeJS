/// <reference types="cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("The user visit the website", () => {
    cy.visit('https://voila.id')
    cy.get("._3syuln7").click()
    cy.get("._17zx15te8").should('have.class', '_17zx15te8')
})

When ("The user input email", () => {
    cy.get("input[name='identifier']").type('bapypelo@citmo.net')
    
})

When ("The user input wrong password", () => {
    cy.get("input[name='password']").type('123456')
    cy.get('.x63gt40').should('be.visible').and('not.be.disabled');
    cy.get('.x63gt40').click()
})

Then("The user see error message", () => {
    cy.contains('Your account ID or password is incorrect. Please try again.').should('exist')
})


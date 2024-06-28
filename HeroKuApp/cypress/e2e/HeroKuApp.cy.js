/// <reference types="cypress" />

describe('HeroKuApp Test', () => {

  it('Normal Login', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')
      cy.get('#btn-make-appointment').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
  });

  it('False Login', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')
      cy.get('#btn-make-appointment').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('wrong')
      cy.get('#btn-login').click()
      cy.get('.lead.text-danger')
  });
    
  it('E2E basic', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com')
      cy.get('#btn-make-appointment').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
      cy.get('#chk_hospotal_readmission').click()
      cy.get('#txt_comment').click().type('Ini comment')
      cy.get('#txt_visit_date').type('22/10/2021')
      cy.get('#btn-book-appointment').click()
  });    
    
  it('E2E Variation', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com')
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
        cy.get('#txt_comment').type('Ini comment')
        cy.get('#txt_comment').clear()
        cy.get('#txt_comment').type('Ini comment baru')
        cy.get('#txt_visit_date').type('22/10/2021')
        cy.get('#btn-book-appointment').click()

  });


  });
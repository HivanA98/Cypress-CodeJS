/// <reference types="cypress" />

describe('Test February', () => {

  it('Just Login', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com')
      cy.get('#btn-make-appointment').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
  });
    
  it('visit the website', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com')
      cy.get('#btn-make-appointment').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
      //cy.get('#combo_facility').click()
      cy.get('#chk_hospotal_readmission').click()
      cy.get('#txt_comment').click().type('Ini comment')
      cy.get('#txt_visit_date').type('22/10/2021')
      //cy.get('#txt_comment').click().type('Ini comment')
      cy.get('#btn-book-appointment').click()
      
    
    });
  });
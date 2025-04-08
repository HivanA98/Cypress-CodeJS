/// <reference types="cypress" />

///Login
const website = "https://uat.greenhoopapp.com/"
const InpUsername = '[id=":r0:"]'
const InpPassword = '[id=":r1:"]'
const BtnLogin = '[id=":r2:"]'

class Main {
    static URL(){
        cy.visit(website)
    }
    
   static astdAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.astd)
        cy.get(InpUsername).should('have.value', account.astd)
        cy.get(InpPassword).type(account.astdP)
        cy.get(InpPassword).should('have.value', account.astdP)
        })}

   static collectorAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.collectoradmin)
        cy.get(InpUsername).should('have.value', account.collectoradmin)
        cy.get(InpPassword).type(account.collectoradminP)
        cy.get(InpPassword).should('have.value', account.collectoradminP)
        })}
      
   static manufaturAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.manufacturadmin)
        cy.get(InpUsername).should('have.value', account.manufacturadmin)
        cy.get(InpPassword).type(account.manufacturadminP)
        cy.get(InpPassword).should('have.value', account.manufacturadminP)
        })}
        
   static logisticAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.logisticadmin)
        cy.get(InpUsername).should('have.value', account.logisticadmin)
        cy.get(InpPassword).type(account.logisticadminP)
        cy.get(InpPassword).should('have.value', account.logisticadminP)
        })}

   static customerAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.customeradmin)
        cy.get(InpUsername).should('have.value', account.customeradmin)
        cy.get(InpPassword).type(account.customeradminP)
        cy.get(InpPassword).should('have.value', account.customeradminP)
        })}

    static Login(){    
    cy.get(BtnLogin).should('be.visible').and('not.be.disabled').click()
        }
    }
export default Main;
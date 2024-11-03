/// <reference types="cypress" />

///Login
const website = "https://uat.greenhoopapp.com/"
const InpUsername = ":r0:"
const InpPassword = "#:r1:"
const BtnLogin = "astd-login-btn"

const 



class Main {
    static URL(){
        cy.visit(website)
    }
    
   static astdaAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.astd)
        cy.get(InpUsername).should('have.value', account.astdP)
        })}

   static collectorAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.collectoradmin)
        cy.get(InpUsername).should('have.value', account.collectoradminP)
        })}
      
   static manufaturAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.manufacturadmin)
        cy.get(InpUsername).should('have.value', account.manufacturadminP)
        })}
        
   static logisticAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.logisticadmin)
        cy.get(InpUsername).should('have.value', account.logisticadminP)
        })}

   static customerAdmin(){    
    cy.fixture("account").then(account => {
        cy.get(InpUsername).type(account.customeradmin)
        cy.get(InpUsername).should('have.value', account.customeradminP)
        })}

    static Login(){    
    cy.get(BtnLogin).should('be.visible').and('not.be.disabled').click()
        }


    }
export default Main;
/// <reference types="cypress" />
const website = "https://www.saucedemo.com/"
const name = "#user-name"
const pass = "#password"
const BtnCart = ".shopping_cart_link"
const BtnLogin = "#login-button"
const BtnFinish = "#finish"
const BtnCheckout = "#checkout"
const PrtBackpack = "#add-to-cart-sauce-labs-backpack"
const PrtBikeLight = "#add-to-cart-sauce-labs-bike-light"
const PrtBoltTShirt = "#add-to-cart-sauce-labs-bolt-t-shirt"
const PrtFleeceJacket = "#add-to-cart-sauce-labs-fleece-jacket"
const PrtOnesie = "#add-to-cart-sauce-labs-onesie"
const FirstName = "#first-name"
var NameFirst = "Ivan"
const LastName = "#last-name"
var NameLast = "A"
const PostalCode = "#postal-code"
var Postal = "20250"
const BtnContinue = "#continue"
const FinishTransaction = "#back-to-products"
const problemUserError = ".error-message-container"
const ErrorWarning = ".error-message-container"


class Main {
    static URL(){
        cy.visit(website)
    }
    
   static NormalUsername(){    
    cy.fixture("user").then(user => {
        cy.get(name).type(user.username)
        cy.get(name).should('have.value', user.username)
        })}

    static LockedUsername(){
        cy.fixture("user").then(user => {
            cy.get(name).type(user.username1)
            cy.get(name).should('have.value', user.username1)
        })}

    static ProblemUsername(){
        cy.fixture("user").then(user => {
            cy.get(name).type(user.username2)
            cy.get(name).should('have.value', user.username2)
        })}

    static PerformanceUsername(){
        cy.fixture("user").then(user => {
            cy.get(name).type(user.username3)
            cy.get(name).should('have.value', user.username3)
        })}

    static errorUsername(){
        cy.fixture("user").then(user => {
            cy.get(name).type(user.username4)
            cy.get(name).should('have.value', user.username4)
        })}

    static VisualUsername(){
        cy.fixture("user").then(user => {
            cy.get(name).type(user.username5)
            cy.get(name).should('have.value', user.username5)
        })}
    
    
    static wrongPassword(){
        cy.fixture("user").then(user => {
        cy.get(pass).type(user.wrongpassword)
        cy.get(pass).should('have.value', user.wrongpassword)
        })}
            
    static Password(){
        cy.fixture("user").then(user => {
            cy.get(pass).type(user.password)
            cy.get(pass).should('have.value', user.password)
        })}
       

    static BtnLogin(){
        cy.get(BtnLogin).not('[disabled]')
        cy.get(BtnLogin).click()
    }


    static WrongCredential(){
        cy.get(ErrorWarning).should('be.visible')
        cy.get(ErrorWarning).should('contain', 'Epic sadface: Username and password do not match any user in this service')
        }

    static LockedUser(){
        cy.get(ErrorWarning).should('be.visible')
        cy.get(ErrorWarning).should('contain', 'Epic sadface: Sorry, this user has been locked out.')
        }

    static addItems(){
        // cy.get().should('be.visible')
        // cy.get().click()
        cy.get(PrtBikeLight).should('be.visible')
        cy.get(PrtBikeLight).click()
        cy.get(PrtBoltTShirt).should('be.visible')
        cy.get(PrtBoltTShirt).click()
        cy.get(PrtFleeceJacket).should('be.visible')
        cy.get(PrtFleeceJacket).click()
        cy.get(PrtOnesie).should('be.visible')
        cy.get(PrtOnesie).click()
    }

    static CartMenu(){
        cy.get(BtnCart).should('be.visible')
        cy.get(BtnCart).click()
        cy.get(BtnCheckout).not('[disabled]')
        cy.get(BtnCheckout).click()
    }

    static AddreasFirstName(){
        cy.get(FirstName).click().should('have.value', '')
        cy.get(FirstName).type(NameFirst)
        cy.get(FirstName).should('have.value', NameFirst)
    }

    static AddreasLastName(){
        cy.get(LastName).click().should('have.value', '')
        cy.get(LastName).type(NameLast)
        cy.get(LastName).should('have.value', NameLast)
    }

    static AddreasPostalCode(){
        cy.get(PostalCode).click().should('have.value', '')
        cy.get(PostalCode).type(Postal)
        cy.get(PostalCode).should('have.value', Postal)
    }

    static Finish(){
        cy.get(BtnContinue).not('[disabled]')
        cy.get(BtnContinue).click()
        cy.get(BtnFinish).not('[disabled]')
        cy.get(BtnFinish).click()
        cy.get(FinishTransaction).should('contain', 'Back Home')
    }

    static errorProblemUser(){
        cy.get(problemUserError).should("contains, 'Error: Last Name is required'")
    }
}


export default Main;
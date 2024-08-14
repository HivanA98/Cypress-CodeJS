/// <reference types="cypress" />

const UsernameLogin = "[class='form-control form-control-email']"
const PasswordLogin = "[name='password']"
const NormalUser = "Ivan"
const NormalPass = "Password!2#"
const UnnormalUser = "N@"
const UnnormalPass = "pwd"
const BtnSignin = "[class='btn btn-block btn-primary']"
const ErrorWarning = '[class="error invalid-feedback"]'

class Login {
    static LoginPage(){
        cy.visit("/account/login")
    }
    static NormalInputUsernameLogin(){
        cy.get(UsernameLogin).type(NormalUser)
        cy.get(UsernameLogin).should('have.value', NormalUser)
    }
    static NormalInputPasswordLogin(){
        cy.get(PasswordLogin).type(NormalPass)
        cy.get(PasswordLogin).should('have.value', NormalPass)
    }
    static BtnLogin(){
        cy.get(BtnSignin).eq(0).should('be.visible')
        cy.get(BtnSignin).eq(0).click()
    }
    static WarningMessage(){
        cy.get(ErrorWarning).should('be.visible')
    }
    static UnNormalInputUsernameLogin(){
        cy.get(UsernameLogin).type(UnnormalUser)
        cy.get(UsernameLogin).should('have.value', UnnormalUser)
    }
    static UnNormalInputPasswordLogin(){
        cy.get(PasswordLogin).type(UnnormalPass)
        cy.get(PasswordLogin).should('have.value', UnnormalPass)
    }
    static NormalLengthValidationUsername(){
        cy.get(UsernameLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(3)
              })
          })
    }
    static NormalWordValidationUsername(){
        cy.get(UsernameLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text).to.match(/^[A-Za-z\s]+$/)
              })
          })
    }
    static NormalLengthValidationPassword(){
        cy.get(PasswordLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(6)
                expect(text.length).to.be.at.most(12)
              })
          })
    }
    static NormalWordValidationPassword(){
        cy.get(PasswordLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text).to.match(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]*$/)
              })
          })
    }
    static UnNormalLengthValidationUsername(){
        cy.get(UsernameLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(1)
                expect(text.length).to.be.at.most(2)
              })
          })
        }
    static UnNormalWordValidationUsername(){
        cy.get(UsernameLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text).to.match(/^(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]*$/)
              })
          })
    }
    static UnNormalLengthValidationPassword(){
        cy.get(PasswordLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(1)
                expect(text.length).to.be.at.most(5)
              })
          })
    }
    static UnNormalWordValidationPassword(){
        cy.get(PasswordLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text).to.match(/^[A-Za-z\s]+$/)
              })
          })
    }
}
export default Login





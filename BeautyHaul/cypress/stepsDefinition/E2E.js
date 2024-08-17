/// <reference types="cypress" />

const UsernameLogin = "[class='form-control form-control-email']"
const PasswordLogin = "[name='password']"
let NormalUser = "cuqalodo@clip.lat"
let NormalPass = "QA!2#4"
const BtnSignin = "[class='btn btn-block btn-primary']"

class E2ESteps {
    static Login(){
        cy.visit("/account/login")
        cy.get(UsernameLogin).type(NormalUser)
        cy.get(UsernameLogin).should('have.value', NormalUser)
        cy.get(PasswordLogin).type(NormalPass)
        cy.get(PasswordLogin).should('have.value', NormalPass)
        cy.get(BtnSignin).eq(0).click()
    }
}
export default E2ESteps
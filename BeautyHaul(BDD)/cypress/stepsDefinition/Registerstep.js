/// <reference types="cypress" />

const FirstName = "[name='fname']"
const LastName = "[name='lname']"
const Email = "[class='form-control form-control-email']"
const Gender = "[name='gender']"
const Password = "[class='form-control form-control-pass']"
const ConfirmPassword = "[class='form-control form-control-passc']"
const Data = "[name='dob_day']"
const Month = "[name='dob_month']"
const Year = "[name='dob_year']"
const NormalFirstName = "Ivan"
const NormalLastName = "Armadi"
const NormalPassword = "Password!2#"
const NormalConfirmPassword = "Password!2#"
const NormalEmail = "hivanrmadi@gmail.com"
const UnNormalFirstName = "I1"
const UnNormalLastName = "V1"
const UnNormalPassword = "aaa"
const UnNormalConfirmPassword = "bbb"

class Register {
    static RegisterPage(){
        cy.visit("/account/register")
    }
    static NormalInputFirstName(){
        cy.get(FirstName).type(NormalFirstName)
        cy.get(FirstName).should('have.value', NormalFirstName)
    }
    static NormalInputLastName(){
        cy.get(LastName).type(NormalLastName)
        cy.get(LastName).should('have.value', NormalLastName)
    }
    static NormalInputEmail(){
        cy.get(Email).type(NormalEmail)
        cy.get(Email).should('have.value', NormalEmail)
    }
    static NormalInputPassword(){
        cy.get(Password).type(NormalPassword)
        cy.get(Password).should('have.value', NormalPassword)
    }
    static NormalInputConfirmPassword(){
        cy.get(ConfirmPassword).type(NormalConfirmPassword)
        cy.get(ConfirmPassword).should('have.value', NormalConfirmPassword)
    }
    static UnNormalInputFirstName(){
        cy.get(FirstName).type(UnNormalFirstName)
        cy.get(FirstName).should('have.value', UnNormalFirstName)
    }
    static UnNormalInputLastName(){
        cy.get(LastName).type(UnNormalLastName)
        cy.get(LastName).should('have.value', UnNormalLastName)
    }
    static UnNormalInputPassword(){
        cy.get(Password).type(UnNormalPassword)
        cy.get(Password).should('have.value', UnNormalPassword)
    }
    static UnNormalInputConfirmPassword(){
        cy.get(ConfirmPassword).type(UnNormalConfirmPassword)
        cy.get(ConfirmPassword).should('have.value', UnNormalConfirmPassword)
    }
    static SelectGender(){
        cy.get(Gender).select('Male')
        cy.get(Gender).should('have.value', "Male")
    }
    static SelectDate(){
        cy.get(Data).select('22')
        cy.get(Data).should('have.value', "22")
    }
    static SelectMonth(){
        cy.get(Month).select('10')
        cy.get(Month).should('have.value', "10")
    }
    static SelectYear(){
        cy.get(Year).select('1997')
        cy.get(Year).should('have.value', "1997")
    }
    static ValidationFirstNamePositive(){
        cy.get(FirstName)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(3)
                expect(text).to.match(/^[A-Za-z\s]+$/)
              })
          })
    }
    static WordValidationLastnamePositive(){
        cy.get(LastName)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(3)
                expect(text).to.match(/^[A-Za-z\s]+$/)
              })
          })
    }
    static ValidationFirstNameNegative(){
        cy.get(FirstName)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(1)
                expect(text.length).to.be.at.most(2)
                expect(text).to.match(/^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]*$/)})
          })
    }
    static WordValidationLastnameNegative(){
        cy.get(LastName)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(1)
                expect(text.length).to.be.at.most(2)
                expect(text).to.match(/^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]*$/)
                })
          }) 
    }
    static NormalValidationPassword(){
        cy.get(Password)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(6)
                expect(text.length).to.be.at.most(12)
                expect(text).to.match(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]*$/)
              })
          })
    }
    static UnNormalValidationPassword(){
        cy.get(Password)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(1)
                expect(text.length).to.be.at.most(5)
                expect(text).to.match(/^[A-Za-z\s]+$/)
              })
          })
    }
    static NormalValidationConfirmPassword(){
        cy.get(ConfirmPassword)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(6)
                expect(text.length).to.be.at.most(12)
                expect(text).to.match(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]*$/)
              })
          })
    }
    static UnNormalValidationConfirmPassword(){
        cy.get(ConfirmPassword)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).to.be.at.least(1)
                expect(text.length).to.be.at.most(5)
                expect(text).to.match(/^[A-Za-z\s]+$/)
              })
          })
    }
}
export default Register
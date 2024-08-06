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

class Register {
    static RegisterPage(){
        cy.visit("/account/register")
    }
    static NormalInputFirstName(){
        cy.get(FirstName).type("Ivan")
        cy.get(FirstName).should('have.value', "Ivan")
    }
    static NormalInputLastName(){
        cy.get(LastName).type("Armadi")
        cy.get(LastName).should('have.value', "Armadi")
    }
    static NormalInputEmail(){
        cy.get(Email).type("hivanarmadi@gmail.com")
        cy.get(Email).should('have.value', "hivanarmadi@gmail.com")
    }
    static NormalInputPassword(){
        cy.get(Password).type("Password!2#4")
        cy.get(Password).should('have.value', "Password!2#4")
    }
    static NormalInputConfirmPassword(){
        cy.get(ConfirmPassword).type("Password!2#4")
        cy.get(ConfirmPassword).should('have.value', "Password!2#4")
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
}
export default Register; 
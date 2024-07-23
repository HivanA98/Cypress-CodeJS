/// <reference types="cypress" />

const website = "https://katalon-demo-cura.herokuapp.com"
const BtnAppointment = "#btn-make-appointment"
const Username = "#txt-username"
const Password = "#txt-password"
const BtnLogin = "#btn-login"
const WrongCredential = ".lead.text-danger"
const Comment = "#txt_comment"
const Date = "#txt_visit_date"
const BtnBook = "#btn-book-appointment"
const readmission = "#chk_hospotal_readmission"
const CmbFclty = "#combo_facility"


class Main {
    static URL(){
        cy.visit(website)
        cy.get(BtnAppointment).not('[disabled]')
        cy.get(BtnAppointment).click()
    }

    static Login(){
        cy.get(Username).type('John Doe')
        cy.get(Username).should('have.value', 'John Doe')
        cy.get(Password).type('ThisIsNotAPassword')
        cy.get(Password).should('have.value', 'ThisIsNotAPassword')
        cy.get(BtnLogin).not('[disabled]')
        cy.get(BtnLogin).click()
    }

    static WrongLogin(){
        cy.get(Username).type('John Doe')
        cy.get(Username).should('have.value', 'John Doe')
        cy.get(Password).type('adsadsad')
        cy.get(Password).should('have.value', 'adsadsad')
        cy.get(BtnLogin).not('[disabled]')
        cy.get(BtnLogin).click()
    }
    static Warning(){
        cy.get(WrongCredential).should('exist')
    }

    static Comment(){
        cy.get(Comment).should('have.value', '').type('komentar dengan baik')
        cy.get(Comment).should('have.value', 'komentar dengan baik')
    }

    static DateBooking(){
        cy.get(Date).type('22/10/2026')
        cy.get(Date).should('have.value', '22/10/2026')
    }

    static Readmison(){
        cy.get(readmission).click()
    }

    static readmission(){
        cy.get(readmission).not('[disabled]')
        cy.get(readmission).click()
    }

    static BookAppointment(){
        cy.get(BtnBook).not('[disabled]')
        cy.get(BtnBook).click()
    }

    static ComboFacility(){
        cy.get(CmbFclty).trigger()
        cy.get("[value='Tokyo CURA Healthcare Center'}").click()
    }
}

export default Main;
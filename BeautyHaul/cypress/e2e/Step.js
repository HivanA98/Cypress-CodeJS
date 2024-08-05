/// <reference types="cypress" />

const website = "https://www.beautyhaul.com/"
const UsernameLogin = "[class='form-control form-control-email']"
const PasswordLogin = "[name='password']"
const NormalUser = "In"
const UnnormalUser = "Na"
const NormalPass = "Password!2#"
const UnnormalPass = "pwd"

class Step {
    static URL(){
        cy.visit(website)
    }
    static RegisterPage(){
        cy.visit("/account/register")
    }
    static LoginPage(){
        cy.visit("/account/login")
    }
    static InputUsernameLogin(){
        cy.get(UsernameLogin).type(NormalUser)
        cy.get(UsernameLogin).should('have.value', NormalUser)
    }
    static InputPasswordLogin(){
        cy.get(PasswordLogin).type(NormalPass)
        cy.get(PasswordLogin).should('have.value', NormalPass)
    }
    static LengthValidationUsername(){
        cy.get(UsernameLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).not.to.be.at.least(3); // Verifikasi panjang teks minimal 3 karakter
              });
          });
        }
    static WordValidationUsername(){
        cy.get(UsernameLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text).to.match(/^[A-Za-z\s]+$/); // Verifikasi tidak ada angka atau karakter unik
              });
          });
    }
    static LengthValidationPassword(){
        cy.get(PasswordLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text.length).not.to.be.at.least(6) // Verifikasi panjang teks minimal 3 karakter
                expect(text.length).not.to.be.at.most(12)
              })
          })
    }
    static WordValidationPassword(){
        cy.get(PasswordLogin)
        .each(($el) => {
            cy.wrap($el)
              .invoke('val')
              .then(text => {
                expect(text).to.match(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{3,}$/)
              })
          })
    }

    static InputFirstnameRegister(){
        cy.get(UsernameLogin).type(NormalUser)
        cy.get(UsernameLogin).should('have.value', NormalUser)
    }
    static InputLastnameRegister(){
        cy.get(UsernameLogin).type(NormalUser)
        cy.get(UsernameLogin).should('have.value', NormalUser)
    }
    static InputEmailRegister(){
        cy.get(UsernameLogin).type(NormalUser)
        cy.get(UsernameLogin).should('have.value', NormalUser)
    }

}
export default Step;




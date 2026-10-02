import { loginPage, appointmentPage } from '../pages'

/**
 * Login dengan akun demo lalu simpan session (cookie PHPSESSID),
 * sehingga test appointment tidak perlu login lewat UI berulang kali.
 */
Cypress.Commands.add('login', () => {
  cy.fixture('users').then(({ valid }) => {
    cy.session(['cura', valid.username], () => {
      loginPage.visit().login(valid.username, valid.password)
      appointmentPage.shouldBeDisplayed()
    })
  })
})

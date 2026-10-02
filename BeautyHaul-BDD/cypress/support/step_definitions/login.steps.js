import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage } from '../../pages'

Given('I am on the login page', () => {
  loginPage.visit()
})

Given('the login API is stubbed with status {int}', (statusCode) => {
  loginPage.stubLoginApi({ statusCode, body: {} })
})

When('I submit the login form', () => {
  loginPage.submit()
})

When('I log in with email {string} and password {string}', (email, password) => {
  loginPage.login(email, password)
})

Then('no login request should be sent', () => {
  cy.get('@loginRequest.all').should('have.length', 0)
})

Then('the login request should contain email {string}', (email) => {
  cy.wait('@loginRequest').its('request.body.email').should('eq', email)
})

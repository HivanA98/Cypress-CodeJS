import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage, inventoryPage, header } from '../../pages'
import users from '../../fixtures/users.json'

Given('I am on the login page', () => {
  loginPage.visit()
})

Given('I am logged in as the {string} user', (userKey) => {
  cy.loginAs(userKey)
})

When('I log in as the {string} user', (userKey) => {
  const { username, password } = users[userKey]
  loginPage.login(username, password)
})

When('I log in with username {string} and password {string}', (username, password) => {
  loginPage.login(username, password)
})

When('I log out', () => {
  header.logout()
})

Then('I should see the products page', () => {
  inventoryPage.shouldBeDisplayed()
})

Then('I should see the login error {string}', (message) => {
  loginPage.shouldShowError(message)
})

Then('I should be on the login page', () => {
  cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
  loginPage.loginButton.should('be.visible')
})

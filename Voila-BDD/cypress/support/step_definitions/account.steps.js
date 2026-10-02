import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { loginPage, profilePage } from '../../pages'

Given('I am on the sign in page', () => {
  loginPage.visit()
})

Given('I am signed in with the test account', () => {
  cy.loginWithTestAccount()
})

When('I sign in with the test account', () => {
  cy.env(['VOILA_EMAIL', 'VOILA_PASSWORD']).then(({ VOILA_EMAIL, VOILA_PASSWORD }) => {
    loginPage.login(VOILA_EMAIL, VOILA_PASSWORD)
  })
})

When('I sign in with the test account email and password {string}', (password) => {
  cy.env(['VOILA_EMAIL']).then(({ VOILA_EMAIL }) => {
    loginPage.login(VOILA_EMAIL, password)
  })
})

When('I open my profile', () => {
  profilePage.open()
})

When('I change my first name to {string}', (firstName) => {
  profilePage.changeFirstName(firstName)
})

Then('I should be signed in', () => {
  loginPage.shouldBeLoggedIn()
})

Then('I should see the wrong credential error', () => {
  loginPage.shouldShowWrongCredentialError()
})

Then('my first name should be {string}', (firstName) => {
  profilePage.firstNameInput.should('have.value', firstName)
})

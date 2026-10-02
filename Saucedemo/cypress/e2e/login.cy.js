import { loginPage, inventoryPage, header } from '../pages'
import users from '../fixtures/users.json'
import messages from '../fixtures/messages.json'

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  context('Positive', () => {
    it('logs in successfully as standard_user', () => {
      loginPage.login(users.standard.username, users.standard.password)
      inventoryPage.shouldBeDisplayed()
    })

    it('logs out and returns to the login page', () => {
      loginPage.login(users.standard.username, users.standard.password)
      header.logout()

      cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
      loginPage.loginButton.should('be.visible')
    })
  })

  context('Negative', () => {
    it('shows an error for locked_out_user', () => {
      loginPage
        .login(users.locked.username, users.locked.password)
        .shouldShowError(messages.login.lockedOut)
    })

    it('shows an error for a wrong password', () => {
      loginPage
        .login(users.invalid.username, users.invalid.password)
        .shouldShowError(messages.login.invalidCredential)
    })

    it('requires a username', () => {
      loginPage.login('', users.standard.password).shouldShowError(messages.login.usernameRequired)
    })

    it('requires a password', () => {
      loginPage.login(users.standard.username, '').shouldShowError(messages.login.passwordRequired)
    })

    it('blocks the inventory page for anonymous users', () => {
      cy.visit('/inventory.html', { failOnStatusCode: false })
      loginPage.shouldShowError(messages.login.notLoggedIn)
    })
  })
})

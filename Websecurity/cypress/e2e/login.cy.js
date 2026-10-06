import { loginPage, accountSummaryPage, navbar } from '../pages'
import users from '../fixtures/users.json'

describe('Login', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('logs in with valid credentials', () => {
    loginPage.login(users.valid.username, users.valid.password, { rememberMe: true })

    // Setelah login, aplikasi mengarah ke halaman sertifikat; buka summary secara langsung.
    accountSummaryPage.visit().shouldBeDisplayed()
  })

  it('rejects an invalid password', () => {
    loginPage.login(users.invalid.username, users.invalid.password).shouldShowError()
    cy.location('search').should('include', 'login_error=true')
  })

  it('logs out and returns to the homepage', () => {
    loginPage.login(users.valid.username, users.valid.password)
    accountSummaryPage.visit()

    navbar.logout()
    cy.location('pathname').should('eq', '/index.html')
    cy.get('#signin_button').should('be.visible')
  })

  it('redirects anonymous users from the bank pages to login', () => {
    cy.visit('/bank/account-summary.html')
    cy.location('pathname').should('eq', '/login.html')
  })
})

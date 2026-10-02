import loginPage from '../pages/LoginPage'

describe('Login page', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('displays the login form', () => {
    loginPage.emailInput.should('be.visible')
    loginPage.passwordInput.should('be.visible')
    loginPage.loginButton.should('be.enabled').and('have.text', 'Login')
  })

  it('offers Facebook and Google sign in', () => {
    loginPage.socialButton('Facebook').should('be.visible')
    loginPage.socialButton('Google').should('be.visible')
  })

  it('keeps the user on the login page when the form is empty', () => {
    loginPage.loginButton.click()

    cy.location('pathname').should('match', /\/login$/)
    loginPage.emailInput.should('have.class', 'ng-invalid')
    loginPage.passwordInput.should('have.class', 'ng-invalid')
  })

  it('marks an invalid email address', () => {
    loginPage.emailInput.type('not-an-email', { force: true }).blur({ force: true })
    loginPage.emailInput.should('have.class', 'ng-invalid')
  })

  it('opens the registration page from "Sign up"', () => {
    loginPage.signUpButton.click()
    cy.location('pathname').should('include', 'registration')
  })
})

describe('Login with a test account', () => {
  // Kredensial dibaca dari cypress.env.json (lihat cypress.env.example.json).
  // Jika belum diisi, test ini otomatis di-skip.
  beforeEach(function () {
    cy.env(['PAYEVER_EMAIL', 'PAYEVER_PASSWORD']).then((creds) => {
      if (!creds.PAYEVER_EMAIL || !creds.PAYEVER_PASSWORD) this.skip()
      cy.wrap(creds).as('creds')
    })
  })

  it('logs in and leaves the login page', function () {
    loginPage.visit().login(this.creds.PAYEVER_EMAIL, this.creds.PAYEVER_PASSWORD)
    cy.location('pathname', { timeout: 30000 }).should('not.match', /\/login$/)
  })
})

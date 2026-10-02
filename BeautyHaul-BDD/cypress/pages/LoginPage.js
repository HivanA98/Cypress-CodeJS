import BasePage from './BasePage'

class LoginPage extends BasePage {
  path = '/account/login'
  formSelector = '#loginForm'
  apiEndpoint = '/ajax/account/login'

  get emailInput() {
    return this.field('email')
  }

  get passwordInput() {
    return this.field('password')
  }

  get forgotPasswordLink() {
    return cy.contains('a', 'Lupa password?')
  }

  get registerLink() {
    return cy.contains('a', 'Daftar sekarang yuk!')
  }

  fillEmail(email) {
    this.emailInput.clear().type(email)
    return this
  }

  fillPassword(password) {
    this.passwordInput.clear().type(password, { log: false })
    return this
  }

  login(email, password) {
    if (email) this.fillEmail(email)
    if (password) this.fillPassword(password)
    return this.submit()
  }

  /**
   * Stub endpoint login agar test tidak pernah mengenai server asli (yang dilindungi reCAPTCHA).
   * @param {object} response - opsi response cy.intercept, mis. `{ statusCode: 401 }`
   */
  stubLoginApi(response) {
    cy.intercept('POST', this.apiEndpoint, response).as('loginRequest')
    return this
  }
}

export default new LoginPage()

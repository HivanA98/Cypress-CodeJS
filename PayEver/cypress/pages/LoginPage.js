class LoginPage {
  get emailInput() {
    return cy.get('input[type="email"]')
  }

  get passwordInput() {
    return cy.get('input[type="password"]')
  }

  get loginButton() {
    return cy.get('button.login-button[type="submit"]')
  }

  get signUpButton() {
    return cy.contains('button.login-button', 'Sign up')
  }

  get languageButton() {
    return cy.get('.locales-switcher-button')
  }

  socialButton(provider) {
    return cy.contains('button.social-button', `Sign in with ${provider}`)
  }

  visit() {
    cy.visit('/login')
    this.emailInput.should('be.visible')
    return this
  }

  // Input Angular Material tertutup label mengambang, sehingga perlu { force: true }.
  login(email, password) {
    if (email) this.emailInput.type(email, { force: true })
    if (password) this.passwordInput.type(password, { force: true, log: false })
    this.loginButton.click()
    return this
  }
}

export default new LoginPage()

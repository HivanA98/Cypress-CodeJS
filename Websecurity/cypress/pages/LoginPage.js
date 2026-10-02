class LoginPage {
  get usernameInput() {
    return cy.get('#user_login')
  }

  get passwordInput() {
    return cy.get('#user_password')
  }

  get rememberMeCheckbox() {
    return cy.get('#user_remember_me')
  }

  get signInButton() {
    return cy.get('input[name="submit"]')
  }

  get errorMessage() {
    return cy.get('.alert-error')
  }

  visit() {
    cy.visit('/login.html')
    return this
  }

  login(username, password, { rememberMe = false } = {}) {
    this.usernameInput.clear().type(username)
    this.passwordInput.clear().type(password, { log: false })
    if (rememberMe) this.rememberMeCheckbox.check()
    this.signInButton.click()
    return this
  }

  shouldShowError() {
    this.errorMessage.should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    return this
  }
}

export default new LoginPage()

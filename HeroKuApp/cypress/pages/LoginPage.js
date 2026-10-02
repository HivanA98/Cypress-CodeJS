class LoginPage {
  get usernameInput() {
    return cy.get('#txt-username')
  }

  get passwordInput() {
    return cy.get('#txt-password')
  }

  get loginButton() {
    return cy.get('#btn-login')
  }

  get errorMessage() {
    return cy.get('#login .text-danger')
  }

  /** Kredensial demo yang ditampilkan langsung di halaman login. */
  get demoUsername() {
    return cy.get('[aria-describedby="demo_username_label"]')
  }

  get demoPassword() {
    return cy.get('[aria-describedby="demo_password_label"]')
  }

  visit() {
    cy.visit('/profile.php#login')
    return this
  }

  login(username, password) {
    if (username) this.usernameInput.clear().type(username)
    if (password) this.passwordInput.clear().type(password, { log: false })
    this.loginButton.click()
    return this
  }

  shouldShowError() {
    this.errorMessage
      .should('be.visible')
      .and('contain.text', 'Login failed! Please ensure the username and password are valid.')
    return this
  }
}

export default new LoginPage()

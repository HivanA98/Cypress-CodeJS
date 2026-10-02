import BasePage from './BasePage'

class LoginPage extends BasePage {
  path = '/'

  get usernameInput() {
    return this.byTest('username')
  }

  get passwordInput() {
    return this.byTest('password')
  }

  get loginButton() {
    return this.byTest('login-button')
  }

  get errorMessage() {
    return this.byTest('error')
  }

  fillUsername(username) {
    this.usernameInput.clear().type(username)
    return this
  }

  fillPassword(password) {
    this.passwordInput.clear().type(password, { log: false })
    return this
  }

  submit() {
    this.loginButton.click()
    return this
  }

  login(username, password) {
    if (username) this.fillUsername(username)
    if (password) this.fillPassword(password)
    return this.submit()
  }

  shouldShowError(message) {
    this.errorMessage.should('be.visible').and('contain.text', message)
    return this
  }
}

export default new LoginPage()

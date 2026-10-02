import BasePage from './BasePage'

/**
 * Login voila.id terdiri dari 2 langkah:
 * 1. isi email/nomor HP (identifier) → Sign In
 * 2. isi password → Sign In
 */
class LoginPage extends BasePage {
  visit() {
    return this.open('/account/login')
  }

  get identifierInput() {
    return this.byTestId('CT_component_login_input')
  }

  get passwordInput() {
    return cy.get('input[name="password"]')
  }

  get submitButton() {
    return this.byTestId('CT_component_login_submit')
  }

  get googleButton() {
    return this.byTestId('CT_Component_SSOButton_GoogleButton')
  }

  get facebookButton() {
    return this.byTestId('CT_Component_SSOFacebookButton')
  }

  submitIdentifier(identifier) {
    this.identifierInput.clear().type(identifier)
    this.submitButton.click()
    return this
  }

  submitPassword(password) {
    this.passwordInput.should('be.visible').type(password, { log: false })
    cy.get('form button[type="submit"]').click()
    return this
  }

  login(identifier, password) {
    return this.submitIdentifier(identifier).submitPassword(password)
  }

  shouldBeDisplayed() {
    cy.location('pathname').should('eq', '/account/login')
    this.identifierInput.should('be.visible')
    return this
  }

  shouldBeLoggedIn() {
    cy.location('pathname').should('not.include', '/account/login')
    cy.get('[data-test-id="CT-SignIn-Btn"]').should('not.exist')
    return this
  }

  shouldShowWrongCredentialError() {
    cy.contains('Your account ID or password is incorrect. Please try again.').should('be.visible')
    return this
  }
}

export default new LoginPage()

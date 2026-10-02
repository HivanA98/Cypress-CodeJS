import BasePage from '../BasePage'

class TextBoxPage extends BasePage {
  path = '/text-box'

  get fullNameInput() {
    return cy.get('#userName')
  }

  get emailInput() {
    return cy.get('#userEmail')
  }

  get currentAddressInput() {
    return cy.get('#currentAddress')
  }

  get permanentAddressInput() {
    return cy.get('#permanentAddress')
  }

  get submitButton() {
    return cy.get('#submit')
  }

  get output() {
    return cy.get('#output')
  }

  fillForm({ fullName, email, currentAddress, permanentAddress }) {
    if (fullName) this.fullNameInput.type(fullName)
    if (email) this.emailInput.type(email)
    if (currentAddress) this.currentAddressInput.type(currentAddress)
    if (permanentAddress) this.permanentAddressInput.type(permanentAddress)
    return this
  }

  submit() {
    this.submitButton.click()
    return this
  }

  shouldShowOutput({ fullName, email, currentAddress, permanentAddress }) {
    this.output.find('#name').should('have.text', `Name:${fullName}`)
    this.output.find('#email').should('have.text', `Email:${email}`)
    this.output.find('#currentAddress').should('contain.text', currentAddress)
    this.output.find('#permanentAddress').should('contain.text', permanentAddress)
    return this
  }
}

export default new TextBoxPage()

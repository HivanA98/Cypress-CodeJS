import BasePage from '../BasePage'

class RadioButtonPage extends BasePage {
  path = '/radio-button'

  radio(label) {
    return cy.get(`#${label.toLowerCase()}Radio`)
  }

  select(label) {
    // Input radio aslinya tersembunyi di balik label custom.
    cy.get(`label[for="${label.toLowerCase()}Radio"]`).click()
    return this
  }

  get result() {
    return cy.get('.text-success')
  }
}

export default new RadioButtonPage()

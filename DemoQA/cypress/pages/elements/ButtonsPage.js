import BasePage from '../BasePage'

class ButtonsPage extends BasePage {
  path = '/buttons'

  get doubleClickButton() {
    return cy.get('#doubleClickBtn')
  }

  get rightClickButton() {
    return cy.get('#rightClickBtn')
  }

  /** Tombol "Click Me" memiliki id dinamis, jadi dicari berdasarkan teks persisnya. */
  get dynamicClickButton() {
    return cy.contains('button', /^Click Me$/)
  }

  get doubleClickMessage() {
    return cy.get('#doubleClickMessage')
  }

  get rightClickMessage() {
    return cy.get('#rightClickMessage')
  }

  get dynamicClickMessage() {
    return cy.get('#dynamicClickMessage')
  }
}

export default new ButtonsPage()

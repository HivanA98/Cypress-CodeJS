import BasePage from '../BasePage'

class BrowserWindowsPage extends BasePage {
  path = '/browser-windows'

  get newTabButton() {
    return cy.get('#tabButton')
  }

  get newWindowButton() {
    return cy.get('#windowButton')
  }

  /**
   * Cypress tidak bisa mengontrol tab baru, jadi `window.open` di-stub
   * untuk memastikan URL yang akan dibuka sudah benar.
   */
  stubWindowOpen() {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
    return this
  }
}

export default new BrowserWindowsPage()

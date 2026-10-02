import BasePage from '../BasePage'

class AlertsPage extends BasePage {
  path = '/alerts'

  get alertButton() {
    return cy.get('#alertButton')
  }

  get timerAlertButton() {
    return cy.get('#timerAlertButton')
  }

  get confirmButton() {
    return cy.get('#confirmButton')
  }

  get promptButton() {
    return cy.get('#promtButton')
  }

  get confirmResult() {
    return cy.get('#confirmResult')
  }

  get promptResult() {
    return cy.get('#promptResult')
  }

  /**
   * Siapkan jawaban untuk window.confirm sebelum tombol diklik.
   * @param {boolean} accept - true = OK, false = Cancel
   */
  answerConfirm(accept) {
    cy.on('window:confirm', () => accept)
    return this
  }

  /** Stub window.prompt agar mengembalikan teks tertentu. */
  answerPrompt(text) {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(text).as('prompt')
    })
    return this
  }
}

export default new AlertsPage()

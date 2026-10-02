import BasePage from '../BasePage'

class FramesPage extends BasePage {
  path = '/frames'

  /** Ambil body dari iframe (same-origin) agar bisa di-query seperti elemen biasa. */
  frameBody(frameId) {
    return cy
      .get(`#${frameId}`)
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
  }

  frameHeading(frameId) {
    return this.frameBody(frameId).find('#sampleHeading')
  }
}

export default new FramesPage()

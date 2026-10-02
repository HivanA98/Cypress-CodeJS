import { alertsPage } from '../../pages'

describe('Alerts', () => {
  beforeEach(() => {
    alertsPage.visit()
  })

  it('shows a simple alert', () => {
    const alertStub = cy.stub().as('alert')
    cy.on('window:alert', alertStub)

    alertsPage.alertButton.click()
    cy.get('@alert').should('have.been.calledOnceWith', 'You clicked a button')
  })

  it('shows an alert after 5 seconds', () => {
    cy.clock()
    const alertStub = cy.stub().as('alert')
    cy.on('window:alert', alertStub)

    alertsPage.timerAlertButton.click()
    cy.tick(5000)
    cy.get('@alert').should('have.been.calledOnceWith', 'This alert appeared after 5 seconds')
  })

  it('accepts a confirm box', () => {
    alertsPage.answerConfirm(true).confirmButton.click()
    alertsPage.confirmResult.should('have.text', 'You selected Ok')
  })

  it('cancels a confirm box', () => {
    alertsPage.answerConfirm(false).confirmButton.click()
    alertsPage.confirmResult.should('have.text', 'You selected Cancel')
  })

  it('answers a prompt box', () => {
    alertsPage.answerPrompt('Ivan Armadi').promptButton.click()

    cy.get('@prompt').should('have.been.calledOnce')
    alertsPage.promptResult.should('have.text', 'You entered Ivan Armadi')
  })
})

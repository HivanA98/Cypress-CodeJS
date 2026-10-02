class HomePage {
  get makeAppointmentButton() {
    return cy.get('#btn-make-appointment')
  }

  visit() {
    cy.visit('/')
    return this
  }

  clickMakeAppointment() {
    this.makeAppointmentButton.should('be.visible').click()
    return this
  }
}

export default new HomePage()

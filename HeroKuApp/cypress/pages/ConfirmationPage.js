class ConfirmationPage {
  get facility() {
    return cy.get('#facility')
  }

  get readmission() {
    return cy.get('#hospital_readmission')
  }

  get program() {
    return cy.get('#program')
  }

  get visitDate() {
    return cy.get('#visit_date')
  }

  get comment() {
    return cy.get('#comment')
  }

  /** Pastikan detail yang ditampilkan sama dengan data appointment yang dibuat. */
  shouldShowAppointment({ facility, readmission, program, visitDate, comment }) {
    cy.location('pathname').should('include', '/appointment.php')
    cy.contains('h2', 'Appointment Confirmation').should('be.visible')

    this.facility.should('have.text', facility)
    this.readmission.should('have.text', readmission ? 'Yes' : 'No')
    this.program.should('have.text', program)
    this.visitDate.should('have.text', visitDate)
    this.comment.should('have.text', comment ?? '')
    return this
  }
}

export default new ConfirmationPage()

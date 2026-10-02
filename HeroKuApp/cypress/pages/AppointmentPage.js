const PROGRAM_RADIO = {
  Medicare: '#radio_program_medicare',
  Medicaid: '#radio_program_medicaid',
  None: '#radio_program_none',
}

class AppointmentPage {
  get facilitySelect() {
    return cy.get('#combo_facility')
  }

  get readmissionCheckbox() {
    return cy.get('#chk_hospotal_readmission')
  }

  get visitDateInput() {
    return cy.get('#txt_visit_date')
  }

  get commentInput() {
    return cy.get('#txt_comment')
  }

  get bookButton() {
    return cy.get('#btn-book-appointment')
  }

  programRadio(program) {
    return cy.get(PROGRAM_RADIO[program])
  }

  selectFacility(facility) {
    this.facilitySelect.select(facility)
    return this
  }

  setReadmission(enabled) {
    if (enabled) this.readmissionCheckbox.check()
    else this.readmissionCheckbox.uncheck()
    return this
  }

  selectProgram(program) {
    this.programRadio(program).check()
    return this
  }

  /** @param {string} date - format dd/mm/yyyy */
  fillVisitDate(date) {
    // Tutup datepicker setelah mengetik agar tidak menutupi field lain.
    this.visitDateInput.clear().type(`${date}{esc}`)
    return this
  }

  fillComment(comment) {
    this.commentInput.clear().type(comment)
    return this
  }

  book() {
    this.bookButton.click()
    return this
  }

  /**
   * Isi seluruh form appointment sekaligus.
   * @param {{facility, readmission, program, visitDate, comment}} appointment
   */
  fillForm({ facility, readmission, program, visitDate, comment }) {
    this.selectFacility(facility).setReadmission(readmission).selectProgram(program)
    if (visitDate) this.fillVisitDate(visitDate)
    if (comment) this.fillComment(comment)
    return this
  }

  shouldBeDisplayed() {
    cy.location('hash').should('eq', '#appointment')
    cy.contains('h2', 'Make Appointment').should('be.visible')
    return this
  }
}

export default new AppointmentPage()

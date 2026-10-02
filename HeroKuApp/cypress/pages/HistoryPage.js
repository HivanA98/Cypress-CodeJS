class HistoryPage {
  get appointments() {
    return cy.get('#history .panel')
  }

  shouldBeEmpty() {
    cy.contains('#history', 'No appointment.').should('be.visible')
    return this
  }

  /** Cari panel history berdasarkan tanggal kunjungan, lalu cek isinya. */
  shouldContainAppointment({ facility, program, visitDate, comment }) {
    cy.contains('#history .panel', visitDate).within(() => {
      cy.get('#facility').should('have.text', facility)
      cy.get('#program').should('have.text', program)
      if (comment) cy.get('#comment').should('have.text', comment)
    })
    return this
  }
}

export default new HistoryPage()

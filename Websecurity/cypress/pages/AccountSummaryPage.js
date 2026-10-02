class AccountSummaryPage {
  visit() {
    cy.visit('/bank/account-summary.html')
    return this
  }

  get sectionHeaders() {
    return cy.get('h2.board-header')
  }

  shouldBeDisplayed() {
    cy.location('pathname').should('eq', '/bank/account-summary.html')
    this.sectionHeaders.should('have.length', 4)
    return this
  }
}

export default new AccountSummaryPage()

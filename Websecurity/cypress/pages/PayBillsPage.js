class PayBillsPage {
  get payeeSelect() {
    return cy.get('#sp_payee')
  }

  get accountSelect() {
    return cy.get('#sp_account')
  }

  get amountInput() {
    return cy.get('#sp_amount')
  }

  get dateInput() {
    return cy.get('#sp_date')
  }

  get descriptionInput() {
    return cy.get('#sp_description')
  }

  get payButton() {
    return cy.get('#pay_saved_payees')
  }

  get resultMessage() {
    return cy.get('#alert_content')
  }

  visit() {
    cy.visit('/bank/pay-bills.html')
    return this
  }

  /** @param {{payee, account, amount, date, description}} payment - date: yyyy-mm-dd */
  paySavedPayee({ payee, account, amount, date, description }) {
    this.payeeSelect.select(payee)
    this.accountSelect.select(account)
    if (amount) this.amountInput.type(String(amount))
    // Field tanggal memakai jQuery datepicker; ketik lalu tutup popup-nya.
    if (date) this.dateInput.type(`${date}{esc}`)
    if (description) this.descriptionInput.type(description)
    this.payButton.click()
    return this
  }
}

export default new PayBillsPage()

class TransferFundsPage {
  get fromAccountSelect() {
    return cy.get('#tf_fromAccountId')
  }

  get toAccountSelect() {
    return cy.get('#tf_toAccountId')
  }

  get amountInput() {
    return cy.get('#tf_amount')
  }

  get descriptionInput() {
    return cy.get('#tf_description')
  }

  get submitButton() {
    return cy.get('#btn_submit')
  }

  get successAlert() {
    return cy.get('.alert-success')
  }

  visit() {
    cy.visit('/bank/transfer-funds.html')
    return this
  }

  fillForm({ fromAccount, toAccount, amount, description }) {
    if (fromAccount) this.fromAccountSelect.select(fromAccount)
    if (toAccount) this.toAccountSelect.select(toAccount)
    if (amount) this.amountInput.type(String(amount))
    if (description) this.descriptionInput.type(description)
    return this
  }

  /** Klik Continue (step 1) atau Submit (step 2 - verifikasi). */
  submit() {
    this.submitButton.click()
    return this
  }

  /** Di halaman verifikasi, field ditampilkan read-only berisi data yang diinput. */
  shouldShowVerification({ amount, description }) {
    cy.contains('h2', 'Transfer Money & Make Payments - Verify').should('be.visible')
    this.amountInput.should('have.value', String(amount)).and('be.disabled')
    this.descriptionInput.should('have.value', description)
    return this
  }
}

export default new TransferFundsPage()

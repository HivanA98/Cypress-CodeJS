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

  visit() {
    cy.visit('/bank/pay-bills.html')
    return this.openTab('Pay Saved Payee')
  }

  /**
   * Tab di halaman ini adalah link biasa yang di-load lewat AJAX oleh jQuery UI.
   * Jika JS website tidak termuat, klik link membuka halaman form-nya secara langsung,
   * jadi cara ini bekerja di kedua kondisi.
   */
  openTab(tabName) {
    cy.contains('#tabs a', tabName).click()
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

    cy.intercept('POST', '/bank/pay-bills-saved-payee.html').as('payBill')
    this.payButton.click()
    return this
  }

  /**
   * Pesan sukses dibuat oleh server di dalam script halaman, lalu ditampilkan oleh jQuery.
   * Karena jQuery website saat ini 404, verifikasi dilakukan pada response server
   * sehingga test tetap memastikan pembayaran diterima.
   */
  shouldConfirmPayment(amount) {
    cy.wait('@payBill').then(({ response }) => {
      expect(response.statusCode).to.eq(200)
      expect(response.body).to.include('The payment was successfully submitted.')
      expect(response.body).to.include(`$ ${amount} payed to payee`)
    })
    return this
  }
}

export default new PayBillsPage()

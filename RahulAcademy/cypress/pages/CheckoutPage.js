/** Halaman ringkasan cart + halaman purchase (pilih negara). */
class CheckoutPage {
  get cartRows() {
    return cy.get('table tbody tr:has(h4)')
  }

  get lineTotals() {
    return cy.get('table tbody tr td:nth-child(4) strong')
  }

  get grandTotal() {
    return cy.get('table tbody tr td h3 strong')
  }

  get countryInput() {
    return cy.get('#country')
  }

  get purchaseButton() {
    return cy.get('input[type="submit"][value="Purchase"]')
  }

  get successAlert() {
    return cy.get('.alert-success')
  }

  /** Ambil angka dari teks harga seperti "₹. 65000". */
  static parsePrice(text) {
    return Number(text.replace(/[^0-9]/g, ''))
  }

  shouldHaveCorrectGrandTotal() {
    this.lineTotals.then(($totals) => {
      const expected = Cypress._.sumBy($totals, (el) => CheckoutPage.parsePrice(el.innerText))
      this.grandTotal.invoke('text').then(CheckoutPage.parsePrice).should('eq', expected)
    })
    return this
  }

  proceedToPurchase() {
    cy.contains('button', 'Checkout').click()
    return this
  }

  /** Ketik sebagian nama negara lalu pilih dari autocomplete. */
  selectCountry(keyword, country) {
    this.countryInput.type(keyword)
    cy.get('.suggestions', { timeout: 15000 }).contains('a', country).click()
    this.countryInput.should('have.value', country)
    return this
  }

  agreeToTerms() {
    cy.get('label[for="checkbox2"]').click()
    return this
  }

  purchase() {
    this.purchaseButton.click()
    return this
  }
}

export default new CheckoutPage()

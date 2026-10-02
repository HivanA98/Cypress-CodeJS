import BasePage from './BasePage'

/** Mencakup 3 langkah checkout: informasi pembeli, overview, dan complete. */
class CheckoutPage extends BasePage {
  // Step 1 - Your Information
  get firstNameInput() {
    return this.byTest('firstName')
  }

  get lastNameInput() {
    return this.byTest('lastName')
  }

  get postalCodeInput() {
    return this.byTest('postalCode')
  }

  get continueButton() {
    return this.byTest('continue')
  }

  get errorMessage() {
    return this.byTest('error')
  }

  // Step 2 - Overview
  get itemPrices() {
    return cy.get('.cart_item .inventory_item_price')
  }

  get subtotalLabel() {
    return this.byTest('subtotal-label')
  }

  get taxLabel() {
    return this.byTest('tax-label')
  }

  get totalLabel() {
    return this.byTest('total-label')
  }

  get finishButton() {
    return this.byTest('finish')
  }

  // Step 3 - Complete
  get completeHeader() {
    return this.byTest('complete-header')
  }

  get backHomeButton() {
    return this.byTest('back-to-products')
  }

  /** Isi form informasi pembeli. Field yang kosong/undefined akan dilewati. */
  fillInformation({ firstName, lastName, postalCode } = {}) {
    if (firstName) this.firstNameInput.type(firstName)
    if (lastName) this.lastNameInput.type(lastName)
    if (postalCode) this.postalCodeInput.type(postalCode)
    return this
  }

  continue() {
    this.continueButton.click()
    return this
  }

  finish() {
    this.finishButton.click()
    return this
  }

  shouldShowError(message) {
    this.errorMessage.should('be.visible').and('contain.text', message)
    return this
  }

  /** Validasi item total = jumlah harga item, dan total = item total + tax. */
  shouldHaveCorrectTotals() {
    const parseAmount = (text) => Number(text.replace(/[^0-9.]/g, ''))

    this.itemPrices.then(($prices) => {
      const expectedSubtotal = Cypress._.sumBy($prices, (el) => parseAmount(el.innerText))

      this.subtotalLabel.invoke('text').then(parseAmount).should('be.closeTo', expectedSubtotal, 0.01)

      this.taxLabel
        .invoke('text')
        .then(parseAmount)
        .then((tax) => {
          this.totalLabel
            .invoke('text')
            .then(parseAmount)
            .should('be.closeTo', expectedSubtotal + tax, 0.01)
        })
    })
    return this
  }

  shouldBeComplete() {
    cy.url().should('include', '/checkout-complete.html')
    this.completeHeader.should('have.text', 'Thank you for your order!')
    return this
  }
}

export default new CheckoutPage()

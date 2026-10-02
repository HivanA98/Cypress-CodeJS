import BasePage from './BasePage'

/**
 * CATATAN: halaman checkout hanya bisa diakses setelah login, dan beberapa elemennya
 * belum memiliki data-test-id sehingga masih memakai class hasil build (mudah berubah).
 * Selector tersebut dikumpulkan di sini agar mudah diperbarui di satu tempat.
 */
const SELECTORS = {
  paymentMethodItem: '[class="_15kd2weog      _17zx15te8  _1ccbe2wb"]',
  paymentOption: '[class="_15kd2we1ds   _15r4f4dly"]',
  courierSection: '[class="j1jih7ak      _15kd2weg"]',
  courierDropdown: '[class="_15kd2we5s     _15kd2weg"]',
  courierConfirm: '[class="_920fuu5 _920fuuf _920fuub _920fuu6"]',
  summaryTotal: '[class="_15kd2we68      _17zx15tgg _17zx15t9s _17zx15te8"]',
  paymentPageTotal: '[class="_17zx15t9s _17zx15te8 _17zx15tgg"]',
}

class CheckoutPage extends BasePage {
  get deliveryCard() {
    return this.byTestId('CT_Component_DeliveryCard')
  }

  get placeOrderButton() {
    return this.byTestId('CT_Component_btnPlaceOrder')
  }

  selectPayment() {
    this.byTestId('CT_Component_SelectorPayment_ButtonPayment').eq(1).click()
    cy.get(SELECTORS.paymentMethodItem).eq(1).click()
    cy.get(SELECTORS.paymentOption).eq(0).click()
    this.byTestId('CT_Component_PaymentListFooter_ButtonConfirm').click()
    return this
  }

  selectCourier(courierName = 'JNE REG') {
    cy.get(SELECTORS.courierSection).eq(3).click()
    cy.get(SELECTORS.courierDropdown).eq(0).click()
    cy.contains(courierName).click()
    cy.get(SELECTORS.courierConfirm).eq(1).click()
    return this
  }

  /** Simpan total belanja dari ringkasan checkout sebagai alias `@orderTotal`. */
  saveOrderTotal() {
    cy.get(SELECTORS.summaryTotal).invoke('text').then((text) => text.trim()).as('orderTotal')
    return this
  }

  placeOrder() {
    this.placeOrderButton.click()
    return this
  }

  /** Total di halaman pembayaran harus sama dengan total di ringkasan checkout. */
  shouldShowSameTotalOnPaymentPage() {
    cy.get('@orderTotal').then((total) => {
      cy.get(SELECTORS.paymentPageTotal).eq(1).should('have.text', total)
    })
    return this
  }
}

export default new CheckoutPage()

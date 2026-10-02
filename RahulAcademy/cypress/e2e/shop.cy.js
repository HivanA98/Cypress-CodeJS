import { shopPage, checkoutPage } from '../pages'

const PRODUCTS = ['iphone X', 'Samsung Note 8', 'Nokia Edge']

describe('ProtoCommerce - Shop', () => {
  beforeEach(() => {
    shopPage.visit()
  })

  it('lists the available products', () => {
    shopPage.products.should('have.length.at.least', 4)
  })

  it('updates the checkout counter when adding products', () => {
    shopPage.addProductsToCart(PRODUCTS).shouldHaveCartCount(PRODUCTS.length)
  })

  it('calculates the grand total in the cart', () => {
    shopPage.addProductsToCart(PRODUCTS).openCheckout()

    checkoutPage.cartRows.should('have.length', PRODUCTS.length)
    checkoutPage.shouldHaveCorrectGrandTotal()
  })

  it('E2E: purchases products and delivers to India', () => {
    shopPage.addProductsToCart(PRODUCTS.slice(0, 2)).openCheckout()

    checkoutPage.proceedToPurchase().selectCountry('ind', 'India').agreeToTerms().purchase()

    checkoutPage.successAlert
      .should('be.visible')
      .and('contain.text', 'Thank you! Your order will be delivered in next few weeks')
  })
})

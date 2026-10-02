import { inventoryPage, cartPage, header } from '../pages'
import { products } from '../fixtures/checkout.json'

describe('Cart', () => {
  beforeEach(() => {
    cy.loginAs('standard')
    inventoryPage.addProductsToCart(products)
    header.openCart()
  })

  it('lists every added product', () => {
    cartPage.shouldContainProducts(products)
  })

  it('removes a product from the cart', () => {
    const [removed, ...remaining] = products

    cartPage.removeItem(removed)
    cartPage.shouldContainProducts(remaining)
    header.shouldHaveCartCount(remaining.length)
  })

  it('keeps cart content after Continue Shopping', () => {
    cartPage.continueShopping()
    inventoryPage.shouldBeDisplayed()

    header.openCart()
    cartPage.shouldContainProducts(products)
  })
})

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { inventoryPage, cartPage, checkoutPage, header } from '../../pages'

Given('I have these products in my cart:', (dataTable) => {
  const products = dataTable.hashes().map((row) => row.product)
  inventoryPage.addProductsToCart(products)
})

When('I open the cart', () => {
  header.openCart()
})

When('I remove {string} from the cart page', (product) => {
  cartPage.removeItem(product)
})

When('I proceed to checkout', () => {
  cartPage.checkout()
})

When(
  'I fill in my information with {string}, {string} and {string}',
  (firstName, lastName, postalCode) => {
    checkoutPage.fillInformation({ firstName, lastName, postalCode }).continue()
  },
)

When('I finish the order', () => {
  checkoutPage.finish()
})

Then('the cart should contain {int} products', (count) => {
  cartPage.items.should('have.length', count)
})

Then('the order total should equal the item total plus tax', () => {
  checkoutPage.shouldHaveCorrectTotals()
})

Then('I should see the order confirmation', () => {
  checkoutPage.shouldBeComplete()
})

Then('I should see the checkout error {string}', (message) => {
  checkoutPage.shouldShowError(message)
})

import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { inventoryPage, header } from '../../pages'

When('I sort the products by {string}', (option) => {
  inventoryPage.sortBy(option)
})

When('I add {string} to the cart', (product) => {
  inventoryPage.addToCart(product)
})

When('I remove {string} from the cart', (product) => {
  inventoryPage.removeFromCart(product)
})

Then('I should see {int} products', (count) => {
  inventoryPage.items.should('have.length', count)
})

Then('the products should be sorted by {word} in {word} order', (field, direction) => {
  const getValues = field === 'price' ? inventoryPage.getProductPrices() : inventoryPage.getProductNames()

  getValues.then((values) => {
    const sorted = field === 'price' ? [...values].sort((a, b) => a - b) : [...values].sort()
    if (direction === 'descending') sorted.reverse()

    expect(values).to.deep.equal(sorted)
  })
})

Then('the cart badge should show {int}', (count) => {
  header.shouldHaveCartCount(count)
})

Then('the cart badge should be empty', () => {
  header.shouldHaveCartCount(0)
})

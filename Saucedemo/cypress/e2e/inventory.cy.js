import { inventoryPage, productDetailPage, header } from '../pages'

describe('Inventory', () => {
  beforeEach(() => {
    cy.loginAs('standard')
  })

  it('displays 6 products', () => {
    inventoryPage.items.should('have.length', 6)
  })

  context('Product sorting', () => {
    it('Name (A to Z)', () => {
      inventoryPage.sortBy('az')
      inventoryPage.getProductNames().then((names) => {
        expect(names).to.deep.equal([...names].sort())
      })
    })

    it('Name (Z to A)', () => {
      inventoryPage.sortBy('za')
      inventoryPage.getProductNames().then((names) => {
        expect(names).to.deep.equal([...names].sort().reverse())
      })
    })

    it('Price (low to high)', () => {
      inventoryPage.sortBy('lohi')
      inventoryPage.getProductPrices().then((prices) => {
        expect(prices).to.deep.equal([...prices].sort((a, b) => a - b))
      })
    })

    it('Price (high to low)', () => {
      inventoryPage.sortBy('hilo')
      inventoryPage.getProductPrices().then((prices) => {
        expect(prices).to.deep.equal([...prices].sort((a, b) => b - a))
      })
    })
  })

  context('Cart badge', () => {
    it('increments when adding and decrements when removing products', () => {
      inventoryPage.addToCart('Sauce Labs Backpack')
      header.shouldHaveCartCount(1)

      inventoryPage.addToCart('Sauce Labs Onesie')
      header.shouldHaveCartCount(2)

      inventoryPage.removeFromCart('Sauce Labs Backpack')
      header.shouldHaveCartCount(1)
    })

    it('is cleared by Reset App State', () => {
      inventoryPage.addProductsToCart(['Sauce Labs Backpack', 'Sauce Labs Bike Light'])
      header.shouldHaveCartCount(2).resetAppState().shouldHaveCartCount(0)
    })
  })

  context('Product detail', () => {
    it('shows the same name and price as the product list', () => {
      const product = 'Sauce Labs Fleece Jacket'

      cy.contains('.inventory_item', product)
        .find('.inventory_item_price')
        .invoke('text')
        .then((listPrice) => {
          inventoryPage.openProduct(product)

          productDetailPage.name.should('have.text', product)
          productDetailPage.price.should('have.text', listPrice)
        })
    })

    it('can add a product to the cart from the detail page', () => {
      inventoryPage.openProduct('Sauce Labs Bolt T-Shirt')
      productDetailPage.addToCart()
      header.shouldHaveCartCount(1)

      productDetailPage.backToProducts()
      inventoryPage.shouldBeDisplayed()
    })
  })
})

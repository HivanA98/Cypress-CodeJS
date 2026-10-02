import BasePage from './BasePage'

/** Ubah nama produk menjadi slug yang dipakai Saucedemo di atribut data-test. */
const toSlug = (productName) => productName.toLowerCase().replace(/\s+/g, '-')

class InventoryPage extends BasePage {
  path = '/inventory.html'

  get title() {
    return this.byTest('title')
  }

  get items() {
    return cy.get('.inventory_item')
  }

  get itemNames() {
    return cy.get('.inventory_item_name')
  }

  get itemPrices() {
    return cy.get('.inventory_item_price')
  }

  get sortDropdown() {
    return this.byTest('product-sort-container')
  }

  addToCart(productName) {
    this.byTest(`add-to-cart-${toSlug(productName)}`).click()
    return this
  }

  removeFromCart(productName) {
    this.byTest(`remove-${toSlug(productName)}`).click()
    return this
  }

  addProductsToCart(productNames) {
    productNames.forEach((name) => this.addToCart(name))
    return this
  }

  openProduct(productName) {
    this.itemNames.contains(productName).click()
    return this
  }

  /** @param {'az'|'za'|'lohi'|'hilo'} option */
  sortBy(option) {
    this.sortDropdown.select(option)
    return this
  }

  /** Mengembalikan chainable berisi array nama produk sesuai urutan di layar. */
  getProductNames() {
    return this.itemNames.then(($els) => Cypress._.map($els, 'innerText'))
  }

  /** Mengembalikan chainable berisi array harga (number) sesuai urutan di layar. */
  getProductPrices() {
    return this.itemPrices.then(($els) => Cypress._.map($els, (el) => Number(el.innerText.replace('$', ''))))
  }

  shouldBeDisplayed() {
    cy.url().should('include', this.path)
    this.title.should('have.text', 'Products')
    return this
  }
}

export default new InventoryPage()

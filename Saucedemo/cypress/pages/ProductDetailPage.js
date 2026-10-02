import BasePage from './BasePage'

class ProductDetailPage extends BasePage {
  get name() {
    return this.byTest('inventory-item-name')
  }

  get price() {
    return this.byTest('inventory-item-price')
  }

  get addToCartButton() {
    return this.byTest('add-to-cart')
  }

  get backButton() {
    return this.byTest('back-to-products')
  }

  addToCart() {
    this.addToCartButton.click()
    return this
  }

  backToProducts() {
    this.backButton.click()
    return this
  }
}

export default new ProductDetailPage()

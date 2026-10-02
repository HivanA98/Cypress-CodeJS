import BasePage from './BasePage'

class ProductDetailPage extends BasePage {
  get brandName() {
    return this.byTestId('CT_product-name')
  }

  /** Judul produk (brand + nama produk). */
  get productName() {
    return cy.get('h1')
  }

  get addToBagButton() {
    return this.byTestId('CT-add-to-bag-desktop')
  }

  get colorVariants() {
    return this.byTestId('CT_component_VariantColorItem')
  }

  get breadcrumbs() {
    return this.byTestId('CT_Component_BreadCrumbs')
  }

  addToBag() {
    this.addToBagButton.should('be.visible').click()
    return this
  }

  shouldBeDisplayed() {
    cy.location('pathname').should('match', /^\/products\//)
    this.productName.should('be.visible')
    this.addToBagButton.should('be.visible')
    return this
  }
}

export default new ProductDetailPage()

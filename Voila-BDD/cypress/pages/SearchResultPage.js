import BasePage from './BasePage'

class SearchResultPage extends BasePage {
  get products() {
    return this.byTestId('product-item')
  }

  /** Produk yang tidak memiliki badge "Out of Stock". */
  get inStockProducts() {
    return this.products.not(':has([data-test-id="product-badge-oos"])')
  }

  breadcrumbFor(keyword) {
    return this.byTestId(`CT-Breadcrumb-Item-text-${keyword}`)
  }

  shouldShowResultsFor(keyword) {
    cy.location('pathname').should('eq', '/search')
    cy.location('search').should('include', `q=${encodeURIComponent(keyword)}`)
    this.breadcrumbFor(keyword).should('be.visible')
    this.products.should('have.length.greaterThan', 0)
    return this
  }

  /**
   * Buka produk pertama yang masih tersedia.
   * Nama produk disimpan sebagai alias `@productName` untuk dicek di halaman detail.
   */
  openFirstInStockProduct() {
    // List hasil pencarian terus di-render ulang (infinite scroll), sehingga klik langsung
    // sering gagal karena elemen ter-detach. Ambil href-nya lalu buka secara langsung.
    this.inStockProducts.first().then(($product) => {
      cy.wrap($product.find('.ellipsis-two-lines').text()).as('productName')
      cy.visit($product.attr('href'))
    })
    return this
  }
}

export default new SearchResultPage()

import BasePage from '../BasePage'

/** Halaman Check Box memakai komponen tree `rc-tree`. */
class CheckBoxPage extends BasePage {
  path = '/checkbox'

  get result() {
    return cy.get('#result')
  }

  node(title) {
    return cy.get(`.rc-tree-treenode:has(.rc-tree-title:contains("${title}"))`).last()
  }

  expand(title) {
    this.node(title).find('.rc-tree-switcher_close').click()
    return this
  }

  /** Expand beberapa node secara berurutan, mis. ['Home', 'Documents', 'Office']. */
  expandPath(titles) {
    titles.forEach((title) => this.expand(title))
    return this
  }

  checkbox(title) {
    return cy.get(`.rc-tree-checkbox[aria-label="Select ${title}"]`)
  }

  check(title) {
    this.checkbox(title).click()
    return this
  }

  shouldHaveSelected(items) {
    items.forEach((item) => this.result.should('contain.text', item))
    return this
  }
}

export default new CheckBoxPage()

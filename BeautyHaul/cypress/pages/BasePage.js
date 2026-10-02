export default class BasePage {
  path = '/'

  visit() {
    cy.visit(this.path)
    return this
  }

  /** Input di dalam form milik halaman ini, berdasarkan atribut `name`. */
  field(name) {
    return cy.get(`${this.formSelector} input[name="${name}"]`)
  }

  /**
   * Pesan error validasi milik sebuah input.
   * Urutan pencarian mengikuti fungsi `getInputErrorElement` di website:
   * sibling langsung → sibling wrapper → di dalam wrapper → di dalam parent wrapper.
   */
  fieldError(name) {
    return this.field(name).then(($input) => {
      const $parent = $input.parent()
      const candidates = [$input.next('p'), $parent.next('p'), $parent.find('p'), $parent.parent().find('p')]
      return candidates.find(($el) => $el.length).first()
    })
  }

  // Tombol submit tidak memiliki atribut `type`, jadi ambil button yang bukan type="button".
  get submitButton() {
    return cy.get(`${this.formSelector} button:not([type="button"])`)
  }

  submit() {
    this.submitButton.click()
    return this
  }

  shouldShowFieldError(name, message) {
    this.fieldError(name).should('have.class', 'opacity-100').and('contain.text', message)
    return this
  }

  shouldNotShowFieldError(name) {
    this.fieldError(name).should('not.have.class', 'opacity-100')
    return this
  }

  shouldShowToast(message) {
    cy.contains(message).should('be.visible')
    return this
  }
}

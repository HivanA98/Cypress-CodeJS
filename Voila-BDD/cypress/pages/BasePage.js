export default class BasePage {
  /**
   * Buka halaman tanpa coachmark "Sign up now to get rewards" yang muncul untuk pengunjung baru.
   * Coachmark tersebut memasang overlay full-screen yang menghalangi klik, dan tidak muncul lagi
   * setelah cookie `voila-enable-register-hook` di-set.
   */
  open(path) {
    cy.setCookie('voila-enable-register-hook', 'true')
    cy.visit(path)
    return this
  }

  /** voila.id menyediakan atribut `data-test-id` yang stabil untuk sebagian besar elemen. */
  byTestId(id) {
    return cy.get(`[data-test-id="${id}"]`)
  }
}

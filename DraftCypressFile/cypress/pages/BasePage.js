/**
 * Kelas dasar untuk semua Page Object.
 * Turunan cukup mendefinisikan `path` agar bisa memakai `visit()`.
 */
export default class BasePage {
  path = '/'

  visit() {
    cy.visit(this.path)
    return this
  }

  /** Ambil elemen berdasarkan atribut `data-test` / `data-testid` / `data-cy`. */
  byTestId(id) {
    return cy.get(`[data-test="${id}"], [data-testid="${id}"], [data-cy="${id}"]`)
  }
}

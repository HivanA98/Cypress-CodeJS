/**
 * Kelas dasar untuk semua Page Object.
 * Setiap turunan cukup mendefinisikan `path` agar bisa memakai `visit()`.
 */
export default class BasePage {
  path = '/'

  // Saucedemo adalah SPA: membuka URL selain "/" secara langsung
  // mengembalikan HTTP 404 walaupun halamannya tetap ter-render.
  visit() {
    cy.visit(this.path, { failOnStatusCode: false })
    return this
  }

  /** Ambil elemen berdasarkan atribut `data-test` milik Saucedemo. */
  byTest(id) {
    return cy.get(`[data-test="${id}"]`)
  }
}

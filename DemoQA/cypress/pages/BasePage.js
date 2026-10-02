export default class BasePage {
  path = '/'

  visit() {
    cy.visit(this.path)
    this.removeAds()
    return this
  }

  /** Hapus banner iklan & footer fixed yang bisa menutupi elemen saat diklik. */
  removeAds() {
    cy.document().then((doc) => {
      doc
        .querySelectorAll('#fixedban, footer, [id^="Ad.Plus"], #RightSide_Advertisement, iframe[id^="google_ads"]')
        .forEach((el) => el.remove())
    })
    return this
  }
}

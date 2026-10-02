import BasePage from '../BasePage'

const FORM_FIELDS = {
  firstName: '#firstName',
  lastName: '#lastName',
  email: '#userEmail',
  age: '#age',
  salary: '#salary',
  department: '#department',
}

class WebTablesPage extends BasePage {
  path = '/webtables'

  get addButton() {
    return cy.get('#addNewRecordButton')
  }

  get searchBox() {
    return cy.get('#searchBox')
  }

  get rows() {
    return cy.get('table tbody tr')
  }

  get modal() {
    return cy.get('.modal-content')
  }

  rowContaining(text) {
    return cy.contains('table tbody tr', text)
  }

  /** Isi form registrasi di modal. Field yang tidak diberikan dibiarkan. */
  fillRecordForm(record) {
    Object.entries(record).forEach(([field, value]) => {
      cy.get(FORM_FIELDS[field]).clear().type(String(value))
    })
    return this
  }

  submitRecordForm() {
    cy.get('#submit').click()
    return this
  }

  addRecord(record) {
    this.addButton.click()
    return this.fillRecordForm(record).submitRecordForm()
  }

  editRecord(searchText, changes) {
    this.rowContaining(searchText).find('[id^="edit-record"]').click()
    return this.fillRecordForm(changes).submitRecordForm()
  }

  deleteRecord(searchText) {
    this.rowContaining(searchText).find('[id^="delete-record"]').click()
    return this
  }

  search(text) {
    this.searchBox.clear().type(text)
    return this
  }

  shouldContainRecord(record) {
    this.rowContaining(record.email).within(() => {
      Object.values(record).forEach((value) => cy.contains('td', String(value)))
    })
    return this
  }
}

export default new WebTablesPage()

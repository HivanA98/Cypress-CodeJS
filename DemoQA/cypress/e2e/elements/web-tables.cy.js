import { webTablesPage } from '../../pages'
import { buildEmployee } from '../../support/factories'

describe('Elements - Web Tables (CRUD)', () => {
  beforeEach(() => {
    webTablesPage.visit()
  })

  it('creates a new record', () => {
    const employee = buildEmployee()

    webTablesPage.addRecord(employee)
    webTablesPage.shouldContainRecord(employee)
  })

  it('edits an existing record', () => {
    webTablesPage.editRecord('cierra@example.com', { salary: 15000, department: 'QA' })

    webTablesPage
      .rowContaining('cierra@example.com')
      .should('contain.text', '15000')
      .and('contain.text', 'QA')
  })

  it('deletes a record', () => {
    webTablesPage.deleteRecord('alden@example.com')
    cy.contains('table tbody', 'alden@example.com').should('not.exist')
  })

  it('filters rows with the search box', () => {
    webTablesPage.search('Kierra')

    webTablesPage.rows.should('have.length', 1).and('contain.text', 'kierra@example.com')
  })

  it('keeps the modal open when required fields are empty', () => {
    webTablesPage.addButton.click()
    webTablesPage.submitRecordForm()

    webTablesPage.modal.should('be.visible')
    cy.get('#userForm').should('have.class', 'was-validated')
  })
})

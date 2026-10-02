import BasePage from './BasePage'

/** Contoh Page Object untuk aplikasi TodoMVC di https://example.cypress.io/todo */
class TodoPage extends BasePage {
  path = '/todo'

  get newTodoInput() {
    return this.byTestId('new-todo')
  }

  get items() {
    return cy.get('.todo-list li')
  }

  get itemsLeft() {
    return cy.get('.todo-count')
  }

  item(text) {
    return cy.contains('.todo-list li', text)
  }

  addTodo(text) {
    this.newTodoInput.type(`${text}{enter}`)
    return this
  }

  toggle(text) {
    this.item(text).find('.toggle').check()
    return this
  }

  remove(text) {
    // Tombol hapus hanya muncul saat hover, jadi gunakan { force: true }.
    this.item(text).find('.destroy').click({ force: true })
    return this
  }

  filter(name) {
    cy.contains('.filters a', name).click()
    return this
  }

  clearCompleted() {
    cy.contains('button', 'Clear completed').click()
    return this
  }
}

export default new TodoPage()

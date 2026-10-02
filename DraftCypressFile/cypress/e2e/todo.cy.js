import todoPage from '../pages/TodoPage'
import { newTodos } from '../fixtures/todos.json'

// Aplikasi contoh sudah berisi 2 todo bawaan.
const DEFAULT_TODOS = ['Pay electric bill', 'Walk the dog']

describe('Todo app (template example)', () => {
  beforeEach(() => {
    todoPage.visit()
  })

  it('shows the default todos', () => {
    todoPage.items.should('have.length', DEFAULT_TODOS.length)
    DEFAULT_TODOS.forEach((todo) => todoPage.item(todo).should('be.visible'))
  })

  it('adds new todos', () => {
    newTodos.forEach((todo) => todoPage.addTodo(todo))

    todoPage.items.should('have.length', DEFAULT_TODOS.length + newTodos.length)
    todoPage.items.last().should('have.text', newTodos.at(-1))
  })

  it('completes a todo and filters by status', () => {
    todoPage.toggle('Pay electric bill')
    todoPage.item('Pay electric bill').should('have.class', 'completed')

    todoPage.filter('Active')
    todoPage.items.should('have.length', 1).and('contain.text', 'Walk the dog')

    todoPage.filter('Completed')
    todoPage.items.should('have.length', 1).and('contain.text', 'Pay electric bill')
  })

  it('clears completed todos', () => {
    todoPage.toggle('Pay electric bill').clearCompleted()
    todoPage.items.should('have.length', 1).and('contain.text', 'Walk the dog')
  })

  it('removes a todo', () => {
    todoPage.remove('Pay electric bill')
    todoPage.items.should('have.length', 1)
  })
})

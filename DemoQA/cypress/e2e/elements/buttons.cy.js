import { buttonsPage } from '../../pages'

describe('Elements - Buttons', () => {
  beforeEach(() => {
    buttonsPage.visit()
  })

  it('handles a double click', () => {
    buttonsPage.doubleClickButton.dblclick()
    buttonsPage.doubleClickMessage.should('have.text', 'You have done a double click')
  })

  it('handles a right click', () => {
    buttonsPage.rightClickButton.rightclick()
    buttonsPage.rightClickMessage.should('have.text', 'You have done a right click')
  })

  it('handles a normal click on a button with a dynamic id', () => {
    buttonsPage.dynamicClickButton.click()
    buttonsPage.dynamicClickMessage.should('have.text', 'You have done a dynamic click')
  })
})

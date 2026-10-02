import { checkBoxPage } from '../../pages'

describe('Elements - Check Box', () => {
  beforeEach(() => {
    checkBoxPage.visit()
  })

  it('selects every child when the root node is checked', () => {
    checkBoxPage.check('Home')

    checkBoxPage.checkbox('Home').should('have.attr', 'aria-checked', 'true')
    checkBoxPage.shouldHaveSelected(['home', 'desktop', 'documents', 'downloads'])
  })

  it('selects a single nested node', () => {
    checkBoxPage.expandPath(['Home', 'Documents', 'Office']).check('Public')

    checkBoxPage.shouldHaveSelected(['public'])
    checkBoxPage.checkbox('Office').should('have.attr', 'aria-checked', 'mixed')
  })
})

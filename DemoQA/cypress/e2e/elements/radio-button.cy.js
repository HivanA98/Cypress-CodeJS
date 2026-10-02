import { radioButtonPage } from '../../pages'

describe('Elements - Radio Button', () => {
  beforeEach(() => {
    radioButtonPage.visit()
  })

  ;['Yes', 'Impressive'].forEach((label) => {
    it(`selects "${label}"`, () => {
      radioButtonPage.select(label)

      radioButtonPage.radio(label).should('be.checked')
      radioButtonPage.result.should('have.text', label)
    })
  })

  it('has "No" disabled', () => {
    radioButtonPage.radio('No').should('be.disabled')
  })
})

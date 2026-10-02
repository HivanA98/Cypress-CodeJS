import { automationPracticePage as page } from '../pages'

describe('Automation Practice', () => {
  beforeEach(() => {
    page.visit()
  })

  context('Form controls', () => {
    it('selects a radio button', () => {
      page.radio('radio2').check().should('be.checked')
      page.radio('radio1').should('not.be.checked')
    })

    it('checks multiple checkboxes', () => {
      page.checkbox('option1').check().should('be.checked')
      page.checkbox('option3').check().should('be.checked')
      page.checkbox('option2').should('not.be.checked')
    })

    it('selects an option from the static dropdown', () => {
      page.dropdown.select('Option2').should('have.value', 'option2')
    })

    it('selects a country from the autocomplete', () => {
      page.selectCountry('ind', 'India')
      page.countryInput.should('have.value', 'India')
    })

    it('hides and shows a textbox', () => {
      page.hideTextbox()
      page.displayedText.should('not.be.visible')
      page.showTextbox()
      page.displayedText.should('be.visible')
    })
  })

  context('Alerts', () => {
    it('shows the typed name in an alert', () => {
      const alertStub = cy.stub().as('alert')
      cy.on('window:alert', alertStub)

      page.nameInput.type('Ivan')
      page.alertButton.click()

      cy.get('@alert').should('have.been.calledWithMatch', 'Hello Ivan')
    })

    it('shows the typed name in a confirm box', () => {
      const confirmStub = cy.stub().returns(true).as('confirm')
      cy.on('window:confirm', confirmStub)

      page.nameInput.type('Ivan')
      page.confirmButton.click()

      cy.get('@confirm').should('have.been.calledWithMatch', 'Hello Ivan')
    })
  })

  context('Tables', () => {
    it('finds the price of a specific course', () => {
      page.getCourses().then((courses) => {
        const course = courses.find((c) =>
          c.course.includes('Master Selenium Automation in simple Python Language'),
        )
        expect(course.price).to.eq(25)
      })
    })

    it('sums the amounts in the fixed header table', () => {
      page.fixedHeaderAmounts.then(($cells) => {
        const sum = Cypress._.sumBy($cells, (cell) => Number(cell.innerText))
        page.totalAmount.should('contain.text', `Total Amount Collected: ${sum}`)
      })
    })
  })

  context('Navigation', () => {
    it('opens QA Click Academy in a new tab', () => {
      // Cypress tidak bisa berpindah tab, jadi cukup validasi atribut link-nya.
      page.openTabLink
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href')
        .and('include', 'qaclickacademy.com')
    })

    it('scrolls to the top via the mouse-hover menu', () => {
      page.hoverMenuLink('Top')
      cy.location('hash').should('eq', '#top')
    })
  })
})

import { accountSummaryPage, transferFundsPage, payBillsPage, navbar } from '../pages'

describe('Online Banking', () => {
  beforeEach(() => {
    cy.loginByApi()
  })

  it('shows all account groups on the summary page', () => {
    accountSummaryPage.visit().shouldBeDisplayed()
    accountSummaryPage.sectionHeaders.then(($headers) => {
      expect(Cypress._.map($headers, 'innerText')).to.deep.equal([
        'Cash Accounts',
        'Investment Accounts',
        'Credit Accounts',
        'Loan Accounts',
      ])
    })
  })

  it('navigates between the banking tabs', () => {
    accountSummaryPage.visit()
    navbar.openTab('Transfer Funds')
    cy.location('pathname').should('eq', '/bank/transfer-funds.html')

    navbar.openTab('Pay Bills')
    cy.location('pathname').should('eq', '/bank/pay-bills.html')
  })

  context('Transfer Funds', () => {
    const transfer = {
      fromAccount: 'Savings(Avail. balance = $ 1000)',
      toAccount: 'Checking(Avail. balance = $ -500.2)',
      amount: 250,
      description: 'Monthly savings',
    }

    it('verifies and submits a transfer', () => {
      transferFundsPage.visit().fillForm(transfer).submit()
      transferFundsPage.shouldShowVerification(transfer).submit()

      transferFundsPage.successAlert.should('contain.text', 'You successfully submitted your transaction.')
    })

    it('requires an amount', () => {
      transferFundsPage
        .visit()
        .fillForm({ ...transfer, amount: undefined })
        .submit()

      transferFundsPage.amountInput.then(($input) => {
        expect($input[0].validity.valueMissing).to.equal(true)
      })
    })
  })

  context('Pay Bills', () => {
    it('pays a saved payee', () => {
      const payment = {
        payee: 'Bank of America',
        account: 'Checking',
        amount: 120,
        date: new Date().toISOString().slice(0, 10),
        description: 'Credit card bill',
      }

      payBillsPage.visit().paySavedPayee(payment).shouldConfirmPayment(payment.amount)
    })
  })
})

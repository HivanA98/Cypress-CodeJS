<div align="center">

# 🛒 Saucedemo – Cypress E2E

[![Saucedemo](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/saucedemo.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/saucedemo.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-27-brightgreen)
![Pattern](https://img.shields.io/badge/pattern-Page%20Object%20Model-blue)

Complete shopping journey on **[saucedemo.com](https://www.saucedemo.com)**: login, catalogue, cart and checkout.

</div>

## ✨ Highlights

- 🧱 **Page Object Model** with a `BasePage`, chainable actions and a reusable `HeaderComponent`
- ⚡ **`cy.loginAs()`** custom command backed by `cy.session()` – tests skip the login UI after the first run
- 🧮 **Business-rule assertions** – checkout verifies _item total = Σ prices_ and _total = item total + tax_
- 🐛 **Known-bug documentation** – tests describe the behaviour of `problem_user` and `performance_glitch_user`
- 📊 HTML report via `cypress-mochawesome-reporter`

## 🧪 Test coverage

| Spec               | Tests | Scenarios                                                                             |
| ------------------ | :---: | ------------------------------------------------------------------------------------- |
| `login.cy.js`      |   7   | Successful login, logout, locked user, wrong password, empty fields, anonymous access |
| `inventory.cy.js`  |   9   | Product count, 4 sort options, cart badge, reset app state, product detail            |
| `cart.cy.js`       |   3   | Cart content, remove item, continue shopping                                          |
| `checkout.cy.js`   |   4   | E2E checkout with total validation, required customer fields                          |
| `user-types.cy.js` |   4   | `performance_glitch_user`, `problem_user` (2 bugs), `locked_out_user`                 |

## 🗂️ Project structure

```
cypress/
├── e2e/                     # specs – scenarios & assertions only
├── pages/
│   ├── BasePage.js          # visit() + byTest() helper
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── ProductDetailPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── components/HeaderComponent.js
│   └── index.js             # single import entry point
├── fixtures/                # users, checkout data, error messages
└── support/commands.js      # cy.loginAs()
```

## 💡 Example

```js
it('E2E: completes checkout with multiple products', () => {
  checkoutPage.fillInformation(customer).continue()
  checkoutPage.shouldHaveCorrectTotals().finish()
  checkoutPage.shouldBeComplete()
  header.shouldHaveCartCount(0)
})
```

## 🚀 Run it

```bash
npm install
npm run cy:open     # interactive
npm test            # headless – report at cypress/reports/index.html
```

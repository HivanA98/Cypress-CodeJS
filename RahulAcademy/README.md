<div align="center">

# 🎓 Rahul Shetty Academy – Cypress E2E

[![Rahul Shetty Academy](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/rahulacademy.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/rahulacademy.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-20-brightgreen)
![Pattern](https://img.shields.io/badge/pattern-Page%20Object%20Model-blue)

Practice applications from **[rahulshettyacademy.com](https://rahulshettyacademy.com)**: an Angular form, a mini shop and the classic Automation Practice page.

</div>

## ✨ Highlights

- 🅰️ **Angular** form validation and two-way data binding
- 🛍️ **Shop E2E** – add products, verify the **grand total** is the sum of all lines, purchase with country autocomplete
- 📊 **Web table parsing** into objects with `Cypress._` helpers
- 🔔 Alert & confirm boxes verified with `cy.stub()`
- 🖱️ Hidden mouse-hover menus and new-tab links handled the Cypress way

## 🧪 Test coverage

| Spec                        | Application         | Tests | Scenarios                                                                          |
| --------------------------- | ------------------- | :---: | ---------------------------------------------------------------------------------- |
| `angular-form.cy.js`        | ProtoCommerce form  |   5   | Submit, two-way binding, min length, required, disabled option                     |
| `shop.cy.js`                | ProtoCommerce shop  |   4   | Product list, cart counter, grand total, E2E purchase                              |
| `automation-practice.cy.js` | Automation Practice |  11   | Radio, checkbox, dropdown, autocomplete, show/hide, alerts, tables, new tab, hover |

```js
it('sums the amounts in the fixed header table', () => {
  page.fixedHeaderAmounts.then(($cells) => {
    const sum = Cypress._.sumBy($cells, (cell) => Number(cell.innerText))
    page.totalAmount.should('contain.text', `Total Amount Collected: ${sum}`)
  })
})
```

## 🗂️ Project structure

```
cypress/
├── e2e/
├── pages/
│   ├── AngularFormPage.js · ShopPage.js · CheckoutPage.js
│   ├── AutomationPracticePage.js
│   └── index.js
└── fixtures/student.json
```

## 🚀 Run it

```bash
npm install
npm test            # report at cypress/reports/index.html
npm run cy:open
```

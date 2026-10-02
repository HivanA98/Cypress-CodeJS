<div align="center">

# 🧩 DemoQA – Cypress UI Components

[![DemoQA](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/demoqa.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/demoqa.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Faker](https://img.shields.io/badge/data-Faker-blueviolet)
![Tests](https://img.shields.io/badge/tests-28-brightgreen)

A tour of the trickiest UI interactions on **[demoqa.com](https://demoqa.com)** – tables, trees, date pickers, alerts, iframes and more.

</div>

## ✨ Highlights

- 🎲 **Fresh test data every run** with `@faker-js/faker` factories (`support/factories.js`)
- 🗂️ Page Objects **grouped by menu** – `pages/elements`, `pages/forms`, `pages/alerts`
- ⏱️ `cy.clock()` / `cy.tick()` to test a 5-second alert **instantly**
- 🪟 `cy.stub(window.open)` to verify new tabs/windows Cypress cannot switch to
- 📎 File upload with `selectFile`, react-select & react-datepicker handling
- 🚫 Ad blocking with `cy.intercept` + DOM cleanup for stable clicks

## 🧪 Test coverage

| Area | Spec | Tests | What is tested |
| --- | --- | :-: | --- |
| Elements | `text-box.cy.js` | 2 | Output panel, invalid email |
| | `check-box.cy.js` | 2 | Tree selection – root, nested, mixed state |
| | `radio-button.cy.js` | 3 | Selection & disabled option |
| | `web-tables.cy.js` | 5 | **Full CRUD**, search, validation |
| | `buttons.cy.js` | 3 | Double, right and dynamic-id click |
| Forms | `practice-form.cy.js` | 3 | Full form + summary modal, required only, validation |
| Alerts & Windows | `alerts.cy.js` | 5 | Alert, timed alert, confirm OK/Cancel, prompt |
| | `frames-windows.cy.js` | 5 | Iframes, new tab, new window |

```js
it('shows an alert after 5 seconds', () => {
  cy.clock()
  cy.on('window:alert', cy.stub().as('alert'))

  alertsPage.timerAlertButton.click()
  cy.tick(5000)
  cy.get('@alert').should('have.been.calledOnceWith', 'This alert appeared after 5 seconds')
})
```

## 🗂️ Project structure

```
cypress/
├── e2e/{elements,forms,alerts-frames-windows}/
├── pages/{elements,forms,alerts}/ + BasePage.js + index.js
├── fixtures/avatar.png
└── support/factories.js
```

## 🚀 Run it

```bash
npm install
npm test            # report at cypress/reports/index.html
npm run cy:open
```

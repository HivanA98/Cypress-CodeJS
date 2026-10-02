<div align="center">

# 🏦 Zero Bank – Cypress E2E

[![Zero Bank](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/websecurity.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/websecurity.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-11-brightgreen)
![Technique](https://img.shields.io/badge/technique-API%20login-orange)

Online banking flows on the **[Zero Bank](http://zero.webappsecurity.com)** demo site by Micro Focus.

</div>

## ⚡ API login instead of UI login

Logging in through the UI before every test is slow and fragile. The `cy.loginByApi()` command posts the login
form directly with `cy.request` and caches the cookie with `cy.session` – banking tests start already signed in.

```js
Cypress.Commands.add('loginByApi', () => {
  cy.fixture('users').then(({ valid }) => {
    cy.session(['zero-bank', valid.username], () => {
      cy.request({
        method: 'POST',
        url: '/signin.html',
        form: true,
        body: { user_login: valid.username, user_password: valid.password, submit: 'Sign in' },
        followRedirect: false,
      }).its('status').should('eq', 302)
    })
  })
})
```

The login **UI itself** is still covered in `login.cy.js`.

## 🧪 Test coverage

| Spec | Tests | Scenarios |
| --- | :-: | --- |
| `login.cy.js` | 4 | Valid login, invalid password, logout, anonymous redirect |
| `banking.cy.js` | 5 | Account summary, tab navigation, transfer (verify + submit), required amount, pay saved payee |
| `public-pages.cy.js` | 2 | Site search, feedback form |

## 🗂️ Project structure

```
cypress/
├── e2e/
├── pages/
│   ├── LoginPage.js · AccountSummaryPage.js
│   ├── TransferFundsPage.js · PayBillsPage.js · FeedbackPage.js
│   ├── components/Navbar.js
│   └── index.js
├── fixtures/users.json
└── support/commands.js   # cy.loginByApi()
```

## 🚀 Run it

```bash
npm install
npm test            # report at cypress/reports/index.html
npm run cy:open
```

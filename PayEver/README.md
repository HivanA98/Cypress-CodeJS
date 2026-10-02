<div align="center">

# 💳 PayEver commerceOS – Cypress E2E

[![PayEver](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/payever.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/payever.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-5%20%2B%201%20auth-brightgreen)

Login page of the **[PayEver commerceOS](https://commerceos.staging.devpayever.com/login)** staging environment (Angular).

</div>

## ✨ Highlights

- 🔐 Credentials moved **out of the spec** into a git-ignored `cypress.env.json`, read with `cy.env()`
- ⏭️ The real-login test **skips itself** when no credentials are available – the suite stays green for everyone
- 🌍 Locale-aware URL assertions (`/en/login`)

```js
beforeEach(function () {
  cy.env(['PAYEVER_EMAIL', 'PAYEVER_PASSWORD']).then((creds) => {
    if (!creds.PAYEVER_EMAIL || !creds.PAYEVER_PASSWORD) this.skip()
    cy.wrap(creds).as('creds')
  })
})
```

## 🧪 Test coverage

| Suite                     | Tests | Scenarios                                                                     |
| ------------------------- | :---: | ----------------------------------------------------------------------------- |
| Login page                |   5   | Form rendering, social sign-in, empty form, invalid email, Sign up navigation |
| Login with a test account |   1   | Real login _(needs credentials)_                                              |

## 🔐 Test account

```bash
cp cypress.env.example.json cypress.env.json
```

For CI, add the JSON as the repository secret **`PAYEVER_CYPRESS_ENV`**.

## 🚀 Run it

```bash
npm install
npm test            # report at cypress/reports/index.html
```

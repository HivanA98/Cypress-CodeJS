<div align="center">

# ♻️ GreenHoop – Cypress E2E

[![GreenHoop](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/greenhoop.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/greenhoop.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-3%20%2B%205%20auth-brightgreen)
![Locale](https://img.shields.io/badge/UI-Traditional%20Chinese-red)

Login page of the **[GreenHoop](https://uat.greenhoopapp.com)** recycling platform (UAT environment).

</div>

## ✨ Highlights

- 🎯 **Stable selectors** – the old React auto-generated ids (`[id=":r0:"]`) were replaced with placeholders and button labels
- 👥 **Data-driven role logins** – ASTD, collector, manufacturer, logistic and customer admins
- ⏭️ Each role **skips itself** when its credentials are not configured
- 🈶 All Chinese UI texts centralised in one `TEXT` map inside the Page Object

## 🧪 Test coverage

| Suite          | Tests | Scenarios                                       |
| -------------- | :---: | ----------------------------------------------- |
| Login page     |   3   | Form controls, typed values, show/hide password |
| Login per role |   5   | One login per admin role _(needs credentials)_  |

## 🔐 Test accounts

```bash
cp cypress.env.example.json cypress.env.json   # fill in the roles you have
```

For CI, add the JSON as the repository secret **`GREENHOOP_CYPRESS_ENV`**.

## 🚀 Run it

```bash
npm install
npm test            # report at cypress/reports/index.html
```

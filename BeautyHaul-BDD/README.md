<div align="center">

# 🥒 BeautyHaul – Cypress BDD

[![BeautyHaul BDD](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/beautyhaul-bdd.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/beautyhaul-bdd.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-Gherkin-23D96C?logo=cucumber&logoColor=white)
![Scenarios](https://img.shields.io/badge/scenarios-13-brightgreen)

The [BeautyHaul](../BeautyHaul) form tests expressed as **Gherkin specifications**.

</div>

## ✨ Highlights

- 🌐 Backend **stubbed with `cy.intercept`** – scenarios never touch the reCAPTCHA-protected API
- 🧾 **Data Table** to assert all required-field errors in one step
- 📋 **Scenario Outlines** for field validation and input sanitizing
- ♻️ **Shared steps** (`common.steps.js`) pick the right Page Object based on the current page
- 🏷️ `@smoke` tag for a quick sanity run

```gherkin
Scenario: Empty registration form shows all required errors
  When I submit the register form
  Then I should see these required field errors:
    | field         | message                   |
    | nama_depan    | Nama depan harus diisi    |
    | email         | Email harus diisi         |
  And no register request should be sent
```

## 🧪 Features

| Feature            | Scenarios | Covers                                                               |
| ------------------ | :-------: | -------------------------------------------------------------------- |
| `login.feature`    |     3     | Empty form, invalid email, wrong credentials (stubbed 401)           |
| `register.feature` |    10     | Required fields, field validation, password confirmation, sanitizing |

## 🗂️ Project structure

```
cypress/
├── e2e/*.feature
├── pages/                    # BasePage, LoginPage, RegisterPage
├── fixtures/
└── support/
    ├── step_definitions/     # login, register, common
    └── e2e.js                # tracker blocking
```

## 🚀 Run it

```bash
npm install
npm test              # report at cypress/reports/cucumber-report.html
npm run test:smoke
```

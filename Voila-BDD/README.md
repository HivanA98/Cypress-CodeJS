<div align="center">

# 👜 voilà.id – Cypress BDD

[![voila.id BDD](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/voila-bdd.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/voila-bdd.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-Gherkin-23D96C?logo=cucumber&logoColor=white)
![Tags](https://img.shields.io/badge/tags-guest%20%7C%20auth%20%7C%20destructive-lightgrey)

BDD suite for the Indonesian luxury fashion e-commerce **[voilà.id](https://voila.id)** – a real production website.

</div>

## 🏷️ Tag strategy

Testing a live shop means some scenarios must **never** run by accident. Tags make the intent explicit:

| Tag            | Meaning                                               |      Runs by default      |
| -------------- | ----------------------------------------------------- | :-----------------------: |
| `@guest`       | No account needed – browsing, search, product pages   |            ✅             |
| `@auth`        | Needs a test account (`cypress.env.json` / CI secret) | ✅ when credentials exist |
| `@destructive` | Places a **real order** – opt-in only                 |            ❌             |
| `@wip`         | Selectors still being verified                        |            ❌             |

The default filter lives in `cypress.config.js` (`not @destructive and not @wip`).
In CI the workflow runs `@guest` scenarios, and the full suite once the `VOILA_CYPRESS_ENV` secret is set.

> [!NOTE]
> voilà.id currently answers **HTTP 403** to GitHub-hosted runners (its firewall blocks datacenter IPs).
> The workflow checks this first and **skips the suite with a warning** instead of failing. Run it locally,
> or point the workflow at a self-hosted runner in Indonesia, to execute the scenarios in CI.

## ✨ Highlights

- 🎯 Page Objects built on the site's stable **`data-test-id`** attributes
- 🧹 Automatic handling of the first-visit **coachmark overlay** that blocks clicks
- 🔐 Credentials read with **`cy.env()`** (Cypress 16 secrets API) and cached with `cy.session()`
- 🔁 Robust product opening that survives infinite-scroll re-renders

## 🧪 Features

| Feature                     | Tag                  | Scenarios                                                                     |
| --------------------------- | -------------------- | ----------------------------------------------------------------------------- |
| `guest/browse.feature`      | `@guest`             | Header categories (Data Table), sign in page & SSO options                    |
| `guest/search.feature`      | `@guest`             | Search by brand (Scenario Outline), product detail, guest add-to-bag redirect |
| `account/login.feature`     | `@auth`              | Valid login, wrong password – two-step login form                             |
| `account/profile.feature`   | `@auth @wip`         | Change first name                                                             |
| `checkout/checkout.feature` | `@auth`              | Bag → checkout, replace a product                                             |
|                             | `@auth @destructive` | Place an order and compare totals                                             |

## 🔐 Test account

```bash
cp cypress.env.example.json cypress.env.json   # fill in VOILA_EMAIL / VOILA_PASSWORD
```

For CI, add the same JSON as the repository secret **`VOILA_CYPRESS_ENV`**.

## 🚀 Run it

```bash
npm install
npm run test:guest    # no account required
npm run test:auth     # account scenarios
npm test              # everything except @destructive and @wip
```

Report: `cypress/reports/cucumber-report.html` · Screenshots of earlier runs: [`docs/`](docs)

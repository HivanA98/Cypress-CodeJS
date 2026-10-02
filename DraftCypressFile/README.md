<div align="center">

# 🧰 Cypress Starter Template

[![Starter Template](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/template.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/template.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Template](https://img.shields.io/badge/use%20as-template-blue)

A minimal, ready-to-copy Cypress project with the same conventions as every suite in this repository.
The example tests target the TodoMVC app at [example.cypress.io/todo](https://example.cypress.io/todo).

</div>

## 📐 Conventions

| Folder | Purpose |
| --- | --- |
| `cypress/e2e` | Specs – scenarios and assertions only, **no raw selectors** |
| `cypress/pages` | Page Objects – one class per page, exported as a singleton, chainable methods |
| `cypress/fixtures` | Test data in JSON |
| `cypress/support` | Custom commands (`cy.getByCy` example) and global setup |

```js
todoPage.toggle('Pay electric bill').clearCompleted()
todoPage.items.should('have.length', 1).and('contain.text', 'Walk the dog')
```

- Prefer `data-test` / `data-testid` / `data-cy` attributes over CSS classes (`BasePage.byTestId`)
- HTML reports via `cypress-mochawesome-reporter`
- Retries enabled in run mode only

## 🚀 Start a new project

```bash
cp -r DraftCypressFile MyNewProject
cd MyNewProject
npm install
# update baseUrl in cypress.config.js and the name in package.json
npm run cy:open
```

To add CI, copy `.github/workflows/template.yml` and change the `project` input.

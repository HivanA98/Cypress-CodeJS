<div align="center">

# 💄 BeautyHaul – Cypress E2E

[![BeautyHaul](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/beautyhaul.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/beautyhaul.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-16-brightgreen)
![Technique](https://img.shields.io/badge/technique-network%20stubbing-orange)

Login and registration forms of the live beauty e-commerce site **[beautyhaul.com](https://www.beautyhaul.com)**.

</div>

## 🎯 The challenge

BeautyHaul is a **production site protected by reCAPTCHA** – real logins and registrations cannot be automated.
This suite still tests the forms thoroughly by combining real UI checks with **network stubbing**:

| Layer | Approach |
| --- | --- |
| Client-side validation | Tested for real – error messages, input sanitizing, navigation |
| Backend (`/ajax/account/*`) | **Stubbed with `cy.intercept`** – no real account or captcha needed |
| Request payload | Verified from the intercepted request |
| Invalid forms | Asserted that **no request is sent** at all |
| Third-party trackers | Blocked for faster, more stable runs |

```js
it('shows an error toast when the credentials are wrong (401)', () => {
  loginPage.stubLoginApi({ statusCode: 401, body: {} })
  loginPage.login('ivan.qa.test@example.com', 'WrongPassword1')

  cy.wait('@loginRequest')
  loginPage.shouldShowToast('Email atau password salah')
})
```

## 🧪 Test coverage

| Spec | Tests | Scenarios |
| --- | :-: | --- |
| `login.cy.js` | 6 | Required fields, email format, request payload, 401 toast, navigation links |
| `register.cy.js` | 10 | Required fields, 6 data-driven invalid cases, valid data, name & phone sanitizing |

## 🗂️ Project structure

```
cypress/
├── e2e/
├── pages/
│   ├── BasePage.js           # field(), fieldError(), submit(), toast helpers
│   ├── LoginPage.js          # + stubLoginApi()
│   ├── RegisterPage.js       # + stubRegisterApi(), fillForm()
│   └── index.js
├── fixtures/register.json    # valid user + invalid cases (data-driven)
└── support/e2e.js            # tracker blocking
```

## 🚀 Run it

```bash
npm install
npm test            # report at cypress/reports/index.html
npm run cy:open
```

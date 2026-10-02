<div align="center">

# 🏥 CURA Healthcare – Cypress E2E

[![CURA Healthcare](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/herokuapp.yml/badge.svg)](https://github.com/HivanA98/Cypress-CodeJS/actions/workflows/herokuapp.yml)
![Cypress](https://img.shields.io/badge/Cypress-16.1-17202C?logo=cypress&logoColor=white)
![Tests](https://img.shields.io/badge/tests-15-brightgreen)
![Pattern](https://img.shields.io/badge/pattern-Page%20Object%20Model-blue)

Appointment booking flow of the **[CURA Healthcare Service](https://katalon-demo-cura.herokuapp.com)** demo app (hosted on Heroku).

</div>

## ✨ Highlights

- 📅 **Dynamic dates** (`support/utils.js`) – no hard-coded dates that silently expire
- 🔁 **Data-driven bookings** generated from `fixtures/appointments.json` – one test per facility
- ⚡ **`cy.login()`** backed by `cy.session()`
- ✅ End-to-end verification: form → confirmation page → **History** page
- 🔒 Access-control tests for anonymous users

```js
appointments.forEach((data, index) => {
  it(`books an appointment at ${data.facility} (${data.program})`, () => {
    const appointment = { ...data, visitDate: formatDate(7 + index) }

    appointmentPage.fillForm(appointment).book()
    confirmationPage.shouldShowAppointment(appointment)
  })
})
```

## 🧪 Test coverage

| Spec                | Tests | Scenarios                                                                           |
| ------------------- | :---: | ----------------------------------------------------------------------------------- |
| `login.cy.js`       |   7   | Demo credentials, login, logout, 4 data-driven rejected logins                      |
| `appointment.cy.js` |   8   | Defaults, 3 facility bookings, required date, History page, 2 access-control checks |

## 🗂️ Project structure

```
cypress/
├── e2e/
├── pages/
│   ├── HomePage.js · LoginPage.js · AppointmentPage.js
│   ├── ConfirmationPage.js · HistoryPage.js
│   ├── components/SideMenu.js
│   └── index.js
├── fixtures/             # users.json, appointments.json
└── support/
    ├── commands.js       # cy.login()
    └── utils.js          # formatDate()
```

## 🚀 Run it

```bash
npm install
npm test            # report at cypress/reports/index.html
npm run cy:open
```

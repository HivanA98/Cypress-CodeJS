import 'cypress-mochawesome-reporter/register'
import './commands'

// Zero Bank tidak lagi menyajikan file JS/CSS miliknya sendiri (HTTP 404), sehingga
// script inline di halaman melempar ReferenceError. Error ini berasal dari website,
// bukan dari fitur yang diuji, jadi hanya error tersebut yang diabaikan.
const BROKEN_ASSET_ERRORS = /(\$|jQuery|Placeholders) is not defined/

Cypress.on('uncaught:exception', (err) => {
  if (BROKEN_ASSET_ERRORS.test(err.message)) return false
})

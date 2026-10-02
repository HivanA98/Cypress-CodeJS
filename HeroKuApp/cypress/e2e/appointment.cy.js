import { appointmentPage, confirmationPage, historyPage, sideMenu } from '../pages'
import appointments from '../fixtures/appointments.json'
import { formatDate } from '../support/utils'

describe('Make Appointment', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/#appointment')
  })

  it('has sensible default values', () => {
    appointmentPage.facilitySelect.should('have.value', 'Tokyo CURA Healthcare Center')
    appointmentPage.readmissionCheckbox.should('not.be.checked')
    appointmentPage.programRadio('Medicare').should('be.checked')
  })

  // Data-driven: satu test untuk setiap fasilitas di fixture.
  appointments.forEach((data, index) => {
    it(`books an appointment at ${data.facility} (${data.program})`, () => {
      const appointment = { ...data, visitDate: formatDate(7 + index) }

      appointmentPage.fillForm(appointment).book()
      confirmationPage.shouldShowAppointment(appointment)
    })
  })

  it('requires a visit date', () => {
    appointmentPage.fillForm({ ...appointments[0], visitDate: '' }).book()

    // Validasi HTML5 "required" mencegah form terkirim.
    appointmentPage.visitDateInput.then(($input) => {
      expect($input[0].validity.valueMissing).to.equal(true)
    })
    appointmentPage.shouldBeDisplayed()
  })

  it('shows the booked appointment on the History page', () => {
    const appointment = { ...appointments[1], visitDate: formatDate(30) }

    appointmentPage.fillForm(appointment).book()
    confirmationPage.shouldShowAppointment(appointment)

    sideMenu.navigateTo('History')
    historyPage.shouldContainAppointment(appointment)
  })
})

describe('Access control', () => {
  ;['/history.php', '/appointment.php'].forEach((path) => {
    it(`redirects anonymous users from ${path} to the homepage`, () => {
      cy.visit(path)
      cy.location('pathname').should('eq', '/')
    })
  })
})

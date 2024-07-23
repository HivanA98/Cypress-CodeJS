/// <reference types="cypress" />
import step from './step'

describe('HeroKuApp Test', () => {

  it('Normal Login', () => {
    step.URL()
    step.Login()
  });

  it('False Login', () => {
    step.URL()
    step.WrongLogin()
    step.Warning()
  });
    
  it('E2E basic', () => {
    step.URL()
    step.Login()
    step.readmission()
    step.Comment()
    step.DateBooking()
    step.BookAppointment()
  });    
    
  it('E2E Variation', () => {
    step.URL()
    step.Login()
    // step.ComboFacility()
    step.Comment()
    step.DateBooking()
    step.BookAppointment()
  });


  });
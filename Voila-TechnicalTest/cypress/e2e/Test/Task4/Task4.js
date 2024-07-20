/// <reference types="cypress" />

import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Task4 from './Task4steps'

before(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

Given('When The user already login', () => {
    Task4.URL()
    Task4.Login()
})

When('The user want to correct his first name', () => {
    Task4.ProfileMenu()
})

Then('The user have a correct first name', () => {
    Task4.ChangeFirstName()
})


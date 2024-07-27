/// <reference types="cypress" />
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Task1 from './Task1Steps'

Given('The user Visit the website', () => {
    Task1.URL()
})

Given('The user login with valid credintial', () => {
    Task1.Login()
})

When('The user search some product', () => {
    Task1.Search()
})

When('The user add the product to the cart', () => {
    Task1.Addtocart()
    Task1.Checkout()
})

Then('The user confirmation the payment', () => {
    Task1.SelectPayment()
    Task1.selectCourier()
})

Then('The user Verification the ammount', () => {
    Task1.Confirm()
})

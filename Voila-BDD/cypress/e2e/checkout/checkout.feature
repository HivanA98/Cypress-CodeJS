@auth
Feature: Checkout
  As a signed-in customer
  I want to check out the products in my bag
  So that I can place an order

  Background:
    Given I am signed in with the test account
    And I am on the homepage
    When I search for "dress"
    And I open the first product that is in stock
    And I add the product to the bag

  Scenario: Proceed from the bag to the checkout page
    When I open the bag
    And I proceed to checkout
    Then I should see the delivery address

  Scenario: Replace a product in the bag
    Given I am on the homepage
    When I search for "shirt"
    And I open the first product that is in stock
    And I add the product to the bag
    And I open the bag
    And I remove the first product from the bag
    And I proceed to checkout
    Then I should see the delivery address

  # Membuat order sungguhan di website produksi – hanya jalan jika di-include secara eksplisit:
  # npx cypress run --expose tags=@destructive
  @destructive
  Scenario: Place an order and verify the amount
    When I open the bag
    And I proceed to checkout
    And I choose a payment method
    And I choose the courier "JNE REG"
    And I place the order
    Then the payment page should show the same total as the checkout summary

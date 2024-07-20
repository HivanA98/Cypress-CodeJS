Feature: E2E Checkouts
  Scenario: User can checkout a product
    Given The user Visit the website
    Given The user login with valid credintial
    When The user search some product
    When The user add the product to the cart
    Then The user confirmation the payment
    Then The user Verification the ammount
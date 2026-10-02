@guest
Feature: Product search
  As a visitor
  I want to search for products or brands
  So that I can quickly find what I am looking for

  Background:
    Given I am on the homepage

  Scenario Outline: Search by brand – <keyword>
    When I search for "<keyword>"
    Then I should see search results for "<keyword>"

    Examples:
      | keyword |
      | gucci   |
      | prada   |

  Scenario: Open a product from the search results
    When I search for "gucci"
    And I open the first product that is in stock
    Then I should see the product detail page of that product

  Scenario: Guest must sign in before adding to bag
    When I search for "gucci"
    And I open the first product that is in stock
    And I add the product to the bag
    Then I should be redirected to the sign in page

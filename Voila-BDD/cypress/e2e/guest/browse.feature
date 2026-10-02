@guest
Feature: Browse as a guest
  As a visitor without an account
  I want to explore voilà.id
  So that I can find luxury products before signing in

  Background:
    Given I am on the homepage

  Scenario: Main categories are available in the header
    Then I should see these categories in the header:
      | category |
      | Women    |
      | Men      |
      | Kids     |
      | Brands   |

  Scenario: Guest can open the sign in page
    When I click Sign In in the header
    Then I should see the sign in form
    And I should see the Google and Facebook sign in options

@auth
Feature: Account login
  Requires a test account in cypress.env.json (see cypress.env.example.json).

  Background:
    Given I am on the sign in page

  Scenario: Login with a valid account
    When I sign in with the test account
    Then I should be signed in

  Scenario: Login with a wrong password
    When I sign in with the test account email and password "WrongPassword123"
    Then I should see the wrong credential error

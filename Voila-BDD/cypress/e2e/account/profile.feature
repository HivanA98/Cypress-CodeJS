@auth @wip
Feature: Profile
  Marked @wip: the edit/save controls on the profile page have no data-test-id yet,
  so these selectors still need to be verified against the live site.

  Scenario: Change first name
    Given I am signed in with the test account
    When I open my profile
    And I change my first name to "Ivan"
    Then my first name should be "Ivan"

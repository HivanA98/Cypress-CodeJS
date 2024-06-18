Feature: JSONPlaceholder API Testing

  Background:
    * url 'https://jsonplaceholder.typicode.com'

  Scenario: Verify GET endpoint
    Given path '/posts'
    When method get
    Then status 200
    And match each response == { "id": "#number", "title": "#string", "body": "#string", "userId": "#notnull" }

  Scenario: Generate HTML report
    * configure report = { showLog: true, enableCucumberJsonReport: true }

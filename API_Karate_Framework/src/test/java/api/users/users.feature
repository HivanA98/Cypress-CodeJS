Feature: Users API

  Background:
    * url baseUrl
    * def userSchema = read('classpath:api/schemas/user.json')

  @smoke
  Scenario: Get all users
    Given path 'users'
    When method get
    Then status 200
    And match response == '#[10]'
    And match each response == userSchema

  Scenario: Get a user and then fetch that user's posts (chained requests)
    Given path 'users', 1
    When method get
    Then status 200
    And match response.username == 'Bret'
    * def userId = response.id

    Given path 'posts'
    And param userId = userId
    When method get
    Then status 200
    And match each response contains { userId: '#(userId)' }

  Scenario: Every user email is unique
    Given path 'users'
    When method get
    Then status 200
    * def emails = karate.map(response, function(u){ return u.email })
    * def uniqueEmails = karate.distinct(emails)
    And assert uniqueEmails.length == emails.length

  Scenario: Response time is acceptable
    Given path 'users'
    When method get
    Then status 200
    And assert responseTime < 5000

Feature: order hisotry related tests



    Scenario: Validate order history
        Given I launched the application
        When sign in to the application
        When I navigate to order history
        Then I should identify previous order


    @regression
    Scenario:Add to cart validation
        Given I launched the application
        When I sign with "Uma Mahesh" and "Password"
        When I navigate to order history
        Then I should identify previous order


    @datadriver
    Scenario Outline: Validate with multiple data
        Given I launched the application
        When I sign with "<username>" and "<Password>"
        When I navigate to order history
        Then I should identify previous order

        Examples:
            | username              | Password       |
            | testlnfn323@gmail.com | Playwright@123 |
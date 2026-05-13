Feature: order hisotry related tests


@regression
Scenario: Validate order history
Given I launched the application
When sign in to the application
When I navigate to order history
Then I should identify previous order

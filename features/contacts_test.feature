Feature: Validate Medavie Blue Cross Contact Information

  Scenario: English contact page displaus correct phone numbers
    Given I open the homepage
    When I navigate to the nav menu and click on "Contact"
    Then I should be on the Contact page

  Scenario: French contact page opens
    Given I open the homepage in French
    When I navigate to the nav menu and click on "Coordonnées"
    Then I should be on the Coordonnées page
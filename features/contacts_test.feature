Feature: Validate Medavie Blue Cross Contact Information
  This feature verifies that the Medavie Blue Cross Contact pages
  display the correct phone numbers in both English and French

  Scenario: English contact page displays correct phone numbers
    Given I open the homepage
    When I navigate to the nav menu and click on "Contact"
    Then I should be on the Contact page
    And I should see "1-888-227-3400" for "Atlantic Region"
    And I should see "1-888-588-1212" for "Quebec"
    And I should see "1-800-355-9133" for "Ontario"
    And I should see "1-800-667-4511" for "Elsewhere in Canada"

  Scenario: French contact page displays correct phone numbers
    Given I open the homepage in French
    When I navigate to the nav menu and click on "Coordonnées"
    Then I should be on the Coordonnées page
    And I should see "18882273400" for "Région de l’Atlantique"
    And I should see "18885881212" for "Québec"
    And I should see "1-8003559133" for "Ontario"
    And I should see "18006674511" for "Ailleurs au Canada"
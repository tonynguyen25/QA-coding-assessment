Feature: Validate Medavie Blue Cross contact information

    Scenario: Verify English Contact Page
        Given I open the English homepage
        When I click the Contact link
        Then I should see the English phone numbers

    Scenario: Verify French Contact Page
        Given I open the French homepage
        When I click the Coordonnées link
        Then I should see the French phone numbers
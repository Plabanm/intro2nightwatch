Feature: Search for a product 

Scenario: search for a product

  Given I on argos home page
  Then I search for  "toy"
  And I should see toy search results 
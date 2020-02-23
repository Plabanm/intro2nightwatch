const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const home = client.page.homePage()
const result = client.page.resultPage()
 

Given(/^I on argos home page$/, function() {
  return client.url('https://www.argos.co.uk/')
});

When(/^I search for  "([^"]*)"$/, function(term) {
  return home
    .pause(2000)
    .setSearchKeyWord(term)
    .submitSearch()
});

Then(/^I should see toy search results$/, function() {
  return result
    .waitForElementVisible('@searchTermResult')
    .assert.containsText('@searchTermResult', 'toy')

});
     
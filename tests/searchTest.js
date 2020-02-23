module.exports = {
    '@tags': ['search'],
    'search test': (browser) => {
        const home = browser.page.homePage()
        const result = browser.page.resultPage()
  
      home
        .navigate()
        .waitForElementVisible('body', 'home page loaded')
        .waitForElementVisible('@searchBox')
        .setSearchKeyWord('toy')
        .submitSearch()
  
      result
        .waitForElementVisible('@searchTermResult')
        .assert.containsText('@searchTermResult', 'toy')
        .end()
    }
}
module.exports = {
    elements: {
      searchBox: '[data-test="search-input"]',
      submitButton: '[data-test="search-button"]'
    },
    commands: [{
      setSearchKeyWord (keyword) {
        return this
          .waitForElementVisible('@searchBox')
          .setValue('@searchBox', keyword)
      },
      submitSearch () {
        return this
          .waitForElementVisible('@submitButton')
          .click('@submitButton')
      }
    }]
  }
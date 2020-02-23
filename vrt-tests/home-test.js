module.exports = {

  // Compare screenshot of home pages
  'argos Home page': function (browser) {
    browser
      .url('https://www.argos.co.uk/')
      .waitForElementVisible('body', 1000)
      .resizeWindow(1366, 900)
      .assert.screenshotIdenticalToBaseline('body')
      .end()
  }
}
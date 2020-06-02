describe("webdriver.io page", () => {
  afterEach(() => {
    browser.clearLocalStorage()
  })

  it("should have the right title", () => {
    browser.url("https://webdriver.io")
    const title = browser.getTitle()
    expect(browser).toHaveTitle("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js")
  })

  it("should have the right title - 2", () => {
    browser.url("https://webdriver.io")
    const title = browser.getTitle()
    expect(browser).toHaveTitle("WebdriverIO · Next-gen browser and mobile automation test framework for Node.js")
  })
})

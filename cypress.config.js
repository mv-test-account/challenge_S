const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  requestTimeout: 10000,
  chromeWebSecurity: false,
  viewportHeight: 900,
  viewportWidth: 1440,
  projectId: 'ye8s1w',
  video: false,
  browser: 'chrome',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    saveAllAttempts: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
    defaultCommandTimeout: 10000,
    slowTestThreshold: 10000,
    baseUrl: 'https://qa-engineer.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})

const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const collectCypressTestResults = require('./cypress/support/test-summary');
const { configureVisualRegression } = require('cypress-visual-regression')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  videoCompression: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    videoOnFailOnly: true,
    saveAllAttempts: false,
    overwrite: true
  },
  e2e: {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 ' +
               '(KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    env: {
      visualRegressionType: 'regression'
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async (results) => {
        console.log('override after:run');
        await afterRunHook();
        await collectCypressTestResults(results);
      });
      configureVisualRegression(on)
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hu5vpz",
  videosFolder: 'cypress/videos', // Pasta onde os vídeos serão salvos
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (config.specs.includes('cypress/e2e/frontLogin.cy.js')) {
          launchOptions.record = true;
        } else {
          launchOptions.record = false;
        }

        return launchOptions;
      });
    },
  },
});

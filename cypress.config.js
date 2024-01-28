const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hu5vpz",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video: true,
  videoCompression: false,
  e2e: {
    baseUrl: 'https://api.escuelajs.co/api/v1/'
  },
});

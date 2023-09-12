module.exports = {
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://harbor.example.com',   
    supportFile: false,
    specPattern: 'e2e/*.cy.{js,jsx,ts,tsx}',
  },
};

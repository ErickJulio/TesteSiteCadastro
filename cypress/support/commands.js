Cypress.Commands.add('login', () => {
    cy.visit('https://cadastro-cliente.onrender.com');
  
    cy.get('h1.font-bold.text-xl.text-center')
      .contains('Login')
      .should('be.visible')
      .then(() => {
        cy.log('A mensagem de login está visível na página');
      });
  });
  
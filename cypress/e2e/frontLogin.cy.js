describe('Acessar e Validar Tela Login', () => {
  before(() => {
    cy.login();
  });
  it('Validar Campos ', () => {
    cy.get('#usuario')
      .should('be.visible')
      .type('adm')
    cy.get('#senha')
      .should('be.visible')
      .type('123456')
    cy.get('#cadastro-button')
      .should('be.visible')
    cy.get('#esqueceusenha-button')
      .should('be.visible')
    cy.get('.group')
      .should('be.visible')
      .click();
    cy.get('#message')
      .should('exist')
      .invoke('text')
      .should('eq', 'Login bem-sucedido! Redirecionando para a página principal...')
      .then(() => {
        cy.log('Mensagem de login bem-sucedido confirmada');
        cy.url().should('eq', 'https://cadastro-cliente.onrender.com/agendamento.html');
      });
    cy.get('.ativo > a > .icon > .bi')
      .should('be.visible')
      .click();
    cy.get(':nth-child(2) > a > .icon > .bi')
      .should('be.visible')
      .click();
    cy.get(':nth-child(3) > a > .icon > .bi')
      .should('be.visible')
      .dblclick();
    cy.get(':nth-child(4) > a > .icon > .bi')
      .should('be.visible')
      .click();
    cy.get('.item-sair > a > .icon > .bi')
      .should('be.visible')
      .click();
    cy.url().should('eq', 'https://cadastro-cliente.onrender.com/index.html')
  })
})

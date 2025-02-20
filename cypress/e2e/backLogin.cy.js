/// <reference types="cypress" />
const faker = require('faker');

describe('Criar Usuario e Efetuar Login', () => {
    let login, senha;

    it('Criar usuario', () => {
        login = faker.internet.userName();
        senha = faker.internet.password();

        cy.log(`Login gerado: ${login}`);
        cy.request({
            method: 'POST',
            url: 'https://api-teste-dados.onrender.com/inserir-dados',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                login: login,
                senha: senha,
                ddd: '41',
                celular: '998071237',
                rua: 'Ciro de Castro',
                numero: '90',
                cep: '81230340',
                cidade: 'Curitiba',
                estado: 'Pa'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.mensagem).to.be.equal('Dados inseridos com sucesso')
        });
    });
  //oi
    it('Efetuar login', () => {
        cy.request({
            method: 'POST',
            url: 'https://api-teste-dados.onrender.com/login',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                login: login,
                senha: senha,
            },
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body.message).to.be.equal('Login bem-sucedido!')
            cy.log('Login realizado com sucesso!');
        });
    });
});

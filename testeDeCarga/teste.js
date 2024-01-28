import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 5, 
  duration: '30s', 
};

export default function () {
  let login = Math.random().toString(36).substring(7);
  let senha = Math.random().toString(36).substring(7);

  let payload = {
    login: login,
    senha: senha,
    ddd: '41',
    celular: '998071237',
    rua: 'Ciro de Castro',
    numero: '90',
    cep: '81230340',
    cidade: 'Curitiba',
    estado: 'Pa'
  };

  let headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  };

  let res = http.post('https://api-teste-dados.onrender.com/inserir-dados', JSON.stringify(payload), { headers: headers });

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response body is correct': (r) => r.json().mensagem === 'Dados inseridos com sucesso',
  });
}

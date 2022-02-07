const fs = require('fs');
const pessoas = require('./pessoas.json');
const posicao = process.argv[2];
const pessoa = {nome, cpf, casado, filhos};
pessoas.splice(posicao, 1, pessoa);

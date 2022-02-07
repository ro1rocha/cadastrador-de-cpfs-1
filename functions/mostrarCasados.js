<<<<<<< HEAD
const pessoas = require('./pessoas.json');
let casados = pessoas.filter(p => p.casado = true);
=======
const pessoas = require("./pessoas.json");

// let casados = pessoas.filter(function(p){return p.casado});
let casados = pessoas.filter(p => p.casado);
>>>>>>> 38c7e5aaad45140981214d1e12f96cc09846196a
console.table(casados);

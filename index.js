// Importar o express
const express = require('express');

// Criar um sevidor com o express
const servidor = express();

// Definir uma rota e associar a ela a execução de uma função
servidor.get('/pessoas', (req, res) =>{
    console.log("Tentaram acessar a rota /pessoas.")
    res.send("Lista de pessoas: Theo, Afredo, Silvia, etc")
})

// Levantar o nosso servidor
servidor.listen(3000, ()=>{
    console.log("Servidor escutando na porta 3000")
});
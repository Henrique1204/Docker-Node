const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Olá minha imagem');
});

app.listen(porta, () => {
    console.log(`Executando na porta: ${porta}`)
});

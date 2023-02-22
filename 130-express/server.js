// CRUD -> CREATE,    READ,   UPDATE,    DELETE
//         POST       GET     PUT        DELETE

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado pelo seu contato!');
})
app.listen(3000, () => {
    console.log('Para visualizar, acesse: http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});
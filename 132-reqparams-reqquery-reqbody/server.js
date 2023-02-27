const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/testes/:idUser?', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

app.listen(3000, () => {
    console.log('Para visualizar, acesse: http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});


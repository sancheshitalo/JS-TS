exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar</button>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST!')
}
fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementos(json));

function carregaElementos(json){
    for(let pessoa of json){
        console.log(pessoa.nome);
    }
}


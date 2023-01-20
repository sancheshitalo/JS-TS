// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementos(json));

axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data))

function carregaElementos(json){
    const table = document.createElement('table');
    const formatMoney = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td1= document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);
        
        let td2= document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);
        
        let td3= document.createElement('td');
        td3.innerHTML = formatMoney.format(pessoa.salario)
        tr.appendChild(td3);
        
        table.appendChild(tr)   
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
}


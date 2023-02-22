const path = require('path');
const localFolder = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Cleber'},
//     {nome: 'Giovana'},
//     {nome: 'Maristela'},
// ];
//
// const json = JSON.stringify(pessoas, '', 2);
// escreve(localFolder, json);

async function fileRead(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val))
}

fileRead(localFolder);
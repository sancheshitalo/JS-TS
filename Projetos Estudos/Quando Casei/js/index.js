// function dataCasamento(data){
//     this.data = data;

//     Object.defineProperty(this, 'data',{
//         get: function(){
//             return data;
//         },
//         set: function(valor){
//             if (typeof valor === 'number'){
//                 throw new TypeError('Digite a data do seu casamento no formato DIA/MES/ANO');
//             }
//         }
//     })
// }

// function zeroEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function formataData(data) {
//     const dia = zeroEsquerda(data.getDate());
//     const mes = zeroEsquerda(data.getMonth()+1);
//     const ano = zeroEsquerda(data.getFullYear());

//     return `${dia}/${mes}/${ano}`;
// }

// const data = new Date();
// const dataAtual = formataData(data);
// const dataDoCasamento = new dataCasamento('09/04/2022');
// const diff = Math.abs(data.getTime() - dataDoCasamento.getTime());
// const days = Math.ceil(diff / (1000 *60 * 60 * 24))

// console.log(dataAtual)
// console.log(dataDoCasamento.data)
// console.log(days)


const hoje = new Date();
const dtCasamento = new Date('2022/04/09');
const diff = Math.abs(hoje.getTime() - dtCasamento.getTime())
const days = Math.ceil(diff / (1000*60*60*24)) 
const locale = 'pt-br'
let options = {
    dateStyle: 'full',
};

console.log(`Fazem ${days} dias desde a data do seu casamento. Seu casamento foi em um ${dtCasamento.toLocaleDateString('pt-br', options)}. Parabéns. Quase 1 ano juntos!`);

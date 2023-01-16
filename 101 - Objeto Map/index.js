const pessoas = [
    {id: 3, nome: 'Hitalo'},
    {id: 2, nome: 'Pedro'},
    {id: 1, nome: 'Giovana'},
];

// const novasPessoas = {}
// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas)
function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao); // mostra no navegador os closures
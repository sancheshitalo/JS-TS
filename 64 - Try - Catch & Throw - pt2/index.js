/*
try {
    // É executa quando não há erros
} catch (e) {
    // É executada quando HÁ erros;
} finally {
    // SEMPRE é executado;
}

*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}


try {
    const data = new Date();
    const hora = retornaHora(data);
    console.log(hora);
} catch(e) {
    //tratar erro
} finally {
    console.log('finally aqui');
}
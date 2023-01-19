function randomNumber(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function connectDB(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('Bad Value.')
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    } else {
        return connectDB('Baixei a página', 2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log('THEN:', dadosPagina)
    })
    .catch(e => {
        console.log('CATCH', e)
    })

    // const promises = [
    //     connectDB('Promise 1', randomNumber(1, 5)),
    //     connectDB('Promise 2', randomNumber(1, 5)),
    //     connectDB('Promise 3', randomNumber(1, 5)),
    //     // connectDB(1000, 2000),
    // ]

    // Promise.race(promises)
    //     .then(function(valor){
    //         console.log(valor)      
    //     })
    //     .catch(function(erro){
    //         console.log(erro)
    //     });

//Promise.race te entrega o valor que vai ser executado primeiro, pelo tempo determinado dele. Ex: 1s, 2s, 3s. ele vai retornar 
//o de 1s primeiro, pois é o primeiro a ser executado.
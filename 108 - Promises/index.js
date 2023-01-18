function randomNumber(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function connectDB(msg, time){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value.')

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}

connectDB('Frase 01', randomNumber(1, 3))
    .then(resposta => {
        console.log(resposta)
        return connectDB(184279, randomNumber(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return connectDB('Frase 03', randomNumber(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO:', e)
    })
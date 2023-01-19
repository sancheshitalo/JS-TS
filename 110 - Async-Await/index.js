function randomNumber(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function connectDB(msg, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('ERRO:');
                return
            }

            resolve(msg)
                return
            }, time)
    });
}

async function executa(){
    try{
        const fase1 = await connectDB('FASE 01', randomNumber())
        console.log(fase1);
        
        const fase2 = await connectDB('FASE 02', randomNumber())
        console.log(fase2);
        
        const fase3 = await connectDB('FASE 03', randomNumber())
        console.log(fase3);
    } catch(e){
        console.log(e)
    }
}

executa();

/*

PENDING -> Pendente;
FULLFILLED -> RESOLVIDA;
REJECTED -> REJEITADA;

*/
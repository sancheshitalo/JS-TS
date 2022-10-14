const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;



switch(diaSemana) {
    case 0:
    diaSemanaTexto = 'Domingo';
    break;
} 
switch(diaSemana) {
    case 1:
    diaSemanaTexto = 'Segunda';
    break;
}
switch(diaSemana) {
    case 2:
    diaSemanaTexto = 'Terça';
    break;
}
switch(diaSemana) {
    case 3:
    diaSemanaTexto = 'Quarta';
    break;
}
switch(diaSemana) {
    case 4:
    diaSemanaTexto = 'Quinta';
    break;
}
switch(diaSemana) {
    case 5:
    diaSemanaTexto = 'Sexta';
    break;
}
switch(diaSemana) {
    case 6:
    diaSemanaTexto = 'Sábado';
    break;
    default:
    diaSemanaTexto = 'Dia inválido!'
}


console.log(diaSemana, diaSemanaTexto); 

/*
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
}
*/



var calcularFatorial = require('./modulo/modulo.JS');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número: ', function(valorD){

    let numero = valorD.replace(',','.');

    console.log(calcularFatorial.calcularFatorial(numero))

    console.log('')
      entradaDados.close();
})
var IMC = require('./modulo/modulo.JS');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')

entradaDados.question('Qual seu peso? : ', function(pesoPessoa){

    let peso  = pesoPessoa.replace(',','.');



entradaDados.question('Qual sua altura? : ', function(alturaPessoa){

    let altura = alturaPessoa.replace(',','.');

    console.log('------------------')
        console.log('')

       
    console.log(IMC.calcularIMC(peso, altura))

    console.log('')
      entradaDados.close();
})
})
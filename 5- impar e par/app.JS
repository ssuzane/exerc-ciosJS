var paresOuImpares = require('./modulo/modulo.JS');


var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Número Inicial é --> ', function(numero1){
    let valor1 = numero1.replace(',','.');

    entradaDados.question('Número Final é --> ', function(numero2){
        let valor2 = numero2.replace(',','.')


      
        console.log('|1 - Calcular pares  |')
        console.log('|2 - Calcular Impares|')
        console.log('|3 - Calcular Ambos  |')
        

        entradaDados.question('O que deseja calcular: ', function(parImparAmbos){
            let escolha = parImparAmbos.replace(',','.')
            


    console.log(paresOuImpares.paresImpares(valor1, valor2, escolha))

        

    console.log('')
      entradaDados.close();

})
})
})
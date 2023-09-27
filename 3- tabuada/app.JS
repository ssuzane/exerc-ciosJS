var tabuadas = require('./modulo/modulo.JS');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('')
console.log('------------------')


entradaDados.question('Tabuada Inicial: ', function(tabuada1){

    let tabuadaV  = tabuada1.replace(',','.');

    console.log('------------------')

    entradaDados.question('Tabuada Final: ', function(tabuada2){

        let tabuada2V  = tabuada2.replace(',','.');
    
        console.log('------------------')
    


entradaDados.question('Valor inicial: ', function(primeiroV){

    let valorI = primeiroV.replace(',','.');

    console.log('------------------')

    entradaDados.question('Valor final: ', function(ultimoV){

        let valorF = ultimoV.replace(',','.');

        console.log('------------------')

       
    console.log(tabuadas.gerarTabuada(tabuadaV,tabuada2V, valorI, valorF))

    

    console.log('')
    entradaDados.close();
})
})
})
})
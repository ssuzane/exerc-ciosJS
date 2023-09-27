/***************************************************************
 * Objetivo: números pares e impares
 * Data: 27/09/2023
 * Autor: Suzane
 * Versão: 1.0
 **************************************************************/

function paresImpares (valorInicial, valorFinal, escolherSeparacao){
    let numeroI =Number(valorInicial);
    let numeroF = Number(valorFinal);
    let escolha = Number(escolherSeparacao);

    if(numeroI < 0 || numeroI > 500){
        console.log('--> ERRO <--: O valor inicial precisa estar entre 0 e 500 !')
    }else if(numeroF < 100 || numeroF > 1000){
        console.log('--> ERRO <--: O valor final precisa estar entre 100 e 1000 !')
    }else if(numeroI == '' || numeroF == ''){
        console.log('--> ERRO <--: Os campos não podem estar vazios !')
    }else if(numeroI > numeroF){
        console.log('--> ERRO <--: O valor inicial não pode ser maior que o final !')
    }else if(numeroI == numeroF){
        console.log('--> ERRO <--: Os valores não podem ser iguais !')
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('--> ERRO <--: Não é aceito o uso de letras e caracteres !')
    }else if(escolha > 3){
        console.log('--> ERRO <--: A escolha vai somente de 1 a 3 !')
    }else{

        console.log('')

        let contadorPar = 0;
        let contadorImpar = 0;

        if(escolha == 1 || escolha == 3){
        console.log('Lista de números Pares:')
        for(; numeroI <= numeroF; numeroI++){
            if(numeroI % 2 == 0){
                console.log(numeroI)
                contadorPar++;
            }
        }
        console.log('')
        console.log('Qtde de números pares encontrados: ' +contadorPar)
        console.log('')
    }

    numeroI =Number(valorInicial);
        console.log('')

        if(escolha == 2 || escolha == 3){
        console.log('Lista de números Pares:')
        for(;numeroI <= numeroF ; numeroI++){
            if(numeroI % 2 != 0){
                console.log(numeroI)
                contadorImpar++
            }
    }
            console.log('')
            console.log('A quantidade de números impares encontrados: ' +contadorImpar)
            console.log('')
}
}   
}
    module.exports = {
        paresImpares
    }
    
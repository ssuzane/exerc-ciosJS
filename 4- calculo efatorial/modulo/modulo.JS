/*********************************************************************
 * Objetivo: Calcular o Fatorial de um número.
 * Data: 27/09/2023
 * Autor: suzane
 * Versão: 1.0
 ********************************************************************/

const calcularFatorial = function(valorFatorial){
    let valorD = valorFatorial;
    let contador = 1;
    let result;

    let fatorial = valorFatorial

    if(valorD == ''){
        console.log('--> ERRO <--: É obrigatório todos os campos estar preenchidos !')
    }else if(isNaN(valorD)){
        console.log('--> ERRO <--: Não é possível gerar calculo com esses caracteres!')
    }else if(valorD == 0){
        console.log('--> ERRO <--: Não existe fatorial de 0 !')
    }else if(valorD == 1){
        console.log('--> ERRO <--: O número digitado precisa ser maior que 1 !')
    }else{

        console.log('')

        valorD = Number(valorD)
        contador = Number(contador)

        result = valorD

        for(;contador < valorD; contador++){
            result = result *(valorD - contador)
            fatorial += `x${valorD - contador}`
        }

        console.log('Fatorial de ' + valorD +' é '+ fatorial + ' = ' + result)
    }
    }
    
    module.exports = {
        calcularFatorial
    }
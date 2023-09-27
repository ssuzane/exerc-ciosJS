/***************************************************************
 * Objetivo: Calcular Tabuada
 * Data: 27/09/2023
 * Autor: Suzane
 * Versão: 1.0
 **************************************************************/

const gerarTabuada = function(valorT1,valorT2,valorI, valorF){

   
    let tabuadaI = valorT1
    let tabuadaF = valorT2
    let contador = valorI
    let contadorF = valorF
    let result

    let status = false

    
    if(tabuadaI == '' || tabuadaF == '' || contador == '' || contadorF == '')
    console.log(' --> ERRO <--: É obrigatório colocar todos os valores !')
    //validação de entrada de caracteres inválidos
    else if(isNaN(tabuadaI) || isNaN(tabuadaF) || isNaN(contador) || isNaN(contadorF))
    console.log(' --> ERRO <--: Não foi possível gerar a tabuada com esses caracteres!')
    else{

        
        tabuadaI = Number(tabuadaI)
        tabuadaFinal = Number(tabuadaF)
        contador = Number(contador)
        contadorF = Number(contadorF)

        if(contador > contadorF)
        {
            contador = contadorF;
            contadorF = valorI;
        }
        
        

        for(; tabuadaI <= tabuadaF; tabuadaI++){
        console.log('')
        console.log('Tabuada do ['+tabuadaI+']')
        console.log('')
        for(; contador <= contadorF; contador++){
            result = tabuadaI * contador
            console.log(`${tabuadaI} x ${contador} = ${result}`)
            status = true
        }
        contador = valorI
    }
    return status
}
}

module.exports = {
    gerarTabuada
}
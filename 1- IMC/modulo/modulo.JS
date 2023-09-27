/***************************************************************
 * Objetivo: Calcular o IMC 
 * Data: 27/09/2023
 * Autor: Suzane
 * Versão: 1.0
 **************************************************************/

const calcularIMC = function(pesoPessoa, alturaPessoa){
    let peso = pesoPessoa
    let altura = alturaPessoa

    let resul
    let status = false
    
    if(peso == '' || altura == ''){
    console.log(' --> ERRO <-- : É obrigatório preencher todos os campos !')
    }

    else if(isNaN(peso) || isNaN(altura))
    console.log(' --> ERRO <-- : Não é possível calcular o IMC com outros caracteres!')
    else{
        peso = Number(peso)
        altura = Number(altura)

        resul = peso / (altura * altura)

                if(resul <= 18.5){
            console.log()
            console.log('--> IMC: '+ resul)
            console.log('--> ESTÁ ABAIXO DO PESO !')
        } else if(resul > 18.5 && resul <= 24.9){
            console.log()
            console.log('--> IMC: '+ resul)
            console.log('--> PESO NORMAL !')
        }else if(resul >= 25 && resul <= 29.9){
            console.log()
            console.log('--> IMC: '+ resul)
            console.log('--> ESTÁ ACIMA DO PESO > sobrepeso < !')
        }else if(resul >= 30 && resul <= 34.9){
            console.log()
            console.log('--> IMC: '+resul)
            console.log('--> OBSIDADE GRAU 1 !')
        }else if(resul >= 35 && resul <= 39.9){
            console.log()
            console.log('--> IMC: '+ resul)
            console.log('--> OBSIDADE GRAU 2 !')
        }else{
            console.log()
            console.log('--> IMC: '+ resul)
            console.log('--> OBSIDADE GRAU 3 !')
        }
    }
    return status
}

module.exports = {
    calcularIMC
}
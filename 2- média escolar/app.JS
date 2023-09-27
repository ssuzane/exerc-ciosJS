
var media = require('./modulo/modulo.JS')

var readline = require('readline')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question(' --> Nome do aluno: ', function (nomeAluno) {

    let aluno = nomeAluno

    entradaDados.question('--> Nome do professor: ', function (nomeProfessor) {

        let professor = nomeProfessor

    entradaDados.question('--> Sexo do aluno (FEMININO/MASCULINO): ', function (sexoDoAluno) {

        let sexoAluno = sexoDoAluno
        
    entradaDados.question(' --> Sexo do professor (FEMININO/MASCULINO): ', function (sexoDoProfessor) {

        let sexoProfessor = sexoDoProfessor

    entradaDados.question('--> CURSO: ', function (nomeCurso) {

        let curso = nomeCurso

    entradaDados.question('--> Nome da disciplina: ', function (nomeDisciplina) {

        let disciplina = nomeDisciplina

    entradaDados.question('--> Nota 1: ', function (umNota) {

        let nota1 = umNota

    entradaDados.question('--> Nota 2: ', function (doisnota) {

        let nota2 = doisnota

    entradaDados.question('--> Nota 3: ', function (tresnota) {

        let nota3 = tresnota

    entradaDados.question('--> Nota 4: ', function (quatronota) {

        let nota4 = quatronota

        let mediaF = media.calcularMedia(nota1, nota2, nota3, nota4)

        if (mediaF != undefined) {
            let status = media.mostrarStatus(mediaF)
            console.log('')
        
        media.relatorioAluno(aluno,professor, sexoAluno,sexoProfessor, curso, disciplina, mediaF, status)
            if (status == '--> em exame <--') {
            console.log()

    entradaDados.question('Nota do exame: ', function (notaE) {

        let nota5 = notaE
        let mediaNota5 = media.exameCalculo(mediaF, nota5)
            media.statusFinal(mediaNota5)

        entradaDados.close();
                                                    
     })
    } else {
        console.log('')
        entradaDados.close();
                                                
                }
                                            
                    }


                        })

                                })
                            })

                        })

                    })
                })

            })
        })
    })

})
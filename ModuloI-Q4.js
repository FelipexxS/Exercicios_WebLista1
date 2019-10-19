const fisica = {
    nome: 'Fisica',
    alunos: ['Iago', 'João'],
    localzacao: {
        bloco: 3,
        sala: 4
    }

}

const {localzacao: {sala}} = fisica

console.log(sala)
const aluno = {
    nome: 'Iago',
    notas: [
        { nome: 'fisica', valor: 5},
        { nome: 'estatistica', valor: 1},
        { nome: 'probabilidade', valor: 1}
    ]
}

const getNotas = notas => notas.valor

const notasTotal = aluno.notas.map(getNotas)
console.log(notasTotal)
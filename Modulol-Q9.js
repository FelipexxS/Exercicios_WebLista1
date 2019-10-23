const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}`)

    }
}

const maria = {
    nome: 'Maria'
}

const saudacaoMaria = joao.saudacao.bind(maria)

saudacaoMaria()

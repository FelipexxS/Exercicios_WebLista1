const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}`)

    }
}

var maria = {
    nome: 'Maria'
}

console.log(typeof maria)
console.log(typeof Object)
joao.saudacao.call(maria)

console.log(joao)
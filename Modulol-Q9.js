const joao = {
    nome: 'João',
    saudacao() {
        console.log(`Olá ${this.nome}`)

    }
}


function saudacaoMaria(){
    nome = 'Maria'
    joao.saudacao()
}

saudacaoMaria(1)
console.log(joao.nome)
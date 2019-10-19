const arrayQualquer = [5, 6, 10, 4, 3, 7, 1]
const reducer = (acumulador, valorAtual) => acumulador + valorAtual

let soma = 0, media = 0;

soma = arrayQualquer.reduce(reducer)
media = soma / arrayQualquer.length
media = Math.floor(media)

const maior = (valorArray) => valorArray > media

console.log(`Os números maiores que a média são: ${arrayQualquer.filter(maior)}`)


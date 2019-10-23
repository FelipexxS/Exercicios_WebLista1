const obj = {
    temp: 0,
    
    get temperatura() { return this.temp },
    set temperatura(valor) {
        try{
            if (valor < 0) throw new Error()
            else this.temp = valor
        } catch(e) {
            console.log('Entrada inválida: Número negativo!')
        }
    }

}

console.log(obj.temperatura)

obj.temperatura = -1
console.log(obj.temperatura)

obj.temperatura = 25
console.log(obj.temperatura)

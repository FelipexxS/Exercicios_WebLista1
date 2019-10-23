
function qualquer(){
    try{
        if (Math.random() > 0.5) throw new Error()
    } catch(e){
        console.log('Erro tratado: Número maior que 0.5')
    }
}

qualquer(1)
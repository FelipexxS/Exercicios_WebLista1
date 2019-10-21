
function qualquer(){
    try{
        if (Math.random() > 0.5) throw new Error()
    } catch(e){
        console.log('Erro tratado')
    }
}

qualquer(1)
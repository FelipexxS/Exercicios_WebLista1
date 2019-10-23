

function try_catch() {
    try {
        if (Math.random() > 0.3)
            throw new Error()
            return            
    } catch (e) {
        console.log('Número maior que 0.3' )
    } finally{
        console.log('Mensagem qualquer')
    }
}

try_catch(1)
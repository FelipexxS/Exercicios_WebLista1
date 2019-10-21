

function try_catch() {
    try {
        if (Math.random() > 0.3)
            return
        console.log('Mensagem qualquer')
            throw new Error()
            
    } catch (e) {

    } finally{
        console.log('Fim')
    }
}

try_catch(1)
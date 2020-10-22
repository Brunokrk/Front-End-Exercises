function impprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroELancar(e)
    }
}

function tratarErroELancar(erro){
    throw new Error('ERROR::ERROR')
}

const obj = {nome: 'Roberto'}
impprimirNomeGritado(obj)
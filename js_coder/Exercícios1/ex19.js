let codigo = 100
let qtd = 2

switch(codigo){
    case 100:
        return console.log(`Custará ${3*qtd}R$`)
    case 200:
        return console.log(`Custará ${4*qtd}R$`)
    case 300:
        return console.log(`Custará ${5.5*qtd}R$`)
    case 400:
        return console.log(`Custará ${7.5*qtd}R$`)
    case 500:
        return console.log(`Custará ${3.5*qtd}R$`)
    case 600:
        return console.log(`Custará ${2.8*qtd}R$`)
    default:
        return console.log("Produto não existe")
}
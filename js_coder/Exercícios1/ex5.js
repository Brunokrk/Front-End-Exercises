//Exercício 5


function corrigeNotation(n){
    console.log(`R$ ${n.toFixed(2).toString().replace(".",",")}`)
}

corrigeNotation(0.1 + 0.2)

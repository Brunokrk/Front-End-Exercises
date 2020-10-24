let desempenho = {
    pontos : "30 40 20 4 51 25 42 38 56 0"
}

function comparison(desempenho){

    let vet_pontos = desempenho.pontos.split(" ")//transformando em array
    desempenho.maior_pont = vet_pontos[0]
    desempenho.menor_pont = vet_pontos[0]
    desempenho.jogo_menor_pont = 1
    desempenho.pont_overflow = 0
    desempenho.output = null
    
    for (let i in vet_pontos){
        console.log("jogo:"+i+", pontuação: "+ vet_pontos[i])
        if (vet_pontos[i] > desempenho.maior_pont){
            //bateu a pontuação
            //console.log(vet_pontos[i]+" superou "+ desempenho.maior_pont)
            desempenho.maior_pont = vet_pontos[i]
            desempenho.pont_overflow++
            //console.log(desempenho.maior_pont)

        }else if(vet_pontos[i] < desempenho.menor_pont){
            desempenho.menor_pont = vet_pontos[i]
            desempenho.jogo_menor_pont = i++
            console.log(i)
            //console.log(desempenho.jogo_menor_pont)
        }
    }

    desempenho.output = [desempenho.pont_overflow, desempenho.jogo_menor_pont]
    console.log(desempenho.output)
}

comparison(desempenho)
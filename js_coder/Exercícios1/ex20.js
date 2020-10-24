let valor = 18
let cem = {valor:100, qtd: 0}
let cinq = {valor:50, qtd: 0}
let dez = {valor:10, qtd: 0}
let cinco = {valor:5, qtd:0}
let um = {valor:1, qtd: 0}
calculate(valor, cem, cinq, dez, cinco, um)
let notas = prints(valor, cem, cinq, dez, cinco, um)
console.log(notas)

function calculate(valor, cem, cinq, dez, cinco, um){
    if (valor >= cem.valor){
        cem.qtd = cem.qtd + 1
        valor = valor - cem.valor
        if(valor != 0){
            calculate(valor, cem, cinq, dez, cinco, um)
        }else if( valor == 0){
            return true
        }
    }else if(valor >= cinq.valor){
        cinq.qtd = cinq.qtd + 1
        valor = valor - cinq.valor
        if(valor != 0){
            calculate(valor, cem, cinq, dez, cinco, um)
        }else if( valor == 0){
            return true
        }
    }else if(valor >= dez.valor){
        dez.qtd = dez.qtd + 1
        valor = valor - dez.valor
        if(valor != 0){
            calculate(valor, cem, cinq, dez, cinco, um)
        }else if( valor == 0){
            return true
        }
    }else if(valor >= cinco.valor){
        cinco.qtd = cinco.qtd+1
        valor = valor - cinco.valor
        if(valor != 0){
            calculate(valor, cem, cinq, dez, cinco, um)
        }else if( valor == 0){
            return true
        }
    }else if(valor >= um.valor){
        um.qtd = um.qtd +1
        valor = valor - um.valor
        if(valor != 0){
            calculate(valor, cem, cinq, dez, cinco, um)
        }else if( valor == 0){
            return true
        }
    }
}

function prints(valor, cem, cinq, dez, cinco, um){
    let message= ""
    if(cem.qtd > 0){
        message += `${cem.qtd} nota(s) de 100. `
    }
    if(cinq.qtd > 0){
        message += `${cinq.qtd} nota(s) de 50. `
    }
    if(dez.qtd > 0){
        message += `${dez.qtd} nota(s) de 10. `
    }
    if(cinco.qtd > 0){
        message += `${cinco.qtd} nota(s) de 5. `
    }
    if(um.qtd > 0){
        message += `${um.qtd} nota(s) de 1. `
    }
    return message
}   
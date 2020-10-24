let nota = 37
sis(nota)
function sis(nota){
    let new_nota = arredondamento(nota)
    if (new_nota < 40){
        console.log("Reprovado")
    }else{
        console.log("Aprovado")
    }

}

function arredondamento(nota){
    if (nota%5 > 2){
        return(nota + (nota%5));
    }else{
        return nota;
    }
}
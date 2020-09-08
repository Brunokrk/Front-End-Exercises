function sorteio(){
    let min = document.getElementById("minimo").value;
    let max = document.getElementById("maximo").value;
    let sort = Math.floor((Math.random()*max+1) + min);

    document.getElementById("resultado").innerHTML=sort;
}

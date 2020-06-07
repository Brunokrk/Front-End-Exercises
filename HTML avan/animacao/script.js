let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function moverJogadorPara(x,y){
    
    let posX = x + "px";
    let posY = y + "px";

    jogador.style.top = "30px"
    jogador.style.top = "60px";
}

setInterval(function(){
    moverJogadorPara(xInicial,yInicial);
}, 100)

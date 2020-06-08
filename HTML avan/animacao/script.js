let tela = document.getElementById("tela");

let context = tela.getContext("2d");

/* context.moveTo(0,0);
context.lineTo(250, 250);
context.lineTo(500, 0);
context.stroke();
(duas linhas) */

/* context.fillStyle = "blue";
context.fillRect(10, 10, 100, 200); 
(maciço azul)*/

/* context.strokeStyle = "red";
context.strokeRect(10, 10, 100, 200);
 (apenas borda)*/


 
/* context.beginPath();

context.lineWidth = 4;
context.strokeStyle = "red";
context.moveTo(10, 10);
context.lineTo(400, 300);
context.stroke();

 
context.beginPath();

context.lineWidth = 4;
context.strokeStyle = "blue";
context.moveTo(50, 10);
context.lineTo(300, 300);
context.lineTo(100, 300);
context.closePath()
context.stroke(); */


let circle = {
x : 250,
y : 250,
raio : 100,
inicio : 0,
fim : 2*Math.PI,
}

function drawCircle(c){
    context.beginPath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    context.fill();
    context.stroke();
}

setInterval(function(){

    if(circle.fim < 2*Math.PI){
        circle.fim +=0.3;
    }
    drawCircle(circle);
},1000);



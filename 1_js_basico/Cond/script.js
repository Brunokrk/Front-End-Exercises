/* IF ELSE
var idade = 36

if (idade >= 35){
    console.log("Pode")
    console.log("Qual o seu pedido")
}else if(idade >=18){
    console.log("pode")
    console.log("Mostre a identidade")
}else{
    console.log("não pode")
    console.log("Volte futuramente")
} 
*/

var nota1 = 8.0;
var nota2 = 9.0;
var media = (nota1 + nota2) / 2;
var conceito;

if(media >= 8.0){
    conceito = "Ótimo";
}else if((media >= 6.5) && (media <8.0)){
    conceito = "Bom";
}else{
    conceito = "Regular";
}

console.log(media);
console.log(conceito);

switch(conceito){
    case "Ótimo":
        console.log("Parabens! vc é muito bom");
        break;
    case "Bom":
        console.log("Voce está quase lá");
        break;
    case"Regular":
        console.log("Estude mais!");
        break;
    default:
        console.log("Houve algum erro");
        break;
}
    
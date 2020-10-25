let dobro = function (a){
    return 2*a
}

dobro = (a) =>{
    return 2*a
}

dobro = a => 2*a //return está implicito
console.log(dobro(Math.PI))

//vantagem de usar arrow function é ter o this sempre bem definido
function Pessoa(){
    this.idade = 0
    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}
Pessoa()
//Classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Bruno')
p1.falar()

//Factory
const criarPessoa = nome =>{
    return{
        falar: () =>console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('João')
p2.falar()

//Função construtora
function PPessoa(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p3 = new PPessoa('Carlos')
p3.falar()
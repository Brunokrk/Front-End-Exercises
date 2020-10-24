//this varia de acordo com a forma com que a função é chamada

const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)

    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito de paradigmas

//Resolvendo o Conflito, a Função bind "amarra" o contexto de execução 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


//Segunda aula this e bind
/* function Pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa */ 
//this não está apontando para pessoa, e sim para um temporizador, por isso o erro

//Para resolver: 
/* function Pessoa(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pessoa */

//Ou
function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}
new Pessoa

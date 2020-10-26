//coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto["marca do produto"] = "Generica"
produto.preco = 220
delete produto.preco
console.log(produto)

const carro ={
    modelo:"A4",
    valor: 89000,
    proprietário:{
        nome: "Raul",
        idade: 56,
        endereco:{
            logradouro: "Rua ABC",
            numero: 123
        }
    },
    
    condutores:[{
        nome: "Junior",
        idade: 56
    }, {
        nome: "Bruno",
        idade: 18
    }],

    calcularValorSeguro: function(){
        //execução do metodo
    }
}

carro.proprietário.endereco.numero = 1000
carro['proprietário']['endereco']['logradouro'] = "Av Gigante"
console.log(carro)
delete carro.condutores
delete carro.proprietário.endereco
delete carro.calcularValorSeguro
console.log(carro)



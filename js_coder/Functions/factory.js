//É uma Função que retorna um objeto

//Factory Simple

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarProduto(nome_prod, preco_prod, desconto_prod = 0.1){
    return{
        nome: nome_prod,
        preco: preco_prod,
        desconto: desconto_prod
    }
}

console.log(criarProduto('carro', 30000))
console.log(criarProduto('iPad', 1199.49, 0.05 ))
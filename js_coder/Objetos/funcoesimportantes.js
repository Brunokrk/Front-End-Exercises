const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//Ou, usando destructuring
Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //Não enumera na lista de chaves
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017' //writable == false, então nada acontece
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2 )

Object.freeze(obj)
obj.c = 1234
console.log(obj)
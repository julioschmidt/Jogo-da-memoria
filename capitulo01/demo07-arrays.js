const minhaLista = []
const minhaListaDeTarefas = [
  'mandar email',
  'lavar o carro',
  'cortar o cabelo'
]

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[2])
console.log(minhaListaDeTarefas[3])

//quantidade de itens no array
console.log(minhaListaDeTarefas.length)

//adicionar um item
minhaListaDeTarefas.push('formatar computador')
console.log(minhaListaDeTarefas);

//remover ultimo da lista
const ultimo = minhaListaDeTarefas.pop()
console.log(ultimo, minhaListaDeTarefas)

//remover o primeiro da lista
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro, minhaListaDeTarefas)

//remover um item especifico por um indice
console.log(minhaListaDeTarefas[1])
minhaListaDeTarefas.splice(2, 1)//(qual indice remover, quantos itens remover)

const itens = [
  1, 'computador', 0.22
]

//verificar o tipo de array
console.log(typeof itens)

//verificar se é array da forma correta
console.log(Array.isArray(itens))

//ordenar
const numeros = [2,4,1,5,6,3]
console.log(numeros.sort())

const palavras = ['rato', 'arvore', 'bola', 'nome']
console.log(palavras.sort())

//juntar dois arrays

const novo = itens.concat([1,2,3])
console.log(novo)

//juntar arrays em uma string
console.log(itens.join(','))

//verificar indice do item
const index = itens.indexOf('computador')
console.log(index) 



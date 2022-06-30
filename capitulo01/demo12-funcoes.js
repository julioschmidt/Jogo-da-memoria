function nomeDaFuncao(parametro1) {
  //bloco de codigo
}

function queDiaEHoje() {
  const data = new Date()
  console.log(`Hoje é dia: ${data.getDate()}`)
}
queDiaEHoje()

function soma(valor1, valor2) {
  console.log(`A soma de ${valor1} + ${valor2} é `, valor1 + valor2)
}
soma(5, 6)

//Funcões podem retornar valores
function somaRetorno(valor1, valor2) {
  return valor1 + valor2
}
console.log(somaRetorno(4, 4))

const idade = 20
const tamanho = 10
const resultado = somaRetorno(idade, tamanho)
console.log(resultado)

/////////

const funcionario1 = {
  nome: 'Ze',
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0
}

const funcionario2 = {
  nome: 'Maria',
  desconto: 0.1,
  salarioBruto: 2000,
  salarioLiquido: 0
}

function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
)

console.log(
  `Salário Zé: ${funcionario1.salarioLiquido}
Salário Maria: ${funcionario2.salarioLiquido}`
)

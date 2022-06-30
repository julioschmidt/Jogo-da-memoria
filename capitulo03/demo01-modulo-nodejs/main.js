const Matematica = require('./matematica')
// console.log(Matematica)
// console.log(Matematica.somar(1, 4))

const readline = require('readline')
const { multiplicar } = require('./matematica')
const terminal = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
})

terminal.question('Insira o primeiro valor\n', n1 => {
  terminal.question('Insira o segundo valor\n', n2 => {
    terminal.question('Insira a operacao\n', tipoOperacao =>{
      const resultado = Matematica[tipoOperacao](
        Number(n1), Number(n2)
        )
        console.log(
          `A operação ${tipoOperacao} de ${n1} e ${n2} é: ${resultado}`
        )
        terminal.close()
    })
  })
})
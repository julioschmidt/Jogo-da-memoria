const readLine = require('readline')
const terminal = readLine.createInterface({
  //definir o modo de entrada via terminal
  input: process.stdin,
  //todo texto de saída sairá no terminal
  output: process.stdout
})

//texto do menu
const textoMenu = `
Olá, seja bem-vindo ao sistema de media
Digite 1 para acssar o menu inicial
Digite 2 para acessar o menu de herois
Digite 3 para acessar o menu de guerreiras
Digite 0 para sair
`

// console.log('textoMenu', textoMenu)
// const opcao = 1
// switch(opcao) {
//   case 1:
//     console.log('pressionou 1')
//     break;
//   case 2:
//     console.log('pressionou 2')
//     break;
//   default:
//     console.log('opcção inválida')
//     break;
// }
// terminal.question('Qual é seu nome: ', (msg) => {
//   console.log('voce escreveu', msg)
//   terminal.close()
// })

const questoes = {
  menuInicial: {
    texto: textoMenu,
    fn: menuInicial
  },
  opcao1: {
    texto: 'submenu! Pressione enter para selecionar mais opcoes...',
    fn: opcao1
  }
}

function menuInicial(msg) {
  const opcao = Number(msg)
  if (isNaN(opcao)) {
    throw new Error('Não é um número', msg)
  }
  switch(opcao) {
    case 0:
      console.log('Saindo...')
      terminal.close()
      break;
    case 1:
      terminal.question(      //
        questoes.opcao1.texto,// Entrada
        questoes.opcao1.fn    //
      )
      break;
    default:
      console.log('opcao invalida!')
      terminal.close()
      break;
  }
}

function opcao1() {
  console.log('Não há mais opcoes!')
  terminal.close()
}

terminal.question(            // 
  questoes.menuInicial.texto, // Entrada
  questoes.menuInicial.fn     //
)
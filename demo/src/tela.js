//metodos estaticos  nao podem acessar o 'this'
//por isso, nao vamos colocar o util no constructor
const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "carregando"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"
const MENSAGENS = {
  sucesso: {
    texto: 'Combinação correta!',
    classe: 'alert-success'
  },
  erro: {
    texto: 'Combinação errada!',
    classe: 'alert-danger'
  }
}
class Tela {
  static obterCodigoHTML(item) {
    return `
    <div class="col-md-3">
      <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
        <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="...">
      </div>
      <br />
    </div>
    `
  }

  static configurarBotaoVerificarSelecao(funcaoOnClick) {
    window.verificarSelecao = funcaoOnClick
  }

  static alterarConteudoHTML(codigoHTML) {
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHTML
  }
  static gerarStringHTMLPelaImagem(itens) {
    //para cada item da lista vai executar a função obterCodigoHTML
    // ao final, vai concatenar tudo em uma unica String
    //muda de Array para String
    return itens.map(Tela.obterCodigoHTML).join('')
  }
  static atualizarImagens(itens){
    const codigoHTML = Tela.gerarStringHTMLPelaImagem(itens)
    Tela.alterarConteudoHTML(codigoHTML)
  }

  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick = funcaoOnClick
  }

  static exibirHerois(nomeDoHeroi, img) {
    const elementosHTML = document.getElementsByName(nomeDoHeroi)
    //para cada elemento encontrado na tela, vamos alterar a imagem
    //para a imagem inicial dele
    //com o forEach, para cada item, dentro dos () setamos o valor
    // de imagem
    elementosHTML.forEach(item => (item.src = img))
  }

  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM)
    if(sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe)
      elemento.classList.add(MENSAGENS.sucesso.classe)
      elemento.innerText = MENSAGENS.sucesso.texto
    }
    else {
      elemento.classList.remove(MENSAGENS.sucesso.classe)
      elemento.classList.add(MENSAGENS.erro.classe)
      elemento.innerText = MENSAGENS.erro.texto
    }
    elemento.classList.remove(CLASSE_INVISIVEL)
    await util.timeout(1000)
    elemento.classList.add(CLASSE_INVISIVEL)
  }

  static exibirCarregando(mostrar = true) {
    const carregando = document.getElementById(ID_CARREGANDO)
    if(mostrar) {
      carregando.classList.remove(CLASSE_INVISIVEL)
      return;
    }
    carregando.classList.add(CLASSE_INVISIVEL)
  }

  static iniciarContador() {
    let contarAte = 3
    const elementoContador = document.getElementById(ID_CONTADOR)
    //vamos substituir o texto $$contador segundos
    //onde está o $$contador adicionaremos o valor
    const identificadorNoTexto = "$$contador"
    const textoPadrao = `Começando em ${identificadorNoTexto} segundos...`
    //vamos criar uma funcao em linha para atualizar o texto
    //a cada segundo
    const atualizarTexto = () =>
    (elementoContador.innerHTML = textoPadrao.replace(identificadorNoTexto, contarAte--))

    atualizarTexto()
    //a cada segundo, vai chamar a funcao atualizar texto
    //essa funcao vai substituir o $$contador pelo 'contarAte' diminuindo o valor
    //retornamos o idDoIntervalo para parar ele mais tarde
    const idDoIntervalo = setInterval(atualizarTexto, 1000)
    return idDoIntervalo
  }

  static limparContador(idDoIntervalo) {
    clearInterval(idDoIntervalo)
    //deixamos sem texto
    document.getElementById(ID_CONTADOR).innerHTML = ""
  }

  static configurarBotaoMostrarTudo(funcaoOnClick) {
    const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
    btnMostrarTudo.onclick = funcaoOnClick
  }

}
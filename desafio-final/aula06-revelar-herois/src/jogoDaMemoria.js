class JogoDaMemoria{
  //se mandar um obj = { tela: 1, idade: 2, etc: 3}
  //constructor vao ignorar o resto e pegar somente a propriedade desejada
  //tela
  constructor({ tela }) {
    this.tela = tela
    //caminho do arquivo sempre relativo ao index.html!!
    this.heroisIniciais = [
      {img: './arquivos/batman.png', nome: 'batman'},
      {img: './arquivos/gaviao-arqueiro.png', nome: 'gaviao-arqueiro'},
      {img: './arquivos/homem-aranha.png', nome: 'homem-aranha'},
      {img: './arquivos/homem-formiga.png', nome: 'homem-formiga'}
    ]
    this.iconeVerso = './arquivos/verso.png'
    this.heroisEscondidos = []
    this.heroisSelecionados = []
  }
  //para usar o this, não podemos usar static!!
  inicializar() {
    //vai pegar todas as funcoes da classe tela
    //coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    //força a tela a usar o THIS de Jogo da Memoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
  }

  embaralhar() {
    //duplicar os itens
    const copias = this.heroisIniciais.concat(this.heroisIniciais)
    
    //entrar em cada item e criar um id aleatorio
    .map(item => {
      return Object.assign({}, item, { id: Math.random() / 0.5})
    })
    //ordenar aleatoriamente
    .sort(() => Math.random() - 0.5)
    
    this.tela.atualizarImagens(copias)
    //vamos esperar 1 segundo para atualizar a tela
    setTimeout(() => {
      this.esconderHerois(copias)
    }, 1000);
  }

  esconderHerois(herois) {
    //vamos trocar a imagem de todos os herois existentes
    //pelo icone do verso
    //como fizemos no constructor, vamos extrair somente o necessário
    //usando a sintaxe ({chave: 1}) estamos falando que vamos retornar
    //o que tiver dentro dos parenteses
    //quando nao usamos : (exempo do id), o JS entende que o nome
    //é o mesmo do valor. Ex. id: id, vira id,
    const heroisOcultos = herois.map(( { nome, id }) => ({
      id,
      nome,
      img: this.iconeVerso
    }))
    //atualizamos a tela com os herois ocultos
    this.tela.atualizarImagens(heroisOcultos)
    //guardamos os herois para trabalhar com eles depois
    this.heroisOcultos = heroisOcultos
  }

  exibirHerois(nomeDoHeroi) {
    //vamos procurar esse heroi pelo nome em nossos heroisIniciais
    //vamos obter somente a imagem dele
    const { img } = this.heroisIniciais.find(({ nome })=> nomeDoHeroi === nome)
    //vamos criar a funcao na tela, para exibir somente o heroi selecionado
    this.tela.exibirHerois(nomeDoHeroi, img)
  }

  verificarSelecao(id, nome) {
    const item = { id, nome }
    //vamos verificar a quantidade de herois selecionados
    //e tomar ação se escolheu certo ou errado
    const heroisSelecionados = this.heroisSelecionados.length
    switch(heroisSelecionados) {
      case 0:
        //adiciona a escolha na lista, esperando pela próxima
        //clicada
        this.heroisSelecionados.push(item)
        break;
      case 1:
        //se a quantidade for 1, significa
        //que o usuario só pode escolher mais um
        //vamos obter o primeiro item da lista
        const [ opcao1 ] = this.heroisSelecionados //extrai somente a posição 0, pois nao foi informado indice
        //zerar itens para nao selecionar mais de dois
        this.heroisSelecionados = []
        //conferimos se os nomes e ids batem conforme
        //o esperado
        if(opcao1.nome === item.nome && opcao1.id !== item.id )
        {
          this.exibirHerois(item.nome)
          //como o padrao é true, nao precisa passar nada
          this.tela.exibirMensagem()
          //parar a execucao
          return;
        }

        this.tela.exibirMensagem(false)
        //fim do case!
        break;
    }
  }

  jogar() {
    this.embaralhar()
  }
}
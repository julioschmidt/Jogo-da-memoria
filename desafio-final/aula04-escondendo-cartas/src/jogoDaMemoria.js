class JogoDaMemoria{
  //se mandar um obj = { tela: 1, idade: 2, etc: 3}
  //constructor vao ignorar o resto e pegar somente a propriedade desejada
  //tela
  constructor({ tela }) {
    this.tela = tela
    //caminho do arquivo sempre relativo ao index.html!!
    this.heroisIniciais = [
      {img: './arquivos/batman.png', name: 'batman'},
      {img: './arquivos/gaviao-arqueiro.png', name: 'gaviao-arqueiro'},
      {img: './arquivos/homem-aranha.png', name: 'homem-aranha'},
      {img: './arquivos/homem-formiga.png', name: 'homem-formiga'}
    ]
    this.iconeVerso = './arquivos/verso.png'
    this.heroisEscondidos = []
  }
  //para usar o this, não podemos usar static!!
  inicializar() {
    //vai pegar todas as funcoes da classe tela
    //coloca todos os herois na tela
    this.tela.atualizarImagens(this.heroisIniciais)
    //força a tela a usar o THIS de Jogo da Memoria
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
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

  jogar() {
    this.embaralhar()
  }
}
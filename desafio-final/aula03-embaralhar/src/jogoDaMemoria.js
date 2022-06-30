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
  }

  jogar() {
    this.embaralhar()
  }
}
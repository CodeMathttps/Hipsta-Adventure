class Jogo{
  constructor(){
    this.inimigoAtual = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);

    pontuacao = new Pontuacao();
    const inimigoGota = new Inimigo(matrizInimigoGota, imagemInimigoGota, width , 30, 52, 52, 104, 104, 15, 100);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 300, 100, 75, 200, 175, 15, 100);
  
    inimigos.push(inimigoGota)
    inimigos.push(inimigoTroll)
    inimigos.push(inimigoVoador)
  
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135,  220, 270);
  }

  keyPressed(key){
    if(key === 'ArrowUp'){
      personagem.pula();
      somPulo.play();
    }
  }

  draw(){
    cenario.exibe();
    cenario.move();
  
    personagem.exibe();
    personagem.aplicaGravidade();
  
    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.exibe();
    inimigo.move();
  
    if (inimigoVisivel){
      this.inimigoAtual++;
      
      if (this.inimigoAtual > 2){
        this.inimigoAtual = 0;
      }
  
      inimigo.velocidade = parseInt(random(10, 30));
    }
  
    if(personagem.estaColidindo(inimigo)){
      image(imagemGameOver, width/2 -200, height/2)
      noLoop();
    }
  
    pontuacao.exibe();
    pontuacao.adicionarPonto();
  }
}
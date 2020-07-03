class Jogo{

  constructor(){
    this.indiceAtual = 0;
    this.mapa = [
      {
        inimigo: parseInt(random(0,3)),
        velocidade: 10
      },
      {
        inimigo: parseInt(random(0,3)),
        velocidade: 30
      },
      {
        inimigo: parseInt(random(0,3)),
        velocidade: 15
      },
      {
        inimigo: parseInt(random(0,3)),
        velocidade: 40
      }
    ];
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);

    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);
    const inimigoGota = new Inimigo(matrizInimigoGota, imagemInimigoGota, width , 30, 52, 52, 104, 104, 15);
    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 300, 100, 75, 200, 175, 15);
  
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
    vida.draw();
  
    personagem.exibe();
    personagem.aplicaGravidade();
    const linhaAtual = this.mapa[this.indiceAtual];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;
    inimigo.exibe();
    inimigo.move();
    
    if (inimigoVisivel){
      this.indiceAtual++;
      inimigo.aparece();  
      if (this.indiceAtual > this.mapa.length -1){
        this.indiceAtual = 0;
      }
    }
  
    if(personagem.estaColidindo(inimigo)){
      vida.perderVida()
      personagem.ficarInvencivel();
      
      if(vida.vidas < 1){
        image(imagemGameOver, width/2 -200, height/2)
        noLoop();
      }
    }
  
    pontuacao.exibe();
    pontuacao.adicionarPonto();
  }
}
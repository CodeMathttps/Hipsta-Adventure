function setup() {
  //Variáveis do p5, indica a altura e a largura da tela aberta pelo usuário
  createCanvas(innerWidth, innerHeight);
  frameRate(40);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);

  cenas = {
    jogo,
    telaInicial
  }
  jogo.setup();

  somDoJogo.loop();
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
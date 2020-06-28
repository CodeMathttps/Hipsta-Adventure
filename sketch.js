let imagemCenario;
let imagemPersonagem;
let imagemInimigoGota;
let imagemInimigoTroll;
let imagemInimigoVoador;
let imagemGameOver;

let somDoJogo;
let somPulo;

let cenario;
let personagem;
let inimigo;

let pontuacao;

const matrizInimigoGota = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];

const matrizInimigoTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]

const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const inimigos = [];

function preload(){
  imagemCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imagemInimigoGota = loadImage('assets/imagens/inimigos/gotinha.png');
  imagemInimigoTroll = loadImage('assets/imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('assets/imagens/assets/game-over.png');

  somDoJogo = loadSound('assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('assets/sons/somPulo.mp3');
}

function setup() {
  //Variáveis do p5, indica a altura e a largura da tela aberta pelo usuário
  createCanvas(windowWidth, windowHeight);
  
  cenario = new Cenario(imagemCenario, 3);

  pontuacao = new Pontuacao();
  const inimigoGota = new Inimigo(matrizInimigoGota, imagemInimigoGota, width + width/2, 30, 52, 52, 104, 104, 15, 200);
  const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width * 2, 0, 200, 200, 400, 400, 10, 1500);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width * 1.5, 300, 100, 75, 200, 150, 8, 2500)

  inimigos.push(inimigoGota)
  inimigos.push(inimigoTroll)
  inimigos.push(inimigoVoador)

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135,  220, 270);
  frameRate(40);

  
  //somDoJogo.loop();
  
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();

    if(personagem.estaColidindo(inimigo)){
      image(imagemGameOver, width/2 -200, height/2)
      noLoop();
    }
  })

  pontuacao.exibe();
  pontuacao.adicionarPonto();
}
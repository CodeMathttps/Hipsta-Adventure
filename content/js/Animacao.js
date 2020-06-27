class Animacao{

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        this.matriz = matriz;
        this.imagem = imagem;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - altura - this.variacaoY;
        this.largura = largura;
        this.altura = altura;
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
    }

    exibe(){
        //height: variável p5 que indica o tamanho do canva
        image(this.imagem, //imagem a ser animada
             this.x, this.y, //eixo x e y do posicionamento da imagem no canvas
             this.largura, this.altura, // largura e altura que a imagem será impressa
             this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], //posição da matriz de sprites do personafem 
             this.larguraSprite, this.alturaSprite); //eixo x e eixo y da sprite

        this.anima();
    }

    anima(){
        this.frameAtual ++

        if(this.frameAtual >= this.matriz.length -1)
            this.frameAtual = 0;
    }
}
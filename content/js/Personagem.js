class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;
        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
    }

    pula(){
        this.velocidadeDoPulo = - 30;
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
        if(this.y > this.yInicial)
            this.y = this.yInicial;
    }

    estaColidindo(inimigo){
        const precisao = .7;

        return collideRectRect(this.x, this.y,
             this.largura * precisao, this.altura * precisao,
             inimigo.x, inimigo.y,
             inimigo.largura * precisao, inimigo.altura * precisao);
    }
}
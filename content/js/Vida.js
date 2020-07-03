class Vida{
    
    constructor(vidaMax, vidaInicial){
        this.vidaMax = vidaMax;
        this.vidaInicial = vidaInicial;
        this.vidas = this.vidaInicial;

        this.largura = 25;
        this.altura = 25;

        this.xInicial = 20;
        this.y = 20;
    }

    draw(){
        for(let i = 0; i < this.vidas; i++){
            const margem = i * 10;
            const posicao = this.xInicial * (1+i);

            image(imagemVida, posicao + margem, this.y, this.altura, this.largura)
        }
    }

    ganharVida(){
        if(this.vidas <= this.total){
            this.vidas++;
        }
    }

    perderVida(){
        this.vidas--;
    }
}
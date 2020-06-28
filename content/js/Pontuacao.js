class Pontuacao {

    constructor(){
        this.pontos = 0;
    }

    exibe(){
        textSize(30);
        fill('#fff');
        textAlign('rigth');
        text(parseInt(this.pontos), width -30, 50);
    }

    adicionarPonto(){
        this.pontos = this.pontos + 0.01;
    }
}
class Placar {
    constructor(ctx) {
        this.ctx = ctx
        this.direita = this.ctx.canvas.width
        this.margem = 10
        this.largura = 100

    }

    // Recarregar pagina "refresh" (reiníciar o jogo)

    resetar() {
        
        addEventListener("click", function () {

            location.reload();
        });
    }

    // Desenha o Placar na tela

    desenhar() {
        this.ctx.font = "70px arial"
        this.ctx.fillStyle = "#000"
        this.ctx.fillText(pj1, this.margem, this.margem + 70, this.largura)
        this.ctx.fillText(pj2, this.direita - this.largura - this.margem, this.margem + 70, this.largura)
    }

}


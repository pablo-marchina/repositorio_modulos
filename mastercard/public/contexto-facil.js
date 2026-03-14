class ContextoFacil extends Phaser.Scene {
    constructor() {
        super({ key: 'contextoFacil' });
    }

    preload() {

        this.load.image('branco', 'assets/branco.jpg');
        this.load.image('retangulo', 'assets/retangulo_2.png');
        this.load.image('lista', 'assets/lista_branca.png');
        this.load.image('botao', 'assets/retangulo_2.png');
        this.load.image('voltar', 'assets/voltar.png');

    }

    create() {

        this.add.image(182.5, 300, 'branco');
        this.add.image(182.5, 45, 'retangulo').setDisplaySize(365, 90);
        this.add.image(40, 45, 'lista').setScale(0.65);

        const textoTitulo = this.add.text(
            this.cameras.main.centerX,
            120,
            'Parabéns! Você acaba de completar 14 anos e ganhou o seu primeiro cartão pré-pago da Mastercard.',
            {
                fontFamily: 'Inclusive Sans',
                fontSize: '20px',
                color: '#000000',
                align: 'center',
                wordWrap: { width: 320 }
            }
        ).setOrigin(0.5, 0.1).setAlpha(0); // Começa com Aplha 0 (invisível) para conseguirmos animar a sua entrada

        this.tweens.add({
            targets: textoTitulo,
            alpha: 1,
            y: 120,
            duration: 600,
            delay: 500 // Ocorre depois de 500 milissegundos
        });

        const textoMeio = this.add.text(
            this.cameras.main.centerX,
            340,
            'Agora, você pode fazer suas próprias compras sem precisar andar com dinheiro vivo no bolso.',
            {
                fontFamily: 'Inclusive Sans',
                fontSize: '20px',
                color: '#B60000',
                align: 'center',
                wordWrap: { width: 320 }
            }
        ).setOrigin(0.5, 0.01).setAlpha(0);

        this.tweens.add({
            targets: textoMeio,
            alpha: 1,
            y: 235,
            duration: 800,
            delay: 1900
        });

        const textoExplicativo = this.add.text(
            this.cameras.main.centerX,
            340,
            'Mas como funciona um cartão pré-pago? É simples: Ele funciona à base de recargas. O valor que você coloca nele vira o seu limite. Cada compra desconta do saldo na hora',
            {
                fontFamily: 'Inclusive Sans',
                fontSize: '20px',
                color: '#000000',
                align: 'center',
                wordWrap: { width: 320 }
            }
        ).setOrigin(0.5, 1).setAlpha(0);

        this.tweens.add({
            targets: textoExplicativo,
            alpha: 1, // Faz o texto ficar visível
            y: 475,   // Sobe 5 pixels suavemente
            duration: 700,
            delay: 4200 // <-- 3. Delay de 2200ms para aparecer SÓ DEPOIS do textoMeio
        });

        let graphics = this.make.graphics();
        graphics.fillStyle(0xB60000, 1); // Vermelho Masterclass
        graphics.fillRoundedRect(0, 0, 180, 50, 25); // x, y, largura, altura, raio (25 = pílula)
        graphics.generateTexture('botao_continuar', 180, 50);

        const botaoImg = this.add.image(0, 0, 'botao_continuar');
        const botaoTexto = this.add.text(0, -2, 'Continuar', {
            fontFamily: 'Inclusive Sans',
            fontSize: '20px',
            color: '#ffffff',
            resolution: 2,
        }).setOrigin(0.5);


        this.add.image(315, 560, 'voltar').setScale(0.8).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
            this.scene.start('telaDificuldade');
        }).setDepth(12);

        const containerBotao = this.add.container(182.5, 530, [botaoImg, botaoTexto]);
        containerBotao.setSize(180, 50);
        containerBotao.setInteractive({ useHandCursor: true });
        containerBotao.on('pointerdown', () => {
            this.scene.start('telaTrilha');

        });
    }
    
}
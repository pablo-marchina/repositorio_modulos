class TelaCarregamento extends Phaser.Scene {
    constructor() {
        super({ key: 'telaCarregamento' });
    }

    // Carrega os assets necessários para a tela de carregamento
    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.image('masterclass', 'assets/masterclass.png');
        this.load.image('elipse', 'assets/elipse.png');
        this.load.image('branco', 'assets/branco.jpg');
    }

    // Criação dos elementos da cena e configuração de interações/animações
    create() {
        // Background
        this.add.image(182.5, 300, 'branco').setScale(3);
        this.add.image(300, 530, 'elipse').setScale(0.8);
        this.add.image(65, 70, 'elipse').setScale(0.8).setFlip(1, 1);

        // Texto com pontos animados
        const textoCarregando = this.add.text(182.5, 380, 'Carregando possibilidades', { 
            fontFamily: 'Inclusive Sans',
            fontSize: '24px',
            color: '#000000',
        }).setOrigin(0.5);

        // Variável que controla os pontos
        let pontos = "";

        // Atualiza o subtítulo para mostrar a animação
        this.time.addEvent({
            delay: 200, 
            loop: true,
            callback: () => {
                // Reseta a string ao chegar em 3 pontos
                pontos = pontos.length < 3 ? pontos + "." : "";
                textoCarregando.setText("Carregando possibilidades" + pontos);
            }
        });

        // Logo com efeito pulsante
        const logo = this.add.image(182.5, 220, 'logo').setScale(0.4);

        this.tweens.add({
            targets: logo,
            scale: 0.8,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut"
        });

        // Mesmo efeito comm a logo
        const masterclass = this.add.image(182.5, 310, 'masterclass').setScale(0.4);

        this.tweens.add({
            targets: masterclass,
            scale: 0.8,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut"
        });

        // Mantém a tela de carregamento visível por pelo menos 1.5s antes de transicionar
        this.time.delayedCall(1500, () => {
            this.scene.start('telaNome'); // Encerra a cena e inicia a próxima
        });

        // Adição da barra de progresso
        const barraFundo = this.add.rectangle(182.5, 420, 250, 20, 0xcccccc);
        const barraProgresso = this.add.rectangle(60, 420, 0, 20, 0xB60000).setOrigin(0, 0.5);
        // O setOrigin fixa o ponto de ancoragem na esquerda da barra, o que faz ela crescer para a direita

        // Tween que anima a largura da barra para preencher a barra de fundo
        this.tweens.add({
            targets: barraProgresso,
            width: 250, // O valor final deve ser igual à largura da barraFundo
            duration: 1500,
            ease: 'Linear'
        });
    }
}
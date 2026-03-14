// Define a cena inicial estendendo a classe base do Phaser
class TelaInicial extends Phaser.Scene {
    constructor() {
        // inicializa a cena com uma chave única para referência no SceneManager
        super({ key: 'telaInicial' });
    };

    // Carregamento dos assets (imagens) necessários para a tela inicial
    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.image('masterclass', 'assets/masterclass.png');
        this.load.image('elipse', 'assets/elipse.png');
        this.load.image('branco', 'assets/branco.jpg');
        this.load.image('botao', 'assets/retangulo_2.png');
        this.load.image('fundo', 'assets/fundo_azul.png');
        this.load.image('som', 'assets/som.png');
        this.load.image('som_desligado', 'assets/som_desligado.png');
    }

    // Criação dos elementos da cena e configuração de interações/animações
    create() {

        // Imagem de background
        this.add.image(182.5, 300, 'fundo').setScale(1);
        // Sobreposição clara
        this.add.image(182.5, 300, 'branco').setScale(3);

        // Ellipse de baixo animada com tween de subida e descida
        this.elipseBaixo = this.add.image(275, 500, 'elipse').setScale(0.7);

        // Tween cria um movimento em loop (yoyo) infinito (repeat = -1)
        this.tweens.add({
            targets: this.elipseBaixo,
            y: this.elipseBaixo.y + 10,
            scaleX: 1.03,
            scaleY: 1.03,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut' // Suaviza a aceleração e desaceleração do movimento
        });

        // Ellipse de cima girada e também animada
        this.elipseTopo = this.add.image(30, 70, 'elipse').setScale(0.7).setFlip(1, 1);

        this.tweens.add({
            targets: this.elipseTopo,
            y: this.elipseTopo.y + 20,
            scaleX: 1.03,
            scaleY: 1.03,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Recupera as dimensões atuais do canvas configuradas no jogo para posicionamento dinâmico
        
        const { width, height } = this.scale;

        // A logo principal primeiro é adicionada fora da vista e depois faz tween de entrada
        // Adiciona imagem do logo deslocada pra baixo
        const logo = this.add.image(width / 2, height / 2 - 50, 'logo');
        logo.setAlpha(0);
        logo.y += 50;

        // Ssobe e faz um fade-in
        this.tweens.add({
            targets: logo,
            y: logo.y - 50,
            alpha: 1,
            duration: 2000,
            ease: 'Power1'
        });

        // Adiciona a imagem masterclass deslocada pra baixo um tiquinho
        const masterclass = this.add.image(width / 2, height / 2 + 60, 'masterclass').setScale(1.0).setAlpha(0);

        // Entrada para masterclass
        this.tweens.add({
            targets: masterclass,
            y: masterclass.y - 30, // Sobe para height / 2 + 30
            alpha: 1,
            duration: 2000,
            delay: 500, // Entra um pouco depois da logo
            ease: 'Power1'
        });

        // Uso da API de Graphics para criar uma textura arredondada, o que economiza memória por não necessitar carregar mais arquivos
        let graphics = this.make.graphics();
        graphics.fillStyle(0xB60000, 1); // Vermelho Masterclass
        graphics.fillRoundedRect(0, 0, 180, 50, 25); // x, y, largura, altura, raio (25 = pílula)
        graphics.generateTexture('botao_jogar', 180, 50); // Converte o desenho em uma textura usável por objetos Image

        let botaoImg = this.add.image(0, 0, 'botao_jogar');

        // Cria o texto centralizado dentro do botão
        let botaoTexto = this.add.text(0, -3, 'Jogar', {
            fontFamily: 'Inclusive Sans',
            fontSize: '22px', // Diminuí um pouco a fonte também
            color: '#ffffff',
            resolution: 2,
        }).setOrigin(0.5);

        // Cria um container que agrupa a imagem e o texto para animar os dois em conjunto
        let botao = this.add.container(width / 2, height / 2 + 110, [botaoImg, botaoTexto]);

        // Define a área de colisão do container para capturar eventos de mouse/ touch
        botao.setSize(180, 50);
        botao.setInteractive({ useHandCursor: true });

        // Animação pulsante contínua do botão
        this.tweens.add({
            targets: botao,
            scale: 1.05,
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Efeito de clique no botão
        botao.on('pointerdown', () => {
            this.tweens.add({
                targets: botao,
                scale: 0.9,
                duration: 100,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('telaCarregamento');
                }
            });
        });

        // --- BOTÃO CRÉDITOS ---
        let botaoCreditosTexto = this.add.text(0, -3, 'Créditos', {
            fontFamily: 'Inclusive Sans',
            fontSize: '22px',
            color: '#B60000',
            resolution: 2,
        }).setOrigin(0.5);

        let botaoCreditos = this.add.container(width / 2, height / 2 + 170, [botaoCreditosTexto]);
        botaoCreditos.setSize(180, 50);
        botaoCreditos.setInteractive({ useHandCursor: true });

        // Animação pulsante do botão créditos
        this.tweens.add({
            targets: botaoCreditos,
            scale: 1.05,
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        // Efeito de clique no botão créditos
        botaoCreditos.on('pointerdown', () => {
            this.tweens.add({
                targets: botaoCreditos,
                scale: 0.9,
                duration: 100,
                yoyo: true,
                onComplete: () => {
                    this.scene.start('telaCreditos');
                }
            });
        });

        this.somBotao = this.add.image(300, 55, 'som').setScale(0.04);
        this.somBotao.setInteractive({ useHandCursor: true });

        this.somBotao.on('pointerdown', () => {
            // Lógica de Toggle: verifica a chave da textura para aleternar entre os estados ligado/ desligado
            if (this.somBotao.texture.key === 'som') {
                this.somBotao.setTexture('som_desligado').setScale(0.04);
            } else {
                this.somBotao.setTexture('som').setScale(0.04);
            }
        });

    }
}
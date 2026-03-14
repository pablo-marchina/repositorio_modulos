class TelaDificuldade extends Phaser.Scene {
    constructor() {
        super({ key: 'telaDificuldade' });
    }

    // Preload: assets locais desta cena
    preload() {
        this.load.image('branco', 'assets/branco.jpg');
        this.load.image('cartao_facil', 'assets/cartao_facil.png');
        this.load.image('cartao_medio', 'assets/cartao_medio.png');
        this.load.image('cartao_dificil', 'assets/cartao_dificil.png');
        this.load.image('cadeado', 'assets/cadeado.png');
        this.load.image('cadeado_branco', 'assets/cadeado_branco.png');
        this.load.image('lista', 'assets/lista.png');
        this.load.image('perfil', 'assets/perfil.png');
        this.load.image('voltar', 'assets/voltar.png');
        this.load.image('retangulo', 'assets/retangulo_2.png');
    }

    // Criação dos elementos da cena e configuração de interações/animações
    create() {

        // Recuperação do nome do player do registry
        const nome = this.registry.get('nomeJogador') || 'Jogador';

        // Background
        this.add.image(182.5, 300, 'branco');
        this.add.image(182.5, 45, 'retangulo').setDisplaySize(365, 90);

        // Criação container cartão intermediário
        const cartaoIntermediario = this.add.container(450, 400);

        const intermediarioImage = this.add.image(0, 0, 'cartao_medio').setScale(0.3);
        const textoIntermediario = this.add.text(12, -8, 'Intermediário', {
            fontFamily: 'Inclusive Sans',
            fontSize: '15px',
            color: '#000000',
            resolution: 2
        }).setOrigin(0.5);
        const cadeadoImage = this.add.image(60, 30, 'cadeado').setScale(0.7);

        cartaoIntermediario.add([intermediarioImage, textoIntermediario, cadeadoImage]);

        // Deixar o container interativo e anima
        cartaoIntermediario.setSize(200, 120);
        cartaoIntermediario.setInteractive({ useHandCursor: true });

        this.tweens.add({
            targets: cartaoIntermediario,
            alpha: 1,
            x: 230,
            duration: 200,
            delay: 1000
        });

        // Criando cartão avançado
        const cartaoAvancado = this.add.container(-100, 505);

        const avancadoImage = this.add.image(0, 0, 'cartao_dificil').setScale(0.3);
        const textoAvancado = this.add.text(0, -8, 'Avançado', {
            fontFamily: 'Inclusive Sans',
            fontSize: '15px',
            color: '#ffffff',
            resolution: 2
        }).setOrigin(0.5);
        const cadeadoImage2 = this.add.image(60, 30, 'cadeado_branco').setScale(0.7);

        cartaoAvancado.add([avancadoImage, textoAvancado, cadeadoImage2]);

        cartaoAvancado.setSize(200, 120);
        cartaoAvancado.setInteractive({ useHandCursor: true });

        this.tweens.add({
            targets: cartaoAvancado,
            alpha: 1,
            x: 140,
            duration: 200,
            delay: 1800
        });

        // Adicionando que quando clicar ele balança um pouco
        cartaoAvancado.on('pointerdown', () => {
            this.tweens.add({
                targets: cartaoAvancado,
                x: '+=10',
                yoyo: true,
                repeat: 4,
                duration: 50
            });
        });

        cartaoIntermediario.on('pointerdown', () => {
            this.tweens.add({
                targets: cartaoIntermediario,
                x: '+=10',
                yoyo: true,
                repeat: 4,
                duration: 50
            });
        });

        this.add.image(40, 45, 'lista').setScale(0.65);
        this.add.image(315, 45, 'perfil').setScale(0.1);
        this.add.image(315, 560, 'voltar').setScale(0.8).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
            this.scene.start('telaNome');
        });

        // Criand cartão iniciante
        const cartaoIniciante = this.add.container(-100, 295);

        const inicianteImage = this.add.image(0, 0, 'cartao_facil').setScale(0.3);
        const textoIniciante = this.add.text(0, -8, 'Iniciante', {
            fontFamily: 'Inclusive Sans',
            fontSize: '15px',
            color: '#000000',
            resolution: 2
        }).setOrigin(0.5);

        cartaoIniciante.add([inicianteImage, textoIniciante]);

        cartaoIniciante.setSize(200, 120);
        cartaoIniciante.setInteractive({ useHandCursor: true });

        this.tweens.add({
            targets: cartaoIniciante,
            alpha: 1,
            x: 140,
            duration: 200,
            delay: 200
        });

        // Mesma transição 
        cartaoIniciante.on('pointerdown', () => {
            this.tweens.add({
                targets: cartaoIniciante,
                scale: 0.2,
                duration: 100,
                yoyo: true,
                onComplete: () => {
                    // inicia fade
                    this.cameras.main.fadeOut(700);

                    // quando o fade terminar troca de cena
                    this.cameras.main.once('camerafadeoutcomplete', () => {
                        this.scene.start('contextoFacil');
                    });
                }
            });
        });

        const textoSaudacao = this.add.text(
            this.cameras.main.centerX,
            120,
            `Olá, ${nome}!`,
            {
                fontFamily: 'Inclusive Sans',
                fontSize: '28px',
                color: '#000000',
                resolution: 2,
                align: 'center',
                wordWrap: { width: 320 }
            }
        ).setOrigin(0.5, 0);

        const textoPergunta = this.add.text(
            this.cameras.main.centerX,
            185,
            'Qual trilha deseja seguir?',
            {
                fontFamily: 'Inclusive Sans',
                fontSize: '20px',
                color: '#B60000',
                resolution: 2,
                align: 'center',
                wordWrap: { width: 320 }
            }
        ).setOrigin(0.5, 0);

    }
}
class TelaFalha extends Phaser.Scene {
    constructor() {
        super({ key: 'telaFalha' });
    }

    // Init: recebe o modo, ilha e pontuação final da cena-pergunta para exibir as informações corretas
    init(data) {
        this.modo = data.modo;
        this.ilha = data.ilha;
        this.pontuacao = data.pontuacao || 0;
    }

    create() {
        // Fundo escuro semitransparente sobre o mapa
        this.add.rectangle(182.5, 300, 365, 600, 0x000000, 0.7);

        // Título da tela de falha
        this.add.text(182.5, 200, 'Pontuação insuficiente!', {
            fontFamily: 'Inclusive Sans',
            fontSize: '22px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        // PONTUACAO_MINIMA é a constante global definida em configPhaser.js
        // Informa ao jogador quanto ele fez e quanto precisava
        const pontuacaoMinima = PONTUACAO_MINIMA[this.modo];

        this.add.text(182.5, 260,
            `Você fez R$ ${this.pontuacao}\nPrecisa de pelo menos R$ ${pontuacaoMinima}`,
            {
                fontFamily: 'Inclusive Sans',
                fontSize: '16px',
                color: '#ffffff',
                align: 'center'
            }
        ).setOrigin(0.5);

        // Botão "Tentar novamente": reseta toda a pontuação e o progresso de questões pontuadas,
        // permitindo que o jogador ganhe pontos novamente ao responder as perguntas.
        // O jogador retorna à última ilha — pode navegar para ilhas anteriores via mapa
        // para acumular pontuação suficiente antes de chegar à última ilha novamente.
        const btnTentar = this.add.rectangle(182.5, 350, 200, 50, 0xEB001B)
            .setInteractive({ useHandCursor: true });

        this.add.text(182.5, 350, 'Tentar novamente', {
            fontFamily: 'Inclusive Sans',
            fontSize: '16px',
            color: '#ffffff'
        }).setOrigin(0.5);

        btnTentar.on('pointerdown', () => {
            // Reseta a pontuação acumulada para zero
            this.registry.set('pontuacao', 0);
            localStorage.setItem('pontuacao', '0');

            // Reseta o mapa de questões pontuadas para que todas possam pontuar novamente
            this.registry.set('questoesPontuadas', {});
            localStorage.removeItem('questoesPontuadas');

            // Volta para a última ilha do modo atual
            this.scene.start('cenaPergunta', {
                modo: this.modo,
                ilha: this.ilha
            });
        });

        // Botão "Voltar ao mapa": retorna ao mapa sem resetar pontuação,
        // útil para o jogador visualizar o estado atual das ilhas
        const btnMapa = this.add.rectangle(182.5, 420, 200, 50, 0x555555)
            .setInteractive({ useHandCursor: true });

        this.add.text(182.5, 420, 'Voltar ao mapa', {
            fontFamily: 'Inclusive Sans',
            fontSize: '16px',
            color: '#ffffff'
        }).setOrigin(0.5);

        btnMapa.on('pointerdown', () => {
            // Direciona para o mapa do modo atual
            let telaMapa = 'telaTrilha'; // padrão: iniciante

            if (this.modo === 'intermediario') telaMapa = 'telaTrilhaIntermediaria';
            if (this.modo === 'avancado') telaMapa = 'telaTrilhaAvancada';

            this.scene.start(telaMapa);
        });
    }
}
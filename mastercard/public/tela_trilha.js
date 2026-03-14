class TelaTrilha extends Phaser.Scene {
    constructor() {
        super({ key: 'telaTrilha' });
    }

    // Preload: assets locais desta cena
    preload() {
        this.load.image('fundo_mapa', 'assets/tela.trilha.jpg');
        this.load.image('icone_lista', 'assets/lista_branca.png');
        this.load.image('voltar', 'assets/voltar.png');
        this.load.image('retangulo_2', 'assets/retangulo_2.png');

        // Mantendo o circulo para os níveis temporários, se precisar
        this.load.image('circulo', 'assets/circulo.png');

        // Carregando as imagens dos níveis (parts)
        this.load.image('part_01', 'assets/part_01.png');
        this.load.image('part_02', 'assets/part_02.png');
        this.load.image('part_03', 'assets/part_03.png');
        this.load.image('part_04', 'assets/part_04.png');
        this.load.image('part_05', 'assets/part_05.png');
        this.load.image('part_06', 'assets/part_06.png');
    }

    // Criação dos elementos da cena e configuração de interações/animações
    create() {

        // Recuperação do nome do player do registry
        const nome = this.registry.get('nomeJogador') || 'Jogador';

        // Adiciona o fundo e ajusta para que a imagem preencha a tela inteira sem barras pretas
        const fundo = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'fundo_mapa');
        fundo.setDisplaySize(this.cameras.main.width, this.cameras.main.height);
        // Cabeçalho (Fundo Vermelho Escuro)
        const barraTopo = this.add.image(182.5, 45, 'retangulo_2').setDisplaySize(365, 90).setDepth(10);
        // Ícone do Menu (Esquerda) (trilha.png)
        this.add.image(40, 45, 'icone_lista').setScale(0.65).setDepth(11)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                // Adicione a ação do menu aqui se precisar
                console.log("Menu clicado");
            });

        // Saldo / Reais (Direita)
        const textoSaldo = this.add.text(320, 45, `R$ 0`, {
            fontFamily: 'Inclusive Sans',
            fontSize: '20px',
            color: '#ffffff',
            resolution: 2,
        }).setOrigin(1, 0.5).setDepth(11); // setOrigin(1, 0.5) alinha à direita

        // Botão de voltar provisório (Canto inferior direito)
        this.add.image(315, 560, 'voltar').setScale(0.8).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
            this.scene.start('telaDificuldade');
        }).setDepth(12);

        // Adicionando os níveis (parts) na trilha
        // Os valores de X e Y foram estimados baseados no fundo da tela (365x600)

        // Função auxiliar para adicionar efeito de "mexer" ao passar o mouse
        const adicionarEfeitoHover = (item) => {
            item.on('pointerover', () => {
                this.tweens.add({
                    targets: item,
                    scale: 0.25, // Aumenta um pouco
                    duration: 200,
                    ease: 'Power2'
                });
            });

            item.on('pointerout', () => {
                this.tweens.add({
                    targets: item,
                    scale: 0.22, // Volta ao normal
                    duration: 200,
                    ease: 'Power2'
                });
            });

            item.on('pointerdown', () => {
                this.tweens.add({
                    targets: item,
                    scale: 0.20, // Efeito de clique (encolhe)
                    duration: 100,
                    yoyo: true,
                    ease: 'Power2'
                });
            });
        };

        // --- LÓGICA DE DESBLOQUEIO E ANIMAÇÃO ---

        // Índice do nível desbloqueado (0 = primeiro nível da sequência)
        // No futuro, isso pode vir do registry ou de um banco de dados
        this.unlockedLevel = this.registry.get('nivelDesbloqueado') || 0;

        // Função para adicionar o efeito de "flutuar" (sobe e desce)
        const adicionarFlutuacao = (item) => {
            this.tweens.add({
                targets: item,
                y: item.y - 10,
                duration: 1000,
                ease: 'Sine.easeInOut',
                yoyo: true,
                loop: -1
            });
        };

        // Função para configurar o estado de cada nível
        const configurarNivel = (item, index) => {
            if (index < this.unlockedLevel) {
                // Nível Completado
                item.setAlpha(1);
                item.clearTint();
                item.setInteractive({ useHandCursor: true });
            } else if (index === this.unlockedLevel) {
                // Nível Atual (Ativo)
                item.setAlpha(1);
                item.clearTint();
                item.setInteractive({ useHandCursor: true });
                adicionarFlutuacao(item); // Só o atual flutua
            } else {
                // Nível Bloqueado
                item.setAlpha(0.6);
                item.setTint(0x888888);
                item.setInteractive(false);
            }
        };

        // 1. Parte inferior esquerda (Asfalto principal - 2º na sequência)
        const part1 = this.add.image(85, 415, 'part_01').setScale(0.22).setOrigin(0.5, 1).setDepth(2).setInteractive({ useHandCursor : true });
        adicionarEfeitoHover(part1);

        // 2. Início da trilha (Canto inferior - 1º na sequência - USANDO ASSET PART 6)
        const part2 = this.add.image(200, 580, 'part_06').setScale(0.22).setOrigin(0.5, 1).setDepth(2).setInteractive({ useHandCursor : true });
        adicionarEfeitoHover(part2);

        // 3. Meio da trilha (Asfalto centro-esquerda - 3º na sequência)
        const part3 = this.add.image(230, 320, 'part_03').setScale(0.22).setOrigin(0.5, 1).setDepth(2).setInteractive({ useHandCursor : true });;
        adicionarEfeitoHover(part3);

        // 4. Penúltima parte (Curva para a direita - 4º na sequência)
        const part4 = this.add.image(266, 216, 'part_04').setScale(0.22).setOrigin(0.5, 1).setDepth(2).setInteractive({ useHandCursor : true });;
        adicionarEfeitoHover(part4);

        // 5. Final da trilha visível (Asfalto superior - 5º na sequência)
        const part5 = this.add.image(120, 170, 'part_05').setScale(0.22).setOrigin(0.5, 1).setDepth(2).setInteractive({ useHandCursor : true });;
        adicionarEfeitoHover(part5);

        // Organizando os níveis em sequência conforme o trajeto da estrada
        const sequenciaNiveis = [part2, part1, part3, part4, part5];

        // Aplicando a configuração inicial de estado em cada nível
        sequenciaNiveis.forEach((item, index) => {
            configurarNivel(item, index);
        });

        // Configurando clique para avançar de fase
        sequenciaNiveis.forEach((item, index) => {
            item.on('pointerdown', () => {
                
                // Usando <= para o jogador poder rejogar fases que já passou!
                if (index <= this.unlockedLevel) { 
                    
                    // 1. Criamos a variável baseada no item que foi clicado
                    // Se clicou no index 0 (primeira fase), vira 'ilha1'
                    // Se clicou no index 1 (segunda fase), vira 'ilha2'...
                    let ilhaEscolhida = 'ilha' + (index + 1); 

                    // 2. Agora sim, enviamos o pacote com a vírgula e as chaves {}
                    this.scene.start('cenaPergunta', {
                        ilha: ilhaEscolhida,
                        modo: 'iniciante' //mudar isso aqui depois rapaziada
                    });
                    
                }
            });
        });
    }
};
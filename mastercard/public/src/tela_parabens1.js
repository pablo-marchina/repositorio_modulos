// Overlay de parabéns exibido ao concluir todas as ilhas da trilha Iniciante.
// É iniciado como cena independente (não como overlay de telaTrilha)
// para evitar conflito de cenas ao transitar para telaDificuldade.
class TelaParabens1 extends Phaser.Scene {
    constructor() {
        super({ key: 'telaParabens1' });
    }

    preload() {
        this.load.image('logo', 'assets/identidade_de_marca/logo.png');
    }

    // Create: monta o overlay completo: fundo escuro, card animado e botões de ação
    create() {

        // Referências de posição central da tela (365×600) usadas como âncora
        const CX = 182.5; // centro horizontal
        const CY = 300;   // centro vertical

        // Fundo escuro cobre a tela inteira e absorve cliques acidentais fora do card
        this.add.rectangle(CX, CY, 365, 600, 0x000000, 0.75)
            .setInteractive();

        // Container central: agrupa todos os elementos visuais do card
        const container = this.add.container(CX, CY);
        container.setAlpha(0);    // invisível até a animação de entrada disparar
        container.setScale(0.85); // levemente menor para o efeito de "surgir"

        // Dimensões do card central
        const cardW = 290;
        const cardH = 370;

        // Fundo do card com borda vermelha
        const cardFundo = this.add.graphics();
        cardFundo.fillStyle(0x1a0a0a, 1);
        cardFundo.lineStyle(2, 0xB60000, 1);
        cardFundo.fillRoundedRect(-cardW / 2, -cardH / 2, cardW, cardH, 16);
        cardFundo.strokeRoundedRect(-cardW / 2, -cardH / 2, cardW, cardH, 16);

        // Círculo vermelho que serve de base ao ícone de troféu
        const circuloTrofeu = this.add.graphics();
        circuloTrofeu.fillStyle(0xB60000, 1);
        circuloTrofeu.fillCircle(0, -cardH / 2 + 2, 38);

        // Emoji de troféu centralizado dentro do círculo
        const trofeuTexto = this.add.text(0, -cardH / 2 + 2, '🏆', {
            fontSize: '28px'
        }).setOrigin(0.5);

        // Título principal
        const txtParabens = this.add.text(0, -cardH / 2 + 75, 'Parabéns!', {
            fontFamily: 'Inclusive Sans',
            fontSize: '26px',
            color: '#ffffff',
            stroke: '#ffffff',
            strokeThickness: 0.5,
            align: 'center'
        }).setOrigin(0.5);

        // Subtítulo identifica qual trilha foi concluída
        const txtFase = this.add.text(0, -cardH / 2 + 110, 'FASE INICIANTE CONCLUÍDA', {
            fontFamily: 'Inclusive Sans',
            fontSize: '13px',
            color: '#B60000',
            align: 'center'
        }).setOrigin(0.5);

        // Linha divisória entre cabeçalho e corpo do card
        const separador = this.add.graphics();
        separador.lineStyle(1, 0xB60000, 0.6);
        separador.lineBetween(-110, -cardH / 2 + 130, 110, -cardH / 2 + 130);

        // Texto descritivo incentivando o avanço para a próxima trilha
        const txtDescricao = this.add.text(0, -cardH / 2 + 170, 'Você completou todas as ilhas!\nAgora avance para a fase\nintermediária.', {
            fontFamily: 'Inclusive Sans',
            fontSize: '13px',
            color: '#cccccc',
            align: 'center',
            lineSpacing: 4,
            wordWrap: { width: 240 }
        }).setOrigin(0.5);

        // Mini card que exibe o item desbloqueado
        const miniCardY = -cardH / 2 + 255;

        // Fundo do mini card com borda vermelha
        const miniCardFundo = this.add.graphics();
        miniCardFundo.fillStyle(0x2a0a0a, 1);
        miniCardFundo.lineStyle(1.5, 0xB60000, 1);
        miniCardFundo.fillRoundedRect(-110, miniCardY - 28, 220, 56, 10);
        miniCardFundo.strokeRoundedRect(-110, miniCardY - 28, 220, 56, 10);

        // Label de status em vermelho acima do nome do item
        const txtDesbloqueado = this.add.text(-100, miniCardY - 14, 'DESBLOQUEADO', {
            fontFamily: 'Inclusive Sans',
            fontSize: '11px',
            color: '#B60000',
        }).setOrigin(0, 0.5);

        // Nome do item que foi desbloqueado
        const txtCartao = this.add.text(-100, miniCardY + 6, 'Cartão Intermediário', {
            fontFamily: 'Inclusive Sans',
            fontSize: '13px',
            color: '#ffffff',
        }).setOrigin(0, 0.5);

        // Logo Mastercard posicionada no canto direito do mini card
        const logoMastercard = this.add.image(73, miniCardY, 'logo').setScale(0.18);

        // Posição vertical do botão principal dentro do card
        const btnY = -cardH / 2 + 322;

        // Fundo visual do botão (gráfico com bordas arredondadas)
        const btnFundo = this.add.graphics();
        btnFundo.fillStyle(0xB60000, 1);
        btnFundo.fillRoundedRect(-100, btnY - 20, 200, 40, 20);

        // Rótulo do botão centralizado sobre o fundo gráfico
        const txtContinuar = this.add.text(0, btnY, 'Continuar →', {
            fontFamily: 'Inclusive Sans',
            fontSize: '18px',
            color: '#ffffff',
            resolution: 2,
        }).setOrigin(0.5);

        // Retângulo transparente como área de toque — mais confiável que zone dentro de container
        // no mobile, pois acompanha corretamente o transform (escala/posição) do container pai
        const btnHit = this.add.rectangle(0, btnY, 200, 44, 0x000000, 0)
            .setInteractive({ useHandCursor: true });

        // Feedback visual de hover (desktop) e toque (mobile)
        btnHit.on('pointerover', () => { btnFundo.setAlpha(0.85); });
        btnHit.on('pointerout',  () => { btnFundo.setAlpha(1); });

        // Ao confirmar: micro-animação de "aperto" antes de navegar para telaDificuldade
        btnHit.on('pointerdown', () => {
            this.tweens.add({
                targets: container,
                scaleX: 0.97,
                scaleY: 0.97,
                duration: 80,
                yoyo: true,
                onComplete: () => {
                    // Persiste o desbloqueio no registry e no localStorage para sobreviver a recarregamentos
                    this.registry.set('intermediarioDesbloqueado', true);
                    localStorage.setItem('intermediarioDesbloqueado', 'true');
                    // Para esta cena e a trilha antes de iniciar a tela de dificuldade
                    this.scene.stop();
                    this.scene.stop('telaTrilha');
                    this.scene.start('telaDificuldade');
                }
            });
        });

        // Adiciona todos os elementos ao container na ordem de renderização correta
        container.add([
            cardFundo,
            circuloTrofeu,
            trofeuTexto,
            txtParabens,
            txtFase,
            separador,
            txtDescricao,
            miniCardFundo,
            txtDesbloqueado,
            txtCartao,
            logoMastercard,
            btnFundo,
            txtContinuar,
            btnHit,        // deve ser o último para ficar acima dos elementos visuais
        ]);

        // Link secundário fora do container (em coordenadas de mundo) para "Voltar para a trilha"
        // Fica fora do container para não herdar a animação de escala e ser imediatamente clicável
        const txtVoltar = this.add.text(CX, CY + cardH / 2 + 22, 'Voltar para a trilha', {
            fontFamily: 'Inclusive Sans',
            fontSize: '14px',
            color: '#ffffff',
            align: 'center',
        }).setOrigin(0.5)
          .setAlpha(0)
          .setInteractive({ useHandCursor: true });

        // Feedback visual de hover
        txtVoltar.on('pointerover', () => { txtVoltar.setAlpha(0.65); });
        txtVoltar.on('pointerout',  () => { txtVoltar.setAlpha(1); });

        // Para apenas esta cena sobreposição; a TelaTrilha ao fundo continua ativa
        txtVoltar.on('pointerdown', () => {
            // Persiste o desbloqueio mesmo ao voltar para a trilha sem clicar em "Continuar"
            this.registry.set('intermediarioDesbloqueado', true);
            localStorage.setItem('intermediarioDesbloqueado', 'true');
            this.scene.stop();
        });

        // Animação de entrada do card: Back.easeOut cria efeito elástico suave,
        // reforçando a sensação de conquista ao exibir o card na tela
        this.tweens.add({
            targets: container,
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
            duration: 350,
            ease: 'Back.easeOut',
            onComplete: () => {
                // "Voltar" aparece com fade-in apenas após o card estar completamente visível
                this.tweens.add({
                    targets: txtVoltar,
                    alpha: 1,
                    duration: 200
                });
            }
        });
    }
}
// Código de inicialização do jogo: carrega fonte, cria jogo Phaser e registra cenas.
window.onload = function () {
    // Configurações principais do Phaser
    const config = {
        type: Phaser.AUTO,
        backgroundColor: '#000000',
        scale: {
            mode: Phaser.Scale.FIT, 
            autoCenter: Phaser.Scale.NONE, 
            width: 365,
            height: 600,
        },

    scene: []

    };

    // Carrega a fonte personalizada antes de iniciar o jogo
    document.fonts.load("16px 'Inclusive Sans'").then(() => {
        // Cria a instância do jogo
        const game = new Phaser.Game(config);

        // Adiciona as cenas ao jogo
        game.scene.add('telaInicial', TelaInicial);
        game.scene.add('telaCarregamento', TelaCarregamento);
        game.scene.add('telaNome', TelaNome);
        game.scene.add('telaDificuldade', TelaDificuldade);
        game.scene.add('telaTrilha', TelaTrilha);
        game.scene.add('contextoFacil', ContextoFacil);
        game.scene.add('telaCreditos', TelaCreditos);
        game.scene.add('cenaPergunta', CenaPergunta);


        // Define qual cena será iniciada primeiro
        game.scene.start('telaInicial');
    });
};




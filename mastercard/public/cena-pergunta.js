class CenaPergunta extends Phaser.Scene {
    constructor() {
        super({ key: 'cenaPergunta' });
    }

    init(data) {
        this.modo = data.modo || 'iniciante'; 
        this.ilha = data.ilha || 'ilha1';
        this.indiceQuestao = 0; 
    }

    preload() {

        const dificuldades = ['iniciante', 'intermediario', 'avancado'];
        for (let i = 1; i <= 5; i++) {
            dificuldades.forEach(d => {
                this.load.image(`${d}_i${i}_q1`, `assets/${d}_i${i}_q1.png`);
                this.load.image(`${d}_i${i}_q2`, `assets/${d}_i${i}_q2.png`);
                this.load.image(`${d}_i${i}_q3`, `assets/${d}_i${i}_q3.png`);
                this.load.image(`${d}_i${i}_q4`, `assets/${d}_i${i}_q4.png`);
                this.load.image(`${d}_i${i}_q5`, `assets/${d}_i${i}_q5.png`);
            });
        }

        this.load.image('lista', 'assets/lista.png');
        this.load.image('errado', 'assets/errado.png');
        this.load.image('ok-erro', 'assets/ok-erro.png');
        this.load.image('ok-acerto', 'assets/ok-acerto.png');
        this.load.image('certo', 'assets/certo.png');
        this.load.image('fundo-opcao', 'assets/fundoopcao.png');
        this.load.image('voltar', 'assets/voltar.png');
    }

    create() {

        const ordemIlhas = ['ilha1', 'ilha2', 'ilha3', 'ilha4', 'ilha5'];
    

        this.montarQuestao();

        this.add.image(315, 560, 'voltar').setScale(0.8).setInteractive({ useHandCursor: true }).on('pointerdown', () => {
        this.scene.start('telaTrilha');
        });
        

    }

    montarQuestao() {
        // limpa o que já existe (importante para a próxima pergunta)
        this.children.removeAll();

        const dados = perguntas[this.modo][this.ilha][this.indiceQuestao];


        this.add.image(182.5, 300, dados.fundo).setScale(0.226);

        this.add.image(50, 55, 'lista').setScale(0.8);
   
        this.criarBotoes(dados);
    }

    criarBotoes(dados) {
        dados.alternativas.forEach((texto, index) => {
            const x = 182.5; 
            const y = 330 + (index * 85);

            const container = this.add.container(x, y);
            const bg = this.add.image(0, 0, 'fundo-opcao').setScale(1.02, 1.2).setInteractive({ useHandCursor: true });
            const txt = this.add.text(0, -5, texto, { 
                fontFamily: 'Inclusive Sans',
                fontSize: '13px', 
                color: '#000',
                align: 'center',
                wordWrap: { 
                width: bg.width * 0.9,
                useAdvancedWrap: true
                }
            }).setOrigin(0.5);

            container.add([bg, txt]);

           
            bg.on('pointerdown', () => {
                if (index === dados.correta) {
                    this.respostaCorreta(bg);
                } else {
                    this.respostaErrada(bg);
                }
            });
        });
    }

    respostaCorreta(botao) {
          
        botao.setTint(0x00FF00);

        const bloqueador = this.add.rectangle(182.5, 300, 365, 600, 0x000000, 0.6);
        bloqueador.setInteractive();

        const containerAcerto = this.add.container(182.5, 650);

        containerAcerto.setScale(0); 
        containerAcerto.setAlpha(0);
        containerAcerto.setDepth(1000);

        const dados = perguntas[this.modo][this.ilha][this.indiceQuestao];

        const imgCerto = this.add.image(0, 0, 'certo').setScale(0.32);

        const txtHeader = this.add.text(0, -70, 'Parabéns! Você escolheu com consciência.', {
            fontFamily: 'Inclusive Sans',
            fontSize: '15px',
            color: '#007204', 
            stroke: '#007204',
            strokeThickness: 0.8,
            align: 'center',
            wordWrap: { width: 400 }
        }).setOrigin(0.5);
        
         
        const txtFeedback = this.add.text(30, -19, dados.feedback[1], {
            fontFamily: 'Inclusive Sans',
            fontSize: '14px',
            color: '#000000', 
            align: 'center',
            wordWrap: { width: 200 } 
        }).setOrigin(0.5);

        const btnOk = this.add.image(25, 50, 'ok-acerto').setScale(0.11).setInteractive({ useHandCursor: true });

        containerAcerto.add([imgCerto, txtHeader, txtFeedback, btnOk]);

        this.tweens.add({
            targets: containerAcerto,
            scale: 1.04,          // Cresce até o tamanho final
            alpha: 1,             // Aparece suavemente
            duration: 400,        // Rapidez do efeito
            ease: 'Back.easeOut'  // O efeito de "elástico" ao crescer
        });

        this.tweens.add({
            targets: this.cameras.main,
            scrollY: 120, 
            duration: 400,
            ease: 'Power2'
        });

        btnOk.on('pointerdown', () => {
        this.cameras.main.scrollY = 0;
        containerAcerto.destroy(); 
        bloqueador.destroy();
        this.indiceQuestao++;
        

        if (this.indiceQuestao < perguntas[this.modo][this.ilha].length) {
        this.montarQuestao(); 
        } else {
           
            let numeroIlhaAtual = parseInt(this.ilha.replace('ilha', '')); 
            
          
            let nivelMaximoAlcancado = this.registry.get('nivelDesbloqueado') || 0;

            if (numeroIlhaAtual >= nivelMaximoAlcancado) {
                this.registry.set('nivelDesbloqueado', numeroIlhaAtual); 
            }

            localStorage.setItem('concluido_' + this.ilha, 'true');
            if (this.ilha === 'ilha1') {
                localStorage.setItem('liberado_ilha2', 'true');
            } 
            
            this.scene.start('telaTrilha'); 

        }

        });

    }

    respostaErrada(botao) {
    
    botao.setTint(0xE63946);

    const bloqueador = this.add.rectangle(182.5, 300, 365, 600, 0x000000, 0.6);
    bloqueador.setInteractive();

    this.cameras.main.shake(200, 0.01);

    const containerErro = this.add.container(182.5, 650).setScale(1.04);

    const dados = perguntas[this.modo][this.ilha][this.indiceQuestao];

    const imgErrado = this.add.image(0, 0, 'errado').setScale(0.32);

    const txtHeader = this.add.text(0, -70, 'Ops! Essa escolha pode trazer consequências...', {
        fontFamily: 'Inclusive Sans',
        fontSize: '15px',
        color: '#ff0000', 
        stroke: '#ff0000',
        strokeThickness: 0.8,
        align: 'center',
        wordWrap: { width: 400 }
    }).setOrigin(0.5);
    
    const txtFeedback = this.add.text(30, -20, dados.feedback[0], {
        fontFamily: 'Inclusive Sans',
        fontSize: '14px',
        color: '#000000', 
        align: 'center',
        wordWrap: { width: 280 } 
    }).setOrigin(0.5);

    this.tweens.add({
            targets: this.cameras.main,
            scrollY: 120, 
            duration: 400,
            ease: 'Power2'
    });


    
    const btnOk = this.add.image(20, 50, 'ok-erro').setScale(0.32).setInteractive({ useHandCursor: true });

    
    containerErro.add([imgErrado, txtHeader, txtFeedback, btnOk]);

   
    btnOk.on('pointerdown', () => {
        botao.clearTint();
        containerErro.destroy(); 
        this.cameras.main.scrollY = 0;
        bloqueador.destroy();
    });


    }
}
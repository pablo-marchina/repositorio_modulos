    # Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="/documents/assets/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Masterclass

## Masterminds

## 👨‍🎓 Integrantes: 
- <a href="https://www.linkedin.com/in/dg-lopes/">Davi Lopes</a>
- <a href="https://www.linkedin.com/in/lucas-daddazio/">Lucas D'Addazio</a>
- <a href="https://www.linkedin.com/in/pablo-marchina/">Pablo Marchina</a> 
- <a href="https://www.linkedin.com/in/enzo-c-a221b23b3/">Enzo Faria</a> 
- <a href="https://www.linkedin.com/in/rafael-%C3%A2ngelo-7092b93aa/">Rafael Botelho</a>
- <a href="https://www.linkedin.com/in/pietra-feitoza/">Pietra Feitoza</a> 
- <a href="https://www.linkedin.com/in/raissaguimaraes/">Raissa Guimaraes</a>

## 👩‍🏫 Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/laizaribeiro/">Laíza Silva</a>
### Instrutores
- <a href="https://www.linkedin.com/in/bruna-mayer/">Bruna Mayer</a>
- <a href="https://www.linkedin.com/in/profclaudioandre/">Claudio Andre</a> 
- <a href="https://www.linkedin.com/in/crishna-irion-7b5aa311/">Crishna Irion</a> 
- <a href="https://www.linkedin.com/in/diogo-martins-gonçalves-de-morais-96404732/">Diogo Martins</a>
- <a href="https://www.linkedin.com/in/natalia-k-37a62052/">Natália Kloeckner</a> 

## 📜 Descrição

&emsp;  O projeto "Masterclass" é um jogo digital educativo desenvolvido pelo grupo Masterminds em parceria com a Mastercard, com o propósito central de combater um desafio latente no cenário econômico brasileiro: a baixa literacia financeira. Com a rápida inclusão de milhões de pessoas no sistema financeiro nacional, abrangendo especialmente jovens, trabalhadores informais e pequenos empreendedores, surgiu um descompasso alarmante. Muitos destes novos usuários passaram a ter acesso a linhas de crédito, cartões e ferramentas bancárias sem o devido preparo para compreender conceitos fundamentais, como taxas de juros, inflação e planejamento básico. Diante deste cenário de vulnerabilidade ao endividamento, o Masterclass nasce como uma solução inovadora, transformando o aprendizado financeiro, frequentemente considerado árduo ou teórico, em uma experiência dinâmica e imersiva.

&emsp;  Enquadrado no gênero de trívia narrativa e desenvolvido de forma otimizada para plataformas WebMobile (Single-player), o jogo coloca o usuário como o grande protagonista da sua própria história financeira. O enredo é estruturado em torno da "Jornada da Vida", um caminho composto por cinco ilhas temáticas que representam diferentes fases cronológicas do jogador, desde a juventude até o momento da aposentadoria. Em cada uma destas ilhas, o jogador é confrontado com situações do cotidiano e dilemas reais que exigem tomadas de decisão focadas no uso consciente de cartões de crédito, débito e pré-pago. Esta estrutura narrativa foi cuidadosamente desenhada para gerar uma forte identificação cultural e demográfica, refletindo os verdadeiros desafios socioeconômicos enfrentados pela população.

&emsp;  A mecânica principal baseia-se na simulação de causa e consequência através de um sistema de progressão condicional. Cada escolha financeira feita pelo jogador impacta diretamente o seu saldo simbólico dentro do jogo. Acertos e decisões responsáveis impulsionam o progresso e aumentam o saldo, enquanto os erros abrem espaço para um momento de correção pedagógica. É neste ponto que o jogo introduz o personagem "Wink", um NPC mentor que fornece feedback didático imediato. Este ecossistema cria um ambiente seguro para falhas (safe-to-fail), permitindo que o usuário experimente as severas consequências de um mau planejamento, como o acúmulo de juros rotativos, mas sem sofrer qualquer punição ou risco financeiro no mundo real.


https://graduacao.pages.git.inteli.edu.br/2026-1a/t24/g04
(Link para o jogo funcionando na web)


## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

```
/
├── documents/                            # Documentos e assets internos do projeto
│   ├── assets/                           # Imagens e recursos visuais usados na documentação
│   ├── other/                            # Arquivos adicionais (concept art, prints, PDFs)
│   └── gdd.md                            # Game Design Document do projeto
│
├── public/                               # Arquivos públicos servidos diretamente
│   ├── assets/
│   │   ├── cartoes_dificuldade/          # Imagens dos cartões de dificuldade (fácil, médio, difícil)
│   │   ├── icones_gerais/                # Ícones gerais da interface (acessibilidade, menu, edição etc.)
│   │   ├── icones_trilha/                # Ícones das partes da trilha
│   │   ├── identidade_de_marca/          # Assets de identidade visual (logo, telas, wink, fundo etc.)
│   │   ├── navegacao/                    # Ícones de navegação (voltar, fechar, seta, ok etc.)
│   │   ├── perguntas/                    # Imagens das perguntas organizadas por dificuldade e índice
│   │   └── sons/                         # Arquivos de áudio (.mp3) do jogo
│   │
│   └── src/                              # Código-fonte da aplicação
│       ├── cena-pergunta.js              # Lógica da cena de perguntas
│       ├── configPhaser.js               # Configuração do Phaser
│       ├── configuracao.js               # Configurações gerais do jogo
│       ├── contexto-avancado.js          # Contexto narrativo da trilha avançada
│       ├── contexto-facil.js             # Contexto narrativo da trilha fácil
│       ├── contexto-intermediario.js     # Contexto narrativo da trilha intermediária
│       ├── perguntas.js                  # Banco de perguntas do jogo
│       ├── phaser.js                     # Entrada principal do Phaser
│       ├── tela_carregamento.js          # Tela de carregamento
│       ├── tela_creditos.js              # Tela de créditos
│       ├── tela_dificuldade.js           # Tela de seleção de dificuldade
│       ├── tela_inicial.js               # Tela inicial do jogo
│       ├── tela_nome.js                  # Tela de inserção de nome do jogador
│       ├── tela_parabens1.js             # Tela de parabéns (variante 1)
│       ├── tela_parabens2.js             # Tela de parabéns (variante 2)
│       ├── tela_trilha_avancada.js       # Tela da trilha avançada
│       ├── tela_trilha_intermediaria.js  # Tela da trilha intermediária
│       ├── tela_trilha.js                # Tela principal da trilha
│       ├── tela_tutorial.js              # Tela de tutorial
│       └── index.html                    # Ponto de entrada da aplicação web
│
├── .gitlab-ci.yml                        # Pipeline de CI/CD no GitLab
└── README.md                             # Documentação principal do projeto
```


## 🔧 Como executar o código

### Pré-requisitos
 
&emsp;  O jogo roda inteiramente no navegador e não requer instalação de dependências locais. A biblioteca [Phaser 3](https://phaser.io/) (versão 3.55.2) é carregada via CDN diretamente no `index.html`, junto à fonte [Inclusive Sans](https://fonts.google.com/specimen/Inclusive+Sans) via Google Fonts.
 
Para executar localmente, você precisará de:
 
- Um navegador moderno (Google Chrome, Firefox, Edge ou Safari)
- Um servidor local HTTP (necessário para evitar bloqueios de CORS ao carregar assets de áudio e imagem)
 
> ⚠️ **Importante:** não abra o `index.html` diretamente como arquivo (`file://`) - os sons e imagens não carregarão corretamente sem um servidor HTTP.
 
 
### Opção 1 - Jogar online (recomendado)
 
Acesse diretamente pelo link publicado no GitLab Pages, sem necessidade de instalar nada:
 
```
https://graduacao.pages.git.inteli.edu.br/2026-1a/t24/g04
```
 
 
### Opção 2 - Executar localmente
 
**Passo 1 - Clone o repositório:**
 
```bash
git clone https://git.inteli.edu.br/graduacao/2026-1a/t24/g04.git
cd g04
```
 
**Passo 2 - Inicie um servidor local. Escolha uma das opções abaixo:**
 
Com VS Code:
Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**. O jogo abrirá automaticamente no navegador.
 
Com Python 3:
```bash
python -m http.server 8000
```
Depois acesse `http://localhost:8000` no navegador.
 
Com Node.js:
```bash
npx serve .
```
Depois acesse o endereço exibido no terminal (normalmente `http://localhost:3000`).
 
**Passo 3 - Jogue!**

## 🗃 Histórico de lançamentos

* **0.5.0 - 11/04/2026** - Versão final (Sprint 5): revisão e polimento do MVP, playtests com 6 usuários com nota média de 8,7, correção de bugs identificados nos testes e refinamentos gerais de UX e conteúdo.
 
* **0.4.0 - 28/03/2026** - Sprint 4: implementação do NPC Wink com dicas e feedbacks didáticos por questão, sistema de pontuação simbólica em R$, modal de configurações com controle de áudio e quatro modos de acessibilidade para daltonismo (Normal, Protanopia, Deuteranopia e Tritanopia), telas de contexto narrativo por ilha, animação matemática (MU + MUV) na tela inicial, e telas de parabéns com desbloqueio progressivo de dificuldades.
 
* **0.3.0 - 14/03/2026** - Sprint 3: cena de perguntas com estrutura Data-Driven (`perguntas.js`), pop-ups de feedback com scroll de câmera e bloqueio de cliques externos, telas de contexto narrativo (ContextoFacil), redesign do mapa da trilha com destaque animado para a fase atual, tela de créditos e correções de bugs na tela de nome.
 
* **0.2.0 - 28/02/2026** - Sprint 2: menu inicial com animações e identidade visual, tela de carregamento com barra de progresso animada, tela de inserção de nome com campo HTML sobreposto ao canvas, seleção de dificuldade com cartões visuais Mastercard e estrutura inicial do mapa de fases em formato de Ilhas da Vida.
 
* **0.1.0 - 14/02/2026** - Sprint 1: concept art, definição da identidade visual e paleta de cores, criação do personagem Wink, estrutura inicial do projeto com tela inicial e fluxo básico de cenas.

## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://github.com/Intelihub/Template_M1">MODELO GIT INTELI</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/Intelihub/Template_M1">Inteli, <a href="https://git.inteli.edu.br/davi.lopes">Davi Lopes</a>, <a href="https://git.inteli.edu.br/lucas.daddazio">Lucas D'Addazio</a>, <a href="https://git.inteli.edu.br/pablo.marchina">Pablo Marchina</a>, <a href="https://git.inteli.edu.br/enzo.faria">Enzo Faria</a>, <a href="https://git.inteli.edu.br/rafael.botelho">Rafael Botelho</a>, <a href="https://git.inteli.edu.br/pietra.feitoza">Pietra Feitoza</a>, <a href="https://git.inteli.edu.br/raissa.guimaraes">Raissa Guimaraes</a></a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>



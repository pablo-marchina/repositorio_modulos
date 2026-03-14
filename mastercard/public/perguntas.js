const perguntas = {
 
    iniciante: {
        ilha1: [
            { fundo: 'iniciante_i1_q1', alternativas: ['Gasta todo seu dinheiro no churrasco', 'Vai na pizzaria e no churrasco', 'Você vai na pizzaria com seus amigos'], correta: 2, feedback: ['Nem sempre gastar tudo de uma vez é a melhor opção. Pense no equilíbrio entre felicidade e gasto!', 'Ótimo! Você se divertiu e ainda guardou dinheiro. Isso é equilíbrio financeiro!'] },
            { fundo: 'iniciante_i1_q2', alternativas: ['Guardar todo o dinheiro sem gastar nada, porque poupar é sempre a única coisa certa.', 'Dividir o dinheiro: uma parte para necessidades, uma parte para lazer e uma parte para guardar.', 'Gastar tudo agora porque no futuro você vai ganhar mais dinheiro.'], correta: 1, feedback: ['Poupar é importante, mas equilíbrio entre gastar e guardar é o segredo!', 'Perfeito! Dividir o dinheiro com planejamento é a base da educação financeira.'] },
            { fundo: 'iniciante_i1_q3', alternativas: ['Comprar imediatamente usando o cartão de crédito dos pais sem avisar.', 'Desistir do sonho porque dinheiro é muito difícil de juntar.', 'Criar uma meta de economia mensal e poupar até atingir o valor necessário.'], correta: 2, feedback: ['Usar recursos de outros sem permissão não é o caminho certo!', 'Com planejamento e metas, juntar dinheiro é totalmente possível!'] },
            { fundo: 'iniciante_i1_q4', alternativas: ['Necessidade é algo indispensável para viver, como comida; desejo é algo que queremos mas não precisamos urgentemente.', 'Necessidade e desejo são a mesma coisa — se você quer muito, virou necessidade.', 'Desejo é mais importante que necessidade porque nos faz felizes.'], correta: 0, feedback: ['Exatamente! Saber diferenciar necessidade de desejo é o primeiro passo para gastar bem.', 'Necessidade e desejo são conceitos diferentes e separar um do outro ajuda no controle financeiro.'] },
            { fundo: 'iniciante_i1_q5', alternativas: ['Anotar apenas os gastos grandes, porque os pequenos não fazem diferença.', 'Fazer uma lista com tudo que entra e sai de dinheiro para entender para onde ele vai.', 'Não precisa controlar — se acabar, é só pedir mais.'], correta: 1, feedback: ['Gastos pequenos somados podem ser maiores que os grandes! Todo centavo conta.', 'Isso mesmo! Registrar receitas e despesas é a base de um bom orçamento pessoal.'] }
        ],
        ilha2: [
            { fundo: 'iniciante_i2_q1', alternativas: ['Comprar tudo o que está na promoção, já que está mais barato.', 'Comprar apenas o que estava planejado e realmente precisa, mesmo que outros itens estejam em promoção.', 'Ignorar todas as promoções porque são sempre armadilhas.'], correta: 1, feedback: ['Promoção só vale a pena se você realmente precisava do item!', 'Ótimo! Comprar por necessidade e não por impulso é um hábito financeiro saudável.'] },
            { fundo: 'iniciante_i2_q2', alternativas: ['Pegar emprestado dinheiro com amigos para comprar o item hoje.', 'Esperar acumular o valor necessário antes de comprar.', 'Comprar parcelado sem verificar se as parcelas cabem no seu orçamento.'], correta: 1, feedback: ['Juntar o valor antes de comprar evita dívidas e estresse financeiro!', 'Muito bem! Poupar antes de gastar é uma das melhores práticas financeiras.'] },
            { fundo: 'iniciante_i2_q3', alternativas: ['O preço mais barato é sempre a melhor opção de compra.', 'Avaliar preço, qualidade e real necessidade antes de decidir a compra.', 'Marca famosa garante sempre a melhor compra, independente do preço.'], correta: 1, feedback: ['Preço baixo sem qualidade pode sair mais caro a longo prazo!', 'Exato! Consumo consciente é avaliar todos os fatores antes de comprar.'] },
            { fundo: 'iniciante_i2_q4', alternativas: ['Dívida é sempre algo ruim e deve ser evitada a qualquer custo.', 'Toda dívida é igual, não importa o motivo ou os juros.', 'Algumas dívidas podem ser planejadas, mas é importante entender os juros e ter certeza de que conseguirá pagar.'], correta: 2, feedback: ['Existem dívidas planejadas e saudáveis, mas é preciso entender bem os juros!', 'Correto! Saber avaliar uma dívida é parte essencial da inteligência financeira.'] },
            { fundo: 'iniciante_i2_q5', alternativas: ['Guardar dinheiro em casa é a única forma segura de poupar.', 'Poupar significa simplesmente não gastar nada.', 'Poupar é reservar regularmente uma parte do seu dinheiro para objetivos futuros.'], correta: 2, feedback: ['Guardar dinheiro em casa sem destino definido não é poupar com inteligência!', 'Perfeito! Poupança com objetivo e regularidade faz toda a diferença.'] }
        ],
        ilha3: [
            { fundo: 'iniciante_i3_q1', alternativas: ['Receita é o dinheiro que entra (ganhos) e despesa é o dinheiro que sai (gastos).', 'Receita e despesa são a mesma coisa, apenas nomes diferentes.', 'Despesa é o dinheiro que você ganha trabalhando.'], correta: 0, feedback: ['Ótimo! Entender receita e despesa é fundamental para montar qualquer orçamento.', 'Receita = entradas de dinheiro; Despesa = saídas de dinheiro. São conceitos opostos!'] },
            { fundo: 'iniciante_i3_q2', alternativas: ['Gastar mais do que ganha, usando crédito para cobrir a diferença.', 'Gastar exatamente o que ganha, sem sobrar nada para poupar.', 'Gastar menos do que ganha, reservando a diferença para poupança ou investimentos.'], correta: 2, feedback: ['Gastar mais do que se ganha leva ao endividamento!', 'Isso mesmo! Gastar menos do que ganha cria margem para construir um futuro financeiro seguro.'] },
            { fundo: 'iniciante_i3_q3', alternativas: ['Aluguel e alimentação são desejos, porque nem todo mundo tem.', 'Videogame e roupas de grife são necessidades básicas para a vida social.', 'Necessidades básicas incluem moradia, alimentação, saúde e educação.'], correta: 2, feedback: ['Necessidades básicas são aquelas indispensáveis para viver com dignidade!', 'Exato! Moradia, alimentação, saúde e educação são necessidades, não desejos.'] },
            { fundo: 'iniciante_i3_q4', alternativas: ['É impossível economizar se você tem pouco dinheiro.', 'Mesmo com pouco dinheiro, é possível economizar reservando pequenas quantias regularmente.', 'Só vale a pena economizar quando se ganha muito dinheiro.'], correta: 1, feedback: ['Com constância, pequenas economias crescem bastante com o tempo!', 'Perfeito! O hábito de poupar independe do valor — o importante é a consistência.'] },
            { fundo: 'iniciante_i3_q5', alternativas: ['Juros são uma punição criada pelos bancos para prejudicar os clientes.', 'Juros são o custo de usar dinheiro que não é seu, cobrado em empréstimos e parcelamentos.', 'Juros só existem em cartão de crédito e não afetam outras compras.'], correta: 1, feedback: ['Juros existem em diversas situações financeiras, não apenas como punição!', 'Correto! Entender o que são juros ajuda a tomar melhores decisões financeiras.'] }
        ],
        ilha4: [
            { fundo: 'iniciante_i4_q1', alternativas: ['Fazer uma lista de compras e seguir apenas ela, sem adicionar itens não planejados.', 'Ir ao mercado com fome para aproveitar melhor as promoções.', 'Comprar tudo que está em oferta para estocar e economizar no futuro.'], correta: 0, feedback: ['Lista de compras é uma das ferramentas mais simples e eficazes contra o gasto por impulso!', 'Exato! Planejamento antes das compras evita desperdício de dinheiro.'] },
            { fundo: 'iniciante_i4_q2', alternativas: ['Trabalho voluntário, porque ajudar pessoas é sempre recompensador.', 'Qualquer atividade que gere renda, como mesada, freelance, venda de produtos ou emprego.', 'Apenas empregos formais com carteira assinada são considerados fonte de renda.'], correta: 1, feedback: ['Existem diversas formas de gerar renda além do emprego formal!', 'Correto! Renda pode vir de muitas fontes: mesada, venda, serviços, entre outras.'] },
            { fundo: 'iniciante_i4_q3', alternativas: ['Guardar em casa embaixo do colchão para ter acesso rápido.', 'Gastar tudo imediatamente, pois o dinheiro perde valor com o tempo.', 'Guardar numa poupança ou conta que rende juros, para o dinheiro crescer ao longo do tempo.'], correta: 2, feedback: ['Dinheiro guardado em casa não rende e ainda pode ser perdido!', 'Ótimo! Fazer o dinheiro trabalhar por você é o início do pensamento de investidor.'] },
            { fundo: 'iniciante_i4_q4', alternativas: ['Planejar as finanças é perda de tempo — o dinheiro sempre some de qualquer jeito.', 'Planejar as finanças ajuda a entender seus gastos, atingir metas e evitar dívidas.', 'Só adultos precisam planejar finanças; jovens podem gastar sem preocupação.'], correta: 1, feedback: ['O planejamento financeiro é a chave para realizar sonhos e evitar problemas!', 'Perfeito! Planejar desde jovem cria hábitos que fazem diferença para toda a vida.'] },
            { fundo: 'iniciante_i4_q5', alternativas: ['Trocar de celular todo ano para sempre ter o modelo mais novo.', 'Comprar o celular mais barato disponível, independentemente das necessidades.', 'Avaliar suas reais necessidades e escolher um celular que caiba no orçamento sem comprometer outras prioridades.'], correta: 2, feedback: ['Trocar de aparelho frequentemente sem necessidade gera gastos desnecessários!', 'Exato! Decisões de compra conscientes levam em conta necessidade, qualidade e orçamento.'] }
        ],
        ilha5: [
            { fundo: 'iniciante_i5_q1', alternativas: ['Guardar dinheiro em um cofrinho', 'Gastá-lo em doces', 'Guardar na poupança'], correta: 2, feedback: ['A poupança é um passo inicial importante!', 'É preciso planejar o futuro.'] },
            { fundo: 'iniciante_i5_q2', alternativas: ['Renda fixa', 'Aposta', 'Empréstimo'], correta: 0, feedback: ['Investimentos seguros são bons para começar.', 'Apostar não é educação financeira.'] },
            { fundo: 'iniciante_i5_q3', alternativas: ['Orçamento', 'Despesa', 'Receita'], correta: 0, feedback: ['O orçamento organiza suas finanças.', 'Orçamento é o plano todo.'] },
            { fundo: 'iniciante_i5_q4', alternativas: ['Consumo consciente', 'Consumo por impulso', 'Consumo de luxo'], correta: 0, feedback: ['Pensar antes de comprar é essencial.', 'Evite compras sem pensar.'] },
            { fundo: 'iniciante_i5_q5', alternativas: ['Educação financeira', 'Gastos desnecessários', 'Dívidas'], correta: 0, feedback: ['Saber lidar com o dinheiro transforma o futuro.', 'Aprender é o melhor investimento.'] }
        ]
    },

    // =========================================================================
    // NÍVEL: INTERMEDIÁRIO
    // =========================================================================
    intermediario: {
        ilha1: [
            { fundo: 'intermediario_i1_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'intermediario_i1_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i1_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i1_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'intermediario_i1_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha2: [
            { fundo: 'intermediario_i2_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'intermediario_i2_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i2_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i2_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'intermediario_i2_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha3: [
            { fundo: 'intermediario_i3_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'intermediario_i3_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i3_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i3_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'intermediario_i3_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha4: [
            { fundo: 'intermediario_i4_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'intermediario_i4_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i4_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'intermediario_i4_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'intermediario_i4_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha5: [
            { fundo: 'intermediario_i5_q1', alternativas: ['Reserva de emergência', 'Investimento de risco', 'Gasto supérfluo'], correta: 0, feedback: ['Essencial para imprevistos.', 'Comece com segurança.'] },
            { fundo: 'intermediario_i5_q2', alternativas: ['Juros compostos', 'Juros simples', 'Inflação'], correta: 0, feedback: ['Os juros compostos são seus aliados nos investimentos.', 'Eles fazem o dinheiro crescer exponencialmente.'] },
            { fundo: 'intermediario_i5_q3', alternativas: ['Diversificação', 'Concentração', 'Especulação'], correta: 0, feedback: ['Não coloque todos os ovos na mesma cesta.', 'Diversificar reduz riscos.'] },
            { fundo: 'intermediario_i5_q4', alternativas: ['Tesouro Direto', 'Cartão de crédito', 'Cheque especial'], correta: 0, feedback: ['Uma ótima forma de investir com segurança.', 'Tesouro é investimento governamental.'] },
            { fundo: 'intermediario_i5_q5', alternativas: ['Risco e retorno', 'Preço e valor', 'Renda e despesa'], correta: 0, feedback: ['Quem busca maior retorno, geralmente assume maior risco.', 'São variáveis cruciais.'] }
        ]
    },

    // =========================================================================
    // NÍVEL: AVANÇADO
    // =========================================================================
    avancado: {
        ilha1: [
            { fundo: 'avancado_i1_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'avancado_i1_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i1_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i1_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'avancado_i1_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha2: [
            { fundo: 'avancado_i2_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'avancado_i2_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i2_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i2_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'avancado_i2_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha3: [
            { fundo: 'avancado_i3_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'avancado_i3_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i3_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i3_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'avancado_i3_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha4: [
            { fundo: 'avancado_i4_q1', alternativas: ['A', 'B', 'C'], correta: 0, feedback: ['', ''] },
            { fundo: 'avancado_i4_q2', alternativas: ['D', 'E', 'F'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i4_q3', alternativas: ['G', 'H', 'I'], correta: 1, feedback: ['', ''] },
            { fundo: 'avancado_i4_q4', alternativas: ['J', 'K', 'L'], correta: 2, feedback: ['', ''] },
            { fundo: 'avancado_i4_q5', alternativas: ['M', 'N', 'O'], correta: 0, feedback: ['', ''] }
        ],
        ilha5: [
            { fundo: 'avancado_i5_q1', alternativas: ['Ativos reais', 'Passivos', 'Dívidas tóxicas'], correta: 0, feedback: ['Ativos colocam dinheiro no seu bolso.', 'Entender a diferença é o nível avançado.'] },
            { fundo: 'avancado_i5_q2', alternativas: ['Alavancagem financeira', 'Liquidez imediata', 'Amortização'], correta: 0, feedback: ['Usar dívida estratégica para potencializar resultados.', 'Requer muito conhecimento.'] },
            { fundo: 'avancado_i5_q3', alternativas: ['Rebalanceamento de carteira', 'Day trade', 'Hold puro'], correta: 0, feedback: ['Manter o percentual de risco planejado é vital.', 'Ajustar sempre é necessário.'] },
            { fundo: 'avancado_i5_q4', alternativas: ['Deflação', 'Inflação', 'Hiperinflação'], correta: 1, feedback: ['A inflação corrói o poder de compra se não for investido.', 'Cuidado com o impacto a longo prazo.'] },
            { fundo: 'avancado_i5_q5', alternativas: ['Independência financeira', 'Aposentadoria tardia', 'Endividamento controlado'], correta: 0, feedback: ['O objetivo de quem domina as finanças.', 'É viver de renda passiva.'] }
        ]
    }
};
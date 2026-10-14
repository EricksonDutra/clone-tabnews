// Conteúdo autoral de partida. O histórico pessoal é cadastrado pelo leitor.
export const areas = [
  {
    slug: "analise-e-desenvolvimento",
    title: "Análise e desenvolvimento",
    short: "Análise e desenvolvimento",
    category: "Tecnologia",
    icon: "code",
    color: "#61e8a6",
    tint: "#143829",
    label: "DO PROBLEMA AO SOFTWARE",
    description: "Transformar necessidades reais em software que faz sentido.",
    intro:
      "Antes de escrever código, aprenda a reconhecer o problema, tornar as necessidades explícitas e construir soluções que possam evoluir. Esta trilha conecta investigação, modelagem e qualidade.",
    related: ["arquitetura", "web-mobile", "comunicacao"],
    modules: [
      {
        title: "Investigar antes de implementar",
        time: "20 min",
        content: [
          "Um pedido de funcionalidade é uma hipótese de solução. Investigue quem enfrenta o problema, em qual contexto ele ocorre e como a pessoa o resolve hoje. Uma entrevista útil busca situações concretas, em vez de perguntar apenas o que o usuário gostaria de ter.",
          "Separe necessidade, regra de negócio e restrição técnica. Descreva o comportamento esperado com exemplos de entrada, resultado e exceção. Critérios de aceitação devem ser observáveis: outra pessoa precisa conseguir verificar se foram atendidos.",
        ],
        exercise:
          "Escolha uma rotina de trabalho. Escreva o problema sem mencionar tecnologia, entreviste uma pessoa envolvida e registre três critérios de aceitação.",
        question:
          "Que evidência mostraria que construir software não é a melhor solução?",
      },
      {
        title: "Modelar o domínio",
        time: "25 min",
        content: [
          "O modelo de domínio representa conceitos e regras do negócio. Comece pelo vocabulário das pessoas: um mesmo termo pode ter significados diferentes em contextos diferentes. Prefira um modelo pequeno que explique uma regra real a um diagrama grande sem propósito.",
          "Identifique entidades que mantêm identidade ao longo do tempo, valores definidos por seus atributos e invariantes que precisam ser preservadas. Ao modelar uma matrícula, por exemplo, explicite quando ela pode ser criada, cancelada ou concluída.",
        ],
        exercise:
          "Modele uma matrícula em um curso. Desenhe estados e transições e identifique duas operações que devem ser recusadas.",
        question:
          "Quais regras estão escondidas na interface, mas deveriam existir no domínio?",
      },
      {
        title: "Qualidade como ciclo de feedback",
        time: "25 min",
        content: [
          "Qualidade envolve comportamento correto, facilidade de mudança e adequação ao contexto. Testes são úteis quando protegem comportamentos relevantes; contar testes não demonstra que os riscos principais foram cobertos.",
          "Combine testes de unidade para regras isoladas, integração para fronteiras reais e verificações de ponta a ponta para jornadas críticas. Use revisão de código, observabilidade e feedback dos usuários para descobrir falhas que nenhum teste antecipou.",
        ],
        exercise:
          "Selecione uma regra do modelo anterior. Liste um caso válido, dois casos inválidos e um risco de integração. Implemente ou descreva os testes correspondentes.",
        question:
          "Qual falha causaria o maior impacto e como ela seria detectada?",
      },
    ],
  },
  {
    slug: "arquitetura",
    title: "Arquitetura de software e soluções",
    short: "Arquitetura de software",
    category: "Tecnologia",
    icon: "layers",
    color: "#e9b76d",
    tint: "#332719",
    label: "DECISÕES QUE SUSTENTAM",
    description: "Estruturas, escolhas e os porquês de uma boa solução.",
    intro:
      "Arquitetura é o trabalho de tornar decisões e consequências visíveis. Explore limites, atributos de qualidade e alternativas a partir do contexto, conectando software, pessoas e operação.",
    related: [
      "analise-e-desenvolvimento",
      "gestao-de-projetos",
      "empreendedorismo",
    ],
    modules: [
      {
        title: "Partir dos atributos de qualidade",
        time: "20 min",
        content: [
          "Uma arquitetura deve responder às necessidades do sistema. Disponibilidade, segurança, desempenho e facilidade de mudança podem entrar em tensão. Transforme termos vagos como rápido em cenários com estímulo, ambiente, resposta e medida.",
          "Mapeie restrições reais: equipe, orçamento, integrações, dados e operação. Compare opções com base nesses critérios, registrando incertezas. A alternativa mais sofisticada pode aumentar o custo sem resolver o risco dominante.",
        ],
        exercise:
          "Escreva três cenários de qualidade para um portal educacional e ordene-os por importância. Compare uma aplicação única e serviços separados.",
        question: "Que mudança no contexto faria você reconsiderar a decisão?",
      },
      {
        title: "Criar limites e contratos",
        time: "25 min",
        content: [
          "Limites claros reduzem a propagação de mudanças. Organize responsabilidades por capacidades do negócio e defina quem possui cada dado. Um contrato especifica comportamento, erros, compatibilidade e expectativas dos consumidores.",
          "Uma chamada pela rede acrescenta latência, indisponibilidade e repetição de mensagens. Antes de distribuir o sistema, avalie se módulos internos já oferecem a separação necessária. Quando houver distribuição, planeje timeout, idempotência e recuperação.",
        ],
        exercise:
          "Desenhe os limites de catálogo, matrícula e pagamento. Defina a fonte de verdade de cada informação e o comportamento quando o pagamento fica indisponível.",
        question:
          "Você está isolando uma capacidade ou apenas deslocando complexidade?",
      },
      {
        title: "Registrar e revisar decisões",
        time: "20 min",
        content: [
          "Um registro de decisão arquitetural pode conter contexto, alternativas, decisão e consequências. Ele preserva o raciocínio para quem chegar depois e permite revisar decisões sem reconstruir toda a conversa.",
          "Inclua condições de revisão e formas de validar as hipóteses. Uma prova de conceito deve responder a uma pergunta delimitada. Acompanhe sinais em produção, como falhas, tempo de resposta e esforço de manutenção, para avaliar os resultados.",
        ],
        exercise:
          "Escreva um registro de decisão sobre armazenamento de arquivos. Inclua duas alternativas, um risco e um experimento para reduzi-lo.",
        question:
          "Que decisão permanece por hábito mesmo após suas premissas mudarem?",
      },
    ],
  },
  {
    slug: "gestao-de-projetos",
    title: "Gestão de projetos",
    short: "Gestão de projetos",
    category: "Gestão e negócios",
    icon: "project",
    color: "#6bc8ec",
    tint: "#152e3b",
    label: "IDEIAS EM MOVIMENTO",
    description: "Dar direção, organizar entregas e gerar valor em equipe.",
    intro:
      "Conecte objetivos, execução e aprendizado. Uma boa gestão explicita prioridades, torna riscos visíveis e adapta o caminho quando a realidade muda.",
    related: ["arquitetura", "soft-skills", "empreendedorismo"],
    modules: [
      {
        title: "Definir resultado e escopo",
        time: "20 min",
        content: [
          "Entregar uma funcionalidade é diferente de alcançar um resultado. Registre o problema, o público e a mudança esperada. Escolha um indicador que permita avaliar o resultado e uma referência inicial para comparação.",
          "Delimite o que cabe no ciclo atual e o que ficará para depois. Critérios de conclusão compartilhados evitam interpretações diferentes sobre pronto. Explicite dependências e pessoas que precisam participar das decisões.",
        ],
        exercise:
          "Crie um plano de uma página para uma iniciativa real: objetivo, indicador, escopo, exclusões, responsáveis e critérios de conclusão.",
        question:
          "Uma entrega pode ser concluída sem que o objetivo tenha sido alcançado?",
      },
      {
        title: "Planejar com incerteza",
        time: "25 min",
        content: [
          "Estimativas refletem o conhecimento disponível, não uma garantia. Divida trabalho grande em entregas verificáveis e registre premissas. Identifique dependências que podem bloquear o caminho e antecipe conversas ou experimentos.",
          "Um risco combina uma possibilidade e seu impacto. Defina sinais de alerta, responsável, prevenção e resposta. Revise riscos ao longo do projeto e ajuste o plano com evidências, comunicando efeitos em prazo e escopo.",
        ],
        exercise:
          "Liste cinco riscos de sua iniciativa e escolha os dois mais relevantes. Para cada um, registre sinal de alerta e resposta.",
        question:
          "Que incerteza pode ser reduzida nesta semana com um experimento pequeno?",
      },
      {
        title: "Cuidar do fluxo e aprender",
        time: "20 min",
        content: [
          "Tornar o trabalho visível ajuda a localizar filas, bloqueios e excesso de tarefas simultâneas. Observe o tempo entre começar e terminar uma entrega e investigue o que impede sua conclusão.",
          "Revisões avaliam o resultado entregue; retrospectivas investigam como o trabalho aconteceu. Transforme aprendizado em uma pequena mudança com responsável e data de revisão. Evite reuniões que produzem apenas listas sem continuidade.",
        ],
        exercise:
          "Monte um quadro com a fazer, em andamento, bloqueado e concluído. Escolha uma melhoria de processo e avalie-a após duas semanas.",
        question:
          "O time está ocupado ou está conseguindo concluir trabalho relevante?",
      },
    ],
  },
  {
    slug: "web-mobile",
    title: "Desenvolvimento web e mobile",
    short: "Desenvolvimento web e mobile",
    category: "Tecnologia",
    icon: "web",
    color: "#8cdd72",
    tint: "#22351b",
    label: "EXPERIÊNCIAS QUE FUNCIONAM",
    description: "Interfaces acessíveis, aplicações e experiências digitais.",
    intro:
      "Construa experiências que respeitam dispositivos, conexões e pessoas diferentes. Esta trilha conecta interface, estado e comunicação com serviços.",
    related: ["analise-e-desenvolvimento", "arquitetura", "educacao"],
    modules: [
      {
        title: "Interface acessível e responsiva",
        time: "25 min",
        content: [
          "Comece pela estrutura semântica: títulos organizam a leitura, links navegam e botões executam ações. Cada controle precisa de um nome compreensível e de foco visível. Cor sozinha não deve carregar uma informação essencial.",
          "Projete para conteúdo variável, telas pequenas, teclado e preferências de movimento. Uma interface responsiva reorganiza prioridades, além de reduzir dimensões. Verifique se informações e ações continuam disponíveis em cada tamanho.",
        ],
        exercise:
          "Revise uma tela com teclado e em uma largura de 360 pixels. Registre e corrija três barreiras de navegação ou compreensão.",
        question: "Como a experiência muda para quem não usa um mouse?",
      },
      {
        title: "Estado e fluxo de dados",
        time: "25 min",
        content: [
          "Separe estado temporário da interface, dados remotos e dados que precisam persistir. Evite duplicar informações que podem ser calculadas. Nomeie os estados possíveis de uma operação: inicial, carregando, sucesso, vazio e erro.",
          "O usuário precisa entender o resultado de uma ação. Planeje validação, prevenção de envios duplicados e recuperação após falhas. Considere o que acontece se uma resposta antiga chegar depois de uma requisição mais recente.",
        ],
        exercise:
          "Desenhe os estados de um formulário de matrícula, incluindo perda de conexão, erro de validação e envio bem-sucedido.",
        question:
          "Que estado impossível sua implementação permite representar?",
      },
      {
        title: "Rede, desempenho e operação",
        time: "25 min",
        content: [
          "Cada recurso enviado tem custo de transferência e processamento. Avalie imagens, código e requisições no dispositivo e na conexão esperados. Meça antes de otimizar e use a jornada do usuário para escolher o que merece prioridade.",
          "No mobile, interrupções e mudanças de conectividade são parte da experiência. Defina o que funciona offline e como dados são reconciliados depois. Não armazene segredos na interface; valide autorização no servidor.",
        ],
        exercise:
          "Escolha uma jornada e mapeie suas requisições. Identifique um recurso dispensável, um tratamento de erro ausente e uma oportunidade de cache.",
        question:
          "A aplicação continua útil quando a conexão fica lenta ou intermitente?",
      },
    ],
  },
  {
    slug: "comunicacao",
    title: "Comunicação e oratória",
    short: "Comunicação e oratória",
    category: "Desenvolvimento humano",
    icon: "talk",
    color: "#f3ad83",
    tint: "#37251b",
    label: "IDEIAS QUE ENCONTRAM PESSOAS",
    description: "Clareza para expressar, escuta para compreender.",
    intro:
      "Comunicar é construir entendimento com alguém. Trabalhe intenção, estrutura, escuta e presença em conversas, aulas e apresentações.",
    related: ["soft-skills", "educacao", "gestao-de-projetos"],
    modules: [
      {
        title: "Organizar uma mensagem",
        time: "15 min",
        content: [
          "Antes de preparar uma fala, defina quem vai ouvir e o que essa pessoa precisa compreender ou fazer. Escolha uma ideia central e organize contexto, argumento, exemplo e próximo passo.",
          "Troque abstrações por situações concretas. Quando um termo técnico for necessário, explique-o no momento em que aparece. Uma apresentação curta precisa de seleção: detalhes que não sustentam a ideia central podem virar material de apoio.",
        ],
        exercise:
          "Explique uma decisão técnica em dois minutos para uma pessoa de outra área. Use um exemplo e termine com um próximo passo.",
        question:
          "O público consegue repetir a ideia principal com suas próprias palavras?",
      },
      {
        title: "Escutar e verificar entendimento",
        time: "20 min",
        content: [
          "Escutar exige suspender a resposta pronta e investigar o significado da fala. Faça perguntas abertas, peça exemplos e resuma o que entendeu antes de propor uma solução.",
          "Discordâncias podem surgir de informações, critérios ou interesses diferentes. Torne essas diferenças explícitas. Em uma conversa difícil, descreva fatos observáveis, explique o impacto e negocie um pedido concreto.",
        ],
        exercise:
          "Em uma conversa de trabalho, pratique um resumo e uma pergunta de esclarecimento antes de apresentar sua opinião.",
        question:
          "Você está respondendo ao que a pessoa disse ou ao que presumiu que ela quis dizer?",
      },
      {
        title: "Praticar presença e ritmo",
        time: "20 min",
        content: [
          "Uma fala compreensível varia ritmo e usa pausas para separar ideias. Ensaiar em voz alta revela frases longas e transições frágeis que passam despercebidas na leitura silenciosa.",
          "Grave uma apresentação curta e observe clareza, tempo e exemplos. Solicite feedback sobre um aspecto específico. A prática deliberada funciona melhor quando cada ensaio tem um objetivo verificável.",
        ],
        exercise:
          "Grave uma explicação de três minutos. Reveja uma vez para a estrutura e outra para o ritmo; faça uma segunda versão com apenas uma melhoria prioritária.",
        question:
          "Qual pausa ajudaria o público a processar uma ideia importante?",
      },
    ],
  },
  {
    slug: "soft-skills",
    title: "Soft skills",
    short: "Soft skills",
    category: "Desenvolvimento humano",
    icon: "people",
    color: "#bf9cf1",
    tint: "#2a203a",
    label: "CRESCER COM OUTRAS PESSOAS",
    description: "Colaboração, autonomia e aprendizado na prática.",
    intro:
      "Habilidades interpessoais aparecem em comportamentos concretos. Explore acordos, feedback e autonomia como práticas que podem ser observadas e desenvolvidas.",
    related: ["comunicacao", "inteligencia-emocional", "gestao-de-projetos"],
    modules: [
      {
        title: "Construir acordos de colaboração",
        time: "20 min",
        content: [
          "Colaboração depende de expectativas compartilhadas. Combine canais, tempos de resposta, responsabilidades e formas de pedir ajuda. Acordos explícitos reduzem conflitos produzidos por suposições diferentes.",
          "Crie espaço para expor dúvidas e erros sem ocultar responsabilidades. Quando um compromisso não puder ser cumprido, comunique cedo, explique o impacto e proponha uma renegociação.",
        ],
        exercise:
          "Escreva três acordos de trabalho com sua equipe e defina quando serão revisados.",
        question:
          "Que expectativa importante existe hoje apenas na sua cabeça?",
      },
      {
        title: "Dar e receber feedback",
        time: "20 min",
        content: [
          "Um feedback útil descreve uma situação, um comportamento observável e seu efeito. Evite transformar uma ocorrência em um rótulo sobre a pessoa. Faça um pedido ou convide a construir uma alternativa.",
          "Ao receber feedback, esclareça exemplos e verifique o entendimento antes de responder. Você pode avaliar a observação sem aceitá-la imediatamente. Escolha uma mudança pequena e combine como seu efeito será acompanhado.",
        ],
        exercise:
          "Reescreva um feedback genérico como uma observação específica, um impacto e um pedido.",
        question:
          "O feedback dá à pessoa uma ação possível ou apenas um julgamento?",
      },
      {
        title: "Autonomia e aprendizado contínuo",
        time: "20 min",
        content: [
          "Autonomia inclui reconhecer limites e saber quando envolver outras pessoas. Antes de escalar uma dúvida, organize contexto, tentativas, alternativas e a decisão que precisa de apoio.",
          "Transforme aprendizado em um ciclo: escolha uma habilidade, pratique em situação real, receba feedback e reflita. Um registro curto de tentativas e resultados ajuda a ajustar a prática.",
        ],
        exercise:
          "Escolha uma habilidade para as próximas duas semanas. Defina uma situação de prática e um sinal observável de evolução.",
        question: "Você precisa de mais informação, de prática ou de feedback?",
      },
    ],
  },
  {
    slug: "empreendedorismo",
    title: "Empreendedorismo",
    short: "Empreendedorismo",
    category: "Gestão e negócios",
    icon: "rocket",
    color: "#efd16d",
    tint: "#342e17",
    label: "PROBLEMAS, VALOR E POSSIBILIDADES",
    description: "Investigar oportunidades e transformar ideias em valor.",
    intro:
      "Explore oportunidades com curiosidade e disciplina. Conecte problemas reais, proposta de valor, experimentos e sustentabilidade de uma iniciativa.",
    related: ["gestao-de-projetos", "comunicacao", "arquitetura"],
    modules: [
      {
        title: "Entender o problema e o público",
        time: "25 min",
        content: [
          "Uma oportunidade começa com um problema relevante para um grupo específico. Investigue frequência, impacto e alternativas existentes. Pessoas que elogiam uma ideia podem não ter motivo para adotar a solução.",
          "Busque relatos de comportamento passado e sinais de esforço: tempo gasto, adaptações e tentativas anteriores. Separe evidência de interpretação para não transformar a entrevista em uma confirmação da própria ideia.",
        ],
        exercise:
          "Converse com três pessoas de um público delimitado. Registre problemas recorrentes, soluções atuais e evidências de impacto.",
        question: "Qual evidência contraria sua hipótese inicial?",
      },
      {
        title: "Testar uma proposta de valor",
        time: "25 min",
        content: [
          "A proposta de valor conecta um problema a um benefício concreto. Escreva para quem a iniciativa existe, qual resultado oferece e como se diferencia das alternativas que o público já utiliza.",
          "Um experimento deve testar uma hipótese com critério definido antes da execução. Um protótipo, uma demonstração ou um serviço manual podem produzir aprendizado antes de investir em uma solução completa.",
        ],
        exercise:
          "Descreva uma hipótese, um experimento de uma semana e um critério para continuar, adaptar ou abandonar a ideia.",
        question: "Seu experimento mede interesse educado ou compromisso real?",
      },
      {
        title: "Pensar sustentabilidade",
        time: "25 min",
        content: [
          "Uma iniciativa precisa equilibrar valor entregue e recursos necessários. Mapeie custos fixos, custos por atendimento, canais, parceiros e fontes de receita ou financiamento.",
          "Acompanhe retenção, custo de entrega e qualidade percebida. Crescer antes de entender como entregar de modo consistente pode ampliar problemas. Use cenários e premissas explícitas em vez de projeções tratadas como certezas.",
        ],
        exercise:
          "Monte um cenário com dez usuários e outro com cem. Liste o que muda em esforço, custo, suporte e qualidade.",
        question:
          "Que parte da entrega depende de um esforço que não se sustenta com o crescimento?",
      },
    ],
  },
  {
    slug: "inteligencia-emocional",
    title: "Inteligência emocional",
    short: "Inteligência emocional",
    category: "Desenvolvimento humano",
    icon: "heart",
    color: "#ed95af",
    tint: "#351f2b",
    label: "PERCEBER, COMPREENDER, RESPONDER",
    description: "Autoconhecimento e relações mais conscientes no trabalho.",
    intro:
      "Um espaço de reflexão sobre situações cotidianas: reconhecer emoções, examinar interpretações e escolher respostas mais conscientes. Use os exercícios como registro pessoal de aprendizado.",
    related: ["soft-skills", "comunicacao", "gestao-de-projetos"],
    modules: [
      {
        title: "Separar fatos e interpretações",
        time: "15 min",
        content: [
          "Em uma situação difícil, registre primeiro o que poderia ser observado por outra pessoa. Depois descreva a interpretação que fez, a emoção percebida e a resposta escolhida. Essa separação permite considerar outras explicações.",
          "Uma emoção não precisa ser tratada como falha nem como prova de que sua interpretação está correta. Reconhecer a experiência ajuda a escolher o próximo passo com mais intenção.",
        ],
        exercise:
          "Registre uma situação recente em quatro linhas: fato, interpretação, emoção e ação. Acrescente uma interpretação alternativa plausível.",
        question:
          "Que parte do seu relato é observação e que parte é inferência?",
      },
      {
        title: "Escolher uma resposta",
        time: "15 min",
        content: [
          "Uma pausa pode criar espaço entre perceber uma situação e agir. Quando possível, adie respostas impulsivas e identifique o que precisa ser esclarecido ou comunicado.",
          "Planeje uma resposta proporcional ao contexto. Pode ser uma pergunta, um limite ou uma conversa posterior. Observe depois se a ação ajudou a resolver a situação e o que faria diferente.",
        ],
        exercise:
          "Escolha uma situação recorrente e escreva uma resposta alternativa, incluindo uma frase de esclarecimento ou um limite concreto.",
        question:
          "Qual ação está ao seu alcance sem depender de controlar a reação de outra pessoa?",
      },
      {
        title: "Empatia e limites",
        time: "20 min",
        content: [
          "Considerar a perspectiva de outra pessoa não exige concordar com todas as suas ações. Pergunte pelo contexto e reconheça o impacto da situação, sem presumir o que ela sente.",
          "Limites claros descrevem disponibilidade, responsabilidade e comportamentos aceitáveis. Expresse o limite de modo concreto e proponha um acordo quando houver espaço para negociação.",
        ],
        exercise:
          "Prepare uma conversa sobre uma demanda que excede sua disponibilidade. Descreva o limite e uma alternativa possível.",
        question:
          "Você está tentando compreender a pessoa ou assumindo responsabilidade por tudo que ela vive?",
      },
    ],
  },
  {
    slug: "educacao",
    title: "Educação profissional, científica e tecnológica",
    short: "Educação profissional e tecnológica",
    category: "Educação",
    icon: "education",
    color: "#66d5c6",
    tint: "#16352f",
    label: "CONHECIMENTO QUE SE MULTIPLICA",
    description: "Ensinar, investigar e aproximar conhecimento e prática.",
    intro:
      "Conecte formação, ciência, tecnologia e mundo do trabalho. Planeje experiências que desenvolvam compreensão, autonomia e capacidade de aplicar e questionar o conhecimento.",
    related: ["comunicacao", "web-mobile", "analise-e-desenvolvimento"],
    modules: [
      {
        title: "Planejar a aprendizagem",
        time: "25 min",
        content: [
          "Um objetivo de aprendizagem descreve o que o estudante será capaz de fazer. Use ações observáveis: comparar alternativas, implementar uma solução ou justificar uma decisão. Alinhe atividades e avaliação a esse objetivo.",
          "Investigue conhecimentos prévios e barreiras de participação. Ofereça exemplos, prática orientada e oportunidades de feedback. O contexto profissional pode trazer problemas autênticos sem reduzir a formação ao treino de ferramentas.",
        ],
        exercise:
          "Planeje uma aula com um objetivo observável, uma atividade prática e uma evidência de aprendizagem.",
        question:
          "Sua avaliação verifica o objetivo ou apenas a memorização de termos?",
      },
      {
        title: "Investigar com rigor",
        time: "25 min",
        content: [
          "Uma investigação começa com uma pergunta delimitada. Defina quais evidências podem respondê-la, como serão coletadas e quais limitações existem. Diferencie observação, análise e conclusão.",
          "Registre procedimentos para que outra pessoa possa compreender o caminho seguido. Ao usar fontes, identifique autoria e contexto. Analise explicações alternativas e evite generalizar além do que os dados sustentam.",
        ],
        exercise:
          "Formule uma pergunta sobre uma prática de ensino. Descreva quais dados seriam necessários e duas limitações da investigação.",
        question:
          "Que outra explicação produziria os mesmos resultados observados?",
      },
      {
        title: "Aprender com projetos e compartilhar",
        time: "25 min",
        content: [
          "Um projeto educacional pode integrar investigação, criação e reflexão. Defina um problema com espaço para decisões dos estudantes e critérios claros para avaliar tanto o processo quanto o resultado.",
          "Compartilhar exige contextualizar: problema, caminho, decisões, resultados e limites. Convide colegas a revisar o material e adapte linguagem e exemplos ao público. O registro do processo transforma uma experiência individual em recurso de aprendizagem.",
        ],
        exercise:
          "Transforme um projeto de estudo em um relato para alunos com problema, decisões, demonstração e perguntas para discussão.",
        question:
          "Que conhecimento do processo se perderia se você compartilhasse apenas o resultado final?",
      },
    ],
  },
];

export const trails = [
  {
    title: "Da ideia à solução",
    description:
      "Investigue um problema, desenhe uma solução e coloque uma primeira experiência em prática.",
    icon: "code",
    slugs: ["analise-e-desenvolvimento", "arquitetura", "web-mobile"],
    project:
      "Crie um pequeno portal de cursos: requisitos, registro de decisão arquitetural e uma jornada acessível de matrícula.",
  },
  {
    title: "Liderar e colaborar",
    description:
      "Conecte planejamento, diálogo e autoconhecimento para trabalhar melhor com pessoas.",
    icon: "people",
    slugs: [
      "gestao-de-projetos",
      "comunicacao",
      "soft-skills",
      "inteligencia-emocional",
    ],
    project:
      "Conduza uma iniciativa de duas semanas com acordos de equipe, quadro de trabalho, feedback e retrospectiva.",
  },
  {
    title: "Conhecimento em movimento",
    description:
      "Transforme uma descoberta em uma experiência de aprendizagem que possa ser compartilhada.",
    icon: "education",
    slugs: ["educacao", "comunicacao", "empreendedorismo"],
    project:
      "Prepare uma oficina: investigue a necessidade do público, defina um objetivo de aprendizagem e teste uma atividade com participantes.",
  },
];

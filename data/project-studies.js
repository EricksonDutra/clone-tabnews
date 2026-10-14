// Sínteses dos textos legíveis da página Gestão de Projetos no Notion.
// Exemplos e atividades são autorais; imagens não foram transcritas.
export const projectStudies = {
  "gestao-de-projetos": {
    contentLabel: "Conteúdo autoral · ADS e estudos de Gestão de Projetos",
    description:
      "Escopo, cronograma, orçamento, comunicação e mudanças até o encerramento.",
    intro:
      "Conecte objetivos e execução com planejamento, orçamento, cronograma e decisões de mudança. Os estudos de ADS e da página Gestão de Projetos no Notion ampliam o percurso com comunicação, aquisições, métodos de trabalho, OKRs e encerramento.",
    studyContext:
      "Sínteses autorais dos materiais de Faculdade - ADS e Gestão de Projetos no Notion, incluindo anotações de ENAP, USP - Coursera e LinkedIn. Os exemplos e exercícios são aplicações próprias dos conceitos encontrados. Parte das fontes contém imagens e links antigos de vídeos: o conteúdo incorporado se baseia nos textos legíveis, sem transcrever imagens ou presumir o conteúdo dos vídeos. Referências a versões antigas de normas e ferramentas são tratadas como contexto de estudo. Os tempos estimam leitura e prática.",
    sourceHeading: "Continue estudando no Notion",
    sourceAccessNote:
      "As referências abrem no Notion e seguem as permissões de acesso do seu espaço.",
    modules: [
      {
        title: "Estimativas e orçamento com premissas explícitas",
        time: "35 min",
        content: [
          "Gestão de Orçamentos em Projetos conecta escopo, cronograma e custos. Liste os recursos necessários para cada entrega, como horas de trabalho, materiais e serviços, e registre quantidade, custo unitário e momento do desembolso. Uma estimativa deve mostrar suas premissas e a informação disponível para quem precisa decidir.",
          "As notas de construção do orçamento apresentam estimativas aproximadas, orçamentárias e definitivas, além da técnica PERT: (otimista + 4 × mais provável + pessimista) ÷ 6. Em um exemplo autoral com 2, 5 e 8 horas, o resultado é 5 horas. Essa estimativa ponderada ajuda a discutir cenários, mas não garante que a tarefa terá essa duração.",
          "Identifique separadamente a contingência ligada aos riscos e explique em que condições ela seria necessária. Revise as estimativas quando um marco trouxer novas informações e confira se os custos obrigatórios estão contemplados. Evite dar precisão maior do que as evidências permitem.",
        ],
        exercise:
          "Estime três atividades de uma oficina usando cenários otimista, mais provável e pessimista. Calcule PERT e monte um orçamento com quantidade, custo unitário, total e premissa. Separe uma contingência e associe-a a um risco concreto.",
        question:
          "Que informação nova justificaria mudar sua estimativa antes de assumir um compromisso?",
        sources: [
          {
            title: "Gestão de Orçamentos em Projetos",
            url: "https://app.notion.com/p/fa5941e6908749088f14162a0a42e56d",
          },
          {
            title: "Como construir o Orçamento · Estimativas e PERT",
            url: "https://app.notion.com/p/aba4f48180e14c6bb9d8e5a1e7f2ba19",
          },
        ],
      },
      {
        title: "Cronograma, dependências e caminho crítico",
        time: "35 min",
        content: [
          "O roteiro de Orçamento/cronograma de Projetos inclui atividades, recursos, durações, marcos, caminho crítico e folgas. Transforme as entregas da EAP em atividades e indique quais dependem de outras. Diferencie esforço de duração: disponibilidade da equipe e esperas externas também afetam a data de conclusão.",
          "Em um exemplo autoral, A dura 2 dias; B, 3; C, 4; e D, 1. B e C começam depois de A, e D depende das duas. Com recursos suficientes para executar B e C em paralelo, o percurso A → C → D totaliza 7 dias e determina a duração mínima desse plano. O percurso A → B → D soma 6 dias, deixando 1 dia de folga para B.",
          "Essa análise depende das premissas. Se B e C exigem a mesma pessoa em dedicação integral, o paralelismo precisa ser revisto. Ao identificar um atraso, examine dependências, recursos e alternativas antes de prometer recuperação. Registre o marco e a decisão afetados pela mudança.",
        ],
        exercise:
          "Desenhe as dependências do exemplo e recalcule a conclusão se C durar 6 dias. Depois considere que B e C dependem da mesma pessoa. Explique o efeito de cada cenário e uma alternativa viável.",
        question:
          "Qual atividade pode atrasar a conclusão mesmo quando todas as outras estão adiantadas?",
        sources: [
          {
            title: "USP - Coursera · Orçamento/cronograma de Projetos",
            url: "https://app.notion.com/p/5a4bd09d0f134dc9a75e76b7de29e293",
          },
          {
            title: "Fundamentos · Gestão do tempo e cronograma",
            url: "https://app.notion.com/p/d62e8d29a205460f90b3d85c0356fef3",
          },
        ],
      },
      {
        title: "Acompanhar custos e prever o trabalho restante",
        time: "30 min",
        content: [
          "Como gerenciar o orçamento destaca o nível de detalhe, o acompanhamento de horas e a relação entre custos e escopo. Compare o orçamento com os gastos realizados e com o trabalho que ainda falta. Um gasto abaixo do previsto pode indicar uma economia ou uma atividade que nem começou; o contexto da entrega esclarece a diferença.",
          "Em um exemplo autoral, uma entrega foi orçada em R$ 1.000, já consumiu R$ 600 e exige mais R$ 500 para terminar. A previsão atual é R$ 1.100, com desvio de R$ 100 em relação ao orçamento. Separe valores realizados, compromissos ainda não pagos e estimativas restantes para evitar contagem duplicada.",
          "Quando houver desvio, investigue a causa e compare alternativas de escopo, prazo e recursos. Registre a decisão e comunique a nova previsão. Os textos de controle de custos e cronograma reforçam que acompanhar o andamento e tratar alterações do plano são atividades contínuas.",
        ],
        exercise:
          "Para três entregas, registre orçamento, gasto realizado e custo restante estimado. Calcule a previsão total, explique um desvio e proponha duas respostas com seus efeitos sobre prazo e escopo.",
        question:
          "Sua previsão considera o que falta entregar ou apenas o que já foi gasto?",
        sources: [
          {
            title: "Como gerenciar o orçamento",
            url: "https://app.notion.com/p/8655a3ec8b754cc3b9cbc9fe49cc38a6",
          },
          {
            title: "ENAP · Controle de custos e de cronograma",
            url: "https://app.notion.com/p/f0b17ec2bc114d8c996074f606bf0fdd",
          },
        ],
      },
      {
        title: "Comunicação e engajamento das partes interessadas",
        time: "30 min",
        content: [
          "O plano de comunicação encontrado no Notion considera a geração, distribuição e armazenamento das informações do projeto. Para cada público, defina a informação necessária, a decisão esperada, o canal, a frequência e o responsável. Patrocinador, equipe e usuários podem precisar de níveis diferentes de detalhe.",
          "Envolva as pessoas nas decisões que afetam seu trabalho e confirme se entenderam o acordo. Uma atualização útil apresenta situação, evidência, impacto, alternativas e próximo passo. Registre decisões em um local recuperável, sobretudo quando o projeto usa vários canais de conversa.",
          "Os estudos de Storytelling com Dados distinguem explorar informações de construir uma explicação focada. Ao comunicar um desvio, selecione os dados que sustentam a decisão necessária e preserve contexto e limitações. Uma apresentação de muitos números, por si só, não esclarece o que deve ser feito.",
        ],
        exercise:
          "Crie uma matriz de comunicação para patrocinador, equipe e usuários. Prepare uma atualização de cinco frases sobre atraso em uma integração, com evidência, impacto e decisão solicitada.",
        question:
          "Cada público sabe o que precisa decidir ou fazer depois de receber sua mensagem?",
        sources: [
          {
            title: "ENAP · Planejamento da comunicação",
            url: "https://app.notion.com/p/d8c2b63e57434934bac016bfc4f69744",
          },
          {
            title: "ENAP · Planejamento das partes interessadas",
            url: "https://app.notion.com/p/a8104dad24424b988764ee651fc0dbbe",
          },
          {
            title: "Storytelling com Dados · Exploratório e explanatório",
            url: "https://app.notion.com/p/3ef626b4384b45bdbb0a9a9162ae2f58",
          },
        ],
      },
      {
        title: "Controle integrado de mudanças",
        time: "30 min",
        content: [
          "Uma mudança de requisito pode alterar prazo, custo, qualidade, riscos e responsabilidades. O material de controle integrado de mudanças propõe registrar a solicitação, examinar alternativas e encaminhar a decisão a quem tem autoridade. Esclareça o benefício pretendido e o impacto de aceitar, adiar ou recusar a alteração.",
          "Após a decisão, atualize os registros afetados e informe as pessoas envolvidas. Preserve o histórico do pedido, da análise e da decisão para distinguir o que foi aprovado do que permanece em discussão. Verifique se uma mudança resolve o problema que a motivou e se introduz novas dependências.",
        ],
        exercise:
          "Uma oficina já planejada passa a exigir certificado automático. Registre motivo, benefício, impacto em escopo, prazo e custo, duas alternativas e quem decide. Explique quais documentos precisam mudar após a aprovação.",
        question:
          "A mudança está sendo analisada como uma decisão do projeto ou entrou silenciosamente na lista de tarefas?",
        sources: [
          {
            title: "ENAP · Realizar controle integrado de mudanças",
            url: "https://app.notion.com/p/7142062e200c46fdb5d7f89183ca1f17",
          },
          {
            title: "USP - Coursera · Gestão de riscos e mudanças em projetos",
            url: "https://app.notion.com/p/0199f376a2b042c0b2f35128d62758d4",
          },
        ],
      },
      {
        title: "Aquisições e dependências de fornecedores",
        time: "25 min",
        content: [
          "As notas sobre áreas de conhecimento incluem identificar necessidades, comparar fornecedores e acompanhar aquisições. Antes de buscar uma solução externa, descreva o resultado esperado, os requisitos, os critérios de aceitação e a data em que o projeto precisa da entrega. Compare as propostas com esses critérios.",
          "Acompanhe desempenho, mudanças e dependências ao longo da execução. Uma entrega externa afeta o cronograma da equipe e pode exigir testes ou adaptação antes de ser utilizada. Defina quem recebe, verifica e aceita o resultado e como uma divergência será registrada para decisão.",
        ],
        exercise:
          "Defina critérios para contratar uma integração de inscrição: entregável, prazo, demonstração de funcionamento, documentação e suporte. Compare duas propostas fictícias e registre uma dependência que precisa ser monitorada.",
        question:
          "O menor preço inclui tudo o que o projeto precisa para usar e manter a entrega?",
        sources: [
          {
            title: "Fundamentos · Aquisição de produtos e serviços",
            url: "https://app.notion.com/p/d62e8d29a205460f90b3d85c0356fef3",
          },
        ],
      },
      {
        title: "Governança, encerramento e lições aprendidas",
        time: "30 min",
        content: [
          "O módulo de monitoramento e encerramento apresenta governança, termo de encerramento, lições aprendidas e avaliação de sucesso como objetivos de estudo. Como aplicação autoral, explicite quem decide sobre prioridades e mudanças, quais informações sustentam essas decisões e quando uma questão deve ser encaminhada para outro responsável.",
          "O texto de Encerramento recomenda formalizar a aceitação, organizar pendências e registrar aprendizados durante todo o projeto. Prepare a transferência para operação e confirme quem cuidará dos resultados. Um projeto cancelado também precisa de fechamento, com situação das entregas, compromissos e motivos registrados.",
          "Transforme uma lição em orientação utilizável: contexto, o que aconteceu, consequência e recomendação. Compare o resultado com os critérios de sucesso e identifique o que ainda precisa ser acompanhado após a conclusão. Encerre com evidências de aceitação e responsabilidades claras.",
        ],
        exercise:
          "Escreva um termo de encerramento para uma oficina: resultado entregue, aceitação, pendências, responsável pela operação e duas lições aprendidas. Inclua como uma solicitação fora do escopo será encaminhada.",
        question:
          "O projeto pode ser encerrado com clareza sobre quem continuará cuidando de seu resultado?",
        sources: [
          {
            title:
              "Monitoramento, governança e encerramento · Objetivos de estudo",
            url: "https://app.notion.com/p/70c5e032d5444072b42f2247bd70a081",
          },
          {
            title: "ENAP · Grupo de processo de Encerramento",
            url: "https://app.notion.com/p/b62a8577af3647ecbe7853e5e40cde8d",
          },
        ],
      },
      {
        title: "Abordagens de trabalho, Lean e maturidade",
        time: "30 min",
        content: [
          "Metodologias contemporâneas e avaliação de maturidade propõe comparar práticas preditivas e adaptativas e avaliar a capacidade de gerenciar projetos. Use esses objetivos para investigar o contexto: quanto já se sabe sobre a entrega, que incertezas permanecem e com que frequência é possível obter feedback.",
          "As notas de Lean manufacturing enfatizam identificar problemas e reduzir desperdício. Como aplicação ao trabalho de software, observe esperas, retrabalho e transferências de informação. Escolha uma melhoria delimitada, registre uma referência inicial e avalie o resultado depois de um período combinado.",
          "Para investigar maturidade, procure evidências de práticas que a equipe consegue repetir, como registrar decisões, acompanhar riscos e revisar estimativas. Esse levantamento autoral ajuda a escolher uma melhoria; não é uma certificação nem substitui um modelo formal de avaliação.",
        ],
        exercise:
          "Compare o lançamento de uma integração conhecida com uma descoberta de produto incerto. Escolha a frequência de revisão para cada caso e um desperdício a reduzir. Registre como avaliar a melhoria em duas semanas.",
        question:
          "Qual prática responde à incerteza do seu projeto e pode ser sustentada pela equipe?",
        sources: [
          {
            title:
              "Metodologias contemporâneas e maturidade · Objetivos de estudo",
            url: "https://app.notion.com/p/f96fc4a995644337954b09cc7b27daca",
          },
          {
            title: "Métodos ágeis · Lean manufacturing",
            url: "https://app.notion.com/p/b027c48b879742908afa8b6a18f7d307",
          },
        ],
      },
      {
        title: "OKRs e resultados observáveis",
        time: "25 min",
        content: [
          "Fundamentos OKR distingue o objetivo qualitativo dos resultados-chave quantitativos. Comece pelo problema e descreva a mudança desejada. Em seguida, escolha medidas com referência inicial, meta, período e fonte de dados para verificar se o objetivo está sendo alcançado.",
          "Em um exemplo autoral, o objetivo é tornar a inscrição em oficinas mais confiável. Um resultado-chave pode ser reduzir inscrições duplicadas de 12 para no máximo 2 por ciclo, mantendo o mesmo critério de contagem. Implementar uma validação é uma iniciativa que pode contribuir para o resultado; acompanhar o indicador revela se a hipótese funcionou.",
          "Revise os resultados junto das entregas e dos recursos utilizados. Uma medida precisa ser interpretada no contexto: uma queda no número de erros causada por uma queda de uso exige outra análise. Ajuste as iniciativas com base no aprendizado e registre mudanças de metas para preservar o histórico.",
        ],
        exercise:
          "Escreva um objetivo para o portal de oficinas e três resultados-chave com referência inicial, meta, período e fonte. Liste uma iniciativa para cada resultado e uma interpretação alternativa que precisa ser investigada.",
        question:
          "Seu resultado-chave demonstra uma mudança relevante ou apenas conta tarefas concluídas?",
        sources: [
          {
            title: "LinkedIn · Fundamentos OKR",
            url: "https://app.notion.com/p/0b18f59f96004b94bfaa535223170f23",
          },
        ],
      },
    ],
  },
};

// Sínteses autorais dos textos consultados em Faculdade - ADS no Notion.
// As referências registram a origem; exercícios propõem aplicações próprias.
const notionContext = {
  contentLabel: "Conteúdo autoral · estudos de ADS",
  sourceHeading: "Continue estudando no Notion",
  sourceAccessNote:
    "As referências abrem no Notion e seguem as permissões de acesso do seu espaço.",
};

export const adsStudies = {
  "analise-e-desenvolvimento": {
    ...notionContext,
    description:
      "Python, UML, engenharia de software e testes aplicados a problemas reais.",
    intro:
      "Investigue necessidades, modele comportamentos e construa soluções verificáveis. Os estudos de Faculdade - ADS acrescentam programação com Python, orientação a objetos, UML, testes e controle de versões ao percurso do problema ao software.",
    studyContext:
      "Sínteses autorais e exercícios baseados nos textos disponíveis em Faculdade - ADS, especialmente Linguagem de Programação, Análise Orientada a Objetos e Engenharia de Software. As páginas vazias de disciplinas do primeiro semestre não foram usadas como fonte de conteúdo. Os tempos estimam leitura e prática.",
    modules: [
      {
        title: "Lógica e funções com Python",
        time: "30 min",
        content: [
          "O material de Linguagem de Programação apresenta condicionais, repetições e funções em Python. Comece descrevendo entradas, resultados e regras de uma tarefa. Use condições para escolher caminhos e repetições para processar uma coleção. Experimente entradas nos limites das regras para descobrir comportamentos que um exemplo comum pode esconder.",
          "Divida o algoritmo em funções com responsabilidades claras, parâmetros e resultados definidos. Separe a leitura de dados da regra que será calculada: assim, a mesma função pode servir a um formulário, a um arquivo ou a uma verificação automatizada. Registre o comportamento esperado para dados ausentes ou inválidos.",
        ],
        exercise:
          "Em Python, implemente uma função que classifique uma inscrição como válida ou pendente a partir dos campos obrigatórios. Processe uma lista de inscrições e verifique os casos de lista vazia, campo ausente e inscrição completa.",
        question:
          "Você consegue verificar a regra sem pedir dados pelo teclado?",
        sources: [
          {
            title:
              "ADS · Estruturas lógicas, condicionais e repetição em Python",
            url: "https://app.notion.com/p/5f1042ae2d4c4a339c9d9cf83e4a34ce",
          },
          {
            title: "ADS · Funções em Python",
            url: "https://app.notion.com/p/4eea7d24220348648deb21c145be8d2e",
          },
        ],
      },
      {
        title: "Estruturas de dados e organização da informação",
        time: "30 min",
        content: [
          "As anotações de Python apresentam listas, tuplas, conjuntos e dicionários. Escolha a estrutura considerando como os dados serão usados: uma lista organiza uma sequência, um conjunto representa valores únicos e um dicionário associa chaves a valores. Diferencie a posição de um elemento de sua identidade no domínio.",
          "Para um catálogo de cursos, compare uma lista de registros com um dicionário indexado por identificador. Defina como serão tratadas duplicidades e consultas sem resultado. Faça a escolha a partir das operações necessárias, como percorrer, consultar ou atualizar, e observe o comportamento com dados representativos.",
        ],
        exercise:
          "Organize cinco cursos em uma lista e em um dicionário por identificador. Consulte um curso existente e outro ausente, atualize um título e use um conjunto para listar categorias sem repetição.",
        question:
          "A estrutura escolhida representa a relação entre os dados ou apenas facilita o primeiro exemplo?",
        sources: [
          {
            title: "ADS · Estruturas de dados em Python",
            url: "https://app.notion.com/p/176aa20143f94ffaa91541be246ad12d",
          },
        ],
      },
      {
        title: "Requisitos e casos de uso com UML",
        time: "30 min",
        content: [
          "O material de Análise Orientada a Objetos usa casos de uso para representar as interações entre atores e sistema. Identifique quem participa, qual objetivo pretende alcançar e onde está a fronteira da solução. Um ator representa um papel na interação; pode ser uma pessoa ou outro sistema.",
          "Escolha um caso de uso e descreva pré-condições, fluxo principal, alternativas e resultado esperado. Revise a descrição com quem conhece a rotina para localizar regras ausentes. Use o diagrama para discutir o alcance do sistema e exemplos escritos para detalhar o comportamento que deverá ser implementado.",
        ],
        exercise:
          "Modele os atores aluno e secretaria em um portal de cursos. Descreva o caso de uso realizar matrícula, incluindo turma lotada e dados incompletos, e escreva três exemplos de aceitação.",
        question:
          "Qual exceção importante ficaria invisível se você mostrasse apenas o diagrama?",
        sources: [
          {
            title: "ADS · Modelagem de casos de uso",
            url: "https://app.notion.com/p/bc71a2326d814f2baf5037377a14c08e",
          },
        ],
      },
      {
        title: "Planejar testes a partir do comportamento",
        time: "30 min",
        content: [
          "Engenharia de Software distingue tipos e técnicas de teste e propõe cenários em que o código-fonte não está disponível. Nessa situação, requisitos e exemplos de comportamento orientam a verificação. Escolha casos que examinem entradas válidas, inválidas e limites relevantes, registrando o resultado esperado antes de executar.",
          "Relacione as verificações às regras isoladas, às integrações e às jornadas completas. Uma falha encontrada deve deixar informação suficiente para reprodução: condições, passos, entrada, resultado observado e esperado. Ao corrigir, verifique também um cenário que possa detectar o retorno do problema.",
        ],
        exercise:
          "Planeje testes para matrícula com capacidade de dez vagas. Inclua zero vagas, última vaga, tentativa excedente e dados inválidos. Diga quais verificações podem ser feitas pela interface e quais exigem observar a integração.",
        question:
          "Quais requisitos você precisa esclarecer antes de decidir se o resultado está correto?",
        sources: [
          {
            title: "ADS · Tipos de teste",
            url: "https://app.notion.com/p/bad6122264c24bddac8b238e4bf3bd9e",
          },
        ],
      },
      {
        title: "Controle de versões e evolução do software",
        time: "25 min",
        content: [
          "Os estudos de Controle de Versões conectam a evolução do software ao gerenciamento de configuração. Uma alteração precisa de contexto: o problema que resolve, os arquivos envolvidos e a verificação realizada. Registre mudanças em unidades compreensíveis para facilitar revisão e investigação posterior.",
          "Em uma colaboração com Git, examine as diferenças antes de integrar o trabalho e resolva conflitos considerando o comportamento esperado. Identifique a versão entregue e as configurações necessárias para reproduzi-la. O histórico permite investigar quando uma regra mudou e quais decisões acompanharam essa mudança.",
        ],
        exercise:
          "Em um repositório de estudo, crie duas alterações independentes em uma regra de inscrição. Revise as diferenças, integre o trabalho e descreva como identificar a versão que contém a correção.",
        question:
          "Outra pessoa consegue entender por que uma mudança foi feita apenas com seu registro?",
        sources: [
          {
            title: "ADS · Controle de versões e configuração de software",
            url: "https://app.notion.com/p/598993d8c4d14b44bbe7f001bb8d4c93",
          },
        ],
      },
    ],
  },
  arquitetura: {
    ...notionContext,
    description:
      "Objetos, sistemas distribuídos, operação e segurança nas decisões de arquitetura.",
    intro:
      "Torne decisões e consequências visíveis. Conecte atributos de qualidade e limites do domínio aos estudos de orientação a objetos, redes, sistemas distribuídos, sistemas operacionais e segurança de Faculdade - ADS.",
    studyContext:
      "Sínteses autorais e exercícios apoiados nos textos de Desenvolvimento Orientado ao Objeto, Análise Orientada a Objetos, Redes e Sistemas Distribuídos, Sistemas Operacionais e Segurança e Auditoria de Sistemas. Sistemas Operacionais oferece um roteiro de temas; o exercício desse módulo desenvolve uma aplicação própria. Os tempos estimam leitura e prática.",
    modules: [
      {
        title: "Objetos, responsabilidades e diagramas de classes",
        time: "30 min",
        content: [
          "Os materiais de orientação a objetos apresentam classes, objetos, atributos e métodos. Use esses conceitos para representar responsabilidades do domínio. Uma classe descreve uma estrutura e seus comportamentos; um objeto é uma instância com estado próprio. Pergunte quais operações precisam preservar as regras de cada objeto.",
          "O diagrama de classes evidencia associações e relações entre elementos; um diagrama de objetos mostra uma situação concreta. Compare o modelo com exemplos reais antes de acrescentar hierarquias. Ao mudar uma regra de matrícula, observe quais classes precisam mudar e se suas responsabilidades continuam claras.",
        ],
        exercise:
          "Modele aluno, curso e matrícula com atributos, operações e relações. Crie um exemplo com dois alunos e uma turma e explique onde ficará a regra de impedir matrículas acima da capacidade.",
        question:
          "Qual objeto tem informação e responsabilidade suficientes para proteger a regra?",
        sources: [
          {
            title: "ADS · Conceitos básicos de orientação a objetos",
            url: "https://app.notion.com/p/dd2ba3a868ef4b9ba8a2e9285b3cec72",
          },
          {
            title: "ADS · Diagrama de classes e objetos",
            url: "https://app.notion.com/p/0f6229b9517b4dffa9285adbb58b6d27",
          },
        ],
      },
      {
        title: "Redes e sistemas distribuídos",
        time: "30 min",
        content: [
          "As notas de Sistemas Distribuídos apresentam computadores independentes que colaboram pela rede e oferecem uma experiência integrada. Compartilhamento de recursos, confiabilidade e desempenho orientam esse arranjo. Identifique quais componentes participam de uma jornada e quais informações atravessam suas fronteiras.",
          "A aplicação precisa lidar com componentes que podem falhar separadamente. Para cada chamada, defina o que depende da resposta, o tempo de espera e como comunicar uma falha ao usuário. Compare os benefícios da distribuição com o esforço de manter contratos, acompanhar falhas e recuperar operações incompletas.",
        ],
        exercise:
          "Desenhe navegador, servidor de matrículas, banco e serviço de notificações. Simule a indisponibilidade de cada componente e explique quais partes da jornada ainda podem funcionar.",
        question:
          "A experiência parece única para o usuário mesmo quando os componentes falham de formas diferentes?",
        sources: [
          {
            title: "ADS · Conceitos de sistemas distribuídos",
            url: "https://app.notion.com/p/12b3ea4b6e884ea1a33b147d2dfb09a9",
          },
        ],
      },
      {
        title: "Sistemas operacionais, recursos e segurança",
        time: "30 min",
        content: [
          "O roteiro de Sistemas Operacionais inclui processos, threads, comunicação, escalonamento, arquivos e memória. Relacione esses temas ao funcionamento de uma aplicação: várias requisições competem por recursos, dados persistem em arquivos e operações simultâneas precisam preservar um resultado coerente.",
          "Segurança e Auditoria de Sistemas trabalha confidencialidade, integridade e disponibilidade. Ao desenhar uma solução, identifique quem pode acessar um dado, quais alterações são permitidas e o que deve continuar disponível diante de uma falha. Planeje registros de operações e procedimentos de recuperação compatíveis com esses objetivos.",
        ],
        exercise:
          "Mapeie os recursos usados por uma exportação de matrículas: memória, processamento, arquivo e permissões. Defina quem pode executá-la, como detectar um arquivo incompleto e como recuperar o resultado.",
        question:
          "Qual falha afeta a disponibilidade e qual pode alterar ou expor os dados?",
        sources: [
          {
            title: "ADS · Sistemas Operacionais: roteiro da disciplina",
            url: "https://app.notion.com/p/d3102c76da704ac298e2d77bed12eee9",
          },
          {
            title: "ADS · Segurança e Auditoria de Sistemas",
            url: "https://app.notion.com/p/7e66215c30394aaf93a79ee262dfd585",
          },
        ],
      },
    ],
  },
  "gestao-de-projetos": {
    ...notionContext,
    description:
      "Planejamento, EAP, abordagens ágeis, riscos e qualidade na execução.",
    intro:
      "Conecte objetivos, execução e aprendizado aos estudos de Gerenciamento de Projetos, Projetos Ágeis e Projeto de Software de ADS. Planeje entregas, explicite responsabilidades e acompanhe riscos e qualidade ao longo do trabalho.",
    studyContext:
      "Sínteses autorais a partir dos materiais de Faculdade - ADS. Há referências históricas a edições antigas do PMBOK, ferramentas e recursos de ensino; os módulos usam os conceitos de planejamento e acompanhamento sem apresentar essas versões como atuais. Os tempos estimam leitura e prática.",
    modules: [
      {
        title: "Ciclo de vida e partes interessadas",
        time: "25 min",
        content: [
          "Gerenciamento de Projetos distingue um esforço temporário, com resultado definido, das atividades recorrentes de operação. Identifique início, conclusão e o que será entregue. Mapeie quem solicita, executa, usa e avalia o resultado para esclarecer necessidades e responsabilidades.",
          "Os materiais apresentam iniciação, planejamento, execução, acompanhamento e encerramento. Use essas perspectivas para organizar decisões e revisar o andamento. Ao encerrar, confirme a aceitação, registre pendências e combine quem cuidará da operação depois da entrega.",
        ],
        exercise:
          "Estruture o lançamento de uma oficina com objetivo, pessoas envolvidas, responsabilidades e critério de encerramento. Explique como o atendimento aos participantes continuará após o lançamento.",
        question:
          "Quem precisa aceitar a entrega e quem será responsável por mantê-la funcionando?",
        sources: [
          {
            title: "ADS · Gerenciamento de Projetos",
            url: "https://app.notion.com/p/03903dd4dd3d4b22831c6a325929e54b",
          },
        ],
      },
      {
        title: "Planejamento com EAP e entregas ágeis",
        time: "30 min",
        content: [
          "Projetos Ágeis aborda objetivos mensuráveis, definição de escopo e Estrutura Analítica do Projeto, ou EAP. Decomponha o resultado em entregas menores e esclareça o que cada uma inclui. Use essa visão para examinar dependências, esforço e responsabilidades antes de organizar as atividades.",
          "Projeto de Software também reúne Scrum, Kanban, Canvas e 5W2H. Escolha instrumentos que ajudem a responder perguntas reais do projeto. Uma EAP pode esclarecer as entregas, enquanto um quadro acompanha o fluxo e um ciclo curto permite obter feedback. Revise as prioridades quando aprender algo que altera o plano.",
        ],
        exercise:
          "Monte uma EAP com três entregas para inscrição em uma oficina. Escolha a menor jornada utilizável, organize suas tarefas em um quadro e registre objetivo, responsável e data de revisão.",
        question:
          "Qual entrega permite validar uma hipótese antes de concluir todo o escopo?",
        sources: [
          {
            title: "ADS · Projetos Ágeis: planejando um projeto",
            url: "https://app.notion.com/p/750a5bb1305542648a8af8df28611941",
          },
          {
            title: "ADS · Projeto de Software: ementa e ferramentas",
            url: "https://app.notion.com/p/95e139f76b374b88b3a26b1da466d2cd",
          },
        ],
      },
      {
        title: "Mapear riscos, qualidade e documentação",
        time: "30 min",
        content: [
          "O material de Gestão de risco e da qualidade relaciona incertezas aos objetivos de prazo, custo, escopo e qualidade. Descreva cada risco com causa, evento possível e efeito. Examine sua relevância e defina ações de prevenção, um responsável e uma resposta caso o evento aconteça.",
          "A documentação deve ajudar a executar, avaliar e manter a solução. Escolha registros que preservem regras, decisões e procedimentos de recuperação. Compare o trabalho entregue com critérios de qualidade definidos previamente e atualize o plano quando novos riscos ou resultados aparecerem.",
        ],
        exercise:
          "Crie um registro de três riscos para uma integração externa, com sinal de alerta, responsável e resposta. Defina dois critérios de qualidade e um documento que permita à equipe manter a integração.",
        question:
          "Qual informação precisa estar disponível antes de uma falha para que a resposta seja possível?",
        sources: [
          {
            title: "ADS · Mapeamento de riscos",
            url: "https://app.notion.com/p/a83bd554b43445f998a2a9e4e8c39c62",
          },
          {
            title: "ADS · Gestão de risco e da qualidade",
            url: "https://app.notion.com/p/c29ebd5672a1433e826276ec8c72d6ec",
          },
        ],
      },
    ],
  },
  "web-mobile": {
    contentLabel: "Conteúdo autoral · pós Senac e graduação ADS",
    sourceHeading: "Continue estudando nas referências",
    sourceAccessNote:
      "As referências abrem no Google Drive ou no Notion, conforme o módulo, e seguem as permissões da fonte original.",
    description:
      "Front-end, back-end, Android, dados e microsserviços: da interface à entrega.",
    intro:
      "Conecte interfaces acessíveis, JavaScript, aplicações com ASP.NET e C#, dados, arquitetura e entrega. Aos estudos da Especialização em Desenvolvimento Web do Senac, a graduação ADS acrescenta HTML, CSS, PHP e desenvolvimento Android com armazenamento de preferências.",
    studyContext:
      "Sínteses autorais e exercícios baseados em SENAC / Pós Desenvolvimento Web no Drive e Faculdade - ADS no Notion. O material mobile encontrado na graduação estuda Android Studio, Java, Activities e SharedPreferences. Essas referências registram o percurso de estudo e não pressupõem que todas as APIs ou orientações antigas sejam a escolha atual. Os tempos estimam leitura e prática. Libras permanece como formação complementar da pós.",
    modules: [
      {
        title: "Fundamentos web e processamento com PHP",
        time: "30 min",
        content: [
          "Desenvolvimento Web, na graduação ADS, organiza o percurso em HTML, CSS, JavaScript e PHP. Relacione cada parte à jornada: HTML estrutura o conteúdo, CSS organiza a apresentação, JavaScript trata interações no navegador e PHP executa processamento no servidor. A entrada enviada por um formulário atravessa essa fronteira.",
          "Compare essa separação com o back-end em ASP.NET já estudado na trilha. As linguagens mudam, mas continuam necessárias regras claras para entrada, autorização e resposta. Descreva como o servidor informa uma validação recusada e como a interface permite à pessoa corrigir os dados.",
        ],
        exercise:
          "Desenhe um formulário HTML com nome e curso e seu processamento em PHP. Defina uma resposta para cadastro válido e outra para campo ausente; explique quais verificações também precisam ocorrer no servidor.",
        question:
          "Que comportamento deve ser protegido no servidor mesmo quando há validação no navegador?",
        sources: [
          {
            title: "ADS · Desenvolvimento Web: HTML, CSS, JavaScript e PHP",
            url: "https://app.notion.com/p/d1bfb68292c542c18ee5f62b5e7ae33d",
          },
        ],
      },
      {
        title: "Android: Activities, recursos e preferências",
        time: "35 min",
        content: [
          "Os estudos de desenvolvimento mobile descrevem a estrutura de um projeto Android com manifesto, código, recursos e configuração de build. Nas anotações de Activities, a tela é inicializada, recebe um layout e conecta elementos às ações do usuário. Identifique o que pertence à apresentação e o que representa uma regra reutilizável da aplicação.",
          "O material de armazenamento chave-valor apresenta SharedPreferences para registrar valores associados a chaves. Use esse conceito para estudar preferências pequenas, como um filtro escolhido, e compare-as com o estado temporário da tela. Defina um valor inicial para uma preferência ausente e verifique o comportamento ao reiniciar o aplicativo. Os exemplos das notas representam o contexto histórico da disciplina.",
        ],
        exercise:
          "Modele uma tela Android com lista de cursos e seleção de categoria. Identifique seus recursos, o evento de seleção e a preferência que precisa persistir. Descreva o resultado no primeiro acesso, após reiniciar e ao limpar as preferências.",
        question:
          "Qual informação deve sobreviver ao fechamento do aplicativo e qual pode ser reconstruída?",
        sources: [
          {
            title: "ADS · Android Studio: estrutura do projeto",
            url: "https://app.notion.com/p/8ee032ad084c4d8eac7972cfffb763d2",
          },
          {
            title: "ADS · Trabalhando com views em Activities",
            url: "https://app.notion.com/p/c1e923b30fe64d02911f581b4bcaa604",
          },
          {
            title: "ADS · Armazenamento Key-Value",
            url: "https://app.notion.com/p/b1fc98f6b6434bb8bb9c0d4be44a12d0",
          },
        ],
      },
    ],
  },
  empreendedorismo: {
    ...notionContext,
    description:
      "Oportunidades, valor e informação para tomar decisões de negócio.",
    intro:
      "Investigue oportunidades, teste uma proposta de valor e avalie sua sustentabilidade. Os estudos de Sistemas de Informação Gerencial de ADS ajudam a conectar dados, processos e decisões ao funcionamento de uma iniciativa.",
    studyContext:
      "Os novos módulos usam os textos disponíveis de Sistemas de Informação e Sistemas empresariais em Faculdade - ADS. A página Empreendedorismo e Inovação está vazia e não foi usada como fonte. A relação dos conceitos com uma iniciativa empreendedora e os exercícios são aplicações autorais. Os tempos estimam leitura e prática.",
    modules: [
      {
        title: "Dados e informação para decisões de negócio",
        time: "25 min",
        content: [
          "Sistemas de Informação diferencia dados de informações que possuem contexto útil para um objetivo. Em uma iniciativa, números de inscrições só ajudam a decidir quando se sabe a que período, público e etapa da jornada eles se referem. Comece pela decisão e determine quais informações podem sustentá-la.",
          "Relacione o indicador ao processo que produz os dados. Verifique origem, atualização e possíveis lacunas antes de concluir que houve melhoria. Compare resultados com uma referência inicial e registre outras explicações possíveis para a mudança observada.",
        ],
        exercise:
          "Escolha uma decisão sobre uma oficina, como repetir ou adaptar a atividade. Defina duas informações necessárias, sua fonte e período de coleta. Explique o que um número de inscritos, isoladamente, deixa de mostrar.",
        question: "Qual decisão muda quando esse dado ganha contexto?",
        sources: [
          {
            title: "ADS · Sistemas de Informação: dados, processos e decisões",
            url: "https://app.notion.com/p/ef6eaeeb6508412183f6508546902bad",
          },
        ],
      },
      {
        title: "Processos e sistemas empresariais",
        time: "30 min",
        content: [
          "Os materiais de Sistemas empresariais comparam soluções para atividades de um departamento e sistemas que integram informações entre áreas. Em um serviço de cursos, vendas, atendimento e secretaria dependem de dados relacionados. Mapeie onde cada dado nasce, quem o atualiza e quem precisa consultá-lo.",
          "A integração pode reduzir repetição e divergências, mas também exige esforço de implantação e adaptação dos processos. Compare alternativas a partir da necessidade, dos recursos disponíveis e da manutenção futura. Avalie uma primeira melhoria delimitada antes de ampliar o investimento.",
        ],
        exercise:
          "Mapeie o caminho de uma inscrição entre divulgação, atendimento e matrícula. Localize uma informação duplicada e compare manter o processo atual, integrar duas etapas ou adotar um sistema único, explicitando custos e limites.",
        question:
          "Qual problema do processo precisa ser resolvido antes de escolher uma ferramenta?",
        sources: [
          {
            title: "ADS · Sistemas empresariais: integração e seus limites",
            url: "https://app.notion.com/p/05b61d6e74414b30a211c9efd14b01ff",
          },
        ],
      },
    ],
  },
  educacao: {
    ...notionContext,
    description:
      "Aprendizagem, investigação e inteligência coletiva na formação.",
    intro:
      "Transforme conhecimento em experiências de aprendizagem. Conecte objetivos, investigação e projetos aos registros de ADS sobre tecnologias da informação, colaboração e inteligência coletiva.",
    studyContext:
      "O módulo adicional é uma aplicação educacional autoral do texto sobre TICs e inteligência coletiva na página Faculdade - ADS. O texto de origem reúne referências a Pierre Lévy e Bembem e Santos. Os tempos estimam leitura e prática.",
    modules: [
      {
        title: "TICs e inteligência coletiva na aprendizagem",
        time: "25 min",
        content: [
          "O registro de TICs em Faculdade - ADS relaciona inteligência coletiva ao reconhecimento de habilidades distribuídas entre pessoas e à coordenação dessas contribuições. Em uma atividade de aprendizagem, descubra o que cada participante pode oferecer e defina como as contribuições serão compartilhadas e discutidas.",
          "Use um espaço comum para registrar perguntas, fontes, hipóteses e revisões. Combine critérios de participação e identifique a contribuição de cada pessoa para que a colaboração produza aprendizado observável. Ao finalizar, registre como o diálogo alterou a compreensão do problema e quais dúvidas permanecem.",
        ],
        exercise:
          "Planeje uma investigação em grupo sobre uma solução de software. Distribua papéis de pesquisa, modelagem e revisão, proponha um registro compartilhado e defina uma evidência de aprendizagem individual e outra coletiva.",
        question:
          "Como descobrir o que cada pessoa aprendeu além do resultado produzido pelo grupo?",
        sources: [
          {
            title: "Faculdade - ADS · TICs e inteligência coletiva",
            url: "https://app.notion.com/p/4c66602adf434b629d2603aef145afd4",
          },
        ],
      },
    ],
  },
};

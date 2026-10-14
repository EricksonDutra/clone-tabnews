import { adsStudies } from "./ads-studies";
import { projectStudies } from "./project-studies";
import { withLearningResources } from "./learning-resources";

// Conteúdo autoral de partida e sínteses referenciadas dos estudos pessoais.
const baseAreas = [
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
    description:
      "Front-end, back-end, dados e microsserviços: da interface à entrega.",
    intro:
      "Conecte interfaces acessíveis, JavaScript, aplicações com ASP.NET e C#, banco de dados, arquitetura, microsserviços, DevOps e gestão ágil. Os estudos da Especialização em Desenvolvimento Web do Senac orientam este percurso, junto aos fundamentos de experiência mobile.",
    studyContext:
      "Sínteses autorais e exercícios organizados a partir dos materiais disponíveis em SENAC / Pós Desenvolvimento Web. Os tempos são estimativas de leitura e prática, não a carga horária da pós. Mobile aparece como aplicação dos conceitos de interface, arquitetura e entrega; não foi localizada uma disciplina específica de programação de aplicativos. Libras é uma formação complementar para pensar inclusão, e Ambientação reúne orientações acadêmicas.",
    contentLabel: "Conteúdo autoral · estudos da pós Senac",
    sourceHeading: "Continue estudando no Drive",
    sourceAccessNote:
      "Os materiais abrem no Google Drive e seguem as permissões de acesso da sua conta.",
    related: ["analise-e-desenvolvimento", "arquitetura", "gestao-de-projetos"],
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
      {
        title: "Front-end e linguagens de interação",
        time: "30 min",
        content: [
          "JavaScript conecta a estrutura da página às ações do usuário. Pratique funções, objetos e arrays antes de manipular o DOM. Em um formulário, escute o envio, leia os campos e apresente uma resposta compreensível. Diferencie o valor digitado, a validação e o estado da operação.",
          "A disciplina Linguagens de Interação aborda DOM, eventos, armazenamento local, JSON, validação, jQuery e Ajax. Use esses temas para investigar como a interface troca dados sem recarregar a página. Validação no navegador ajuda a pessoa a corrigir o preenchimento; o servidor também precisa validar os dados recebidos.",
        ],
        exercise:
          "Construa um formulário de inscrição com nome e e-mail. Valide os campos, apresente os estados de envio e simule uma resposta de erro do servidor. Compare a manipulação do DOM com JavaScript e jQuery.",
        question:
          "O que acontece quando a requisição falha depois que os campos já passaram pela validação?",
        sources: [
          {
            title:
              "Linguagens de Interação · JavaScript, DOM, formulários e Ajax",
            url: "https://drive.google.com/drive/folders/1jkMFncrfraG_Cs_vRt6YIfWByUFGaHIE",
          },
        ],
      },
      {
        title: "Back-end com ASP.NET e C#",
        time: "35 min",
        content: [
          "O plano de Sistemas dinâmicos para web com banco de dados usa .NET 6, ASP.NET e C# para estudar aplicações web. Acompanhe o caminho de uma requisição: a interface envia dados, o servidor aplica regras e devolve uma resposta. Identifique as responsabilidades de cada etapa antes de escolher onde escrever o código.",
          "No padrão MVC, o controlador coordena a requisição, o modelo representa os dados e comportamentos e a visão apresenta o resultado. Evite colocar regras apenas na tela: chamadas diretas ao servidor também precisam respeitá-las. Planeje respostas para entrada inválida, recurso ausente e falha de persistência.",
        ],
        exercise:
          "Desenhe e implemente um cadastro de cursos em ASP.NET com C#. Separe modelo, controlador e visão; defina o comportamento de criação e consulta, incluindo nome vazio e curso inexistente.",
        question:
          "Quais regras continuariam protegidas se outra interface consumisse o mesmo servidor?",
        sources: [
          {
            title:
              "Plano de ensino · Sistemas dinâmicos para web com banco de dados",
            url: "https://drive.google.com/file/d/15NINjJEp5rAsyRS83zU5k0L2bcWXsUhL/view",
          },
        ],
      },
      {
        title: "Banco de dados e persistência",
        time: "30 min",
        content: [
          "Persistir dados exige representar as relações do domínio e proteger sua integridade. Em um portal de cursos, separe curso, aluno e matrícula, defina identificadores e explicite quais combinações podem se repetir. A disciplina trabalha acesso a SQL Server ou MySQL, modelagem e comunicação de dados no sistema web.",
          "Ao integrar aplicação e banco, use consultas parametrizadas e defina quais operações precisam acontecer juntas em uma transação. Verifique o resultado quando duas solicitações tentam alterar o mesmo registro. Investigue consultas lentas com dados representativos antes de adicionar índices ou mecanismos de cache.",
        ],
        exercise:
          "Modele curso, aluno e matrícula. Crie uma consulta de matrículas por curso e uma restrição que impeça duplicidade. Simule duas tentativas de matrícula simultâneas e descreva a resposta da aplicação.",
        question:
          "Qual regra precisa ser garantida também pelo banco, além da validação na aplicação?",
        sources: [
          {
            title: "Sistemas dinâmicos · Banco de dados",
            url: "https://drive.google.com/file/d/14zXdM5sXXzbYOrv5uXNGfyE69DFaoiiW/view",
          },
        ],
      },
      {
        title: "Arquitetura aplicada a web e mobile",
        time: "30 min",
        content: [
          "Os materiais de Arquitetura de software incluem POO, Clean Code, SOLID, padrões de projeto e modelos arquiteturais. Use esses fundamentos para manter as regras de negócio compreensíveis quando uma aplicação atende tanto um navegador quanto um aplicativo móvel. Uma mudança de interface não deveria exigir reescrever todas as regras.",
          "O capítulo de modelos arquiteturais apresenta Facade, arquitetura hexagonal e serverless. Na arquitetura hexagonal, portas descrevem as interações e adaptadores conectam o domínio às tecnologias. Compare essa organização com o MVC estudado no back-end e registre o custo de introduzir novas abstrações no seu contexto.",
        ],
        exercise:
          "Separe a regra de matrícula do controlador web e do acesso ao banco. Desenhe como uma interface mobile poderia usar a mesma regra e escreva uma decisão explicando os limites escolhidos.",
        question:
          "Você consegue testar uma regra de negócio sem iniciar a interface ou o banco de dados?",
        sources: [
          {
            title: "Arquitetura · Design patterns e modelos arquiteturais",
            url: "https://drive.google.com/file/d/149C2aa9CNZIsNRj0bm8JiHu7FRAS2QNa/view",
          },
        ],
      },
      {
        title: "Microsserviços, APIs e integração",
        time: "35 min",
        content: [
          "A disciplina Desenvolvimento de Microsserviços reúne arquitetura, comunicação, integração e deploy. Seu material compara comunicação síncrona e assíncrona e apresenta REST, GraphQL, SOAP, WebSockets, MQTT e AMQP. Relacione cada escolha à necessidade de resposta imediata, ao volume de mensagens e às consequências de uma falha.",
          "Uma API precisa de um contrato que os clientes web e mobile consigam usar: dados esperados, respostas, erros e compatibilidade. Para serviços separados, planeje limites de espera, repetição segura e recuperação. Antes de distribuir uma aplicação, compare os ganhos de autonomia com o esforço de manter comunicação e operação entre serviços.",
        ],
        exercise:
          "Defina o contrato de uma API de matrículas e de um evento de matrícula confirmada. Descreva como o serviço de notificações reage à indisponibilidade e ao recebimento repetido do mesmo evento.",
        question:
          "Qual parte do fluxo precisa responder imediatamente e qual pode ser concluída depois?",
        sources: [
          {
            title: "Microsserviços · Modelos de comunicação",
            url: "https://drive.google.com/file/d/1pRM3McjTvXmC6_NunLqVLF0--RRaOsSw/view",
          },
        ],
      },
      {
        title: "DevOps e entrega de aplicações",
        time: "35 min",
        content: [
          "O plano de DevOps conecta cultura de colaboração, integração contínua, entrega contínua e infraestrutura como código. A prática usa Azure Boards, Git com Azure Repos e Azure Pipelines, incluindo publicação de aplicações web e mobile. Acompanhe o caminho de uma alteração desde o planejamento até sua execução em um ambiente de uso.",
          "Organize uma pipeline com verificações, testes e geração de um artefato identificável. Defina como configurações e segredos entram em cada ambiente e como recuperar uma versão anterior quando necessário. Uma entrega só pode ser avaliada quando a equipe consegue observar o comportamento da aplicação após a publicação.",
        ],
        exercise:
          "Descreva uma pipeline para o cadastro de cursos: validação, testes, build e publicação em homologação. Inclua uma condição que interrompa a entrega e um procedimento de recuperação.",
        question:
          "Como descobrir qual alteração chegou ao ambiente e se ela está funcionando?",
        sources: [
          {
            title: "Plano de ensino · DevOps para aplicações web e mobile",
            url: "https://drive.google.com/file/d/1-h3046aLS7w7OFTiMIQN7aeVbhCmDFw8/view",
          },
        ],
      },
      {
        title: "Gestão ágil do produto digital",
        time: "30 min",
        content: [
          "Gestão ágil de projetos aborda o ciclo de vida da aplicação, métodos ágeis, Scrum, XP, FDD, escalabilidade ágil e métricas. Aplique esses estudos ao desenvolvimento web e mobile organizando entregas que possam ser verificadas por quem usa o produto. Uma história deve explicar a necessidade e incluir exemplos de aceitação.",
          "Use backlog e um quadro de trabalho para expor prioridades e bloqueios. Observe trabalho em andamento, tempo de ciclo e entregas concluídas para melhorar o fluxo. Combine uma revisão do produto com uma retrospectiva do processo, escolhendo uma mudança concreta para o próximo ciclo.",
        ],
        exercise:
          "Crie um backlog para a jornada de matrícula, com três histórias e critérios de aceitação. Escolha uma entrega pequena para web ou mobile e defina como demonstrá-la e avaliar o aprendizado.",
        question:
          "Que resultado para o usuário comprova o valor desta entrega?",
        sources: [
          {
            title:
              "Gestão ágil de projetos · Ciclo de vida, métodos e métricas",
            url: "https://drive.google.com/drive/folders/13gD-o6po6gGBx8WG9sQNoYPGrdWHYCmN",
          },
        ],
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
    description:
      "Empatia, autoconfiança, comunicação e pensamento crítico na prática.",
    intro:
      "Transforme habilidades pessoais e interpessoais em ações observáveis. Conecte colaboração, feedback e autonomia a autoconfiança, empatia, comunicação assertiva, inteligência emocional, adaptabilidade, criatividade, pensamento crítico e motivação, a partir dos seus estudos no Notion.",
    studyContext:
      "Sínteses autorais e exercícios elaborados a partir das anotações da página Soft Skills no Notion. Comunicação e Inteligência Emocional aparecem aqui em situações de colaboração; as áreas dedicadas aprofundam esses temas. Atitude positiva e Motivação compartilham um módulo, enquanto Jogo de cintura orienta o estudo de adaptabilidade. Alguns materiais de comunicação se identificam como textos baseados em IA e são tratados como anotações de estudo. Os tempos estimam leitura e prática.",
    contentLabel: "Conteúdo autoral · estudos do Notion",
    sourceHeading: "Continue estudando no Notion",
    sourceAccessNote:
      "As referências abrem no Notion e seguem as permissões de acesso do seu espaço.",
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
        sources: [
          {
            title: "Soft Skills · Acervo de estudos",
            url: "https://app.notion.com/p/94fa797782dd49f8894bef321b255d49",
          },
        ],
      },
      {
        title: "Dar e receber feedback",
        time: "20 min",
        content: [
          "Um feedback útil descreve uma situação, um comportamento observável e seu efeito. Evite transformar uma ocorrência em um rótulo sobre a pessoa. Faça um pedido ou convide a construir uma alternativa.",
          "Ao receber feedback, esclareça exemplos e verifique o entendimento antes de responder. Você pode avaliar a observação sem aceitá-la imediatamente. Escolha uma mudança pequena e combine como seu efeito será acompanhado.",
          "Suas anotações apresentam SCI (Situação, Comportamento e Impacto), STAR (Situação, Tarefa, Ação e Resultado) e DESC (Descrever, Expressar, Sugerir e Consequências). Use uma estrutura para organizar a conversa, adaptando-a ao contexto. No feedback sanduíche, elogios precisam ser específicos e sinceros; acrescentar elogios vagos pode esconder o pedido de melhoria.",
        ],
        exercise:
          "Reescreva um feedback genérico como uma observação específica, um impacto e um pedido.",
        question:
          "O feedback dá à pessoa uma ação possível ou apenas um julgamento?",
        sources: [
          {
            title: "Feedback eficaz · Observações e interpretações",
            url: "https://app.notion.com/p/27cb4f223574800eaa5cd0b472aab35e",
          },
          {
            title: "Modelos de feedback · SCI, STAR e DESC",
            url: "https://app.notion.com/p/27cb4f22357480fab0ceeee30c5288ea",
          },
        ],
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
        sources: [
          {
            title: "Soft Skills · Autoconfiança",
            url: "https://app.notion.com/p/f42382a8642043c1bfc0e93e5ba35e44",
          },
        ],
      },
      {
        title: "Autoconfiança e autoconhecimento",
        time: "25 min",
        content: [
          "A página Autoconfiança relaciona a segurança para agir ao conhecimento das próprias capacidades e dos pontos que precisam de desenvolvimento. Para uma tarefa nova, liste o que você já consegue fazer, onde existe dúvida e qual preparação pode ajudar. Use experiências concretas para avaliar sua capacidade, em vez de se apoiar apenas na comparação com outras pessoas.",
          "Planeje uma tentativa pequena, peça feedback sobre um aspecto específico e registre o resultado. Reconheça conquistas sem perder a abertura para aprender. Ao apresentar uma proposta, explique o que sabe, o que ainda precisa validar e como pretende investigar a incerteza.",
        ],
        exercise:
          "Escolha uma tarefa que costuma adiar por insegurança. Registre duas experiências que ajudam a realizá-la, uma lacuna de conhecimento e uma tentativa possível nesta semana. Depois, anote o que aprendeu.",
        question:
          "Que evidência sustenta sua avaliação sobre o que consegue fazer hoje?",
        sources: [
          {
            title: "Soft Skills · Autoconfiança",
            url: "https://app.notion.com/p/f42382a8642043c1bfc0e93e5ba35e44",
          },
        ],
      },
      {
        title: "Empatia e escuta ativa",
        time: "25 min",
        content: [
          "Suas anotações de Empatia destacam a importância de compreender o contexto e as necessidades da outra pessoa. Antes de interpretar uma atitude, pergunte pela situação que ela enfrenta. Uma mesma entrega pode envolver expectativas diferentes para quem desenvolve, atende o cliente ou usa o produto.",
          "Na escuta ativa, acompanhe o raciocínio sem preparar uma resposta enquanto a pessoa fala. Faça perguntas abertas, resuma o que entendeu e dê espaço para correções. Evite presumir sentimentos ou intenções a partir de um gesto isolado. Compreender o outro ajuda a negociar um acordo que também respeite seus próprios limites.",
        ],
        exercise:
          "Em uma conversa sobre uma dificuldade de trabalho, faça duas perguntas abertas e devolva um resumo antes de propor uma solução. Registre uma suposição inicial que precisou revisar.",
        question:
          "Você confirmou a perspectiva da pessoa ou apenas imaginou o que sentiria no lugar dela?",
        sources: [
          {
            title: "Soft Skills · Empatia",
            url: "https://app.notion.com/p/883833cd83ba45e7839b58ba1d721424",
          },
          {
            title: "Comunicação · Modulo 2: escuta ativa",
            url: "https://app.notion.com/p/609531b624c0447c97498545ae9da399",
          },
        ],
      },
      {
        title: "Comunicação assertiva e conversas difíceis",
        time: "30 min",
        content: [
          "Assertividade envolve expressar uma posição de forma clara, honesta e adequada ao contexto, respeitando as outras pessoas. Ao conversar sobre um prazo, descreva a demanda, explique a capacidade disponível e formule um pedido específico. Escolha um canal que permita esclarecer dúvidas e confirme o entendimento do acordo.",
          "Em uma divergência, comece por um fato observável, explique como ele afeta o trabalho e pergunte pelo contexto do outro. As anotações de Comunicação associam a comunicação não violenta à empatia, à escuta e ao cuidado com as palavras. Use esses princípios para discutir o problema e negociar o próximo passo; registre responsabilidades e quando o acordo será revisto.",
        ],
        exercise:
          "Reescreva um pedido vago ou agressivo em uma mensagem com contexto, limite e ação desejada. Simule uma resposta de discordância e proponha uma alternativa com prazo e responsável.",
        question:
          "A outra pessoa consegue identificar seu pedido e expressar uma discordância?",
        sources: [
          {
            title: "Comunicação · Assertividade e efetividade",
            url: "https://app.notion.com/p/27cb4f223574803e873ffa64d7ad3757",
          },
          {
            title: "Comunicação · Conceitos e comunicação não violenta",
            url: "https://app.notion.com/p/b5113e350f03452298d9240052559be2",
          },
          {
            title: "CNV · Referência visual complementar no Notion",
            url: "https://app.notion.com/p/29cb4f2235748070b38eea2aa1951a69",
          },
        ],
      },
      {
        title: "Inteligência emocional na colaboração",
        time: "25 min",
        content: [
          "A página Inteligência Emocional destaca reconhecer emoções, observar impulsos e escolher como agir. Em uma reunião tensa, separe o que aconteceu, o que você interpretou e a reação que percebe em si. Essa observação ajuda a preparar uma resposta coerente com o objetivo da conversa.",
          "Se precisar de uma pausa, combine quando retomar o assunto. Ao voltar, descreva o impacto da situação e escute as necessidades envolvidas. Após um erro, examine as condições que contribuíram para ele e escolha uma mudança verificável. A área dedicada de Inteligência emocional aprofunda autopercepção, regulação e relações.",
        ],
        exercise:
          "Relembre uma situação de tensão profissional e registre fato, interpretação, emoção e ação. Escreva uma resposta alternativa que preserve o diálogo e proponha um próximo passo.",
        question:
          "Qual resposta ajuda a resolver a situação e respeita as pessoas envolvidas?",
        sources: [
          {
            title: "Soft Skills · Inteligência Emocional",
            url: "https://app.notion.com/p/fffb4f22357480af8c68ea92477686fa",
          },
        ],
      },
      {
        title: "Adaptabilidade e jogo de cintura",
        time: "20 min",
        content: [
          "A página Jogo de cintura apresenta flexibilidade diante de mudanças como uma habilidade profissional. Transforme essa ideia em uma prática: quando uma prioridade muda, descubra o motivo, o que permanece necessário e quais compromissos são afetados. Torne as consequências visíveis antes de reorganizar a execução.",
          "Compare alternativas que cabem nas condições atuais. Renegocie prazo, escopo ou apoio e registre a decisão com as pessoas envolvidas. Depois da mudança, observe o resultado para ajustar o próximo ciclo. Estes passos são uma proposta de aplicação autoral para desenvolver o tema breve registrado no Notion.",
        ],
        exercise:
          "Simule uma mudança de prioridade no meio de uma entrega. Liste os compromissos afetados, proponha duas alternativas e escreva um acordo com o que será entregue e quando.",
        question:
          "Que compromisso precisa ser renegociado para que a mudança seja viável?",
        sources: [
          {
            title: "Soft Skills · Jogo de cintura",
            url: "https://app.notion.com/p/22ff941f96b74d37a47d49a6d18c447c",
          },
        ],
      },
      {
        title: "Imaginação e criatividade aplicada",
        time: "30 min",
        content: [
          "As anotações de Imaginação e criatividade conectam curiosidade, observação e troca de ideias à busca de soluções. Comece por um problema delimitado e investigue as necessidades de quem o enfrenta. Gere possibilidades antes de escolher uma, incluindo mudanças no processo e formas diferentes de aproveitar recursos existentes.",
          "Compartilhe as alternativas com a equipe e escolha uma experiência pequena para avaliar a ideia. Registre o que será observado e use o resultado para melhorar a proposta. Dê espaço para descanso e novas referências quando ficar preso à primeira solução; uma ideia ganha utilidade quando responde a uma necessidade concreta.",
        ],
        exercise:
          "Escolha uma tarefa repetitiva e liste cinco formas de melhorá-la. Selecione uma alternativa que possa ser experimentada em uma semana e defina como comparar seu resultado com a rotina atual.",
        question:
          "Qual necessidade sua ideia atende e como você pode testar isso?",
        sources: [
          {
            title: "Soft Skills · Imaginação e criatividade",
            url: "https://app.notion.com/p/327e29f5c49d4c8e905afd0edd1888d7",
          },
        ],
      },
      {
        title: "Pensamento crítico e tomada de decisão",
        time: "30 min",
        content: [
          "Pensamento crítico, nas suas anotações, envolve examinar informações e considerar diferentes perspectivas antes de decidir. Separe o problema, as evidências disponíveis e as interpretações que está fazendo. Pergunte de onde vem cada informação, o que ela demonstra e o que ainda falta investigar.",
          "Compare alternativas usando critérios explícitos, como impacto, esforço e possibilidade de revisão. Procure também evidências que possam contrariar sua opção preferida. Ao decidir em equipe, registre as razões e as condições que justificariam rever a escolha; isso permite discordar com argumentos e aprender com o resultado.",
        ],
        exercise:
          "Escolha uma decisão de trabalho. Liste duas alternativas, três critérios e uma informação que falta. Registre o que faria você mudar de opinião e um modo de obter essa evidência.",
        question:
          "Que parte da sua conclusão é apoiada por fatos e qual depende de uma suposição?",
        sources: [
          {
            title: "Soft Skills · Pensamento Crítico",
            url: "https://app.notion.com/p/186efd1ff9934f489f1b3fd96ed7c0d4",
          },
        ],
      },
      {
        title: "Motivação e atitude positiva realista",
        time: "25 min",
        content: [
          "A página Motivação relaciona objetivos pessoais e profissionais às tarefas e às metas da equipe. Escolha um resultado que faça sentido para você e divida-o em etapas que possam ser concluídas. Identifique o apoio e os recursos necessários e acompanhe pequenas entregas para reconhecer o avanço.",
          "Atitude positiva, nas suas anotações, envolve transformar uma postura construtiva em ação e manter contato com as dificuldades reais. Diante de um obstáculo, reconheça o impacto, examine o que pode ser feito e peça apoio quando necessário. Revise a meta ou as condições de execução se o plano deixar de ser viável.",
        ],
        exercise:
          "Escolha uma meta de aprendizado para duas semanas. Explique por que ela importa, divida-a em três passos e reserve momentos de prática. Registre uma barreira possível e como adaptar o plano.",
        question:
          "Qual próximo passo cabe nas suas condições atuais e aproxima você da meta?",
        sources: [
          {
            title: "Soft Skills · Motivação",
            url: "https://app.notion.com/p/b1b73119b1dc433090e79f4d6e7974d9",
          },
          {
            title: "Soft Skills · Atitude positiva",
            url: "https://app.notion.com/p/c886b458dc10450485860861b047758b",
          },
        ],
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

// Acrescentar módulos preserva os índices usados pelo progresso no navegador.
export const areas = baseAreas.map((area) => {
  const supplements = [adsStudies[area.slug], projectStudies[area.slug]].filter(
    Boolean,
  );
  return withLearningResources(
    supplements.reduce(
      (current, supplement) => ({
        ...current,
        ...supplement,
        modules: [...current.modules, ...supplement.modules],
      }),
      area,
    ),
  );
});

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

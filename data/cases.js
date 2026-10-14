// Situações didáticas fictícias, para aplicar conceitos ao contexto profissional.
export const cases = {
  "analise-e-desenvolvimento": {
    title: "O pedido era uma planilha. O problema era a matrícula.",
    context:
      "Uma secretaria pede a exportação diária de alunos. Ao observar o processo, você descobre que a planilha serve para conferir pagamentos manualmente. Há matrículas duplicadas e inscrições pendentes que aparecem como confirmadas.",
    steps: [
      "Mapeie a jornada atual: inscrição, cobrança, confirmação e comunicação. Registre onde cada informação nasce e quem pode alterá-la.",
      "Defina a regra: uma matrícula só é confirmada quando há pagamento aprovado e vaga disponível. Uma segunda tentativa com os mesmos dados não deve criar outra matrícula.",
      "Descreva exemplos de aceitação: pagamento recusado mantém a inscrição pendente; repetição da confirmação não duplica a matrícula; turma lotada exige tratamento explícito.",
      "Entregue primeiro uma consulta confiável do estado da matrícula. Valide com a secretaria se a exportação ainda é necessária antes de automatizar a planilha.",
    ],
    tradeoff:
      "Automatizar a exportação é uma entrega rápida, mas preserva a conferência manual e suas inconsistências. Corrigir o fluxo exige investigar regras e fontes de dados, porém pode eliminar a causa do retrabalho.",
    evidence:
      "Compare tempo de conferência, quantidade de divergências e matrículas duplicadas antes e depois. Revise uma amostra com a secretaria para verificar se o indicador representa o trabalho real.",
    deliverable:
      "Produza um diagrama de estados, quatro exemplos de aceitação e uma decisão sobre o que entra na primeira entrega.",
  },
  arquitetura: {
    title: "Uma vaga, dois pagamentos: onde garantir a consistência?",
    context:
      "Uma plataforma de cursos recebe duas tentativas simultâneas de inscrição para a última vaga. O pagamento é processado por um provedor externo que pode responder com atraso ou enviar a mesma notificação mais de uma vez.",
    steps: [
      "Defina a invariante: o total de vagas confirmadas e reservas válidas não pode superar a capacidade. A validação precisa ocorrer na fronteira que controla os dados, não apenas na interface.",
      "Considere uma reserva temporária de vaga antes de iniciar o pagamento. A criação da reserva deve usar uma operação atômica ou controle de concorrência adequado no armazenamento.",
      "Associe um identificador único à operação e processe notificações de pagamento de forma idempotente. Repetir a mesma notificação deve preservar o resultado já obtido.",
      "Modele a expiração da reserva e o pagamento que chega depois dela. Explicite a compensação: nova vaga, revisão manual ou estorno conforme a regra definida pelo negócio.",
    ],
    tradeoff:
      "Uma transação local pode proteger a capacidade da turma, mas não abrange automaticamente o provedor de pagamento. Reservas e compensações tornam as falhas recuperáveis, ao custo de novos estados e rotinas operacionais.",
    evidence:
      "Simule concorrência para a última vaga, notificações duplicadas e confirmação após expiração. Observe se a invariante permanece verdadeira e se cada situação deixa um histórico rastreável.",
    deliverable:
      "Escreva um ADR com alternativas, modelo de estados, estratégia de idempotência e procedimento de recuperação para pagamentos sem matrícula.",
  },
  "gestao-de-projetos": {
    title:
      "Prazo fixo, escopo negociável: entregar uma oficina em duas semanas",
    context:
      "Uma equipe precisa lançar a inscrição de uma oficina em duas semanas. O pedido inclui cadastro, pagamento, certificado, painel e relatórios. A integração de pagamento depende de outra equipe e ainda não tem data confirmada.",
    steps: [
      "Expresse o resultado: permitir que participantes reservem uma vaga e recebam confirmação confiável. Separe esse resultado da lista de funcionalidades pedidas.",
      "Negocie a primeira entrega com os envolvidos. Cadastro e confirmação podem ser essenciais; certificados e relatórios avançados podem ter prazo posterior.",
      "Torne a dependência de pagamento visível, atribua um responsável e defina uma data para decidir uma alternativa operacional aceita pelo negócio.",
      "Faça revisões curtas com uma jornada executável. Quando algo mudar, comunique impacto, opções e a decisão necessária, em vez de apenas atualizar uma porcentagem.",
      "Detalhe atividades, dependências e disponibilidade da equipe. Monte um orçamento com custos realizados e restantes, separando a contingência associada aos riscos.",
      "Se um certificado automático for solicitado antes do lançamento, registre o pedido e compare incluí-lo agora ou em outra fase. Explique impactos em prazo e custo e encaminhe a decisão a quem pode alterar os compromissos.",
      "Ao encerrar, registre aceitação, pendências, responsável pela operação e lições aprendidas. Use uma medida de confiabilidade das inscrições para avaliar o resultado após a entrega.",
    ],
    tradeoff:
      "Reduzir escopo preserva o prazo, mas exige alinhamento sobre o que ficará de fora. Acrescentar pessoas perto da entrega pode aumentar o custo de coordenação antes de produzir capacidade útil.",
    evidence:
      "Acompanhe inscrições concluídas, erros de confirmação e tempo de resposta aos participantes. Uma lista de tarefas concluídas não demonstra que a jornada funciona.",
    deliverable:
      "Monte um plano com objetivo, escopo essencial, cronograma, orçamento, três riscos e critérios de aceite. Acrescente um registro de mudança, uma atualização ao patrocinador e um termo de encerramento.",
  },
  "web-mobile": {
    title: "Enviar uma inscrição em uma conexão instável",
    context:
      "Uma pessoa preenche um formulário no celular, toca em enviar e perde a conexão antes de receber a resposta. Ela tenta novamente. O servidor pode ter recebido a primeira tentativa, mesmo que a interface não saiba disso.",
    steps: [
      "Modele estados explícitos: edição, envio, resultado confirmado e resultado desconhecido. Falta de resposta não significa necessariamente que a operação falhou.",
      "Preserve os dados preenchidos e comunique o que se sabe. Evite mensagens definitivas quando não há confirmação do servidor.",
      "Use uma chave de operação estável para permitir repetição segura quando a API oferecer idempotência. Desabilitar o botão reduz cliques duplicados, mas não substitui a proteção no servidor.",
      "Ofereça consulta do resultado ou nova tentativa. Anuncie alterações de estado para tecnologias assistivas e mantenha uma ordem de foco compreensível.",
    ],
    tradeoff:
      "Uma atualização otimista dá resposta rápida, mas pode representar uma confirmação que ainda não existe. Em operações com vagas ou pagamento, diferencie visualmente intenção registrada e conclusão confirmada.",
    evidence:
      "Teste conexão lenta, perda da resposta, recarregamento e repetição. Verifique preservação de dados, ausência de duplicações e compreensão da mensagem por uma pessoa que não conhece o sistema.",
    deliverable:
      "Construa uma máquina de estados da interface e um protótipo que permita simular uma resposta perdida.",
  },
  comunicacao: {
    title: "Explicar uma decisão técnica para quem aprova o projeto",
    context:
      "Você precisa justificar uma semana de trabalho em confiabilidade. O público conhece o impacto das falhas, mas não domina os termos técnicos da implementação. Uma apresentação anterior terminou sem decisão.",
    steps: [
      "Comece pela decisão solicitada: reservar uma semana para reduzir inscrições duplicadas. Mostre uma situação concreta e o efeito sobre atendimento e participantes.",
      "Explique a causa no nível necessário: uma tentativa repetida pode gerar dois registros. Só apresente o termo idempotência depois que o problema estiver compreendido.",
      "Compare duas opções com esforço, benefício e limitações. Explicite o que é evidência observada e o que ainda é hipótese.",
      "Encerre com a escolha necessária, responsável e próximo passo. Peça que alguém resuma o entendimento para identificar ambiguidades.",
    ],
    tradeoff:
      "Simplificar ajuda o público a decidir, mas retirar todas as limitações cria uma promessa enganosa. Mantenha detalhes de implementação como apoio e preserve no argumento os riscos que alteram a decisão.",
    evidence:
      "Verifique se o público consegue explicar o problema, comparar as opções e nomear a decisão. Quantidade de slides não é medida de clareza.",
    deliverable:
      "Prepare uma fala de três minutos com problema, evidência, alternativas e pedido. Grave e revise uma transição que ficou confusa.",
  },
  "soft-skills": {
    title: "Uma revisão de código virou um conflito pessoal",
    context:
      "Uma pessoa comenta que o código de um colega é confuso. O autor entende a observação como desvalorização, a discussão cresce e a entrega fica bloqueada. Não há acordo sobre critérios de revisão.",
    steps: [
      "Separe observação e rótulo: indique o trecho que mistura responsabilidades e explique qual mudança futura seria difícil, em vez de julgar a competência do autor.",
      "Pergunte pelo contexto e pelas restrições da implementação. Uma solução pode refletir um prazo ou uma informação que o revisor desconhecia.",
      "Distinga um requisito para aceitar a entrega de uma sugestão de melhoria. Registre o motivo e proponha uma alternativa concreta.",
      "Combine um critério para resolver a divergência: exemplo, teste ou decisão de alguém responsável. Depois revise os acordos de comunicação da equipe.",
    ],
    tradeoff:
      "Evitar qualquer divergência reduz o desconforto imediato, mas deixa riscos sem discussão. Debater sem limites pode bloquear uma entrega por preferências pessoais. Critérios compartilhados ajudam a distinguir os casos.",
    evidence:
      "Observe se comentários se tornam acionáveis, se o tempo de revisão diminui e se autores conseguem levantar dúvidas sem ocultar riscos.",
    deliverable:
      "Reescreva três comentários de revisão com observação, efeito e sugestão. Defina o que é obrigatório, opcional e fora do escopo.",
  },
  empreendedorismo: {
    title: "Validar uma oficina antes de construir uma plataforma",
    context:
      "Você imagina uma plataforma de cursos para profissionais em transição de carreira. Há elogios à ideia, mas você ainda não sabe qual dificuldade é prioritária nem se as pessoas participariam de uma experiência real.",
    steps: [
      "Delimite um grupo e investigue situações recentes: o que tentaram aprender, onde pararam e qual consequência isso teve na rotina.",
      "Escolha uma hipótese verificável: participantes querem praticar entrevistas técnicas com feedback, por exemplo. Registre também uma explicação alternativa para o interesse.",
      "Ofereça uma oficina piloto com objetivo e data claros. Defina previamente um critério de aprendizado, como participação efetiva e conclusão de uma atividade, sem confundir cadastro com valor entregue.",
      "Após a experiência, investigue o que foi útil, o que faltou e o esforço necessário para repetir a entrega. Ajuste a proposta antes de automatizar.",
    ],
    tradeoff:
      "Uma experiência manual limita a escala, mas permite aprender sobre a entrega com baixo investimento em software. Construir a plataforma cedo pode tornar cara a mudança de uma hipótese ainda frágil.",
    evidence:
      "Compare intenção, presença, conclusão da atividade e retorno espontâneo. Registre também desistências e seus motivos; olhar apenas para quem concluiu distorce a análise.",
    deliverable:
      "Crie uma ficha de experimento com hipótese, público, convite, evidência esperada e regra de decisão após o piloto.",
  },
  "inteligencia-emocional": {
    title: "Receber uma crítica durante uma apresentação",
    context:
      "Durante uma demonstração, alguém diz que a solução não atende à necessidade. Você percebe irritação e vontade de defender cada escolha imediatamente. Ainda não está claro qual expectativa foi frustrada.",
    steps: [
      "Registre o fato observável: a pessoa disse que uma necessidade não foi atendida. Separe disso a interpretação de que todo o seu trabalho foi rejeitado.",
      "Reconheça a reação e crie uma pausa antes de responder. Se precisar, proponha retomar a conversa após organizar as informações.",
      "Peça um exemplo concreto: qual tarefa a pessoa esperava realizar e o que aconteceu na demonstração? Isso desloca a conversa para algo verificável.",
      "Escolha uma ação proporcional: esclarecer o escopo, reconhecer uma lacuna ou combinar uma investigação. Reflita depois sobre a resposta e seu efeito.",
    ],
    tradeoff:
      "Responder imediatamente pode parecer firme, mas reduzir a escuta. Adiar sem combinar um retorno pode parecer evasivo. Uma pausa com propósito e prazo mantém a conversa possível.",
    evidence:
      "Avalie se você conseguiu distinguir crítica ao resultado de julgamento pessoal, compreender a necessidade e combinar um próximo passo concreto.",
    deliverable:
      "Escreva uma resposta com três partes: reconhecimento da observação, pergunta de esclarecimento e proposta de continuidade.",
  },
  educacao: {
    title: "Ensinar arquitetura com um problema realista",
    context:
      "Uma turma conhece nomes de padrões arquiteturais, mas tem dificuldade para justificar escolhas. Você quer que os estudantes argumentem a partir de requisitos, restrições e consequências.",
    steps: [
      "Defina o objetivo: comparar duas alternativas e justificar uma decisão para um portal de cursos. Estabeleça critérios de avaliação antes da atividade.",
      "Apresente o mesmo caso a grupos com restrições diferentes: equipe pequena, conectividade instável ou exigência de alta disponibilidade. Evite uma resposta única desconectada do contexto.",
      "Peça uma representação da solução e um registro de decisão com alternativas descartadas. Durante a atividade, use perguntas para revelar premissas, sem resolver o caso pelos estudantes.",
      "Promova revisão entre grupos com critérios: coerência com requisitos, tratamento de falhas, clareza de limites e reconhecimento das limitações. Permita revisar a entrega após o feedback.",
    ],
    tradeoff:
      "Um problema aberto desenvolve argumentação, mas pode sobrecarregar iniciantes. Ofereça exemplos parciais e reduza variáveis conforme os conhecimentos prévios, mantendo espaço para decisões reais.",
    evidence:
      "Compare a primeira justificativa e a versão revisada. Procure critérios explícitos, relações entre decisão e consequência e capacidade de responder a uma mudança nas restrições.",
    deliverable:
      "Produza um roteiro de aula com caso, objetivo, apoios, rubrica e uma pergunta de transferência para outro contexto profissional.",
  },
};

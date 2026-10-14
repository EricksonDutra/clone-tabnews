export const checks = {
  "analise-e-desenvolvimento": {
    question:
      "Um usuário pede um botão para exportar uma planilha. Qual é o melhor primeiro passo?",
    options: [
      "Implementar o botão exatamente como foi pedido.",
      "Investigar qual tarefa ele precisa realizar com esses dados.",
      "Escolher uma biblioteca de geração de planilhas.",
    ],
    correct: 1,
    feedback:
      "Investigar a tarefa revela o problema real. Exportar pode ser uma boa solução, mas um relatório, uma integração ou uma mudança no processo também podem atender à necessidade.",
  },
  arquitetura: {
    question:
      "Uma equipe pequena quer dividir uma aplicação em muitos serviços. O que deve orientar a decisão?",
    options: [
      "A popularidade dessa arquitetura.",
      "O número de linguagens disponíveis.",
      "Os atributos de qualidade, limites do domínio e capacidade de operação.",
    ],
    correct: 2,
    feedback:
      "O contexto define a escolha. Separar serviços traz custos de rede, implantação e observabilidade; módulos internos podem oferecer limites suficientes em um primeiro momento.",
  },
  "gestao-de-projetos": {
    question:
      "Todas as funcionalidades planejadas foram entregues, mas o problema do usuário continua. O que isso mostra?",
    options: [
      "Entregar escopo e alcançar resultado são coisas diferentes.",
      "O projeto não precisa mais ser avaliado.",
      "A equipe deveria medir apenas o número de tarefas.",
    ],
    correct: 0,
    feedback:
      "Uma entrega é um meio. Revise as hipóteses que ligavam as funcionalidades ao resultado e use evidências para decidir o próximo experimento.",
  },
  "web-mobile": {
    question:
      "Um formulário funciona em condições ideais. Qual cenário ainda precisa ser tratado?",
    options: [
      "Apenas a troca de cores.",
      "Somente o primeiro carregamento.",
      "Perda de conexão, envio repetido e recuperação após erro.",
    ],
    correct: 2,
    feedback:
      "Uma jornada completa inclui falhas. A interface deve mostrar o estado da operação, preservar informações úteis e oferecer um caminho de recuperação.",
  },
  comunicacao: {
    question:
      "Seu público não compreendeu uma explicação técnica. Como avançar?",
    options: [
      "Repetir os mesmos termos em voz mais alta.",
      "Investigar a dúvida e usar um exemplo adequado ao contexto do público.",
      "Adicionar todas as informações disponíveis à apresentação.",
    ],
    correct: 1,
    feedback:
      "Verificar o entendimento ajuda a localizar a lacuna. Um exemplo concreto e uma estrutura clara costumam ser mais úteis do que aumentar o volume de informação.",
  },
  "soft-skills": {
    question: "Qual feedback oferece um caminho mais claro de melhoria?",
    options: [
      "Você precisa ser mais profissional.",
      "Você sempre faz tudo errado.",
      "Na revisão de ontem, faltaram os critérios de teste; isso atrasou a validação. Podemos incluí-los na próxima entrega?",
    ],
    correct: 2,
    feedback:
      "A terceira alternativa explicita situação, comportamento, impacto e pedido. A pessoa consegue identificar o que pode fazer de modo diferente.",
  },
  empreendedorismo: {
    question:
      "Várias pessoas elogiaram uma ideia. Qual próximo passo produz evidência mais útil?",
    options: [
      "Tratar os elogios como confirmação da demanda.",
      "Testar um comportamento ou compromisso concreto com critério definido antes.",
      "Construir a versão completa imediatamente.",
    ],
    correct: 1,
    feedback:
      "Elogios e intenção declarada não demonstram adoção. Um experimento delimitado ajuda a observar o que as pessoas realmente fazem e a revisar a hipótese.",
  },
  "inteligencia-emocional": {
    question:
      "Um colega não respondeu sua mensagem e você concluiu que ele não respeita seu trabalho. O que é um fato observável?",
    options: [
      "Ele não respeita seu trabalho.",
      "Ele quer dificultar o projeto.",
      "A mensagem ainda não recebeu resposta.",
    ],
    correct: 2,
    feedback:
      "A ausência de resposta é observável; os motivos são interpretações. Esclarecer contexto permite escolher uma ação sem tratar uma hipótese como certeza.",
  },
  educacao: {
    question:
      "O objetivo da aula é justificar decisões arquiteturais. Qual avaliação se alinha melhor a ele?",
    options: [
      "Listar nomes de padrões sem contexto.",
      "Comparar alternativas para um caso e argumentar sobre as consequências.",
      "Repetir a definição de arquitetura.",
    ],
    correct: 1,
    feedback:
      "A comparação exige mobilizar critérios e justificar decisões. A avaliação deve produzir evidência da capacidade definida no objetivo de aprendizagem.",
  },
};

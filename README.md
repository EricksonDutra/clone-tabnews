# clone-tabnews

estudos na plataforma curso.dev

## Conexões — repositório pessoal de estudos

A home reúne nove áreas em um mapa com um cérebro ilustrado em SVG e conexões animadas. Há busca por assunto e módulo, filtros, favoritos e visualização em cards. Cada área tem uma página própria com identidade visual, módulos autorais, atividade prática, reflexão, pergunta de aplicação com feedback e conexões para outros temas.

A área Desenvolvimento web e mobile reúne os três fundamentos originais, sete estudos da pós Senac e dois módulos da graduação ADS sobre fundamentos web com PHP e desenvolvimento Android. Os módulos incluem sínteses autorais, exercícios e links para os materiais encontrados em `SENAC / Pós Desenvolvimento Web` no Google Drive e `Faculdade - ADS` no Notion. As referências seguem as permissões da fonte original. Os módulos novos são acrescentados ao final para preservar o progresso já registrado.

O botão no cabeçalho alterna entre os temas claro e escuro. A escolha é salva no navegador e aplicada em todas as páginas.

A área Soft skills tem onze módulos, com os três fundamentos originais e oito estudos de autoconfiança, empatia, comunicação assertiva, inteligência emocional aplicada, adaptabilidade, criatividade, pensamento crítico e motivação com atitude positiva. As sínteses e atividades partem das anotações da página `Soft Skills` no Notion, com referências por módulo. Feedback inclui os modelos SCI, STAR e DESC. A página de CNV, composta por uma imagem, é uma referência visual complementar; seu conteúdo não foi transcrito. A ordem original dos módulos foi preservada para manter os registros de progresso.

As três trilhas combinam áreas em percursos com projetos integradores. A biblioteca permite cadastrar, editar e excluir livros, registrar anotações, definir o momento da leitura e vincular cada livro a uma área.

Os conteúdos consultados nos quatro semestres de `Faculdade - ADS` ampliam seis áreas: Análise e desenvolvimento, Arquitetura, Gestão de projetos, Web e mobile, Empreendedorismo e Educação. As sínteses de ADS ficam em `data/ads-studies.js` e são integradas aos módulos anteriores por `data/studies.js`. As páginas vazias não sustentam módulos; em Empreendedorismo, os acréscimos usam Sistemas de Informação Gerencial. Referências antigas são contextualizadas como material de estudo, sem apresentar versões de ferramentas ou normas como atuais.

A página `Gestão de Projetos` do Notion acrescenta nove módulos em `data/project-studies.js`: estimativas e orçamento, cronograma e caminho crítico, acompanhamento de custos, comunicação, mudanças, aquisições, governança e encerramento, abordagens de trabalho e maturidade, e OKRs. A área reúne 15 módulos e o site tem 67 no total. O estudo de caso e a pergunta de aplicação incorporam decisões de mudança e restrições de prazo e orçamento. Os exemplos numéricos e exercícios são autorais; imagens e vídeos das fontes não foram transcritos. Os seis módulos anteriores permanecem nos mesmos índices.

Os 67 módulos incluem recursos externos em `data/learning-resources.js`, associados por título: vídeos, documentação, artigos, livros e cursos, com autor/plataforma, idioma e orientação de estudo. As referências pessoais do Drive e Notion continuam separadas das recomendações públicas. A curadoria reúne as fontes indicadas e referências oficiais de Python, Git, Android, Microsoft, W3C, OMG, OWASP, Scrum, TED e universidades. Canais e acervos aparecem em uma seção recolhida própria, incluindo a playlist Dicionário do Programador e os canais Código Fonte TV, Renato Augusto e Filipe Deschamps.

Os players do YouTube são carregados no domínio `youtube-nocookie.com` somente depois de um clique, com opção de fechar e link externo disponível. As demais plataformas abrem no site original. A consulta das páginas e publicações dos autores em 14/10/2026 confirmou títulos e destinos; não confirma reprodução, legendas ou disponibilidade futura de todos os vídeos. O link da PUCRS foi identificado pelo índice de busca, pois a abertura direta retornou 403. Materiais antigos e cursos com possíveis condições de acesso têm contexto na orientação de estudo.

### Executar a interface

Use Node.js 24 (versão definida pelo projeto):

```sh
npm ci
npm run dev:web
```

Abra `http://localhost:3000`. Este comando permite explorar a interface sem iniciar o banco de dados. O comando original `npm run dev` continua executando os serviços e migrações do backend.

```sh
npm run build
npm start
```

### Conteúdo e registros pessoais

- `data/studies.js`: áreas, módulos, relações e trilhas.
- `data/checks.js`: perguntas de aplicação e feedback.
- `pages/estudos/[slug].js`: páginas geradas estaticamente para cada área.
- `styles/studies.css`: identidade visual, responsividade e movimento reduzido.

Favoritos, progresso dos módulos, anotações e alterações da biblioteca são guardados no `localStorage` do navegador. Não há sincronização entre dispositivos, autenticação da interface nem publicação dessas alterações locais. Limpar os dados do navegador remove esses registros e restaura a estante inicial. As páginas de conteúdo podem ser compartilhadas por URL quando o projeto estiver hospedado.

O material dos módulos é um ponto de partida autoral e introdutório. Os tempos incluem leitura e prática e são estimativas. A biblioteca parte de nove registros da página `Leitura / CCN Pessoal` no Notion, consultados em 14/10/2026: dois concluídos pelo total de páginas e sete com páginas lidas ou data de início. Os três livros apenas adquiridos, sem evidência de início, não foram importados. Autores, datas e páginas ausentes continuam sem informação; as áreas conectadas são escolhas editoriais. Não foram inventadas resenhas ou citações.

`data/library.js` contém os metadados iniciais e a migração dos livros locais. A primeira alteração salva a estante consolidada em `connections-library-v2`, preservando registros anteriores de `connections-books`, com prioridade para edições e anotações locais. Exclusões não reaparecem ao recarregar. Busca, filtros, progresso por páginas, datas, avaliação e links para os registros originais complementam a biblioteca. Não há sincronização automática com o Notion. Os metadados iniciais integram o conteúdo estático do site quando publicado; novas anotações e edições permanecem no navegador.

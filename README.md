# clone-tabnews

estudos na plataforma curso.dev

## Conexões — repositório pessoal de estudos

A home reúne nove áreas em um mapa com um cérebro ilustrado em SVG e conexões animadas. Há busca por assunto, filtros, favoritos e visualização em cards. Cada área tem uma página própria com identidade visual, três módulos autorais, atividade prática, reflexão, pergunta de aplicação com feedback e conexões para outros temas.

As três trilhas combinam áreas em percursos com projetos integradores. A biblioteca permite cadastrar, editar e excluir livros, registrar anotações, definir o momento da leitura e vincular cada livro a uma área.

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

Favoritos, progresso, anotações e livros são guardados no `localStorage` do navegador. Não há sincronização entre dispositivos, autenticação da interface nem publicação desses registros pessoais. Limpar os dados do navegador remove esses registros. As páginas de conteúdo podem ser compartilhadas por URL quando o projeto estiver hospedado.

O material é um ponto de partida autoral e introdutório; não representa o histórico de estudos ou de leituras do proprietário. Os tempos dos módulos incluem leitura e prática e são estimativas. A biblioteca começa vazia para receber o histórico real.

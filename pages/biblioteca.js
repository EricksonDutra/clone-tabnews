import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { areas } from "../data/studies";
import {
  resolveLibraryBooks,
  readingProgress,
  readingSource,
} from "../data/library";
import { Footer, Header, Icon, useSaved } from "../components/StudyUI";

export default function Library() {
  const [legacyBooks] = useSaved("connections-books", []);
  const [library, saveLibrary] = useSaved("connections-library-v2", null);
  const books = resolveLibraryBooks(library, legacyBooks);
  const setBooks = (next) => saveLibrary({ books: next });
  const [filter, setFilter] = useState("Todos");
  const [query, setQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("Todas");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(null);
  const [removing, setRemoving] = useState(null);
  const visible = books.filter(
    (book) =>
      (filter === "Todos" || book.status === filter) &&
      (areaFilter === "Todas" || book.area === areaFilter) &&
      `${book.title} ${book.author} ${book.category || ""}`
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(
          query
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim(),
        ),
  );
  function submit(event) {
    event.preventDefault();
    const book = {
      ...form,
      title: form.title.trim(),
      author: form.author.trim(),
      pagesRead:
        form.pagesRead === "" || form.pagesRead == null
          ? null
          : Number(form.pagesRead),
      pagesTotal:
        form.pagesTotal === "" || form.pagesTotal == null
          ? null
          : Number(form.pagesTotal),
      id: editing || crypto.randomUUID(),
    };
    if (!book.title) return;
    setBooks(
      editing
        ? books.map((item) => (item.id === editing ? book : item))
        : [...books, book],
    );
    setForm(null);
    setEditing(null);
  }
  return (
    <>
      <Head>
        <title>Biblioteca pessoal — Conexões</title>
      </Head>
      <Header active="books" />
      <main className="collection-main">
        <div className="library-heading">
          <div>
            <span className="eyebrow">LEITURAS QUE DEIXAM MARCAS</span>
            <h1>
              Além da
              <br />
              <em>última página.</em>
            </h1>
            <p className="collection-intro">
              Livros concluídos e em andamento, ideias para preservar e conexões
              com o que você estuda.
            </p>
          </div>
          <button
            className="primary-button"
            onClick={() => {
              setEditing(null);
              setForm({
                title: "",
                author: "",
                status: "Quero ler",
                area: areas[0].slug,
                notes: "",
                pagesRead: "",
                pagesTotal: "",
              });
            }}
          >
            + Adicionar livro
          </button>
        </div>
        <p className="library-origin">
          Leituras reunidas a partir da sua página{" "}
          <a href={readingSource} target="_blank" rel="noopener noreferrer">
            Leitura no Notion ↗
          </a>
          . Atualize aqui o momento e o progresso de cada livro.
        </p>
        <div className="library-search">
          <label>
            Buscar na estante
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Título, autor ou categoria"
            />
          </label>
          <label>
            Área de estudo
            <select
              value={areaFilter}
              onChange={(event) => setAreaFilter(event.target.value)}
            >
              <option value="Todas">Todas as áreas</option>
              {areas.map((area) => (
                <option key={area.slug} value={area.slug}>
                  {area.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="library-filters" aria-label="Momento da leitura">
          {["Todos", "Quero ler", "Lendo", "Lido"].map((status) => (
            <button
              key={status}
              className={filter === status ? "selected" : ""}
              aria-pressed={filter === status}
              onClick={() => setFilter(status)}
            >
              {status}{" "}
              <span>
                {
                  books.filter(
                    (book) => status === "Todos" || book.status === status,
                  ).length
                }
              </span>
            </button>
          ))}
        </div>
        {form && (
          <section
            className="book-form"
            aria-label={editing ? "Editar livro" : "Adicionar livro"}
          >
            <div className="form-heading">
              <h2>{editing ? "Revisite esta leitura" : "Uma nova conexão"}</h2>
              <button
                aria-label="Fechar formulário"
                onClick={() => {
                  setForm(null);
                  setEditing(null);
                }}
              >
                <Icon name="close" />
              </button>
            </div>
            <form onSubmit={submit}>
              <div className="form-grid">
                <label>
                  Título
                  <input
                    autoFocus
                    required
                    maxLength={180}
                    value={form.title}
                    onChange={(event) =>
                      setForm({ ...form, title: event.target.value })
                    }
                  />
                </label>
                <label>
                  Autor ou autora
                  <input
                    maxLength={180}
                    value={form.author}
                    placeholder="Autor não informado"
                    onChange={(event) =>
                      setForm({ ...form, author: event.target.value })
                    }
                  />
                </label>
                <label>
                  Momento da leitura
                  <select
                    value={form.status}
                    onChange={(event) =>
                      setForm({ ...form, status: event.target.value })
                    }
                  >
                    {["Quero ler", "Lendo", "Lido"].map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Área conectada
                  <select
                    value={form.area}
                    onChange={(event) =>
                      setForm({ ...form, area: event.target.value })
                    }
                  >
                    {areas.map((area) => (
                      <option value={area.slug} key={area.slug}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Páginas lidas
                  <input
                    type="number"
                    min="0"
                    step="1"
                    max={
                      Number(form.pagesTotal) > 0 ? form.pagesTotal : undefined
                    }
                    value={form.pagesRead ?? ""}
                    onChange={(event) =>
                      setForm({ ...form, pagesRead: event.target.value })
                    }
                  />
                </label>
                <label>
                  Total de páginas
                  <input
                    type="number"
                    min={Math.max(1, Number(form.pagesRead) || 1)}
                    step="1"
                    value={form.pagesTotal ?? ""}
                    onChange={(event) =>
                      setForm({ ...form, pagesTotal: event.target.value })
                    }
                  />
                </label>
              </div>
              <label>
                Ideias, citações e aplicações
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={(event) =>
                    setForm({ ...form, notes: event.target.value })
                  }
                  placeholder="O que você quer preservar desta leitura?"
                />
              </label>
              <button className="primary-button" type="submit">
                Salvar leitura <Icon name="check" size={17} />
              </button>
            </form>
          </section>
        )}
        {visible.length ? (
          <div className="books-grid">
            {visible.map((book) => {
              const area =
                areas.find((item) => item.slug === book.area) || areas[0];
              const progress = readingProgress(book);
              return (
                <article
                  className="book-card"
                  key={book.id}
                  style={{
                    "--area-color": area.color,
                    "--area-tint": area.tint,
                  }}
                >
                  <div className="book-cover">
                    <Icon name="book" size={40} />
                    <span>{book.title}</span>
                  </div>
                  <div className="book-content">
                    <span className="eyebrow">{book.status}</span>
                    <h2>{book.title}</h2>
                    <p>{book.author || "Autor não informado"}</p>
                    {book.category && (
                      <span className="book-category">{book.category}</span>
                    )}
                    {book.rating && (
                      <p
                        aria-label={`Avaliação no Notion: ${book.rating.length} estrelas`}
                      >
                        {book.rating}
                      </p>
                    )}
                    <div className="book-progress">
                      {progress !== null ? (
                        <>
                          <div>
                            <span>
                              {book.pagesRead} de {book.pagesTotal} páginas
                            </span>
                            <strong>{progress}%</strong>
                          </div>
                          <progress
                            max="100"
                            value={progress}
                            aria-label={`Progresso de ${book.title}`}
                          />
                        </>
                      ) : (
                        <p>
                          Progresso em páginas não informado
                          {book.pagesTotal
                            ? ` · ${book.pagesTotal} páginas no total`
                            : ""}
                          .
                        </p>
                      )}
                    </div>
                    {(book.startedAt || book.finishedAt) && (
                      <p className="book-dates">
                        {book.startedAt &&
                          `Início: ${new Date(`${book.startedAt}T00:00:00Z`).toLocaleDateString("pt-BR", { timeZone: "UTC" })}`}
                        {book.finishedAt &&
                          ` · Término: ${new Date(`${book.finishedAt}T00:00:00Z`).toLocaleDateString("pt-BR", { timeZone: "UTC" })}`}
                      </p>
                    )}
                    <Link
                      className="book-connection"
                      href={`/estudos/${area.slug}`}
                    >
                      <Icon name={area.icon} size={15} />
                      {area.short}
                    </Link>
                    {book.notes && <p className="book-notes">{book.notes}</p>}
                    {book.sourceUrl && (
                      <a
                        className="book-source"
                        href={book.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Registro original no Notion ↗
                      </a>
                    )}
                    <div className="book-actions">
                      <button
                        onClick={() => {
                          setEditing(book.id);
                          setForm({ ...book });
                        }}
                      >
                        Editar leitura
                      </button>
                      <button onClick={() => setRemoving(book.id)}>
                        Excluir
                      </button>
                    </div>
                    {removing === book.id && (
                      <div className="delete-confirm">
                        <p>Excluir este livro e suas anotações?</p>
                        <button
                          onClick={() => {
                            setBooks(
                              books.filter((item) => item.id !== book.id),
                            );
                            setRemoving(null);
                          }}
                        >
                          Sim, excluir
                        </button>
                        <button onClick={() => setRemoving(null)}>
                          Cancelar
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="empty-state library-empty">
            <Icon name="book" size={42} />
            <h2>
              {books.length
                ? "Nenhum livro neste momento de leitura."
                : "Sua história de leitura começa aqui."}
            </h2>
            <p>
              {books.length
                ? "Ajuste a busca e os filtros ou adicione uma leitura."
                : "Adicione os livros que já leu, está lendo ou quer conhecer. Cada leitura pode se conectar a uma área de estudo."}
            </p>
          </div>
        )}
        <div className="info-strip">
          <Icon name="bookmark" />
          <p>
            A estante inicial reúne suas leituras do Notion. Edições, novos
            livros e exclusões ficam salvos neste navegador, sem sincronização
            com o Notion ou entre dispositivos.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

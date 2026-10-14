import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { areas } from "../data/studies";
import { Footer, Header, Icon, useSaved } from "../components/StudyUI";

export default function Library() {
  const [books, setBooks] = useSaved("connections-books", []);
  const [filter, setFilter] = useState("Todos");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(null);
  const [removing, setRemoving] = useState(null);
  const visible = books.filter(
    (book) => filter === "Todos" || book.status === filter,
  );
  function submit(event) {
    event.preventDefault();
    const book = {
      ...form,
      title: form.title.trim(),
      author: form.author.trim(),
      id: editing || `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    };
    if (!book.title || !book.author) return;
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
              Registre livros, preserve ideias e conecte leituras ao que você
              estuda.
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
              });
            }}
          >
            + Adicionar livro
          </button>
        </div>
        <div className="library-filters">
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
                    required
                    maxLength={180}
                    value={form.author}
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
                    <p>{book.author}</p>
                    <Link
                      className="book-connection"
                      href={`/estudos/${area.slug}`}
                    >
                      <Icon name={area.icon} size={15} />
                      {area.short}
                    </Link>
                    {book.notes && <p className="book-notes">{book.notes}</p>}
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
                ? "Mude o filtro ou adicione uma leitura."
                : "Adicione os livros que já leu, está lendo ou quer conhecer. Cada leitura pode se conectar a uma área de estudo."}
            </p>
          </div>
        )}
        <div className="info-strip">
          <Icon name="bookmark" />
          <p>
            Esta biblioteca é pessoal e fica salva neste navegador. As leituras
            ainda não são sincronizadas entre dispositivos ou compartilhadas com
            alunos.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

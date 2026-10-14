import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { areas } from "../data/studies";
import { Brain, Footer, Header, Icon, useSaved } from "../components/StudyUI";

const categories = [
  "Todas as áreas",
  "Tecnologia",
  "Gestão e negócios",
  "Desenvolvimento humano",
  "Educação",
];
const positions = [
  [9, 9],
  [9, 36],
  [9, 63],
  [30, 85],
  [70, 85],
  [91, 63],
  [91, 36],
  [91, 9],
  [50, 0],
];
const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [view, setView] = useState("map");
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);
  const selectedArea = areas.find((area) => area.slug === selected);
  const [savedOnly, setSavedOnly] = useState(false);
  const [saved, setSaved] = useSaved("connections-favorites", []);
  const visible = areas.filter(
    (area) =>
      (category === categories[0] || area.category === category) &&
      normalize(
        `${area.title} ${area.description} ${area.modules.map((module) => module.title).join(" ")}`,
      ).includes(normalize(query)) &&
      (!savedOnly || saved.includes(area.slug)),
  );
  function favorite(slug) {
    setSaved(
      saved.includes(slug)
        ? saved.filter((item) => item !== slug)
        : [...saved, slug],
    );
  }
  return (
    <>
      <Head>
        <title>Conexões — Meu universo de conhecimento</title>
        <meta
          name="description"
          content="Um repositório pessoal de estudos que conecta tecnologia, pessoas, negócios e educação. Explore conteúdos, trilhas e sua biblioteca."
        />
      </Head>
      <Header active="explore" />
      <main className="home-main">
        <section className="home-intro">
          <div className="eyebrow">
            <span className="live-dot" /> REPOSITÓRIO PESSOAL DE ESTUDOS
          </div>
          <h1>
            Conhecimento cresce
            <br />
            quando <em>se conecta.</em>
          </h1>
          <p>
            Um lugar para reunir o que aprendo, descobrir novas relações
            <br className="desktop-break" /> e compartilhar caminhos. Explore
            meu universo de conhecimento.
          </p>
          <div className="intro-meta">
            <span>
              <Icon name="layers" size={15} /> 9 áreas de conhecimento
            </span>
            <span className="meta-dot">·</span>
            <span>
              <Icon name="book" size={15} />{" "}
              {areas.reduce((total, area) => total + area.modules.length, 0)}{" "}
              módulos para explorar
            </span>
            <span className="meta-dot">·</span>
            <span>Infinitas conexões</span>
          </div>
        </section>
        <section className="explore-section" aria-label="Áreas de conhecimento">
          <div className="explore-toolbar">
            <div className="section-title">
              <span className="section-number">01 /</span>
              <h2>Explore as conexões</h2>
            </div>
            <div className="toolbar-actions">
              <label className="search-box">
                <Icon name="search" size={17} />
                <input
                  aria-label="Buscar uma área"
                  placeholder="O que você quer aprender?"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query && (
                  <button
                    aria-label="Limpar busca"
                    onClick={() => setQuery("")}
                  >
                    <Icon name="close" size={14} />
                  </button>
                )}
              </label>
              <div className="view-toggle">
                <button
                  title="Ver mapa"
                  aria-label="Ver mapa de conexões"
                  aria-pressed={view === "map"}
                  className={view === "map" ? "selected" : ""}
                  onClick={() => setView("map")}
                >
                  <Icon name="map" size={18} />
                </button>
                <button
                  title="Ver cards"
                  aria-label="Ver cards"
                  aria-pressed={view === "list"}
                  className={view === "list" ? "selected" : ""}
                  onClick={() => setView("list")}
                >
                  <Icon name="list" size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="filter-row">
            <div className="category-filters">
              {categories.map((item) => (
                <button
                  key={item}
                  aria-pressed={category === item}
                  className={category === item ? "selected" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              className={`favorites-filter ${savedOnly ? "selected" : ""}`}
              aria-pressed={savedOnly}
              onClick={() => setSavedOnly(!savedOnly)}
            >
              <Icon name="bookmark" size={15} /> Salvos{" "}
              {saved.length > 0 && <span>{saved.length}</span>}
            </button>
          </div>
          <div className="map-controls">
            <span>
              <Icon name="spark" size={16} /> Explore uma área para descobrir
              suas relações.
            </span>
            <button aria-pressed={paused} onClick={() => setPaused(!paused)}>
              {paused ? "Retomar animações" : "Pausar animações"}
            </button>
          </div>
          {visible.length === 0 ? (
            <div className="empty-state">
              <Icon name="search" size={30} />
              <h3>Nenhuma conexão por aqui ainda.</h3>
              <p>Tente outro termo ou explore todas as áreas.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setQuery("");
                  setCategory(categories[0]);
                  setSavedOnly(false);
                }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div
              className={`knowledge-map ${view === "list" ? "list-view" : ""} ${paused ? "motion-paused" : ""} ${selected ? "has-selection" : ""}`}
            >
              <div className="map-grid" />
              <svg
                className="connection-lines"
                viewBox="0 0 1000 570"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {areas.map((area, index) => {
                  const [x, y] = positions[index];
                  return (
                    <g
                      key={area.slug}
                      className={`${visible.includes(area) ? "" : "dim-line"} ${hovered === area.slug || selected === area.slug || selectedArea?.related.includes(area.slug) ? "lit-line" : ""}`}
                    >
                      <path
                        d={`M 500 262 Q ${x < 50 ? 300 : 700} 262 ${x * 10} ${y * 5.7 + 43}`}
                      />
                      <circle r="3" className="signal">
                        <animateMotion
                          dur={`${5 + (index % 3)}s`}
                          begin={`${index * 0.4}s`}
                          repeatCount="indefinite"
                          path={`M 500 262 Q ${x < 50 ? 300 : 700} 262 ${x * 10} ${y * 5.7 + 43}`}
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>
              <div className="brain-center">
                <span className="orbit orbit-one" />
                <span className="orbit orbit-two" />
                <Brain />
                <span className="brain-label">Seu segundo cérebro.</span>
                <span className="brain-subtitle">
                  APRENDER · CONECTAR · EXPANDIR
                </span>
              </div>
              {areas.map((area, index) => {
                const [x, y] = positions[index];
                return (
                  <article
                    key={area.slug}
                    style={{
                      "--area-color": area.color,
                      "--area-tint": area.tint,
                      "--x": `${x}%`,
                      "--y": `${y}%`,
                      "--signal-delay": `${index * 0.32}s`,
                    }}
                    className={`area-card ${!visible.includes(area) ? "hidden-card" : ""} ${hovered === area.slug ? "hovered" : ""} ${selected === area.slug ? "selected-node" : ""} ${selectedArea?.related.includes(area.slug) ? "related-node" : ""}`}
                    onMouseEnter={() => setHovered(area.slug)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(area.slug)}
                    onBlur={() => setHovered(null)}
                  >
                    <Link href={`/estudos/${area.slug}`} className="area-link">
                      <span className="area-icon">
                        <Icon name={area.icon} size={21} />
                      </span>
                      <div>
                        <span className="card-category">{area.category}</span>
                        <h3>{area.short}</h3>
                        <p>{area.description}</p>
                        <span className="card-detail">
                          {area.modules.length} módulos <span>·</span> Explorar
                          área <Icon name="arrow" size={13} />
                        </span>
                      </div>
                    </Link>
                    <button
                      className="connect-button"
                      aria-pressed={selected === area.slug}
                      aria-label={`Ver conexões de ${area.title}`}
                      onClick={() =>
                        setSelected(selected === area.slug ? null : area.slug)
                      }
                    >
                      ↗ Conexões
                    </button>
                    <button
                      className={`save-button ${saved.includes(area.slug) ? "is-saved" : ""}`}
                      aria-label={`${saved.includes(area.slug) ? "Remover" : "Salvar"} ${area.title}`}
                      aria-pressed={saved.includes(area.slug)}
                      onClick={() => favorite(area.slug)}
                    >
                      <Icon name="bookmark" size={15} />
                    </button>
                  </article>
                );
              })}
            </div>
          )}
          {selectedArea && (
            <section
              className="connection-inspector"
              aria-label="Conexões da área selecionada"
            >
              <div>
                <span className="eyebrow">CONEXÃO EM FOCO</span>
                <h2>{selectedArea.title}</h2>
                <p>{selectedArea.description}</p>
                <Link
                  className="text-button"
                  href={`/estudos/${selectedArea.slug}`}
                >
                  Abrir material <Icon name="arrow" size={16} />
                </Link>
              </div>
              <div className="connection-chips">
                {selectedArea.related.map((slug) => {
                  const area = areas.find((item) => item.slug === slug);
                  return (
                    <button key={slug} onClick={() => setSelected(slug)}>
                      <Icon name={area.icon} size={18} />
                      {area.short}
                      <Icon name="arrow" size={15} />
                    </button>
                  );
                })}
              </div>
              <button
                aria-label="Fechar conexões"
                onClick={() => setSelected(null)}
              >
                <Icon name="close" />
              </button>
            </section>
          )}
          <div className="map-caption">
            <span>
              <span className="live-dot" /> {visible.length} áreas conectadas{" "}
              <span className="caption-separator">/</span> Clique em uma área
              para começar
            </span>
            <span>
              O aprendizado não acontece em linha reta.{" "}
              <Icon name="spark" size={14} />
            </span>
          </div>
        </section>
        <section className="home-bottom">
          <Link href="/trilhas" className="feature-panel">
            <div className="feature-icon">
              <Icon name="project" size={25} />
            </div>
            <div>
              <span className="eyebrow">UM CAMINHO PARA COMEÇAR</span>
              <h2>Ideias diferentes. Uma mesma trilha.</h2>
              <p>
                Percursos que aproximam áreas e transformam estudo em prática.
              </p>
            </div>
            <Icon name="arrow" size={22} />
          </Link>
          <Link href="/biblioteca" className="feature-panel book-panel">
            <div className="feature-icon">
              <Icon name="book" size={25} />
            </div>
            <div>
              <span className="eyebrow">ALÉM DA ÚLTIMA PÁGINA</span>
              <h2>Leituras que deixam marcas.</h2>
              <p>Sua biblioteca, suas anotações e o que cada livro conecta.</p>
            </div>
            <Icon name="arrow" size={22} />
          </Link>
        </section>
        <div className="personal-note">
          <span className="note-symbol">✳</span>
          <p>
            Um segundo cérebro, sempre em construção.
            <br />
            <span>
              Primeiro para aprender melhor. Depois, para ajudar outras pessoas
              a aprender.
            </span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

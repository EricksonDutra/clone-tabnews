import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { areas } from "../../data/studies";
import { checks } from "../../data/checks";
import { cases } from "../../data/cases";
import { Footer, Header, Icon, useSaved } from "../../components/StudyUI";

export default function StudyPage({ area }) {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [completed, setCompleted] = useSaved(
    `connections-progress-${area.slug}`,
    [],
  );
  const [notes, setNotes] = useSaved(`connections-notes-${area.slug}`, "");
  const [saved, setSaved] = useSaved("connections-favorites", []);
  const lesson = area.modules[current];
  const check = checks[area.slug];
  const caseStudy = cases[area.slug];
  const favorite = saved.includes(area.slug);
  const percent = Math.round((completed.length / area.modules.length) * 100);
  return (
    <div
      className={`study-theme theme-${area.slug}`}
      style={{ "--area-color": area.color, "--area-tint": area.tint }}
    >
      <Head>
        <title>{area.title} — Conexões</title>
        <meta name="description" content={area.description} />
      </Head>
      <Header />
      <main className="detail-main">
        <Link href="/" className="back-link">
          ← Todas as conexões
        </Link>
        <section className="detail-hero">
          <div>
            <span className="eyebrow">{area.label}</span>
            <h1>{area.title}</h1>
            <p>{area.intro}</p>
            <div className="detail-meta">
              <span>
                <Icon name={area.icon} size={17} /> {area.category}
              </span>
              <span>3 módulos</span>
              <span>Conteúdo autoral · trilha introdutória</span>
            </div>
          </div>
          <div className="detail-emblem">
            <Icon name={area.icon} size={90} />
          </div>
        </section>
        <div className="detail-layout">
          <aside className="study-sidebar">
            <span className="eyebrow">SEU PERCURSO</span>
            <h2>Uma ideia por vez.</h2>
            <div className="progress-label">
              <span>{completed.length} de 3 concluídos</span>
              <strong>{percent}%</strong>
            </div>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progresso da área"
            >
              <span style={{ width: `${percent}%` }} />
            </div>
            <div className="module-nav">
              {area.modules.map((item, index) => (
                <button
                  key={item.title}
                  aria-pressed={current === index}
                  className={current === index ? "selected" : ""}
                  onClick={() => setCurrent(index)}
                >
                  <span className="module-number">
                    {completed.includes(index) ? (
                      <Icon name="check" size={15} />
                    ) : (
                      `0${index + 1}`
                    )}
                  </span>
                  <span>
                    {item.title}
                    <small>{item.time} de leitura e prática</small>
                  </span>
                </button>
              ))}
            </div>
            <button
              className={`outline-button ${favorite ? "is-saved" : ""}`}
              onClick={() =>
                setSaved(
                  favorite
                    ? saved.filter((slug) => slug !== area.slug)
                    : [...saved, area.slug],
                )
              }
            >
              <Icon name="bookmark" size={16} />{" "}
              {favorite ? "Área salva" : "Salvar esta área"}
            </button>
            <p className="storage-note">
              Progresso e anotações ficam neste navegador.
            </p>
          </aside>
          <article className="module-content" key={current}>
            <span className="eyebrow">
              MÓDULO 0{current + 1} <span className="caption-separator">/</span>{" "}
              {lesson.time.toUpperCase()}
            </span>
            <h2>{lesson.title}</h2>
            {lesson.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="practice-box">
              <span className="eyebrow">
                <Icon name="code" size={17} /> DO CONCEITO À PRÁTICA
              </span>
              <h3>Experimente no seu contexto</h3>
              <p>{lesson.exercise}</p>
            </div>
            <blockquote>
              <span>Uma pergunta para levar com você</span>
              {lesson.question}
            </blockquote>
            <div className="module-bottom">
              <button
                className={
                  completed.includes(current)
                    ? "outline-button"
                    : "primary-button"
                }
                onClick={() =>
                  setCompleted(
                    completed.includes(current)
                      ? completed.filter((item) => item !== current)
                      : [...completed, current],
                  )
                }
              >
                <Icon name="check" size={17} />
                {completed.includes(current)
                  ? "Concluído · desfazer"
                  : "Marcar como concluído"}
              </button>
              {current < 2 && (
                <button
                  className="text-button"
                  onClick={() => setCurrent(current + 1)}
                >
                  Próximo módulo <Icon name="arrow" size={17} />
                </button>
              )}
            </div>
          </article>
        </div>
        <details className="case-study">
          <summary>Laboratório de aplicação · {caseStudy.title}</summary>
          <div className="case-study-content">
            <span className="eyebrow">ESTUDO DE CASO · CENÁRIO DIDÁTICO</span>
            <h3>{caseStudy.title}</h3>
            <p>{caseStudy.context}</p>
            <h4>Como investigar e decidir</h4>
            <ol>
              {caseStudy.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <h4>Alternativas e consequências</h4>
            <p>{caseStudy.tradeoff}</p>
            <h4>Como avaliar o resultado</h4>
            <p>{caseStudy.evidence}</p>
            <h4>Sua entrega</h4>
            <p>{caseStudy.deliverable}</p>
          </div>
        </details>
        <section className="knowledge-check">
          <div>
            <span className="eyebrow">PAUSA PARA CONECTAR</span>
            <h2>Como você aplicaria essa ideia?</h2>
            <p>{check.question}</p>
          </div>
          <div className="quiz-options">
            {check.options.map((option, index) => (
              <button
                key={option}
                aria-pressed={answer === index}
                className={answer === index ? "selected" : ""}
                onClick={() => setAnswer(index)}
              >
                <span>{String.fromCharCode(65 + index)}</span>
                {option}
              </button>
            ))}
            {answer !== null && (
              <div className="quiz-feedback" role="status">
                <strong>
                  {answer === check.correct
                    ? "Boa conexão!"
                    : "Vamos olhar por outro ângulo."}
                </strong>
                <p>{check.feedback}</p>
                <button className="text-button" onClick={() => setAnswer(null)}>
                  Tentar novamente
                </button>
              </div>
            )}
          </div>
        </section>
        <section className="notes-section">
          <div>
            <span className="eyebrow">SEU SEGUNDO CÉREBRO</span>
            <h2>O que essa ideia conecta?</h2>
            <p>Registre exemplos, dúvidas e aplicações na sua rotina.</p>
          </div>
          <label>
            <span className="sr-only">
              Anotações pessoais sobre {area.title}
            </span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Isso me fez pensar em…"
              rows={5}
            />
            <small>
              Salvo automaticamente neste navegador · anotações privadas locais
            </small>
          </label>
        </section>
        <section className="related-section">
          <div className="section-title">
            <span className="section-number">↗</span>
            <h2>Continue fazendo conexões</h2>
          </div>
          <div className="related-grid">
            {area.related.map((slug) => {
              const item = areas.find((entry) => entry.slug === slug);
              return (
                <Link
                  href={`/estudos/${slug}`}
                  className="related-card"
                  key={slug}
                  style={{
                    "--area-color": item.color,
                    "--area-tint": item.tint,
                  }}
                >
                  <span className="area-icon">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <small>{item.category}</small>
                    <h3>{item.title}</h3>
                  </div>
                  <Icon name="arrow" size={18} />
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: areas.map((area) => ({ params: { slug: area.slug } })),
    fallback: false,
  };
}
export function getStaticProps({ params }) {
  return { props: { area: areas.find((area) => area.slug === params.slug) } };
}

import Head from "next/head";
import Link from "next/link";
import { areas, trails } from "../data/studies";
import { Footer, Header, Icon } from "../components/StudyUI";

export default function Trails() {
  return (
    <>
      <Head>
        <title>Trilhas de estudo — Conexões</title>
      </Head>
      <Header active="trails" />
      <main className="collection-main">
        <span className="eyebrow">APRENDER COM DIREÇÃO</span>
        <h1>
          Uma trilha.
          <br />
          <em>Muitas conexões.</em>
        </h1>
        <p className="collection-intro">
          Percursos sugeridos para combinar conhecimentos e criar algo com eles.
          <br />
          Siga a sequência ou comece pela pergunta que mais desperta sua
          curiosidade.
        </p>
        <div className="trail-grid">
          {trails.map((trail, index) => (
            <article className="trail-card" key={trail.title}>
              <div className="trail-top">
                <span className="area-icon">
                  <Icon name={trail.icon} size={25} />
                </span>
                <span className="eyebrow">TRILHA 0{index + 1}</span>
              </div>
              <h2>{trail.title}</h2>
              <p>{trail.description}</p>
              <ol>
                {trail.slugs.map((slug) => {
                  const area = areas.find((item) => item.slug === slug);
                  return (
                    <li key={slug}>
                      <Link href={`/estudos/${slug}`}>
                        {area.title}
                        <Icon name="arrow" size={15} />
                      </Link>
                    </li>
                  );
                })}
              </ol>
              <div className="trail-project">
                <span className="eyebrow">PROJETO INTEGRADOR</span>
                <p>{trail.project}</p>
              </div>
              <Link
                className="primary-button"
                href={`/estudos/${trail.slugs[0]}`}
              >
                Começar a trilha <Icon name="arrow" size={17} />
              </Link>
            </article>
          ))}
        </div>
        <div className="info-strip">
          <Icon name="spark" />
          <p>
            Seu ritmo, seu caminho. O progresso de cada módulo é registrado na
            página da área, neste navegador.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

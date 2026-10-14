import { useState } from "react";

export function ResourceCard({ resource }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = resource.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${resource.youtubeId}`
    : resource.playlistId
      ? `https://www.youtube-nocookie.com/embed/videoseries?list=${resource.playlistId}`
      : null;

  return (
    <li className="resource-card">
      <div className="resource-meta">
        <span>{resource.kind}</span>
        <span>{resource.language}</span>
        <span>{resource.provider}</span>
      </div>
      <h4>
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.title} ↗
        </a>
      </h4>
      <p>{resource.focus}</p>
      <div className="resource-actions">
        {embedUrl && (
          <button
            type="button"
            className="outline-button"
            aria-expanded={playing}
            aria-label={`${playing ? "Fechar player de" : "Assistir aqui:"} ${resource.title}`}
            onClick={() => setPlaying(!playing)}
          >
            {playing ? "Fechar player" : "▶ Assistir aqui"}
          </button>
        )}
        <a
          className="text-button"
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {resource.kind.includes("Vídeo") ||
          resource.kind.includes("vídeos") ||
          resource.kind === "Playlist"
            ? "Assistir na plataforma ↗"
            : "Abrir recurso ↗"}
        </a>
      </div>
      {playing && embedUrl && (
        <div className="resource-player">
          <iframe
            src={embedUrl}
            title={resource.title}
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <p>
            Se o player não carregar, use o link para assistir na plataforma.
          </p>
        </div>
      )}
    </li>
  );
}

export default function LearningResources({ resources }) {
  if (!resources?.length) return null;
  return (
    <section
      className="learning-resources"
      aria-label="Vídeos e leituras do módulo"
    >
      <span className="eyebrow">AMPLIE ESTA CONEXÃO</span>
      <h3>Assista, leia e experimente</h3>
      <p className="resources-intro">
        Recursos selecionados para este módulo. Use a orientação de estudo para
        conectar cada material à atividade.
      </p>
      <ul className="resource-list">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </ul>
    </section>
  );
}

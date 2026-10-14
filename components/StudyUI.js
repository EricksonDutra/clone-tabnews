import Link from "next/link";
import { useSyncExternalStore } from "react";

export function Icon({ name = "spark", size = 20, ...props }) {
  const paths = {
    spark: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z",
    code: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16",
    layers: "m12 3 10 6-10 6L2 9Zm-10 12 10 6 10-6M2 15l10 6 10-6",
    project: "M4 4h6v6H4Zm10 10h6v6h-6ZM7 10v7h7m0-10h6m-3-3v6",
    web: "M3 5h18v14H3ZM3 9h18M7 7h.01M10 7h.01m-2 6-2 2 2 2m8-4 2 2-2 2",
    talk: "M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5ZM8 10h8m-8 4h5",
    people:
      "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m18 0v-2a4 4 0 0 0-3-4M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m8 0a4 4 0 0 1 0 8",
    rocket:
      "m12 15-3-3c2-5 6-8 12-9 0 6-4 10-9 12ZM9 12H4l3-5h6m-1 8v5l5-3v-6m-11 5-3 5 5-3m7-11h.01",
    heart: "M20 4c-3-2-6 0-8 2-2-2-5-4-8-2-5 4 0 10 8 16 8-6 13-12 8-16Z",
    education: "m12 3 11 6-11 6L1 9Zm-7 9v6c4 3 10 3 14 0v-6m4-3v9",
    book: "M12 5C8 2 4 3 2 4v16c3-2 7-2 10 0 3-2 7-2 10 0V4c-3-1-7-2-10 1Zm0 0v15",
    search: "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 6 6",
    arrow: "M4 12h16m-6-6 6 6-6 6",
    check: "m5 12 4 4L19 6",
    bookmark: "M6 3h12v18l-6-4-6 4Z",
    map: "m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Zm6-2v16m6-14v16",
    list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
    close: "m6 6 12 12M6 18 18 6",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.spark} />
    </svg>
  );
}

export function Header({ active }) {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        <span className="brand-mark">
          <Icon name="spark" size={23} />
        </span>
        conexões<span className="brand-dot">.</span>
      </Link>
      <nav aria-label="Navegação principal">
        <Link className={active === "explore" ? "active" : ""} href="/">
          Explorar
        </Link>
        <Link className={active === "trails" ? "active" : ""} href="/trilhas">
          Trilhas de estudo
        </Link>
        <Link className={active === "books" ? "active" : ""} href="/biblioteca">
          Biblioteca
        </Link>
      </nav>
      <span className="header-caption">
        UM UNIVERSO EM CONSTRUÇÃO <span className="live-dot" />
      </span>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand small">
        conexões.
      </Link>
      <span>Aprender. Conectar. Compartilhar.</span>
      <span>
        Feito para cultivar conhecimento <Icon name="spark" size={14} />
      </span>
    </footer>
  );
}

const subscribe = (callback) => {
  window.addEventListener("storage", callback);
  window.addEventListener("study-update", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("study-update", callback);
  };
};

export function useSaved(key, fallback) {
  const raw = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    () => null,
  );
  let value = fallback;
  try {
    if (raw) value = JSON.parse(raw);
  } catch {
    /* Invalid local data falls back to the initial value. */
  }
  function save(next) {
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
      window.dispatchEvent(new Event("study-update"));
    } catch {
      window.alert(
        "Não foi possível salvar neste navegador. Verifique se o armazenamento local está habilitado.",
      );
    }
  }
  return [value, save];
}

export function Brain() {
  return (
    <svg
      className="brain-svg"
      viewBox="0 0 320 320"
      role="img"
      aria-label="Cérebro ilustrado com conexões neurais animadas"
    >
      <defs>
        <radialGradient id="brainGlow">
          <stop stopColor="#12ef8d" stopOpacity=".22" />
          <stop offset="1" stopColor="#12ef8d" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="brainFill" x2="1" y2="1">
          <stop stopColor="#104832" stopOpacity=".9" />
          <stop offset="1" stopColor="#061b16" stopOpacity=".95" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="150" fill="url(#brainGlow)" />
      <g
        className="brain-art"
        stroke="#4aefa2"
        strokeWidth="1.4"
        fill="url(#brainFill)"
      >
        <path d="M156 68c-19-15-44-5-49 13-22-6-41 9-40 29-23 7-30 31-21 50-13 21-4 46 15 54-1 25 22 40 43 33 13 19 36 20 52 6Z" />
        <path d="M164 68c19-15 44-5 49 13 22-6 41 9 40 29 23 7 30 31 21 50 13 21 4 46-15 54 1 25-22 40-43 33-13 19-36 20-52 6Z" />
        <g fill="none" strokeLinecap="round">
          <path d="M107 81c-8 16 1 30 16 30m-56-1c13-5 27 5 25 19m-45 31c10-12 26-13 34-5m-20 59c4-14 17-18 29-11m14 44c-8-13-2-25 12-28m40-130c-22-2-29 20-15 33m15 22c-16-15-35-9-39 4m-35 8c-9 16 1 29 16 30m58-13c-24-9-45 5-40 26m12-40c-14-13-13-28-5-38m33 104c-21 6-29-6-29-19m86-136c8 16-1 30-16 30m56-1c-13-5-27 5-25 19m45 31c-10-12-26-13-34-5m20 59c-4-14-17-18-29-11m-14 44c8-13 2-25-12-28m-40-130c22-2 29 20 15 33m-15 22c16-15 35-9 39 4m35 8c9 16-1 29-16 30m-58-13c24-9 45 5 40 26m-12-40c14-13 13-28 5-38m-33 104c21 6 29-6 29-19" />
        </g>
      </g>
      <g className="neural-mesh" fill="none" stroke="#30e9a1" strokeWidth=".65">
        {Array.from({ length: 12 }, (_, index) => {
          const y = 94 + index * 12;
          const spread = 65 + Math.sin((index / 11) * Math.PI) * 45;
          return (
            <path
              key={index}
              style={{ animationDelay: `${index * -0.4}s` }}
              d={`M ${160 - spread} ${y} L 122 ${y - 12} L 160 ${y + 10} L 198 ${y - 12} L ${160 + spread} ${y} M 122 ${y - 12} L 112 ${y + 20} M 198 ${y - 12} L 208 ${y + 20}`}
            />
          );
        })}
      </g>
      <g className="neuron-dots" fill="#83ffca">
        <circle cx="93" cy="129" r="4" />
        <circle cx="123" cy="111" r="4" />
        <circle cx="117" cy="199" r="4" />
        <circle cx="227" cy="129" r="4" />
        <circle cx="197" cy="111" r="4" />
        <circle cx="203" cy="199" r="4" />
      </g>
      <g className="neural-sparks" fill="#baffdf">
        {Array.from({ length: 18 }, (_, i) => {
          const a = i * 2.399;
          const r = 35 + Math.sqrt(i) * 16;
          return (
            <circle
              key={i}
              cx={160 + Math.cos(a) * r}
              cy={165 + Math.sin(a) * r * 0.8}
              r={i % 3 === 0 ? 2.6 : 1.5}
              style={{ animationDelay: `${i * -0.35}s` }}
            />
          );
        })}
      </g>
    </svg>
  );
}

// Metadados consultados na página Leitura / CCN Pessoal em 14/10/2026.
// Conclusão segue páginas lidas >= total ou data de término. Áreas são conexões editoriais.
export const readingSource =
  "https://app.notion.com/p/f2dae906a3b9489fb4d8dd614cabe0a7";
export const initialBooks = [
  {
    id: "notion-1a51721187e24283ba3cba4de82e80da",
    title: "Refatoração",
    author: "Martin Fowler",
    category: "Engenharia de Software",
    status: "Lendo",
    area: "analise-e-desenvolvimento",
    pagesRead: 96,
    pagesTotal: 453,
    startedAt: "2023-05-01",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/1a51721187e24283ba3cba4de82e80da",
    notes: "",
  },
  {
    id: "notion-325b4f22357480f196dbe357a571fe98",
    title:
      "Fundamentos da arquitetura de Software: Uma abordagem de engenharia (O’Reilly Livro 1)",
    author: "Mark Richards | Neal Ford",
    category: "Arquitetura de software",
    status: "Lendo",
    area: "arquitetura",
    pagesRead: 122,
    pagesTotal: 611,
    startedAt: "2025-07-09",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/325b4f22357480f196dbe357a571fe98",
    notes: "",
  },
  {
    id: "notion-334b4f223574800fb360de11f43e63fc",
    title: "O Projeto Fênix",
    author: "Gene Kim, Kevin Behr e George Spafford",
    category: "Românce",
    status: "Lendo",
    area: "web-mobile",
    pagesRead: 98,
    pagesTotal: 573,
    startedAt: "2025-07-10",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/334b4f223574800fb360de11f43e63fc",
    notes: "",
  },
  {
    id: "notion-334b4f22357480239a0bd17cc6e2bee3",
    title: "Arquitetura de Software: As partes Difíceis",
    author: "Neal Ford, Mark Richards, Pramod Sadalage & Zhamak Dehghani",
    category: "Arquitetura de software",
    status: "Lendo",
    area: "arquitetura",
    pagesRead: null,
    pagesTotal: 660,
    startedAt: "2025-07-10",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/334b4f22357480239a0bd17cc6e2bee3",
    notes: "",
  },
  {
    id: "notion-334b4f22357480828bb0f62077f10ea7",
    title: "Essencialismo: A disciplinada busca por menos",
    author: "",
    category: "Produtividade",
    status: "Lido",
    area: "soft-skills",
    pagesRead: 288,
    pagesTotal: 288,
    startedAt: "2024-03-14",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/334b4f22357480828bb0f62077f10ea7",
    notes: "",
  },
  {
    id: "notion-51843ebf83dc4d86821081adad7bcb1c",
    title: "Segundo Cérebro",
    author: "Tiago Forte",
    category: "Produtividade",
    status: "Lendo",
    area: "educacao",
    pagesRead: 80,
    pagesTotal: 234,
    startedAt: "2023-11-29",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/51843ebf83dc4d86821081adad7bcb1c",
    notes: "",
  },
  {
    id: "notion-74efc5949bf648fc9ebd03462928b769",
    title: "Arquitetura Limpa",
    author: "Robert C. Martin",
    category: "Arquitetura de software",
    status: "Lido",
    area: "arquitetura",
    pagesRead: 404,
    pagesTotal: 404,
    startedAt: "2023-07-01",
    finishedAt: "",
    rating: "⭐⭐⭐⭐⭐",
    sourceUrl: "https://app.notion.com/74efc5949bf648fc9ebd03462928b769",
    notes: "",
  },
  {
    id: "notion-bd973a8a6404476eb3e504dd2bbb316f",
    title: "Código Limpo",
    author: "Robert C. Martin",
    category: "Engenharia de Software",
    status: "Lendo",
    area: "analise-e-desenvolvimento",
    pagesRead: 156,
    pagesTotal: 423,
    startedAt: "2023-04-01",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/bd973a8a6404476eb3e504dd2bbb316f",
    notes: "",
  },
  {
    id: "notion-cd354e2026e14dd28985d25866ac6857",
    title: "Padrões de projeto",
    author: "Gang of Four",
    category: "Design Patterns",
    status: "Lendo",
    area: "arquitetura",
    pagesRead: 100,
    pagesTotal: 360,
    startedAt: "2023-06-01",
    finishedAt: "",
    rating: "",
    sourceUrl: "https://app.notion.com/cd354e2026e14dd28985d25866ac6857",
    notes: "",
  },
];

const normalize = (value = "") =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

export function mergeLibraryBooks(savedBooks = []) {
  const books = initialBooks.map((book) => ({ ...book }));
  for (const saved of Array.isArray(savedBooks) ? savedBooks : []) {
    const index = books.findIndex(
      (book) =>
        book.id === saved.id ||
        (saved.sourceUrl && book.sourceUrl === saved.sourceUrl) ||
        normalize(book.title) === normalize(saved.title),
    );
    if (index >= 0) books[index] = { ...books[index], ...saved };
    else books.push(saved);
  }
  return books;
}

export function readingProgress(book) {
  if (
    !Number.isFinite(book.pagesRead) ||
    !Number.isFinite(book.pagesTotal) ||
    book.pagesTotal <= 0
  )
    return null;
  return Math.min(
    100,
    Math.max(0, Math.round((book.pagesRead / book.pagesTotal) * 100)),
  );
}

export function resolveLibraryBooks(library, legacyBooks) {
  return Array.isArray(library?.books)
    ? library.books
    : mergeLibraryBooks(legacyBooks);
}

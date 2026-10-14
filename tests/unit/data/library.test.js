import {
  initialBooks,
  mergeLibraryBooks,
  resolveLibraryBooks,
  readingProgress,
} from "data/library";
import { areas } from "data/studies";

describe("Notion reading library", () => {
  test("imports only started or completed readings with supported areas", () => {
    expect(initialBooks).toHaveLength(9);
    expect(initialBooks.filter((book) => book.status === "Lido")).toHaveLength(
      2,
    );
    expect(initialBooks.filter((book) => book.status === "Lendo")).toHaveLength(
      7,
    );
    for (const book of initialBooks) {
      expect(book.pagesRead > 0 || Boolean(book.startedAt)).toBe(true);
      expect(areas.some((area) => area.slug === book.area)).toBe(true);
    }
  });
  test("preserves existing edits and notes without duplicating an imported title", () => {
    const saved = [
      {
        id: "old-id",
        title: "Codigo Limpo",
        author: "Robert C. Martin",
        notes: "Minha anotação",
        status: "Lido",
      },
      {
        id: "personal",
        title: "Outra leitura",
        author: "Autora",
        status: "Lendo",
      },
    ];
    const books = mergeLibraryBooks(saved);
    expect(books).toHaveLength(10);
    expect(books.find((book) => book.id === "old-id")).toMatchObject({
      notes: "Minha anotação",
      status: "Lido",
      pagesRead: 156,
    });
    expect(books.filter((book) => book.title === "Código Limpo")).toHaveLength(
      0,
    );
  });
  test("does not reinsert removed books or overwrite updated progress", () => {
    expect(resolveLibraryBooks({ books: [] }, [])).toEqual([]);
    const saved = { books: [{ ...initialBooks[0], pagesRead: 200 }] };
    expect(resolveLibraryBooks(saved, [])).toEqual(saved.books);
    expect(resolveLibraryBooks(null, [])).toHaveLength(9);
  });
  test("keeps absent progress unknown and computes known page counts", () => {
    expect(readingProgress({ pagesRead: null, pagesTotal: 660 })).toBeNull();
    expect(readingProgress({ pagesRead: 96, pagesTotal: 453 })).toBe(21);
    expect(readingProgress({ pagesRead: 288, pagesTotal: 288 })).toBe(100);
    expect(readingProgress({ pagesRead: 5, pagesTotal: 0 })).toBeNull();
  });
});

import { renderToStaticMarkup } from "react-dom/server";
import LearningResources from "components/LearningResources";
import { areas } from "data/studies";
import { resourceCatalog } from "data/learning-resources";

describe("learning resource curation", () => {
  test("each published module resolves specific resources with study guidance", () => {
    for (const area of areas) {
      for (const lesson of area.modules) {
        expect(lesson.resources.length).toBeGreaterThan(0);
        expect(new Set(lesson.resources.map((item) => item.id)).size).toBe(
          lesson.resources.length,
        );
        for (const item of lesson.resources) {
          expect(resourceCatalog[item.id]).toBeDefined();
          expect(item.title).toBeTruthy();
          expect(item.focus).toBeTruthy();
          expect(item.provider).toBeTruthy();
          expect(["Canal", "Acervo"]).not.toContain(item.kind);
        }
      }
    }
  });

  test("resource links and YouTube identifiers are usable by the player", () => {
    for (const item of Object.values(resourceCatalog)) {
      const url = new URL(item.url);
      expect(url.protocol).toBe("https:");
      if (item.youtubeId) {
        expect(item.youtubeId).toMatch(/^[A-Za-z0-9_-]{11}$/);
        expect(url.hostname).toBe("www.youtube.com");
        expect(url.searchParams.get("v")).toBe(item.youtubeId);
        expect(item.evidenceUrl).toBeTruthy();
      }
      if (item.playlistId) {
        expect(url.searchParams.get("list")).toBe(item.playlistId);
      }
    }
  });

  test("videos provide external links without loading players before user action", () => {
    const playable = Object.entries(resourceCatalog)
      .filter(([, item]) => item.youtubeId || item.playlistId)
      .map(([id, item]) => ({ id, ...item }));
    const html = renderToStaticMarkup(
      <LearningResources resources={playable} />,
    );
    expect(html).not.toContain("<iframe");
    expect(html).toContain('aria-expanded="false"');
    for (const item of playable) {
      expect(html).toContain(item.url.replaceAll("&", "&amp;"));
    }
  });
});

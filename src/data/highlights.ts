import type { AttractionPage } from "./types";

/** Lean attraction set — Palma guides live primarily in experiences.ts. */
export const highlights: AttractionPage[] = [];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}

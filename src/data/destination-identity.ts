/**
 * World 2.0 destination identity — same logo system as the Málaga prototype.
 * Destination / descriptor / strapline only; do not rebuild the mark per site.
 */
export type LogoConcept = "anchor-arch" | "harbour-m";
export type LogoVariant = "full" | "compact" | "mark";
export type LogoTone = "default" | "on-dark";

export const destinationIdentity = {
  destination: "Palma",
  descriptor: "Shore Excursions",
  /** Displayed as tracked uppercase in the wordmark. */
  strapline: "Your Mediterranean Island Day",
  accessibleName: "Palma Shore Excursions",
  accent: "terracotta" as const,
  logoConcept: "anchor-arch" as LogoConcept,
  iconStyle: "anchor-arch" as const,
} as const;

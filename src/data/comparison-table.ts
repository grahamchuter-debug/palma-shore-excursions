/**
 * Homepage / decision-support comparison table:
 * “Which Palma Shore Excursion Is Right for You?”
 */
export interface ExcursionComparisonRow {
  experience: string;
  bestFor: string;
  approximateDuration: string;
  activityLevel: string;
  staysInPalma: string;
  privateOrShared: string;
  keyHighlight: string;
  href: string;
}

export const whichPalmaShoreExcursionRows: ExcursionComparisonRow[] = [
  {
    experience: "Palma Old Town and Cathedral",
    bestFor: "First-time visitors staying near the ship",
    approximateDuration: "Approximately 3–4 hours",
    activityLevel: "Easy to moderate",
    staysInPalma: "Yes",
    privateOrShared: "Shared",
    keyHighlight: "Gothic cathedral and historic lanes",
    href: "/shore-excursions/palma-old-town-cathedral",
  },
  {
    experience: "Sóller and Valldemossa",
    bestFor: "First-time visitors wanting Mallorca beyond Palma",
    approximateDuration: "Approximately 5 hours",
    activityLevel: "Moderate",
    staysInPalma: "No",
    privateOrShared: "Shared",
    keyHighlight: "Mountain villages and Tramuntana scenery",
    href: "/shore-excursions/soller-valldemossa",
  },
  {
    experience: "Caves of Drach",
    bestFor: "Travellers seeking Mallorca’s famous caves",
    approximateDuration: "Approximately 4–5 hours",
    activityLevel: "Moderate",
    staysInPalma: "No — eastern Mallorca",
    privateOrShared: "Shared",
    keyHighlight: "Underground lake and cave chambers",
    href: "/shore-excursions/caves-of-drach",
  },
  {
    experience: "Train, Tram and Boat Island Tour",
    bestFor: "Scenic travellers with a long port call",
    approximateDuration: "Approximately 7–8 hours",
    activityLevel: "Moderate",
    staysInPalma: "No",
    privateOrShared: "Shared",
    keyHighlight: "Historic railway and coastal transfer",
    href: "/shore-excursions/mallorca-train-tram-boat",
  },
  {
    experience: "Palma Food Tour",
    bestFor: "Food lovers exploring the city",
    approximateDuration: "Approximately 3–4 hours",
    activityLevel: "Easy to moderate",
    staysInPalma: "Yes",
    privateOrShared: "Shared",
    keyHighlight: "Markets and Mallorcan tasting stops",
    href: "/shore-excursions/palma-food-tour",
  },
  {
    experience: "Private Mallorca Tour",
    bestFor: "Parties wanting flexible pacing",
    approximateDuration: "Approximately 5–7 hours",
    activityLevel: "Flexible",
    staysInPalma: "Usually no",
    privateOrShared: "Private",
    keyHighlight: "Dedicated vehicle and tailored stops",
    href: "/shore-excursions/private-soller-valldemossa",
  },
];

export const whichPalmaShoreExcursionPrompts = [
  {
    title: "Choose Palma Old Town if:",
    body: "You want history, architecture and less travel time.",
  },
  {
    title: "Choose Sóller and Valldemossa if:",
    body: "You want Mallorca’s mountain scenery and traditional villages.",
  },
  {
    title: "Choose the Caves of Drach if:",
    body: "You want one of the island’s most famous natural attractions.",
  },
  {
    title: "Choose a private tour if:",
    body: "You value flexibility and a more personalised itinerary.",
  },
] as const;

export const whichPalmaShoreExcursionTable = {
  title: "Which Palma Shore Excursion Is Right for You?",
  columns: [
    "Experience",
    "Best for",
    "Approximate duration",
    "Activity level",
    "Stays in Palma?",
    "Private or shared",
    "Key highlight",
  ] as const,
  rows: whichPalmaShoreExcursionRows,
  prompts: whichPalmaShoreExcursionPrompts,
};

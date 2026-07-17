import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description: "Our strongest overall choice for a well-timed Palma cruise day.",
  },
  {
    id: "best-historic",
    label: "Best Historic Experience",
    shortLabel: "Historic",
    description: "Palma Cathedral, old-town courtyards and the layered harbour city.",
  },
  {
    id: "best-independent",
    label: "Best Independent Experience",
    shortLabel: "Independent",
    description: "A realistic self-guided Palma day once berth and shuttle arrangements are clear.",
  },
  {
    id: "best-coastal",
    label: "Best Coastal Experience",
    shortLabel: "Coastal",
    description: "Waterfront promenades, Port de Sóller and Mallorca’s shoreline scenery.",
  },
  {
    id: "best-view",
    label: "Best Views",
    shortLabel: "Views",
    description: "Tramuntana terraces, village viewpoints and cathedral-and-bay panoramas.",
  },
  {
    id: "best-got",
    label: "Signature Experience",
    shortLabel: "Signature",
    description: "Our future Tramuntana-focused small-group flagship, currently in preparation.",
  },
  {
    id: "best-families",
    label: "Best for Families",
    shortLabel: "Families",
    description: "Flexible Palma and shorter island options with manageable travel and walking.",
  },
  {
    id: "best-photography",
    label: "Best Photography",
    shortLabel: "Photography",
    description: "Cathedral skyline, mountain villages and cave chambers for strong cruise-day images.",
  },
  {
    id: "best-food",
    label: "Best Food & Wine",
    shortLabel: "Food & Wine",
    description: "Markets, pastries and Mallorcan flavours in and around Palma.",
  },
  {
    id: "best-luxury",
    label: "Best Private Tour",
    shortLabel: "Private",
    description: "Dedicated transport and flexible pacing for your own party.",
  },
  {
    id: "hidden-gem",
    label: "Hidden Gem",
    shortLabel: "Hidden Gem",
    description: "Quieter village lanes and coastal corners beyond the busiest coach stops.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "A rewarding port day without unnecessary transfers or expense.",
  },
  {
    id: "best-short-port",
    label: "Best Short Port Call",
    shortLabel: "Short Port",
    description: "Palma highlights for calls without enough usable time to travel deep into the island.",
  },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description:
      "Sóller and Valldemossa — mountain villages and Tramuntana scenery on a carefully timed cruise excursion.",
    href: "/shore-excursions/soller-valldemossa",
    cta: "View our top pick",
  },
  {
    id: "first-time",
    emoji: "🏛️",
    label: "Best First-Time Tour",
    description:
      "Sóller and Valldemossa for first-time visitors who want Mallorca beyond Palma without committing to a near full-day multi-transport circuit.",
    href: "/shore-excursions/soller-valldemossa",
    cta: "Discover the villages",
  },
  {
    id: "adventure",
    emoji: "🚲",
    label: "Best Adventure",
    description:
      "Palma e-bike or a coastal adventure day — active options for energetic passengers with enough port time.",
    href: "/shore-excursions/palma-ebike-tour",
    cta: "Plan an active day",
  },
  {
    id: "food-wine",
    emoji: "🍷",
    label: "Best Food & Wine",
    description:
      "Palma food experience — markets, local flavours and Mallorcan tasting stops without leaving the city behind.",
    href: "/shore-excursions/palma-food-tour",
    cta: "Taste Palma",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Tour",
    description:
      "Private Sóller and Valldemossa — flexible village time and a dedicated vehicle for your party.",
    href: "/shore-excursions/private-soller-valldemossa",
    cta: "View private tour",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description:
      "Train, tram and boat — mountain scenery, citrus valleys and harbour light for a memorable set of images.",
    href: "/shore-excursions/mallorca-train-tram-boat",
    cta: "Photograph Mallorca",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description:
      "Historic Palma or hop-on hop-off keeps road time sensible and allows mixed-age families to set an easier pace.",
    href: "/compare/which-palma-shore-excursion",
    cta: "Compare family days",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Best Independent Day",
    description:
      "Independent Palma — cathedral, old town, market and waterfront with a generous ship buffer.",
    href: "/guides/independent-palma-guide",
    cta: "Use the DIY guide",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Mallorca Experience",
    description:
      "Signature Mallorca Discovery — a future maximum-eight-guest Tramuntana day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}

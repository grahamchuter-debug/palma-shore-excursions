import type { FAQ } from "./types";

export const SIGNATURE_EXPERIENCE_PATH = "/signature-mallorca-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureMallorcaExperience = {
  slug: "signature-mallorca-experience",
  title: "Signature Mallorca Discovery",
  seoTitle: "Signature Mallorca Discovery — Future Tramuntana Experience",
  metaDescription:
    "Preview a future small-group Tramuntana shore experience from Palma — maximum eight guests, luxury transport and flexible discovery. Not currently bookable.",
  tagline:
    "A future small-group journey through Valldemossa, Sóller and the Serra de Tramuntana — designed around your ship, not a generic island day tour.",
  overview:
    "Signature Mallorca Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Palma into the Tramuntana foothills, with carefully paced village time, scenic stops, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description:
        "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "🚐",
      title: "Luxury vehicle",
      description:
        "Comfortable transport planned for the mountain roads between Palma, Valldemossa and Sóller.",
    },
    {
      emoji: "⛰️",
      title: "Tramuntana at its heart",
      description:
        "Stone villages, citrus valleys and mountain terraces would form the core of the future itinerary.",
    },
    {
      emoji: "🏘️",
      title: "Village time that breathes",
      description:
        "Fewer checklist stops and more time to walk lanes, find a viewpoint and enjoy the setting.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description:
        "Time for mountain light and village details rather than photographs through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description:
        "A relaxed Mallorcan lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description:
        "Routing designed to adapt to ship times, traffic, weather, mobility and the interests of each group.",
    },
    {
      emoji: "🚢",
      title: "Cruise-first timing",
      description:
        "The future operating plan will be built backwards from all-aboard with a conservative return margin.",
    },
  ] satisfies SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Mallorca Discovery now?",
      answer:
        "No. The experience is in preparation and is not currently available to book. This page describes the intended concept only.",
    },
    {
      question: "What would the future experience include?",
      answer:
        "The current concept includes a maximum of eight guests, luxury transport, Tramuntana village time, photography stops, a local lunch and flexible cruise-timed routing. Details may change before launch.",
    },
    {
      question: "Why focus on the Tramuntana rather than only Palma?",
      answer:
        "Palma is exceptional, but many first-time cruise passengers want one clear day that reveals Mallorca beyond the capital. The mountain villages offer scenery and character that the city alone cannot provide.",
    },
    {
      question: "What should I book in the meantime?",
      answer:
        "Use our current shore-excursion guides and Editor's Collection to compare bookable Sóller, Valldemossa, caves, railway and historic Palma options.",
    },
  ] satisfies FAQ[],
};

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureMallorcaExperience.title,
    description:
      "A future maximum-eight-guest Tramuntana villages experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}

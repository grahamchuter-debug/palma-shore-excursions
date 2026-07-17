import type { Comparison } from "./types";
import { whichPalmaShoreExcursionRows } from "./comparison-table";

export const comparisons: Comparison[] = [
  {
    slug: "which-palma-shore-excursion",
    title: "Which Palma Shore Excursion Is Right for You?",
    seoTitle: "Which Palma Shore Excursion Is Right for You?",
    metaDescription:
      "Compare Palma Old Town, Sóller and Valldemossa, Caves of Drach, train–tram–boat, food and private Mallorca tours for your cruise day.",
    kind: "guide",
    summary:
      "The best Palma shore excursion depends on usable hours, appetite for island travel and whether you want city atmosphere, mountain villages, caves or a private vehicle.",
    verdict:
      "Choose Palma Old Town for a low-risk city day; Sóller and Valldemossa for the strongest first-time island introduction; caves for a famous natural highlight; train–tram–boat only on a long call; food for flavour-led city walking; private when flexibility matters more than price.",
    overview: [
      "Start with your usable hours after disembarkation and before all-aboard — not the published sailing time alone.",
      "City options minimise transfer risk; island options reward you with scenery but need conservative return buffers.",
      "Private tours change pacing and group size; they do not automatically include every entrance fee or guarantee port-side pickup.",
    ],
    guideItems: whichPalmaShoreExcursionRows.map((row) => ({
      name: row.experience,
      slug: row.href.replace("/shore-excursions/", ""),
      href: row.href,
      reason: `${row.bestFor}. ${row.keyHighlight}.`,
      topExcursion: row.experience,
      returnConfidence:
        row.staysInPalma === "Yes"
          ? "Very high with a sensible terminal buffer"
          : "Good with organised transport and road contingency",
      walkingDifficulty: row.activityLevel,
    })),
    faqs: [
      {
        question: "What is the safest choice for a short Palma call?",
        answer:
          "Stay in Palma. Old-town and cathedral walking, or a food experience, keeps travel time low and return planning simple.",
      },
      {
        question: "What should first-time visitors book?",
        answer:
          "Sóller and Valldemossa is our Editor’s Choice when hours allow. If the call is short, choose historic Palma instead.",
      },
    ],
    relatedSlugs: [
      "palma-or-mallorca-island",
      "private-tour-vs-coach-tour",
      "can-you-explore-palma-independently",
    ],
    imageKey: "compare",
  },
  {
    slug: "palma-or-mallorca-island",
    title: "Palma or More of Mallorca?",
    seoTitle: "Palma vs Mallorca Island Tour from Cruise Port",
    metaDescription: "Compare a Palma city day with island excursions to Sóller, Valldemossa and the Caves of Drach — practical advice for cruise passengers.",
    kind: "versus",
    optionA: "Historic Palma",
    optionB: "Island Mallorca",
    summary:
      "Palma offers Gothic architecture, markets and waterfront character close to the harbour. Island days reveal mountain villages, caves and scenic railways — at the cost of road time and a tighter return plan.",
    verdict:
      "Choose Palma when hours are limited or you want maximum flexibility. Choose an island day when you have a full call and want scenery beyond the capital. Do not try to do both thoroughly.",
    overview: [
      "Palma is the lower-risk cruise day and often the right answer on a short call.",
      "Sóller, Valldemossa and the Tramuntana give a stronger sense of Mallorca as an island.",
      "Caves and multi-transport circuits need even clearer timing discipline.",
    ],
    comparisonTable: [
      { category: "Travel intensity", optionA: "Low once berth access is clear", optionB: "Moderate to high road or multi-transport time" },
      { category: "Headline sights", optionA: "Cathedral, old town, waterfront", optionB: "Villages, mountains, caves or railway" },
      { category: "Return confidence", optionA: "Very high with a terminal buffer", optionB: "Depends on traffic and itinerary length" },
      { category: "Best for", optionA: "Short calls, independent explorers", optionB: "First-time island scenery seekers" },
      { category: "Walking", optionA: "Cobbles and city slopes", optionB: "Village streets plus transfer walking" },
    ],
    faqs: [
      {
        question: "Can I see Palma and Sóller in one port day?",
        answer:
          "Only lightly on a long call. A proper village excursion already uses most of a typical day once transfers and return margin are included.",
      },
      {
        question: "Is Palma enough for a first visit?",
        answer:
          "Yes. The cathedral and old town are substantial. Choose island travel because you want mountains and villages, not because Palma is thin.",
      },
    ],
    relatedSlugs: ["which-palma-shore-excursion", "soller-or-caves", "one-day-in-palma"],
    imageKey: "historic",
  },
  {
    slug: "soller-or-caves",
    title: "Sóller and Valldemossa or the Caves of Drach?",
    seoTitle: "Sóller vs Caves of Drach from Palma Cruise Port",
    metaDescription:
      "Compare mountain villages with the Caves of Drach for a Palma cruise day, including scenery, travel direction and walking.",
    kind: "versus",
    optionA: "Sóller & Valldemossa",
    optionB: "Caves of Drach",
    summary:
      "Both leave Palma for a recognisable Mallorca highlight. The village day is about mountain towns and Tramuntana character; the caves day is about underground chambers and an east-coast natural spectacle.",
    verdict:
      "Choose Sóller and Valldemossa for open-air scenery and traditional villages. Choose the caves when an underground lake and cave visit is the priority. They sit in different directions and should not be forced into one rushed circuit.",
    overview: [
      "Village tours typically climb northwest into the Tramuntana foothills.",
      "Cave excursions travel east towards Porto Cristo.",
      "Both need organised timing on a cruise day; neither is a casual taxi dabble.",
    ],
    comparisonTable: [
      { category: "Setting", optionA: "Mountain villages and valley views", optionB: "Illuminated caves and underground lake" },
      { category: "Direction from Palma", optionA: "Northwest / Tramuntana", optionB: "East coast" },
      { category: "Outdoor time", optionA: "High", optionB: "Lower once inside the caves" },
      { category: "Walking", optionA: "Cobbled village streets and slopes", optionB: "Pathways through cave chambers" },
      { category: "Best for", optionA: "First-time island atmosphere", optionB: "Famous natural attraction seekers" },
    ],
    faqs: [
      {
        question: "Which is better for families?",
        answer:
          "Either can work, but check walking confidence and interest. Villages offer cafés and open air; caves are cooler and more enclosed.",
      },
      {
        question: "Which has the stronger first-time wow?",
        answer:
          "It depends on preference. Villages show living Mallorca; the caves deliver a single dramatic underground set piece.",
      },
    ],
    relatedSlugs: ["which-palma-shore-excursion", "palma-or-mallorca-island"],
    imageKey: "caves",
  },
  {
    slug: "can-you-explore-palma-independently",
    title: "Can You Explore Palma Independently?",
    seoTitle: "Can You Explore Palma Independently from the Cruise Port?",
    metaDescription:
      "An honest guide to exploring Palma independently from the cruise terminal, with cathedral, old town, markets and return-to-ship advice.",
    kind: "guide",
    summary:
      "Yes. Palma is one of the more rewarding Mediterranean ports for independent cruise passengers once berth and shuttle arrangements are clear.",
    verdict:
      "Explore independently when you want the cathedral, old town and waterfront. Book organised transport for Sóller, Valldemossa, caves and multi-stop island circuits.",
    overview: [
      "Confirm walking versus shuttle needs before estimating how much city time you really have.",
      "A strong independent route links Parc de la Mar, the cathedral, old-town lanes and a market or café stop.",
      "Keep at least 60–90 minutes between your planned terminal return and all-aboard time.",
    ],
    guideItems: [
      {
        name: "Independent Palma Guide",
        slug: "independent-palma-guide",
        href: "/guides/independent-palma-guide",
        reason: "Complete city route, berth orientation, food and return planning.",
        topExcursion: "Self-guided Palma",
        returnConfidence: "High with a sensible terminal buffer",
        walkingDifficulty: "Easy to moderate; cobbles and slopes in places",
      },
      {
        name: "One Day in Palma",
        slug: "one-day-in-palma",
        href: "/guides/one-day-in-palma",
        reason: "A realistic timed city itinerary without overstuffing the day.",
        topExcursion: "Historic Palma",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Palma Cruise Port Guide",
        slug: "cruise-port-guide",
        href: "/cruise-port-guide",
        reason: "Berths, shuttles and city-access caveats.",
        topExcursion: "Port logistics",
        returnConfidence: "Essential reading before DIY",
        walkingDifficulty: "Depends on berth",
      },
    ],
    faqs: [
      {
        question: "Do I need a tour for Palma Cathedral?",
        answer:
          "Not necessarily. Many passengers visit independently. A guided walk adds context and efficient routing for first-time visitors.",
      },
      {
        question: "Can I reach Sóller independently on a cruise day?",
        answer:
          "Experienced travellers sometimes do, but organised excursions usually make timing clearer around all-aboard.",
      },
    ],
    relatedSlugs: ["which-palma-shore-excursion", "palma-or-mallorca-island", "private-tour-vs-coach-tour"],
    imageKey: "walking",
  },
  {
    slug: "private-tour-vs-coach-tour",
    title: "Private Tour vs Coach Tour",
    seoTitle: "Private vs Coach Shore Tours from Palma",
    metaDescription: "Compare private and shared shore excursions from Palma for cruise passengers, including pacing, flexibility and coverage.",
    kind: "versus",
    optionA: "Private Tour",
    optionB: "Shared / Coach Tour",
    summary:
      "Private tours buy control: adjustable pacing and fewer group delays. Shared tours make classic Mallorca highlights more affordable, but operate to a fixed route and the speed of the group.",
    verdict:
      "Choose private for families, small parties, mobility considerations and a day shaped around your priorities. Choose shared when price matters and the published itinerary fits. A private vehicle does not create attraction tickets or override opening rules.",
    overview: [
      "Private tours usually reduce waiting and can change viewpoint, meal and comfort stops.",
      "Shared tours offer better per-person value and often package guide and transport clearly.",
      "For caves, railways and village entrances, verify exactly what is included regardless of format.",
    ],
    comparisonTable: [
      { category: "Group size", optionA: "Your party, usually in one vehicle", optionB: "Larger shared group" },
      { category: "Pace", optionA: "Adjustable within port constraints", optionB: "Fixed to the published schedule" },
      { category: "Cost", optionA: "Higher overall; attractive for larger families", optionB: "Lower per person" },
      { category: "Mobility", optionA: "Stops and walking can often be adapted", optionB: "Group route may be less flexible" },
      { category: "Inclusions", optionA: "Must be explicitly confirmed", optionB: "May be bundled; read the listing carefully" },
    ],
    faqs: [
      {
        question: "Does a private tour guarantee port pickup?",
        answer:
          "Only when the booking explicitly states it. Always follow the provider’s meeting instructions for your sailing.",
      },
      {
        question: "Are shared tours slower?",
        answer:
          "Boarding and regrouping take longer, but experienced cruise operators design schedules around those realities.",
      },
    ],
    relatedSlugs: ["which-palma-shore-excursion", "palma-or-mallorca-island"],
    imageKey: "private",
  },
  {
    slug: "best-palma-tour-first-time",
    title: "Best Palma Tour for First-Time Visitors",
    seoTitle: "Best Palma Shore Excursion for First-Time Cruise Passengers",
    metaDescription:
      "First time in Palma? Compare historic Palma, Sóller and Valldemossa, caves and railway tours by port hours and interests.",
    kind: "guide",
    summary:
      "A first Mallorca day should reveal the island’s character rather than race across it. Choose one clear story: Gothic Palma, mountain villages, caves or a scenic railway circuit.",
    verdict:
      "Sóller and Valldemossa is the first choice for scenery and villages when hours align. Historic Palma is the intelligent short-call option. Caves and train–tram–boat are specialist choices, not the default.",
    overview: [
      "Full day and broad appeal: Sóller and Valldemossa.",
      "Shorter call or independent preference: Palma Cathedral and old town.",
      "Natural-highlight priority: Caves of Drach.",
      "Long call and transport enthusiasts: train, tram and boat.",
    ],
    guideItems: [
      {
        name: "Sóller and Valldemossa",
        slug: "soller-valldemossa",
        href: "/shore-excursions/soller-valldemossa",
        reason: "The richest first encounter with Mallorca beyond the capital.",
        topExcursion: "Sóller and Valldemossa",
        returnConfidence: "Requires a full call and cruise-aware planning",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Historic Palma",
        slug: "palma-old-town-cathedral",
        href: "/shore-excursions/palma-old-town-cathedral",
        reason: "Major sights close to the harbour with the easiest return.",
        topExcursion: "Palma Old Town and Cathedral",
        returnConfidence: "Very high",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "Caves of Drach",
        slug: "caves-of-drach",
        href: "/shore-excursions/caves-of-drach",
        reason: "A memorable underground alternative to village scenery.",
        topExcursion: "Caves of Drach",
        returnConfidence: "Good with fixed transport",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "Can I see Sóller and the caves in one port day?",
        answer:
          "Not sensibly. They lie in different directions and each deserves to be the day’s anchor.",
      },
      {
        question: "Which option suits limited mobility?",
        answer:
          "A private Palma programme can often be adapted most readily. Discuss slopes, cobbles and vehicle access before booking.",
      },
    ],
    relatedSlugs: ["which-palma-shore-excursion", "soller-or-caves", "can-you-explore-palma-independently"],
    imageKey: "soller",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}

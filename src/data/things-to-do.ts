export interface ThingToDoItem {
  id: string;
  number: number;
  title: string;
  summary: string;
  whyCruisePassenger: string;
  location: "In Palma" | "Beyond Palma";
  timeCommitment: string;
  suits: string;
  independentOrOrganised: string;
}

export interface OneDayByCallLength {
  id: "short" | "typical" | "long";
  title: string;
  description: string;
  suggestions: string[];
}

export const thingsToDoPage = {
  slug: "things-to-do-in-palma-from-a-cruise-ship",
  path: "/things-to-do-in-palma-from-a-cruise-ship",
  title: "Best Things to Do in Palma from a Cruise Ship",
  seoTitle: "Best Things to Do in Palma from a Cruise Ship",
  metaDescription:
    "Fifteen cruise-smart things to do in Palma and Mallorca — cathedral, old town, Sóller, Valldemossa, caves, beaches and realistic one-day planning.",
  tagline: "Choose the version of Mallorca that fits your hours ashore.",
  intro: [
    "Palma de Mallorca is both a handsome Mediterranean capital and the gateway to mountain villages, caves and coastal scenery. Cruise passengers do best when they pick one clear story for the day rather than trying to sample the whole island.",
    "Use the list below to compare what sits in Palma with what requires island travel. Times are indicative only — traffic, berth position, queues and your cruise line’s all-aboard time always come first.",
  ],
  attractions: [
    {
      id: "palma-cathedral",
      number: 1,
      title: "Palma Cathedral (La Seu)",
      summary:
        "Gothic sandstone rising above Parc de la Mar and the bay — Palma’s defining landmark.",
      whyCruisePassenger:
        "It delivers an immediate sense of place close to the harbour and anchors almost every successful city day.",
      location: "In Palma",
      timeCommitment: "45–90 minutes, longer with interior visit and photography",
      suits: "First-time visitors, architecture lovers, short calls",
      independentOrOrganised:
        "Excellent independently once berth access is clear; guided walks add historical context.",
    },
    {
      id: "palma-old-town",
      number: 2,
      title: "Palma Old Town",
      summary:
        "Courtyards, shaded lanes and layered streets between harbour and historic core.",
      whyCruisePassenger:
        "It rewards unhurried wandering without long transfers and pairs naturally with the cathedral.",
      location: "In Palma",
      timeCommitment: "1–3 hours depending on depth",
      suits: "Walkers, photographers, independent explorers",
      independentOrOrganised:
        "Ideal independently; organised walking tours help first-timers navigate efficiently.",
    },
    {
      id: "parc-de-la-mar",
      number: 3,
      title: "Parc de la Mar",
      summary:
        "The waterfront park and reflecting pool setting beneath the cathedral walls.",
      whyCruisePassenger:
        "Perfect orientation point and photo stop before or after old-town wandering.",
      location: "In Palma",
      timeCommitment: "20–40 minutes",
      suits: "Everyone, including shorter mobility windows",
      independentOrOrganised: "Independent — no booking required.",
    },
    {
      id: "bellver-castle",
      number: 4,
      title: "Bellver Castle",
      summary:
        "A circular hilltop fortress with wide views over Palma and the bay.",
      whyCruisePassenger:
        "Strong views, but it adds transport and climbing — better as a focused add-on than a default stop.",
      location: "In Palma",
      timeCommitment: "2–3 hours including transport",
      suits: "View seekers on longer city calls",
      independentOrOrganised:
        "Independent with taxi or bus planning; skip on short calls.",
    },
    {
      id: "palma-waterfront",
      number: 5,
      title: "Palma waterfront",
      summary:
        "Promenades, marina edges and sea breezes linking harbour character to the historic centre.",
      whyCruisePassenger:
        "A natural return corridor towards the ship and a calmer finale after cobbled streets.",
      location: "In Palma",
      timeCommitment: "30–90 minutes",
      suits: "Families, relaxed walkers, late-afternoon returns",
      independentOrOrganised: "Independent.",
    },
    {
      id: "mercat-olivar",
      number: 6,
      title: "Mercat de l’Olivar",
      summary:
        "Central market hall for produce, seafood and a compact taste of everyday Palma.",
      whyCruisePassenger:
        "Delivers local flavour without committing to a long food tour or countryside lunch.",
      location: "In Palma",
      timeCommitment: "45–90 minutes",
      suits: "Food-curious travellers, morning visitors",
      independentOrOrganised:
        "Independent browsing works well; guided food walks sequence tastings efficiently.",
    },
    {
      id: "soller",
      number: 7,
      title: "Sóller",
      summary:
        "A citrus-valley town beneath the Tramuntana, famous for tram and railway connections.",
      whyCruisePassenger:
        "Gives a clear sense of Mallorca beyond Palma on a practical full day.",
      location: "Beyond Palma",
      timeCommitment: "Half day to full day including transfers",
      suits: "First-time island seekers, scenery lovers",
      independentOrOrganised:
        "Organised excursions are usually clearer for cruise timing; independent travel needs careful planning.",
    },
    {
      id: "port-de-soller",
      number: 8,
      title: "Port de Sóller",
      summary:
        "A sheltered harbour bowl linked to Sóller by the historic tram.",
      whyCruisePassenger:
        "Adds a coastal chapter to mountain and railway days when hours allow.",
      location: "Beyond Palma",
      timeCommitment: "Usually part of a longer Sóller or train–tram–boat day",
      suits: "Scenic transport enthusiasts",
      independentOrOrganised:
        "Best as part of an organised multi-stop or railway itinerary on a cruise call.",
    },
    {
      id: "valldemossa",
      number: 9,
      title: "Valldemossa",
      summary:
        "A stone mountain village with charterhouse associations and cool hillside lanes.",
      whyCruisePassenger:
        "Compact, photogenic and often paired with Sóller for a classic Tramuntana introduction.",
      location: "Beyond Palma",
      timeCommitment: "Half day to full day as part of a village tour",
      suits: "Culture and scenery travellers comfortable with cobbles",
      independentOrOrganised: "Organised shared or private tours are the practical cruise-day choice.",
    },
    {
      id: "tramuntana",
      number: 10,
      title: "Serra de Tramuntana",
      summary:
        "UNESCO-listed mountain landscape of terraces, pine and stone villages northwest of Palma.",
      whyCruisePassenger:
        "The scenic backbone of many of Mallorca’s best shore days beyond the capital.",
      location: "Beyond Palma",
      timeCommitment: "Half day to full day depending on stops",
      suits: "Photographers, scenery-first visitors",
      independentOrOrganised:
        "Experienced via village tours, private drivers or railway itineraries rather than as a vague DIY drive.",
    },
    {
      id: "caves-of-drach",
      number: 11,
      title: "Caves of Drach",
      summary:
        "Famous cave chambers and underground lake near Porto Cristo on the east coast.",
      whyCruisePassenger:
        "One of Mallorca’s most recognisable natural attractions — memorable and clearly different from city sightseeing.",
      location: "Beyond Palma",
      timeCommitment: "Approximately half a day including road transfers",
      suits: "Travellers seeking a single dramatic natural highlight",
      independentOrOrganised:
        "Organised excursions strongly preferred for cruise-day road timing.",
    },
    {
      id: "mallorca-beaches",
      number: 12,
      title: "Mallorca beaches",
      summary:
        "Bay and cove swimming options ranging from near-city strands to longer coastal transfers.",
      whyCruisePassenger:
        "Appealing in hot weather, but beach time competes directly with sightseeing and return buffers.",
      location: "Beyond Palma",
      timeCommitment: "2–5 hours depending on location",
      suits: "Relaxation-focused passengers on longer calls",
      independentOrOrganised:
        "Near-city options can be independent with taxis; distant coves need stricter timing.",
    },
    {
      id: "food-wine",
      number: 13,
      title: "Food and wine experiences",
      summary:
        "Market tastings, pastry stops and Mallorcan flavours in Palma’s centre.",
      whyCruisePassenger:
        "Turns limited hours into a sensory introduction without long island transfers.",
      location: "In Palma",
      timeCommitment: "2–4 hours",
      suits: "Food lovers, sociable walkers",
      independentOrOrganised:
        "Independent café hopping or a guided food walk; keep alcohol light before returning to the ship.",
    },
    {
      id: "cycling-active",
      number: 14,
      title: "Cycling and active tours",
      summary:
        "E-bike city overviews and more energetic coastal or mountain adventure days.",
      whyCruisePassenger:
        "Covers more ground than walking and suits passengers who want movement rather than coach windows.",
      location: "In Palma",
      timeCommitment: "2–5 hours for city e-bike; longer for adventure days",
      suits: "Confident active travellers",
      independentOrOrganised:
        "Organised e-bike or adventure tours; check fitness and footwear requirements carefully.",
    },
    {
      id: "private-island",
      number: 15,
      title: "Private island sightseeing",
      summary:
        "A dedicated vehicle day shaped around villages, coast, caves or mixed interests.",
      whyCruisePassenger:
        "Best when a party wants flexible pacing, custom stops or easier mobility adaptations.",
      location: "Beyond Palma",
      timeCommitment: "Approximately 5–7 hours",
      suits: "Families, small groups, travellers valuing privacy",
      independentOrOrganised:
        "Organised private tours — confirm meeting point, inclusions and return planning in the booking.",
    },
  ] satisfies ThingToDoItem[],
  oneDaySection: {
    title: "What Can You Realistically See in One Day?",
    intro:
      "Port-call length, berth position, traffic and queues all change what “one day” means. Treat the suggestions below as planning patterns, not promises.",
    byCallLength: [
      {
        id: "short",
        title: "Short call",
        description:
          "Prioritise Palma itself. Long island transfers consume too much of a short window once shuttle and return buffers are included.",
        suggestions: [
          "Parc de la Mar and cathedral exterior",
          "A compact old-town loop",
          "Coffee or a quick market stop",
          "Early return along the waterfront",
        ],
      },
      {
        id: "typical",
        title: "Typical full-day call",
        description:
          "You can choose either a satisfying Palma city day or one focused island highlight — not both at full depth.",
        suggestions: [
          "City option: cathedral, old town, market and waterfront",
          "Island option: Sóller and Valldemossa",
          "Alternative island option: Caves of Drach",
          "Keep 60–90 minutes before all-aboard, more after island roads",
        ],
      },
      {
        id: "long",
        title: "Long call",
        description:
          "A longer call can support multi-transport scenic circuits or a private tailored day, still with conservative contingency.",
        suggestions: [
          "Train, tram and boat island itinerary",
          "Private Tramuntana villages with unhurried stops",
          "City morning plus a carefully timed nearby add-on only if margins remain generous",
          "Do not invent a second major destination after a full scenic circuit",
        ],
      },
    ] satisfies OneDayByCallLength[],
    caveats: [
      "Traffic between Palma and mountain or east-coast destinations can slow unexpectedly on busy ship days.",
      "Berth and shuttle arrangements change — confirm before estimating walking time into the centre.",
      "Attraction queues and timed entries can compress an otherwise realistic plan.",
      "Always follow your cruise line’s all-aboard time, not only the published sailing time.",
    ],
  },
};

export type ThingsToDoPage = typeof thingsToDoPage;

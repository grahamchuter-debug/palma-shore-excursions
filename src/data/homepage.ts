import type { ExperienceCard, FAQ, VisitorType } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";

export const homepageTagline = "Your Mediterranean Island Day Starts in Palma";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Palma for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a realistic Palma, Sóller, Valldemossa or caves day with a proper return buffer.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in Mallorca",
    shortLabel: "First visit",
    description:
      "Compare historic Palma, mountain villages and island tours before choosing the experience that fits your first call.",
    href: "/compare/which-palma-shore-excursion",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Walk into Palma's cathedral quarter, old town, markets and waterfront once you understand your berth and shuttle.",
    href: "/guides/independent-palma-guide",
    cta: "Explore independently",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and budget for a tailored Palma and Mallorca plan.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const experienceCards: ExperienceCard[] = [
  {
    slug: "historic-palma",
    title: "Historic Palma",
    description:
      "Gothic cathedral, old-town lanes and waterfront promenades within practical reach of the cruise harbour.",
    href: "/shore-excursions/palma-old-town-cathedral",
    cta: "Explore Palma",
    imageKey: "historic",
  },
  {
    slug: "soller-valldemossa",
    title: "Sóller and Valldemossa",
    description:
      "Mountain villages, citrus valleys and Tramuntana scenery — a classic Mallorca day beyond the capital.",
    href: "/shore-excursions/soller-valldemossa",
    cta: "Discover the villages",
    imageKey: "soller",
  },
  {
    slug: "railways",
    title: "Railways and Island Scenery",
    description:
      "Historic train, tram and boat combinations through the mountains towards Sóller and the northwest coast.",
    href: "/shore-excursions/mallorca-train-tram-boat",
    cta: "Ride the railway",
    imageKey: "train",
  },
  {
    slug: "caves",
    title: "Caves and Coastal Wonders",
    description:
      "The Caves of Drach and eastern Mallorca — underground chambers and lake scenery away from the city.",
    href: "/shore-excursions/caves-of-drach",
    cta: "Visit the caves",
    imageKey: "caves",
  },
  {
    slug: "food",
    title: "Food and Local Flavours",
    description:
      "Markets, pastries and Mallorcan flavours — a tasting-led way to experience Palma on foot.",
    href: "/shore-excursions/palma-food-tour",
    cta: "Taste Palma",
    imageKey: "food",
  },
  {
    slug: "active",
    title: "Active Mallorca",
    description:
      "E-bike city rides and coastal or mountain adventure days for energetic passengers with enough port time.",
    href: "/shore-excursions/mallorca-coastal-adventure",
    cta: "Go active",
    imageKey: "active",
  },
];

export const coreSections: HomeSection[] = [
  {
    slug: "shore-excursions",
    number: "01",
    title: "Shore Excursions",
    description:
      "Sóller, Valldemossa, caves, historic Palma and scenic island tours — matched to cruise-port timings.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "cruise-port-guide",
    number: "02",
    title: "Palma Cruise Port Guide",
    description:
      "Berths, shuttles, city access and practical return-to-ship planning for Palma de Mallorca.",
    href: "/palma-cruise-port",
    cta: "Read the port guide",
  },
  {
    slug: "compare",
    number: "03",
    title: "Compare Your Options",
    description:
      "City or island? Villages or caves? Clear comparisons without overselling.",
    href: "/compare",
    cta: "Compare day trips",
  },
  {
    slug: "independent",
    number: "04",
    title: "Explore Independently",
    description:
      "A walkable Palma itinerary with transport, food and return-buffer advice.",
    href: "/guides/independent-palma-guide",
    cta: "Plan a DIY day",
  },
  {
    slug: "ship-schedules",
    number: "05",
    title: "Ship Schedules",
    description:
      "Check published Palma arrivals and departures before committing to a long island excursion.",
    href: "/palma-cruise-ship-schedule",
    cta: "View schedules",
  },
  {
    slug: "faq",
    number: "06",
    title: "Palma FAQs",
    description:
      "Honest answers on port access, Sóller, caves, Mallorca vs Majorca and timing.",
    href: "/faq",
    cta: "Read the FAQs",
  },
  {
    slug: "signature",
    number: "07",
    title: "Signature Mallorca Experience",
    description:
      "A future small-group Tramuntana flagship, currently in preparation.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
  },
  {
    slug: "wow-collection",
    number: "08",
    title: "The Wow Collection",
    description:
      "Future exclusive small-group Mallorca experiences designed around cruise passengers.",
    href: "/wow-collection",
    cta: "Discover the collection",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "What are the best Palma shore excursions for first-time visitors?",
      answer:
        "For many first-time passengers, Sóller and Valldemossa give the strongest sense of Mallorca beyond the capital on a practical full day. If your call is shorter, or you prefer less road time, choose Palma Old Town and Cathedral instead. Compare durations and return buffers before booking.",
    },
    {
      question: "Can I visit Sóller during a Palma cruise stop?",
      answer:
        "Yes on a typical full day ashore. Sóller sits in the Tramuntana foothills northwest of Palma and appears on village tours and train–tram–boat circuits. A short call is usually better spent in Palma itself.",
    },
    {
      question: "Is Palma city close to the cruise port?",
      answer:
        "Often yes, but distance depends on your exact berth. Some ships are within a pleasant waterfront walk of the cathedral quarter; others use a shuttle or short taxi. Always check your cruise line’s latest berth and shuttle information before leaving the ship.",
    },
    {
      question: "Can I visit the Caves of Drach from Palma cruise port?",
      answer:
        "Yes on a half-day or longer call with organised transport. The caves lie on Mallorca’s east coast near Porto Cristo, so the day involves meaningful road time. Confirm inclusions, walking conditions underground and your return buffer.",
    },
    {
      question: "Should I choose Palma or explore more of Mallorca?",
      answer:
        "Choose Palma when you want Gothic architecture, markets and an easy return. Choose an island day — villages, caves or the historic railway — when you have enough usable hours and want scenery beyond the capital. Trying to do both properly usually feels rushed.",
    },
    {
      question: "Is Valldemossa suitable for a cruise day?",
      answer:
        "Yes when paired with a sensible itinerary such as Sóller and Valldemossa. Expect cobbled streets, slopes and mountain roads. It suits passengers who want village character rather than only city monuments.",
    },
    {
      question: "What is the difference between Mallorca and Majorca?",
      answer:
        "They refer to the same island. Mallorca is the official Catalan/Spanish spelling used in most modern international writing; Majorca is the traditional English spelling still common in UK search and conversation. We use Mallorca in editorial copy and Majorca where it helps search clarity.",
    },
    {
      question: "How much time should I leave to return to my ship?",
      answer:
        "Aim to reach the terminal 60–90 minutes before all-aboard for a city day. Allow more margin when returning from Sóller, Valldemossa, the caves or multi-transport island tours, because traffic and mountain roads can slow the journey. Always follow your cruise line’s all-aboard time, not only the published sailing time.",
    },
    {
      question: "Are private Palma shore excursions available?",
      answer:
        "Yes. Private Sóller and Valldemossa and private caves itineraries appear in our excursion guides. Private format usually means more flexible pacing for your party, not a guarantee of port-side pickup or every entrance fee — check the specific booking details.",
    },
    {
      question: "Can I explore Palma independently?",
      answer:
        "Often yes. Once you understand berth and shuttle arrangements, the cathedral, old town, Parc de la Mar, markets and waterfront can make an excellent independent day. Organised excursions make more sense for mountain villages, caves and multi-stop island circuits.",
    },
    {
      question: "What should I wear on a Mallorca shore excursion?",
      answer:
        "Comfortable walking shoes are essential for cobbles, cathedral approaches and village streets. Bring sun protection, water and a light layer for breezy mountain or coastal stops. Caves can feel cooler underground; active tours need clothing you can move in safely.",
    },
    {
      question: "Are Palma shore excursions suitable for passengers with limited mobility?",
      answer:
        "It depends on the itinerary. Flat waterfront and some old-town routes can work with planning, but cathedral approaches, village cobbles, cave pathways and e-bike tours involve uneven surfaces or sustained movement. Discuss exact needs with the tour provider before booking — we do not make medical or accessibility guarantees.",
    },
  ];
}

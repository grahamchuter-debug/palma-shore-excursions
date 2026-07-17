import {
  SIGNATURE_EXPERIENCE_PATH,
  signatureMallorcaExperience,
} from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Palma explorer",
    description: "A low-risk city day using walking, taxis and your own return buffer.",
  },
  {
    id: "villages",
    label: "First-time Mallorca scenery visitor",
    description: "A guided day for passengers who want Sóller, Valldemossa and Tramuntana character.",
  },
  {
    id: "caves",
    label: "Caves and east-coast traveller",
    description: "A half-day or longer outing to the Caves of Drach with organised road timing.",
  },
  {
    id: "train",
    label: "Railway and scenic transport traveller",
    description: "A longer multi-transport day for passengers with generous usable hours ashore.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "palma", label: "Historic Palma" },
  { id: "soller", label: "Sóller & Valldemossa" },
  { id: "caves", label: "Caves of Drach" },
  { id: "train", label: "Train, tram & boat" },
  { id: "coast", label: "Coastal scenery" },
  { id: "food", label: "Food & markets" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "villages" | "caves" | "train";

export const PALMA_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Historic Palma",
    summary:
      "The most flexible choice: reach the cathedral quarter, old town, market and waterfront once berth logistics are clear.",
    minimumHours: 4,
    links: [
      {
        label: "Independent Palma Guide",
        href: "/guides/independent-palma-guide",
        why: "Walking route, food stops and return-to-ship timing.",
      },
      {
        label: "Palma Old Town and Cathedral",
        href: "/shore-excursions/palma-old-town-cathedral",
        why: "Guided context without committing to a long island day.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Confirm berth, shuttle and all-aboard, then move towards Parc de la Mar." },
      { time: "Morning", text: "Palma Cathedral and old-town lanes before the strongest heat." },
      { time: "Midday", text: "Mercat de l’Olivar or a short tasting lunch in the centre." },
      { time: "Afternoon", text: "Waterfront stroll and an unhurried return towards your known port access." },
    ],
  },
  villages: {
    headline: "Sóller and Valldemossa",
    summary:
      "The first-time island choice when your call is long enough for mountain villages and a conservative return buffer.",
    minimumHours: 7,
    links: [
      {
        label: "Sóller and Valldemossa",
        href: "/shore-excursions/soller-valldemossa",
        why: "Editor’s Choice introduction to Mallorca beyond Palma.",
      },
      {
        label: "Which excursion is right?",
        href: "/compare/which-palma-shore-excursion",
        why: "Compare city, villages, caves and private options.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the organised excursion promptly at the confirmed meeting point." },
      { time: "Morning", text: "Scenic climb into the Tramuntana towards Valldemossa." },
      { time: "Midday", text: "Village time in Sóller and valley views." },
      { time: "Afternoon", text: "Direct return to Palma with traffic-aware timing." },
    ],
  },
  caves: {
    headline: "Caves of Drach",
    summary:
      "Choose the caves for one of Mallorca’s best-known natural attractions when you accept east-coast road time.",
    minimumHours: 6,
    links: [
      {
        label: "Caves of Drach",
        href: "/shore-excursions/caves-of-drach",
        why: "Cruise-timed transport to Porto Cristo’s famous caves.",
      },
      {
        label: "Private caves option",
        href: "/shore-excursions/private-caves-drach-porto-cristo",
        why: "More flexible pacing for one travelling party.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Meet the transfer and leave Palma with enough margin for the cross-island drive." },
      { time: "Morning", text: "Travel east towards Porto Cristo." },
      { time: "Midday", text: "Cave visit and any listed companion stop." },
      { time: "Afternoon", text: "Return to Palma with a conservative ship buffer." },
    ],
  },
  train: {
    headline: "Train, Tram and Boat",
    summary:
      "A memorable multi-transport scenic day for passengers with generous usable hours and appetite for transfers.",
    minimumHours: 9,
    links: [
      {
        label: "Mallorca Train, Tram and Boat",
        href: "/shore-excursions/mallorca-train-tram-boat",
        why: "Historic railway and coastal links in one itinerary.",
      },
      {
        label: "Sóller and Valldemossa alternative",
        href: "/shore-excursions/soller-valldemossa",
        why: "A shorter village-focused day if hours are tighter.",
      },
    ],
    dayPlan: [
      { time: "On arrival", text: "Join the published multi-transport itinerary promptly." },
      { time: "Morning", text: "Historic train into the mountains towards Sóller." },
      { time: "Midday", text: "Tram and harbour or boat element as listed." },
      { time: "Afternoon", text: "Complete the circuit and return with a large contingency." },
    ],
  },
};

/** @deprecated Use PALMA_DAY_PLANS */
export const MALAGA_DAY_PLANS = PALMA_DAY_PLANS;

function usableHours(input: PlannerInput): number {
  if (!input.arrivalTime || !input.departureTime) return 7.5;
  const [arrivalHour, arrivalMinute] = input.arrivalTime.split(":").map(Number);
  const [departureHour, departureMinute] = input.departureTime.split(":").map(Number);
  const elapsed = departureHour * 60 + departureMinute - arrivalHour * 60 - arrivalMinute;
  return Math.max(0, elapsed / 60 - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("palma") ||
    hours < 7
  ) {
    return "independent";
  }
  if (interests.includes("train") && hours >= 9) return "train";
  if (interests.includes("caves")) return "caves";
  if (interests.includes("soller") || interests.includes("photography") || interests.includes("coast")) {
    return "villages";
  }
  return hours >= 9 ? "train" : "villages";
}

export function generatePalmaPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = PALMA_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureMallorcaExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Tramuntana concept — in preparation and not bookable.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend, so choose Palma city instead.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Palma Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Berths, shuttles, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Palma Ship Schedule",
        href: "/ship-schedules/palma",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Palma options",
        href: "/compare/which-palma-shore-excursion",
        why: "Review honest trade-offs before booking a long island day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Palma terminal 60–90 minutes before all-aboard; island excursions require additional road contingency.",
      },
    ],
  };
}

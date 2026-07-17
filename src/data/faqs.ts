import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Palma?",
    answer:
      "Ships use the commercial port area west of Palma’s old town. Exact berths vary by sailing, so check your cruise line’s information for walking distance, shuttle use and return points.",
  },
  {
    question: "How far is Palma cruise port from the cathedral?",
    answer:
      "It depends on the berth. Some positions allow a waterfront walk to Parc de la Mar and La Seu; others are better with a shuttle or taxi. Confirm on the day rather than relying on a single fixed walking time.",
  },
  {
    question: "Can I explore Palma independently?",
    answer:
      "Yes when berth logistics are clear. The cathedral, old town, market and waterfront can fill a rewarding day. Keep a 60–90 minute terminal buffer and do not treat mountain villages or caves as casual DIY add-ons.",
  },
  {
    question: "What is the best independent Palma itinerary?",
    answer:
      "Start at Palma Cathedral and Parc de la Mar, wander the old town courtyards and lanes, visit Mercat de l’Olivar if timing suits, then return along the waterfront with a clear path to your shuttle or berth.",
  },
  {
    question: "How far is Sóller from Palma cruise port?",
    answer:
      "Sóller sits in the northwest Tramuntana foothills. Road journeys commonly take around 30–45 minutes each way depending on traffic and routing; historic train itineraries take longer by design. Treat it as a proper half-day or full-day commitment.",
  },
  {
    question: "Does every Sóller tour include the historic train?",
    answer:
      "No. Some excursions focus on villages and scenery by road; others build the day around train, tram and boat. Read the itinerary carefully before booking.",
  },
  {
    question: "How far are the Caves of Drach from Palma?",
    answer:
      "The caves are on Mallorca’s east coast near Porto Cristo. Expect a meaningful cross-island drive each way, so the outing suits a half-day or longer call with organised transport.",
  },
  {
    question: "Is Valldemossa worth visiting on a cruise day?",
    answer:
      "Yes for passengers who want mountain-village character. It pairs naturally with Sóller on many itineraries. Expect cobbles, slopes and less time for shopping-list sightseeing in Palma itself.",
  },
  {
    question: "Should I book through the cruise line or independently?",
    answer:
      "Ship excursions offer the clearest protection if an organised tour is delayed. Reputable independent operators may offer smaller groups or different itineraries, but you must check their port-day experience, cancellation terms and return arrangements.",
  },
  {
    question: "How much return-to-ship buffer should I allow?",
    answer:
      "For Palma city, aim to be at the terminal 60–90 minutes before all-aboard. For villages, caves or multi-transport island tours, build the route backwards with additional traffic contingency.",
  },
  {
    question: "Are Palma shore excursions accessible?",
    answer:
      "Waterfront promenades can be relatively manageable, but old-town cobbles, cathedral approaches, village streets, cave pathways and cycling tours vary widely. Discuss exact mobility needs with the provider before booking.",
  },
  {
    question: "What currency and language are used in Palma?",
    answer:
      "Spain uses the euro. Catalan and Spanish are local languages, and English is widely understood in major visitor areas. Cards are common, but carrying a small amount of cash is useful for markets and cafés.",
  },
  {
    question: "Is Mallorca the same place as Majorca?",
    answer:
      "Yes. Mallorca is the official spelling; Majorca is a traditional English form still used in many UK searches. They refer to the same Balearic island.",
  },
  {
    question: "Can I combine Palma and the Caves of Drach in one day?",
    answer:
      "Only lightly on a long call. A proper cave visit already uses substantial road time. Do not sacrifice the ship buffer for a rushed cathedral stop afterwards.",
  },
  {
    question: "What food should I try in Palma?",
    answer:
      "Look for market produce, ensaimadas, savoury Mallorcan snacks and fresh seafood. A short tasting walk or market visit often fits a cruise day better than a long lunch.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}

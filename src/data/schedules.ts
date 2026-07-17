import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import palmaSchedule from "./imported-schedules/palma.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are Palma cruise ship schedules?",
    answer:
      "Published calls support planning and are updated from verified sources when available. Times, berths and even calls can change, so confirm with your cruise line before booking.",
  },
  {
    question: "Where do cruise ships berth in Palma?",
    answer:
      "Ships use the commercial port area west of Palma’s old town. Exact berth and shuttle arrangements vary by sailing — check your cruise line’s latest information on arrival.",
  },
  {
    question: "Is a Palma call long enough for Sóller and Valldemossa?",
    answer:
      "A typical full day ashore can support a village excursion with a sensible return buffer. Short calls are usually better spent in Palma itself. Always work from usable hours and all-aboard time.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Check berth and shuttle arrangements before estimating walking time into Palma",
  "Book village, cave and multi-transport island excursions with cruise timing in mind",
  "Keep additional road contingency when returning from Sóller, Valldemossa or the east coast",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "palma",
    name: "Palma de Mallorca",
    country: "Spain",
    seoTitle: "Palma Cruise Ship Schedule — Mallorca Port Calls",
    metaDescription:
      "Palma de Mallorca cruise ship schedule for planning, with arrivals, departures and berth context for Mallorca shore excursions when verified data is available.",
    intro:
      "Palma de Mallorca is a major Mediterranean cruise port, with cathedral and old-town sightseeing close to the harbour and full-day routes into the Tramuntana, Sóller and eastern caves.",
    description:
      "Your Mediterranean island day starts in Palma — walk into the historic centre or use a full port call to reach Mallorca’s mountain villages and natural highlights.",
    scheduleOverview:
      "Verified ship-by-ship call data will appear here when supplied. Until then, use this hub for port planning guidance and confirm timings directly with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  palma: palmaSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

/** Returns month keys that have at least one entry. Empty when schedule data is not yet populated. */
export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}

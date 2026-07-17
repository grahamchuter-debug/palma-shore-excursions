/**
 * Central cruise-positioning copy for homepage A/B readiness.
 * Swap `message` (or toggle flags) here — do not scatter strings across components.
 *
 * Future Variant B (inactive): "Everything here is built around your time in port."
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  /** Reserved for a future split test — do not activate. */
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food";
}

export const dayAshoreIntro =
  "The essential things cruise passengers should know before exploring Palma and Mallorca.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "time-in-port",
    title: "Typical time in port",
    body: "Most cruise calls allow around 8–10 hours ashore, although passengers should always check their own ship schedule and all-aboard time.",
    icon: "clock",
  },
  {
    id: "excursion-length",
    title: "Ideal excursion length",
    body: "A 4–6 hour excursion usually leaves enough time to enjoy Palma or a focused island highlight without making the return feel rushed.",
    icon: "route",
  },
  {
    id: "walking-level",
    title: "Walking level",
    body: "Moderate. The old town is compact and atmospheric, but cobbles, cathedral approaches and village streets often involve slopes or uneven paving.",
    icon: "walk",
  },
  {
    id: "best-early-stop",
    title: "Best early stop",
    body: "Visit Palma Cathedral and Parc de la Mar earlier for softer light and a cooler start before the midday heat.",
    icon: "sunrise",
  },
  {
    id: "do-not-miss",
    title: "Do not miss",
    body: "The cathedral rising above the bay — or, if you leave the city, the mountain character of Valldemossa and Sóller.",
    icon: "viewpoint",
  },
  {
    id: "local-flavour",
    title: "Local flavour",
    body: "Make time for a market stop, an ensaimada or a waterfront café before returning to the ship.",
    icon: "food",
  },
];

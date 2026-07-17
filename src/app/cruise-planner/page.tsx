import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { PalmaCruisePlanner } from "@/components/PalmaCruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Palma cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored Mallorca recommendations.";

export const metadata = buildMetadata({
  title: "Palma Cruise Planner — Mallorca Port Day Itinerary",
  description,
  path,
  keywords: [
    "Palma cruise planner",
    "Mallorca cruise day plan",
    "Palma port day itinerary",
    "Majorca cruise planner",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Palma Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Palma Cruise Planner", description, path }),
        ]}
      />
      <PageHero
        title="Palma Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for historic Palma, Sóller and Valldemossa, caves, scenic railways and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <PalmaCruisePlanner />
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { getSchedulePortBySlug, getScheduleEntryCount } from "@/data/schedules";
import { portHubPath } from "@/lib/schedule-utils";

const path = "/palma-cruise-ship-schedule";
const port = getSchedulePortBySlug("palma");

export const metadata = buildMetadata({
  title: "Palma Cruise Ship Schedule — Mallorca Port Calls",
  description:
    "Palma de Mallorca cruise ship schedule hub for planning shore excursions. Verified call data appears here when available — always confirm timings with your cruise line.",
  path,
  keywords: [
    "Palma cruise ship schedule",
    "Palma cruise calendar",
    "Mallorca cruise ship schedule",
    "Majorca cruise schedule",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Palma Cruise Ship Schedule", path },
];

export default function PalmaCruiseShipSchedulePage() {
  const entryCount = getScheduleEntryCount("palma");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Palma Cruise Ship Schedule",
            description:
              "Planning hub for Palma de Mallorca cruise ship calls and shore excursion timing.",
            path,
          }),
        ]}
      />
      <PageHero
        title="Palma Cruise Ship Schedule"
        subtitle="Plan your Mallorca port day around published calls when verified data is available. Times and berths are indicative — always confirm with your cruise line."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {port?.intro ??
                "Palma de Mallorca is a major Mediterranean cruise port, with cathedral and old-town sightseeing close to the harbour and full-day routes into the Tramuntana, Sóller and eastern caves."}
            </p>
            <p>
              This page is the public schedule hub for Palma. Ship-by-ship arrivals and departures are loaded
              from verified data files when supplied (see the schedule import workflow in the project
              scripts). We do not invent calls, berths or sailing times.
            </p>
          </div>

          {entryCount === 0 ? (
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <p className="font-medium text-amber-950">No verified ship calls listed yet</p>
              <p className="mt-2 text-sm text-amber-900">
                The Palma schedule data file is ready for import, but it is currently empty. When verified
                calls are added, month and year views will appear under the ship schedules hub. Until then,
                confirm your ship&apos;s hours ashore directly with your cruise line before booking
                excursions.
              </p>
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-coastal-100 bg-coastal-50/60 p-6">
              <p className="font-medium text-gray-900">{entryCount} verified call entries are available</p>
              <p className="mt-2 text-sm text-gray-700">
                Browse the full interactive hub for search, month views and planning tips.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={portHubPath("palma")} className="btn-primary">
              Open Palma schedule hub
            </Link>
            <Link href="/ship-schedules" className="btn-secondary">
              All ship schedules
            </Link>
            <Link href="/palma-cruise-port" className="btn-secondary">
              Palma cruise port guide
            </Link>
            <Link href="/shore-excursions" className="btn-secondary">
              Shore excursions
            </Link>
          </div>

          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import {
  schedulePorts,
  getScheduleEntryCount,
  getScheduleEntriesForYear,
} from "@/data/schedules";
import { SCHEDULE_YEARS, portYearPath, portHubPath } from "@/lib/schedule-utils";

const path = "/ship-schedules";

export const metadata = buildMetadata({
  title: "Palma Cruise Ship Schedules",
  description:
    "Palma de Mallorca cruise ship schedules by year and month when verified data is available. Plan shore excursions around published port times — always confirm with your cruise line.",
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
  { name: "Ship Schedules", path },
];

export default function ShipSchedulesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Palma Cruise Ship Schedules",
            description:
              "Palma de Mallorca cruise ship schedules by year and month when verified data is available.",
            path,
          }),
        ]}
      />
      <PageHero
        title="Palma Cruise Ship Schedules"
        subtitle="See which ships are in port before you book Mallorca excursions. Times and berths are indicative — always confirm with your cruise line."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-5xl">
          <Breadcrumbs items={breadcrumbs} />
          {schedulePorts.map((port) => {
            const count = getScheduleEntryCount(port.slug);
            const yearsWithData = SCHEDULE_YEARS.filter(
              (y) => getScheduleEntriesForYear(port.slug, y).length > 0,
            );
            return (
              <div key={port.slug} className="card-editorial p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-gray-900">{port.name}</h2>
                    <p className="mt-2 text-gray-600">{port.scheduleOverview}</p>
                  </div>
                  {count > 0 && <span className="pill">{count} entries</span>}
                </div>
                {count === 0 && (
                  <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                    No verified ship calls are listed yet. Use the schedule hub for planning guidance, or
                    confirm timings with your cruise line. See also the{" "}
                    <Link href="/palma-cruise-ship-schedule" className="font-semibold underline">
                      Palma cruise ship schedule
                    </Link>{" "}
                    overview.
                  </div>
                )}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={portHubPath(port.slug)} className="btn-primary text-sm">
                    Full schedule hub
                  </Link>
                  <Link href="/palma-cruise-ship-schedule" className="btn-secondary text-sm">
                    Schedule overview
                  </Link>
                  {yearsWithData.map((y) => (
                    <Link key={y} href={portYearPath(port.slug, y)} className="btn-secondary text-sm">
                      {y}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}

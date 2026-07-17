import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Us — How We Select Excursions",
  description:
    "How Palma Shore Excursions selects Palma and Mallorca shore excursions for cruise passengers calling at Palma de Mallorca.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "About Palma Shore Excursions",
            description: "How we select Palma shore excursions for cruise passengers.",
            path,
          }),
        ]}
      />
      <PageHero
        title="About Palma Shore Excursions"
        subtitle="An independent planning resource for cruise passengers — helping you choose the right version of Mallorca for your hours ashore."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl prose prose-gray">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Palma de
              Mallorca. Whether you have a short city window or a full day for Sóller, Valldemossa, the
              Tramuntana or the Caves of Drach, our goal is to help you choose a realistic day — not just
              browse a catalogue of tours.
            </p>
            <p>
              We focus on the practical decisions that shape a good Palma cruise day: stay in the historic
              centre or travel into the island; shared coach or private vehicle; independent walking versus
              a guided itinerary; and how to build a sensible return-to-ship buffer after mountain roads or
              east-coast transfers.
            </p>
            <h2 className="font-display text-xl font-bold text-gray-900 pt-2">
              How we select Palma excursions
            </h2>
            <p>Every featured excursion is reviewed against cruise-specific criteria:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-gray-900">Usable hours ashore</strong> — routes must
                fit a typical port call once embarkation, transfer and all-aboard buffers are included.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Return confidence</strong> — operators and
                itineraries should plan backwards from the ship, with contingency for traffic and berth
                logistics.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Honest fit</strong> — we say when Palma itself
                is the better choice, and when an island day is worth the extra road time.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Clear inclusions</strong> — entrance fees,
                train tickets, food and meeting points are only treated as included when the booking says so.
              </li>
              <li>
                <strong className="font-semibold text-gray-900">Editorial independence</strong> — some links
                may be affiliate or partner bookings; recommendations still prioritise cruise timing and
                passenger fit over commission.
              </li>
            </ul>
            <p>
              Our guides highlight honest comparisons, Editor&apos;s Collection picks for different traveller
              types, and future concepts such as The Wow Collection and Signature Mallorca Discovery. Ship
              schedules and journey times are indicative — always confirm all-aboard with your cruise line.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

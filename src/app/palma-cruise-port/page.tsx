import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { siteImages } from "@/lib/images";
import {
  portGuideContent,
  portGuideFaqs,
  portGuideNotice,
} from "@/data/port-guide";

const path = "/palma-cruise-port";
const image = siteImages.port;
const description =
  "The complete Palma cruise port guide — berths, shuttles, walking into historic Palma, taxis, island timing and return-to-ship planning.";

export const metadata = buildMetadata({
  title: "Palma Cruise Port Guide",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: [
    "Palma cruise port",
    "Palma cruise terminal",
    "Palma port to cathedral",
    "Palma cruise port guide",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Palma Cruise Port Guide", path },
];

export default function PalmaCruisePortPage() {
  const { terminals, sections, subtitle } = portGuideContent;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(portGuideFaqs),
          articleSchema({ title: "Palma Cruise Port Guide", description, path, image: image.src }),
        ]}
      />
      <PhotoHeroBand
        image={image}
        eyebrow="Terminal guidance"
        title="Palma Cruise Port Guide"
        subtitle={subtitle}
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
            <p className="font-medium">Berth and shuttle notice</p>
            <p className="mt-2">{portGuideNotice}</p>
          </div>

          <h2 className="section-title text-2xl mt-10 mb-4">Palma cruise berths at a glance</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-coastal-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Terminal</th>
                  <th className="px-4 py-3 text-left font-semibold">Quay</th>
                  <th className="px-4 py-3 text-left font-semibold">Used by</th>
                  <th className="px-4 py-3 text-left font-semibold">City access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {terminals.map((t) => (
                  <tr key={t.name}>
                    <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                    <td className="px-4 py-3 text-gray-600">{t.quay}</td>
                    <td className="px-4 py-3 text-gray-600">{t.usedBy}</td>
                    <td className="px-4 py-3 text-gray-600">{t.cityAccess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Check your cruise app the night before. Berths can change, and traffic on island roads can affect
            returns from Sóller, Valldemossa or the east coast.
          </p>

          <div className="prose-body mt-4">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link href="/guides/independent-palma-guide" className="nav-card">
              <h3 className="font-display text-base font-bold text-gray-900">Independent Palma</h3>
              <p className="mt-1 text-sm text-gray-600">Cathedral, old town, market and waterfront advice.</p>
            </Link>
            <Link href="/shore-excursions" className="nav-card">
              <h3 className="font-display text-base font-bold text-gray-900">Shore excursions</h3>
              <p className="mt-1 text-sm text-gray-600">Sóller, caves, railways and private island days.</p>
            </Link>
            <Link href="/palma-cruise-ship-schedule" className="nav-card">
              <h3 className="font-display text-base font-bold text-gray-900">Ship schedules</h3>
              <p className="mt-1 text-sm text-gray-600">See who&apos;s in port before you book.</p>
            </Link>
          </div>

          <div className="mt-12">
            <FAQSection faqs={portGuideFaqs} title="Palma Cruise Port — FAQs" />
          </div>
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}

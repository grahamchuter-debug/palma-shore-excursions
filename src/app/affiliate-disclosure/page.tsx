import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/affiliate-disclosure";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description: `How ${SITE.name} uses affiliate and partner links for Palma shore excursion bookings.`,
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Affiliate Disclosure", path },
];

export default function AffiliateDisclosurePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Affiliate Disclosure",
            description: `Affiliate and partner link disclosure for ${SITE.name}.`,
            path,
          }),
        ]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="section-title mt-8">Affiliate Disclosure</h1>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              {SITE.name} ({SITE.domain}) is an independent editorial planning site for cruise passengers calling
              at Palma de Mallorca. Some links on this site lead to third-party booking partners. If you click
              those links and make a purchase, we may earn a commission at no additional cost to you.
            </p>
            <p>
              Affiliate and partner relationships help fund research, writing and maintenance of our Palma and
              Mallorca guides. They do not change our editorial standards: we recommend experiences based on
              cruise timing, passenger fit and honest trade-offs — not commission alone.
            </p>
            <p>
              External booking pages are operated by the partner. Prices, availability, meeting points,
              inclusions and cancellation terms are set by that provider and can change. Always read the tour
              details carefully and confirm arrangements for your sailing.
            </p>
            <p>
              We are not affiliated with any cruise line or the Port of Palma de Mallorca unless explicitly
              stated. For questions about a specific link, contact{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-coastal-700 hover:underline">
                {SITE.email}
              </a>
              .
            </p>
            <p>
              See also our{" "}
              <Link href="/terms" className="font-semibold text-coastal-700 hover:underline">
                terms of use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-semibold text-coastal-700 hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

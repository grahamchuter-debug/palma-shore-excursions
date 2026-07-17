import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { comparisons, getComparisonDisplayTitle } from "@/data/comparisons";
import { getComparisonImage } from "@/lib/images";

const path = "/compare";
const description =
  "Honest comparisons for Palma cruise passengers — city or island, Sóller or caves, independent or guided, and the best Mallorca excursions for different travellers.";

export const metadata = buildMetadata({
  title: "Compare Palma Cruise Options",
  description,
  path,
  keywords: [
    "Palma shore excursion comparison",
    "Mallorca cruise day choices",
    "Sóller or Caves of Drach",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Compare", path },
];

export default function CompareHubPage() {
  const image = getComparisonImage("which-palma-shore-excursion");
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({ title: "Compare Palma Cruise Options", description, path }),
        ]}
      />
      <PageHero
        title="Compare Palma Cruise Options"
        subtitle="Editorial comparisons to help you choose between historic Palma, island villages, caves, scenic railways and different touring styles."
        image={image}
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-4 sm:grid-cols-2">
            {comparisons.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="nav-card group">
                <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                  {getComparisonDisplayTitle(c)}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

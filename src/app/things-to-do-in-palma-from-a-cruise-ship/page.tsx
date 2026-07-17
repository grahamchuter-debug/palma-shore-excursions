import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { thingsToDoPage } from "@/data/things-to-do";
import { subjectImages } from "@/lib/images";

const path = thingsToDoPage.path;
const image = subjectImages.cathedral;

export const metadata = buildMetadata({
  title: thingsToDoPage.seoTitle,
  description: thingsToDoPage.metaDescription,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: [
    "things to do in Palma from a cruise ship",
    "Palma cruise day",
    "Majorca things to do cruise",
    "Mallorca shore day ideas",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Things to Do in Palma", path },
];

export default function ThingsToDoInPalmaPage() {
  const { attractions, oneDaySection, intro, title, tagline } = thingsToDoPage;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: thingsToDoPage.seoTitle,
            description: thingsToDoPage.metaDescription,
            path,
          }),
        ]}
      />
      <PageHero title={title} subtitle={tagline} image={image} compact />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            {intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <ol className="mt-12 space-y-8">
            {attractions.map((item) => (
              <li key={item.id} className="border-b border-gray-100 pb-8 last:border-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-coastal-600">
                  {String(item.number).padStart(2, "0")} · {item.location}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-gray-900">{item.title}</h2>
                <p className="mt-2 text-gray-700">{item.summary}</p>
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Why cruise passengers like it: </span>
                  {item.whyCruisePassenger}
                </p>
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-coastal-800">Time commitment</dt>
                    <dd className="text-gray-700">{item.timeCommitment}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-coastal-800">Suits</dt>
                    <dd className="text-gray-700">{item.suits}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-semibold text-coastal-800">Independent or organised</dt>
                    <dd className="text-gray-700">{item.independentOrOrganised}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-xl border border-coastal-100 bg-coastal-50/60 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-gray-900">{oneDaySection.title}</h2>
            <p className="mt-3 text-gray-700">{oneDaySection.intro}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {oneDaySection.byCallLength.map((block) => (
                <div key={block.id} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                  <h3 className="font-display text-lg font-bold text-gray-900">{block.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{block.description}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-gray-700">
                    {block.suggestions.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-gray-700">
              {oneDaySection.caveats.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/shore-excursions" className="btn-primary">
              Browse shore excursions
            </Link>
            <Link href="/compare/which-palma-shore-excursion" className="btn-secondary">
              Compare options
            </Link>
            <Link href="/palma-cruise-port" className="btn-secondary">
              Palma cruise port guide
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

import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { getExcursionImage, excursionsHubImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SignatureMallorcaFeature } from "@/components/SignatureMallorcaFeature";

export const metadata = buildMetadata({
  title: "Shore Excursions from Palma Cruise Port",
  description:
    "Carefully selected Palma shore excursions to Sóller, Valldemossa, the Caves of Drach, historic Palma, coastal adventure and private island days, with cruise-aware timing.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: [
    "Palma shore excursions",
    "Mallorca shore excursions",
    "Majorca shore excursions",
    "Palma cruise excursions",
    "Sóller from Palma cruise",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Palma Shore Excursions",
            description:
              "Carefully selected Mallorca shore excursions from Palma cruise port.",
            path: "/shore-excursions",
          }),
        ]}
      />
      <PageHero
        image={excursionsHubImage}
        title="Palma Shore Excursions"
        subtitle="Cruise-timed tours for your chosen Mallorca — historic Palma, Sóller and Valldemossa, caves, scenic railways, the coast and food experiences with reliable return-to-ship planning."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-gray-600">
            Not sure which day to book? Start with{" "}
            <Link
              href="/compare/which-palma-shore-excursion"
              className="font-semibold text-coastal-700 hover:underline"
            >
              which Palma shore excursion is right for you
            </Link>{" "}
            or{" "}
            <Link
              href="/compare/palma-or-mallorca-island"
              className="font-semibold text-coastal-700 hover:underline"
            >
              Palma or more of Mallorca
            </Link>
            .
          </p>
          <div className="mt-8">
            <SignatureMallorcaFeature embedded />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => {
              const image = getExcursionImage(e.slug);
              const isEditorsChoice = e.featured || e.badge === "Editor's Choice";
              return (
                <Link
                  key={e.slug}
                  href={`/shore-excursions/${e.slug}`}
                  className="card-editorial group overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coastal-900/55 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {isEditorsChoice ? (
                      <span className="absolute left-3 top-3 badge-editors-choice">
                        ⭐ Editor&apos;s Choice
                      </span>
                    ) : (
                      <span className="absolute left-3 top-3 pill bg-white/90">{e.category}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                      {e.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">{e.tagline}</p>
                    <p className="mt-3 text-xs font-medium text-coastal-700">
                      {e.duration} · {e.pace}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

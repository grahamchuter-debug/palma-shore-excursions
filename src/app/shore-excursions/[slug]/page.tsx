import Link from "next/link";
import { notFound } from "next/navigation";
import { excursionPageMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { PlanningLinks } from "@/components/PlanningLinks";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { getExcursionBySlug, getAllExcursionSlugs, excursions } from "@/data/excursions";
import { getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getAllExcursionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExcursionBySlug(slug);
  if (!e) return {};
  return excursionPageMetadata(slug, e.seoTitle, e.metaDescription);
}

function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

export default async function ExcursionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExcursionBySlug(slug);
  if (!e) notFound();
  const image = getExcursionImage(slug);
  const related = e.relatedExcursionSlugs.map((s) => excursions.find((x) => x.slug === s)).filter(Boolean);
  const bookingHref = e.bookingUrl || e.supplier?.url;
  const bookingLabel = e.bookingCtaLabel || "View Excursion";
  const bookingExternal = bookingHref ? isExternalUrl(bookingHref) : false;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Shore Excursions", path: "/shore-excursions" },
    { name: e.title, path: `/shore-excursions/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(e.faqs),
          articleSchema({
            title: e.seoTitle,
            description: e.metaDescription,
            path: `/shore-excursions/${slug}`,
            image: image.src,
          }),
        ]}
      />
      <PhotoHeroBand image={image} eyebrow={e.category} title={e.title} subtitle={e.tagline} compact />

      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mb-8 flex flex-wrap gap-2">
            <span className="pill">Duration: {e.duration}</span>
            <span className="pill">Pace: {e.pace}</span>
            <span className="pill">Best for: {e.bestFor}</span>
          </div>

          {e.cruiseSnapshot && (
            <div className="mb-10 rounded-xl border border-coastal-100 bg-coastal-50/70 p-6">
              <h2 className="font-display text-xl font-bold text-gray-900">Cruise Passenger Snapshot</h2>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
                <div>
                  <dt className="font-semibold text-coastal-800">Duration</dt>
                  <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-coastal-800">Best for</dt>
                  <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-coastal-800">Pace</dt>
                  <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.pace}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-coastal-800">Travels beyond Palma</dt>
                  <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.travelsBeyondPalma}</dd>
                </div>
                {e.cruiseSnapshot.walkingLevel && (
                  <div>
                    <dt className="font-semibold text-coastal-800">Walking level</dt>
                    <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.walkingLevel}</dd>
                  </div>
                )}
                {e.cruiseSnapshot.entrancesIncluded && (
                  <div>
                    <dt className="font-semibold text-coastal-800">Entrances included</dt>
                    <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.entrancesIncluded}</dd>
                  </div>
                )}
                {e.cruiseSnapshot.foodIncluded && (
                  <div>
                    <dt className="font-semibold text-coastal-800">Food included</dt>
                    <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.foodIncluded}</dd>
                  </div>
                )}
                {e.cruiseSnapshot.meetingNote && (
                  <div className="sm:col-span-2">
                    <dt className="font-semibold text-coastal-800">Meeting point</dt>
                    <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.meetingNote}</dd>
                  </div>
                )}
                {e.cruiseSnapshot.returnPlanning && (
                  <div className="sm:col-span-2">
                    <dt className="font-semibold text-coastal-800">Return planning</dt>
                    <dd className="mt-0.5 text-gray-700">{e.cruiseSnapshot.returnPlanning}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          <p className="text-lg leading-relaxed text-gray-700">{e.overview}</p>

          <div className="prose-body">
            {e.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {e.whyCruisePassengers && e.whyCruisePassengers.length > 0 && (
            <div className="mt-10 card-feature">
              <h2 className="font-display text-xl font-bold text-gray-900">
                Why Cruise Passengers Choose This Excursion
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {e.whyCruisePassengers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card-feature">
              <h2 className="font-display text-xl font-bold text-gray-900">Highlights</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="card-feature">
              <h2 className="font-display text-xl font-bold text-gray-900">What a good tour includes</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {e.included.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 card-accent">
            <h2 className="font-display text-xl font-bold text-gray-900">Getting there from the cruise port</h2>
            <p className="mt-3 text-gray-700">{e.portLogistics}</p>
          </div>

          <div className="mt-8">
            <h2 className="section-title text-2xl mb-4">Tips for cruise passengers</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {e.tips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          {bookingHref && (
            <div className="mt-10 rounded-xl border border-coastal-200 bg-white p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold text-gray-900">Book or view this excursion</h2>
              <p className="mt-2 text-sm text-gray-600">
                Availability, meeting points and inclusions are confirmed by the tour provider for your sailing.
              </p>
              <div className="mt-5">
                {bookingExternal ? (
                  <a
                    href={bookingHref}
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                  >
                    {bookingLabel}
                  </a>
                ) : (
                  <Link href={bookingHref} className="btn-primary">
                    {bookingLabel}
                  </Link>
                )}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                {SITE.name} may earn a commission if you book through partner links. This does not change the
                price you pay. See our{" "}
                <Link href="/affiliate-disclosure" className="font-semibold text-coastal-700 hover:underline">
                  affiliate disclosure
                </Link>
                .
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/cruise-planner" className="btn-primary">
              Build my Palma plan
            </Link>
            <Link href="/enquire" className="btn-secondary">
              Enquire about this excursion
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="section-title text-2xl mb-6">Related excursions</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map(
                  (r) =>
                    r && (
                      <Link
                        key={r.slug}
                        href={`/shore-excursions/${r.slug}`}
                        className="card-editorial group overflow-hidden"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden">
                          <ResponsiveImage
                            image={getExcursionImage(r.slug)}
                            role="card"
                            imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-display text-base font-bold text-gray-900 group-hover:text-coastal-800">
                            {r.title}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">{r.tagline}</p>
                        </div>
                      </Link>
                    ),
                )}
              </div>
            </div>
          )}

          <div className="mt-12">
            <FAQSection faqs={e.faqs} title={`${e.title} — FAQs`} />
          </div>

          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}

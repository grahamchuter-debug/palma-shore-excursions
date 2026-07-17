import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, articleSchema } from "@/lib/schema";
import { signatureMallorcaExperience, SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";

const path = SIGNATURE_EXPERIENCE_PATH;
const image = subjectImages.tramuntana;

export const metadata = buildMetadata({
  title: signatureMallorcaExperience.seoTitle,
  description: signatureMallorcaExperience.metaDescription,
  path,
  image: image.src,
  imageAlt: "Tramuntana mountain scenery — future Signature Mallorca Discovery from Palma cruise port",
  keywords: [
    "Signature Mallorca Discovery",
    "Palma shore excursions",
    "small group Tramuntana tour",
    "Mallorca cruise excursions",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Signature Mallorca Discovery", path },
];

export default function SignatureMallorcaExperiencePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(signatureMallorcaExperience.faqs),
          articleSchema({
            title: signatureMallorcaExperience.seoTitle,
            description: signatureMallorcaExperience.metaDescription,
            path,
            image: image.src,
          }),
        ]}
      />

      <section className="section-signature-hero">
        <PreloadImage base={image.base} role="guide" />
        <ResponsiveImage
          image={image}
          role="guide"
          priority
          className="absolute inset-0 block h-full w-full opacity-35"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <span className="badge-signature">⭐ Signature Experience — In preparation</span>
          <h1 className="home-hero-heading mt-6 max-w-3xl">{signatureMallorcaExperience.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            {signatureMallorcaExperience.tagline}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
            {signatureMallorcaExperience.overview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/enquire" className="btn-accent">
              Register interest
            </Link>
            <Link
              href="/wow-collection"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              The Wow Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="placeholder-widget mt-8">
            <p className="placeholder-widget-label">In preparation</p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Our flagship Signature Experience is in development with local expert partners. When launched,
              it will become a primary recommendation on this site — designed for a maximum of eight guests,
              cruise-timed routing and a carefully paced Tramuntana village day. It is a concept in
              preparation, not a currently bookable excursion.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {signatureMallorcaExperience.benefits.map((b) => (
              <div key={b.title} className="card-feature">
                <span className="text-2xl" aria-hidden="true">
                  {b.emoji}
                </span>
                <h3 className="mt-2 font-display text-sm font-bold text-gray-900">{b.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <FAQSection
              faqs={signatureMallorcaExperience.faqs}
              title="Signature Mallorca Discovery — FAQs"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/compare/which-palma-shore-excursion" className="btn-secondary">
              Best excursions while you wait
            </Link>
            <Link href="/wow-collection" className="btn-secondary">
              The Wow Collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

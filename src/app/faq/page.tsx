import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { getAllFaqs } from "@/data/faqs";

const path = "/faq";
const description =
  "Frequently asked questions about Palma cruise planning — cathedral and old town, Sóller, Valldemossa, caves, shore excursions and getting back to your ship.";

export const metadata = buildMetadata({
  title: "Palma & Mallorca Cruise FAQ",
  description,
  path,
  keywords: [
    "Palma cruise FAQ",
    "Palma shore excursions questions",
    "Mallorca cruise port FAQ",
  ],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path },
];

export default function FaqPage() {
  const faqs = getAllFaqs();
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          faqSchema(faqs),
          webPageSchema({ title: "Palma & Mallorca Cruise FAQ", description, path }),
        ]}
      />
      <PageHero
        title="Palma & Mallorca Cruise Planning FAQ"
        subtitle="Answers to the most common questions from Palma cruise passengers — city days, island excursions and return-to-ship timing."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8">
            <FAQSection faqs={faqs} title="All FAQs" />
          </div>
        </div>
      </section>
    </>
  );
}

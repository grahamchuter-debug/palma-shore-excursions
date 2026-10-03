import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { EnquiryFormShell } from "@/components/EnquiryFormShell";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/enquire";

export const metadata = buildMetadata({
  title: "Enquire / Contact",
  description:
    "Get in touch about Palma cruise planning — historic Palma, Sóller, Valldemossa, caves, coastal excursions and port-day questions.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Enquire", path },
];

export default function EnquirePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            title: "Enquire / Contact",
            description: "Get in touch about Palma and Mallorca cruise planning.",
            path,
          }),
        ]}
      />
      <PageHero
        title="Enquire / Contact"
        subtitle="Questions about your Palma port day, shore excursions, The Wow Collection or our cruise planner? Tell us a little and we'll point you in the right direction."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mt-6 text-sm text-gray-600">
            Prefer email? Write to{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-coastal-700 hover:underline">
              {SITE.email}
            </a>
            .
          </p>
          <EnquiryFormShell
            siteId="palma"
            fallbackEmail="hello@palmashoreexcursions.com"
            className="mt-8 space-y-4"
            submitClassName="btn-primary"
            submitLabel="Send enquiry"
            successTitle="Thank you — we've received your enquiry"
            successBody="We'll reply by email, usually within one working day."
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name" maxLength={100} autoComplete="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email" maxLength={254} autoComplete="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message" required maxLength={5000}
                rows={5}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm"
                placeholder="Tell us about your Palma port day — ship, hours ashore, interests and how we can help..."
              />
            </div>
          </EnquiryFormShell>
        </div>
      </section>
    </>
  );
}

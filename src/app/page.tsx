import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ChooseYourMallorca } from "@/components/ChooseYourMallorca";
import { SpiritOfMallorca } from "@/components/SpiritOfMallorca";
import { WowCollectionFeature } from "@/components/WowCollectionFeature";
import { SignatureMallorcaFeature } from "@/components/SignatureMallorcaFeature";
import { EditorsCollection } from "@/components/EditorsCollection";
import { HonestAdvice } from "@/components/HonestAdvice";
import { ExperienceSelector } from "@/components/ExperienceSelector";
import { CruisePassengerRatings } from "@/components/CruisePassengerRatings";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs } from "@/data/homepage";
import { getExcursionBySlug, getFeaturedExcursions } from "@/data/excursions";
import { siteImages, getExcursionImage } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { PreloadImage } from "@/components/PreloadImage";
import { MallorcaLinks } from "@/components/MallorcaLinks";
import { CruiseHeroTrust } from "@/components/CruiseHeroTrust";
import { YourDayAshore } from "@/components/YourDayAshore";
import { SITE } from "@/lib/site";
import {
  whichPalmaShoreExcursionRows,
  whichPalmaShoreExcursionPrompts,
} from "@/data/comparison-table";

export const metadata = buildMetadata({
  title: "Palma Shore Excursions | Mallorca Cruise Tours",
  description:
    "Discover the best Palma shore excursions for cruise passengers, from Palma Cathedral and Valldemossa to Sóller, the Tramuntana Mountains and Mallorca’s famous caves.",
  path: "/",
  keywords: [
    "Palma shore excursions",
    "Palma de Mallorca shore excursions",
    "Mallorca shore excursions",
    "Majorca shore excursions",
    "Palma cruise excursions",
    "Palma cruise port tours",
  ],
});

const SITE_DESCRIPTION =
  "Find the best version of your day ashore in Palma de Mallorca — carefully selected shore excursions, independent cruise advice and experiences across the cathedral city, Sóller, Valldemossa, caves and the Tramuntana Mountains.";

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions().slice(0, 4);
  const editorsChoice = getExcursionBySlug("soller-valldemossa");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Palma Shore Excursions",
            description: SITE_DESCRIPTION,
            path: "/",
          }),
        ]}
      />

      <PreloadImage base={siteImages.hero.base} role="hero" />

      <section className="home-hero">
        <ResponsiveImage
          image={siteImages.hero}
          role="hero"
          priority
          className="absolute inset-0 block h-full w-full"
          imgClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100 animate-fade-up">
            Palma de Mallorca for Cruise Passengers
          </p>
          <h1 className="home-hero-heading animate-fade-up-delay">Palma Shore Excursions</h1>
          <CruiseHeroTrust />
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg animate-fade-up-delay">
            Discover Palma’s historic heart, Mallorca’s mountain villages, scenic railways, caves and
            coastlines — all selected with your time in port in mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay-2">
            <Link href="/shore-excursions" className="btn-accent">
              Explore Shore Excursions
            </Link>
            <Link
              href="/palma-cruise-port"
              className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Plan Your Day in Palma
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80 animate-fade-up-delay-2">
            Cruise-focused experiences • Clear durations • Easy comparison
          </p>
        </div>
      </section>

      <YourDayAshore />
      <ChooseYourMallorca />
      <SpiritOfMallorca />
      <WowCollectionFeature />
      <SignatureMallorcaFeature />

      {editorsChoice && (
        <section className="section-padding bg-gradient-to-b from-amber-50/50 via-white to-white border-b border-amber-100/70">
          <div className="container-wide">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <ResponsiveImage
                  image={getExcursionImage(editorsChoice.slug)}
                  role="card"
                  imgClassName="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 badge-editors-choice">⭐ Editor&apos;s Choice</span>
              </div>
              <div>
                <p className="section-eyebrow">Editorial pick</p>
                <h2 className="section-title mt-2">Our Pick for a Classic Mallorca Day</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-700">
                  For first-time visitors who want to see Mallorca beyond the capital, Sóller and
                  Valldemossa provide one of the island’s most rewarding combinations of mountain
                  scenery, historic villages and Mediterranean character.
                </p>
                <div className="mt-6 card-feature">
                  <h3 className="font-display text-lg font-bold text-gray-900">Why we chose it</h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>A strong introduction to Mallorca beyond Palma</li>
                    <li>Combines scenery, culture and traditional villages</li>
                    <li>Well suited to visitors with one day on the island</li>
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/shore-excursions/${editorsChoice.slug}`} className="btn-accent">
                    View Excursion
                  </Link>
                  <Link href="/compare/which-palma-shore-excursion" className="btn-secondary">
                    Compare options
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <EditorsCollection />
      <HonestAdvice />

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-coastal-200">When you&apos;re ready</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Featured shore excursions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Once you know which experience suits your day ashore, these cruise-focused tours help you
              compare Palma city days with wider Mallorca adventures.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((e) => {
              const image = getExcursionImage(e.slug);
              const isEditorsChoice = e.slug === "soller-valldemossa";
              return (
                <Link
                  key={e.slug}
                  href={`/shore-excursions/${e.slug}`}
                  className="card-editorial group overflow-hidden bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <ResponsiveImage
                      image={image}
                      role="card"
                      imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-coastal-900/80 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {isEditorsChoice && (
                      <span className="absolute left-3 top-3 badge-editors-choice">
                        ⭐ Editor&apos;s Choice
                      </span>
                    )}
                    {e.badge && !isEditorsChoice && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-coastal-900">
                        {e.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="font-display text-lg font-bold group-hover:text-maple-300">{e.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{e.tagline}</p>
                    <p className="mt-2 text-xs text-white/55">{e.duration}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-maple-300">
                      View Excursion →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/shore-excursions" className="btn-accent">
              All Shore Excursions
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-white/60">
            Some excursion links lead to trusted booking partners. We may earn a commission when you
            make a booking, at no additional cost to you.
          </p>
        </div>
      </section>

      <ExperienceSelector />

      <section className="section-padding bg-white border-b border-coastal-100">
        <div className="container-wide">
          <p className="section-eyebrow">Decision support</p>
          <h2 className="section-title mt-2">Which Palma Shore Excursion Is Right for You?</h2>
          <p className="section-subtitle">
            Compare city, scenic, cave and private options using verified durations and activity levels.
          </p>

          <div className="mt-8 hidden overflow-x-auto lg:block">
            <table className="min-w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-coastal-200 text-xs uppercase tracking-wide text-coastal-700">
                  <th className="py-3 pr-4 font-semibold">Experience</th>
                  <th className="py-3 pr-4 font-semibold">Best for</th>
                  <th className="py-3 pr-4 font-semibold">Duration</th>
                  <th className="py-3 pr-4 font-semibold">Activity</th>
                  <th className="py-3 pr-4 font-semibold">Stays in Palma?</th>
                  <th className="py-3 pr-4 font-semibold">Private or shared</th>
                  <th className="py-3 font-semibold">Key highlight</th>
                </tr>
              </thead>
              <tbody>
                {whichPalmaShoreExcursionRows.map((row) => (
                  <tr key={row.experience} className="border-b border-coastal-100 align-top">
                    <td className="py-4 pr-4">
                      <Link href={row.href} className="font-semibold text-coastal-800 hover:text-maple-600">
                        {row.experience}
                      </Link>
                    </td>
                    <td className="py-4 pr-4 text-gray-700">{row.bestFor}</td>
                    <td className="py-4 pr-4 text-gray-700">{row.approximateDuration}</td>
                    <td className="py-4 pr-4 text-gray-700">{row.activityLevel}</td>
                    <td className="py-4 pr-4 text-gray-700">{row.staysInPalma}</td>
                    <td className="py-4 pr-4 text-gray-700">{row.privateOrShared}</td>
                    <td className="py-4 text-gray-700">{row.keyHighlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 lg:hidden">
            {whichPalmaShoreExcursionRows.map((row) => (
              <Link key={row.experience} href={row.href} className="card-feature block">
                <h3 className="font-display text-lg font-bold text-gray-900">{row.experience}</h3>
                <dl className="mt-3 space-y-1.5 text-sm text-gray-700">
                  <div><dt className="inline font-semibold">Best for: </dt><dd className="inline">{row.bestFor}</dd></div>
                  <div><dt className="inline font-semibold">Duration: </dt><dd className="inline">{row.approximateDuration}</dd></div>
                  <div><dt className="inline font-semibold">Activity: </dt><dd className="inline">{row.activityLevel}</dd></div>
                  <div><dt className="inline font-semibold">Stays in Palma?: </dt><dd className="inline">{row.staysInPalma}</dd></div>
                  <div><dt className="inline font-semibold">Format: </dt><dd className="inline">{row.privateOrShared}</dd></div>
                  <div><dt className="inline font-semibold">Highlight: </dt><dd className="inline">{row.keyHighlight}</dd></div>
                </dl>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {whichPalmaShoreExcursionPrompts.map((prompt) => (
              <div key={prompt.title} className="card-feature">
                <h3 className="font-display text-base font-bold text-gray-900">{prompt.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{prompt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CruisePassengerRatings />

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <div className="card-accent">
            <p className="section-eyebrow">Independent exploring</p>
            <h2 className="section-title mt-2">Can you explore Palma without a tour?</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Often yes. Palma’s cathedral, old town, Parc de la Mar and markets can fill a sensible
              independent day when berth and shuttle arrangements are clear. Island days to Sóller,
              Valldemossa or the caves usually benefit from organised logistics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/guides/independent-palma-guide" className="btn-secondary text-sm">
                Independent Palma guide →
              </Link>
              <Link href="/things-to-do-in-palma-from-a-cruise-ship" className="btn-secondary text-sm">
                Things to do from a cruise ship →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Plan your day ashore</p>
          <h2 className="section-title mt-2">Everything you need to choose the right Mallorca experience</h2>
          <p className="section-subtitle">
            Not just an excursion catalogue — comparisons, guides, schedules and honest cruise-day
            planning advice, because the best bookings start with genuine understanding.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-coastal-900 text-white">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            See which ships call at Palma
          </h2>
          <p className="mt-4 text-white/85">
            Check published ship schedules before you book a long island day. Times are indicative —
            always confirm your own port call with your cruise line before you go ashore.
          </p>
          <Link href="/palma-cruise-ship-schedule" className="btn-accent mt-8 inline-flex">
            View Palma cruise arrivals
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Palma Shore Excursions — FAQs" />
        </div>
      </section>

      <MallorcaLinks />

      <section className="section-padding bg-coastal-50 border-t border-coastal-100">
        <div className="container-wide max-w-3xl text-center">
          <p className="section-eyebrow">Why trust us</p>
          <h2 className="section-title mt-2">Independent editorial advice</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {SITE.name} is an independent cruise excursion guide — not affiliated with the Port of
            Palma, any cruise line or any government tourism authority. We recommend honestly, favour
            clear durations and never imply a product exists before it is ready to book.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            <span className="pill">Selected for Cruise Passengers</span>
            <span className="pill">Clear Tour Durations</span>
            <span className="pill">Experiences Across Palma and Mallorca</span>
            <span className="pill">Compare City, Scenic and Private Tours</span>
            <span className="pill">Secure Booking Through Established Tour Partners</span>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white border-b border-coastal-100">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Palma?</h2>
        <p className="section-subtitle">
          The honest answer: you can enjoy central Palma independently when berth and shuttle
          arrangements are clear. An organised excursion becomes worthwhile when you want Sóller,
          Valldemossa, the caves or a multi-transport island day with less logistics risk.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="card-feature">
            <h3 className="font-display text-lg font-bold text-gray-900">
              You can explore Palma independently — and many passengers do
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Palma’s cathedral, old town, Parc de la Mar and markets reward walking once you know how
              to reach the centre from your berth. Independent exploring works best when you protect a
              clear return buffer and avoid overloading the day.
            </p>
          </div>
          <div className="card-feature">
            <h3 className="font-display text-lg font-bold text-gray-900">
              Organised excursions help beyond the capital
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Mountain villages, eastern caves and train–tram–boat circuits involve more moving parts.
              A cruise-focused tour can simplify timing, though you should still verify inclusions and
              meeting points with the provider.
            </p>
          </div>
        </div>

        <div className="mt-8 card-accent">
          <h3 className="font-display text-lg font-bold text-gray-900">
            When an excursion usually makes more sense
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li>
              <strong>Sóller and Valldemossa</strong> — mountain roads, village time and a practical
              full-day window
            </li>
            <li>
              <strong>Caves of Drach</strong> — eastbound travel, tickets and underground walking
            </li>
            <li>
              <strong>Train, tram and boat</strong> — multi-segment logistics on a long port call
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/which-palma-shore-excursion" className="btn-primary">
            Compare Palma excursions
          </Link>
          <Link href="/guides/independent-palma-guide" className="btn-secondary">
            Independent Palma guide
          </Link>
          <Link href="/palma-cruise-port" className="btn-secondary">
            Palma cruise port guide
          </Link>
        </div>
      </div>
    </section>
  );
}

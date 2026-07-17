import { subjectImages } from "@/lib/images";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export function SpiritOfMallorca() {
  const image = subjectImages.valldemossa ?? subjectImages.soller ?? subjectImages.tramuntana;

  return (
    <section className="section-padding bg-gradient-to-b from-coastal-50 via-white to-white border-b border-coastal-100">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">Balearic character</p>
            <h2 className="section-title mt-2 max-w-xl">The Spirit of Mallorca</h2>
            <p className="mt-6 text-base leading-relaxed text-gray-700">
              Mallorca is an island of contrasts. Palma offers grand architecture, waterfront cafés
              and centuries of history, while beyond the capital the landscape rises into the Serra
              de Tramuntana, passes through stone-built villages and descends towards coves and
              fishing ports.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A cruise day here can be cultural, scenic, active or completely relaxed — the challenge
              is simply choosing which version of the island you want to experience. Stay beside the
              cathedral and harbour, ride into Sóller’s citrus valley, walk Valldemossa’s lanes or
              travel east to the Caves of Drach.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Find the best version of your day ashore, then protect the time you need to return to
              your ship.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { emoji: "⛪", label: "Cathedral city" },
                { emoji: "⛰️", label: "Tramuntana villages" },
                { emoji: "🌊", label: "Caves and coast" },
              ].map((item) => (
                <div key={item.label} className="card-feature text-center">
                  <span className="text-2xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-gray-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ResponsiveImage image={image} role="card" imgClassName="h-full w-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-t from-coastal-900/30 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

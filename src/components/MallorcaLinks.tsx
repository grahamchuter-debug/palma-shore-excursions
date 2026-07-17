import Link from "next/link";

const MALLORCA_LINKS = [
  {
    title: "Which Palma shore excursion?",
    description:
      "Compare historic Palma, Sóller and Valldemossa, caves, railway days and private options.",
    href: "/compare/which-palma-shore-excursion",
  },
  {
    title: "Things to do from a cruise ship",
    description:
      "Cathedral, old town, Sóller, Valldemossa, caves and what you can realistically see in one day.",
    href: "/things-to-do-in-palma-from-a-cruise-ship",
  },
  {
    title: "Independent Palma guide",
    description:
      "Walk the cathedral quarter, markets and waterfront once you understand berth and shuttle logistics.",
    href: "/guides/independent-palma-guide",
  },
  {
    title: "Palma cruise port guide",
    description:
      "Practical advice on terminals, city access, timing and responsible exploring.",
    href: "/palma-cruise-port",
  },
  {
    title: "Private or shared touring",
    description:
      "Compare private flexibility with shared scenic days before you book.",
    href: "/compare/private-tour-vs-coach-tour",
  },
  {
    title: "Palma cruise ship schedule",
    description:
      "Check published port hours before committing to a long island excursion.",
    href: "/palma-cruise-ship-schedule",
  },
];

export function MallorcaLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Palma and Mallorca planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in Palma or explore more of Mallorca.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MALLORCA_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Palma planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}

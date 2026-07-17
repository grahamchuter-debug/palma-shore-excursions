import Link from "next/link";

const LINKS = [
  { href: "/palma-cruise-port", label: "Palma Cruise Port Guide" },
  { href: "/cruise-planner", label: "Palma Cruise Planner" },
  { href: "/shore-excursions", label: "Shore Excursions" },
  { href: "/compare", label: "Compare Mallorca days" },
  { href: "/things-to-do-in-palma-from-a-cruise-ship", label: "Things to Do" },
  { href: "/palma-cruise-ship-schedule", label: "Ship Schedule" },
  { href: "/faq", label: "FAQs" },
];

export function PlanningLinks() {
  return (
    <div className="rounded-2xl border border-coastal-100 bg-coastal-50/60 p-6">
      <h2 className="font-display text-xl font-bold text-gray-900">Continue planning</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm font-medium text-coastal-800 hover:text-maple-600">
              {link.label} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

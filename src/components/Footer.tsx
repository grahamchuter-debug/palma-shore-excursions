import Link from "next/link";
import { SITE } from "@/lib/site";
import { SIGNATURE_EXPERIENCE_PATH } from "@/data/signature-experience";
import { DestinationLogo } from "@/components/DestinationLogo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-maple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-coastal-900"
              aria-label={`${SITE.name} — home`}
            >
              <DestinationLogo variant="compact" tone="on-dark" decorative />
            </Link>
            <p className="mt-4 text-sm text-coastal-100/70 leading-relaxed">
              Palma Shore Excursions helps cruise passengers compare ways to experience Palma and
              Mallorca during their time in port.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Explore Palma</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/palma-cruise-port" className="hover:text-white">Cruise Port Guide</Link></li>
              <li><Link href="/things-to-do-in-palma-from-a-cruise-ship" className="hover:text-white">Things to Do</Link></li>
              <li><Link href="/palma-cruise-ship-schedule" className="hover:text-white">Ship Schedule</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan Your Day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/shore-excursions/palma-old-town-cathedral" className="hover:text-white">Historic Palma</Link></li>
              <li><Link href="/shore-excursions/soller-valldemossa" className="hover:text-white">Sóller and Valldemossa</Link></li>
              <li><Link href="/shore-excursions/caves-of-drach" className="hover:text-white">Caves and Coast</Link></li>
              <li><Link href="/shore-excursions/private-soller-valldemossa" className="hover:text-white">Private Tours</Link></li>
              <li><Link href="/compare/which-palma-shore-excursion" className="hover:text-white">Compare Excursions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">About</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/about" className="hover:text-white">How We Select Excursions</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href={SIGNATURE_EXPERIENCE_PATH} className="hover:text-white">Signature Experience</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <DestinationLogo variant="mark" tone="on-dark" className="opacity-90" decorative />
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent cruise excursion guide — not affiliated with the Port of
        Palma, any cruise line or any government tourism authority.
      </div>
    </footer>
  );
}

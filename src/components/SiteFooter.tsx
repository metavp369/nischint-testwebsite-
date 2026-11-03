import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

const groups = [
  {
    title: "Explore",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/plans", label: "Plans" },
      { href: "/thane", label: "Thane pilot" },
      { href: "/technology", label: "Technology & wearable" },
      { href: "/resources", label: "FAQ & resources" },
    ],
  },
  {
    title: "Who it's for",
    links: [
      { href: "/elder-safety", label: "Elder safety" },
      { href: "/women-safety", label: "Women & girls' safety" },
      { href: "/child-safety", label: "Child safety" },
      { href: "/for-nri-families", label: "Families abroad" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/about", label: "About" },
      { href: "/trust-and-safety", label: "Trust & Safety" },
      { href: "/security", label: "Security" },
      { href: "/contact", label: "Contact & support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/dpdp-consent", label: "DPDP Consent" },
      { href: "/delete-account", label: "Delete account" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-[#c3d3e6]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/brand/nischint-shield.png" alt="" width={40} height={44} />
              <span className="font-display text-xl font-extrabold tracking-[0.06em] text-white">NISCHINT</span>
            </div>
            <p lang="hi" className="font-deva text-lg text-mint">
              निश्चिंत · free from worry
            </p>
            <p className="text-sm">
              Recognised by DPIIT, GeM-registered, patent-pending technology. Building safer Indian cities, starting with Thane.
            </p>
          </div>
          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <h2 className="mb-3 font-sans text-sm font-semibold tracking-normal text-white">{g.title}</h2>
              <ul className="space-y-1">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block py-1 text-sm text-[#c3d3e6] no-underline hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-6 text-sm">
          {site.social.map((s) => (
            <a key={s.href} href={s.href} className="text-[#c3d3e6] no-underline hover:text-white" rel="noopener noreferrer" target="_blank">
              {s.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>

        <div className="mt-6 space-y-2 text-xs text-[#a9bdd6]">
          <p>
            NISCHINT is an alerting layer, not an emergency service. In an emergency call {site.emergency.all} (police {site.emergency.police},
            ambulance {site.emergency.ambulance}).
          </p>
          <p>
            © {new Date().getFullYear()} NISCHINT · {site.company.legalName} · CIN: {site.company.cin} · GSTIN: {site.company.gstin}
          </p>
        </div>
      </div>
    </footer>
  );
}

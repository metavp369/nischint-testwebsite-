import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LinkButton, Section, SectionHeading } from "@/components/ui";
import { AppScreen } from "@/components/media";
import { Icon } from "@/components/icons";
import { Solution } from "@/components/home/Story";
import { FaqList, FinalCta } from "@/components/home/Convert";
import { faqs } from "@/content/faq";
import { plans } from "@/content/plans";

export const metadata: Metadata = {
  title: "How NISCHINT works: circles, check-ins, alerts and limits",
  description:
    "See exactly how NISCHINT works: choose trusted people, allow permissions, set safe zones or check in, and your circle is alerted. Plus what happens offline and why it doesn't replace 112.",
  alternates: { canonical: "/how-it-works" },
};

const appScreens = [
  { src: "/app-screens/home.jpg", alt: "NISCHINT home screen with family safety score and AI Safety Monitoring status", caption: "Home: your family's safety at a glance." },
  { src: "/app-screens/sos.jpg", alt: "NISCHINT SOS screen: I NEED HELP, with I'm Safe and Safe Walk buttons", caption: "SOS: hold to alert your circle, or tap I'm Safe." },
  { src: "/app-screens/alert-center.jpg", alt: "NISCHINT Alert Center with emergency, warning and info alerts", caption: "Alert Center: active and resolved alerts." },
  { src: "/app-screens/family-circle.jpg", alt: "NISCHINT Family Circle showing guardians and a protected member", caption: "Family Circle: who protects whom." },
  { src: "/app-screens/safety-zones.jpg", alt: "NISCHINT Safety Management screen with safe zones", caption: "Safety Zones: places that watch themselves." },
  { src: "/app-screens/safe-walk-live.jpg", alt: "NISCHINT Safe Walk in progress on a live map with ETA", caption: "Safe Walk: your circle follows until you arrive." },
];

const degraded = [
  { t: "No internet", b: "Alerts can't be sent until the phone reconnects. Keep 112 handy; calls to emergency numbers work without mobile data." },
  { t: "Battery dies", b: "A switched-off phone can't check in or raise alerts. A missed check-in may itself become a warning to your circle." },
  { t: "Location turned off", b: "Alerts can still reach your circle, but without an accurate location." },
  { t: "Notifications blocked", b: "Your guardians may not see alerts in time. Ask everyone in the circle to allow NISCHINT notifications." },
  { t: "Nobody responds", b: "Alerts keep climbing the four levels until someone responds. NISCHINT never calls emergency services itself." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        path="/how-it-works"
        crumb="How it works"
        eyebrow="How NISCHINT works"
        title="Quiet on normal days. Clear when it matters."
        intro={<p>NISCHINT learns what a normal day looks like and stays quiet through it. When something genuinely needs attention, the people you trust hear about it, and a person always decides what happens next.</p>}
        aside={
          <div className="mx-auto w-full max-w-[280px]">
            <AppScreen src="/app-screens/alert-center.jpg" alt="NISCHINT Alert Center showing emergency, warning and info alerts" priority />
          </div>
        }
      >
        <LinkButton href="#app-screens">See the app screens</LinkButton>
        <LinkButton href="/thane#waitlist" variant="secondary">
          Join the waitlist
        </LinkButton>
      </PageHeader>

      <Solution />

      <Section id="circle" labelledBy="circle-title" tone="white">
        <SectionHeading id="circle-title" eyebrow="Your trusted circle" title="Who's in the circle, and what they see" />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.id} data-reveal className="rounded-[var(--radius-card)] border border-line bg-calm p-7">
              <h3 className="text-xl font-bold">{p.name} plan</h3>
              <p className="mt-2 text-ink-soft">{p.features[0]}</p>
            </div>
          ))}
          <div data-reveal className="rounded-[var(--radius-card)] border border-line bg-calm p-7">
            <h3 className="text-xl font-bold">What guardians see</h3>
            <p className="mt-2 text-ink-soft">Check-ins, alerts, what&rsquo;s been acknowledged, and live location when the member has agreed to share it.</p>
          </div>
        </div>
      </Section>

      <Section id="escalation" labelledBy="esc-title" tone="calm">
        <SectionHeading
          id="esc-title"
          eyebrow="4-level escalation"
          title="Alerts climb until someone answers"
          intro="Every alert climbs through four levels, from a gentle check-in with you to notifying your full trusted circle, until someone has responded and you're confirmed safe."
        />
        <ol data-reveal className="grid gap-3 sm:grid-cols-4" aria-label="Escalation levels">
          {[
            { n: 1, t: "A gentle check-in with you", c: "bg-green-tint text-green-text" },
            { n: 2, t: "Escalating", c: "bg-teal-tint text-teal-text" },
            { n: 3, t: "Escalating", c: "bg-blue-tint text-blue-dark" },
            { n: 4, t: "Your full trusted circle", c: "bg-navy text-white" },
          ].map((l) => (
            <li key={l.n} className={`rounded-[var(--radius-card)] p-5 ${l.c}`}>
              <p className="font-display text-3xl font-extrabold">Level {l.n}</p>
              <p className="mt-1 font-semibold">{l.t}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-ink-muted">A missed check-in becomes a warning; an SOS becomes an escalation, with one-tap calling and location for your guardians.</p>
      </Section>

      <Section id="app-screens" labelledBy="screens-title" tone="white">
        <SectionHeading id="screens-title" eyebrow="Inside the app" title="A look at the app" intro="Screens from the NISCHINT app with demo data. The app may look different at launch." />
        <ul className="grid justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {appScreens.map((s) => (
            <li key={s.src} data-reveal className="w-full max-w-[260px]">
              <figure>
                <AppScreen src={s.src} alt={s.alt} />
                <figcaption className="mt-4 text-center text-[15px] text-ink-soft">{s.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="degraded-title" tone="cream">
        <SectionHeading id="degraded-title" eyebrow="When things go wrong" title="What happens if…" intro="Technology fails sometimes. Here's how NISCHINT behaves, so you can plan around it." />
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {degraded.map((d) => (
            <li key={d.t} data-reveal className="rounded-[var(--radius-card)] bg-white p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Icon name="alert" size={20} className="text-[#7a4a00]" />
                {d.t}
              </h3>
              <p className="mt-2 text-[15px] text-ink-soft">{d.b}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="hiw-faq" tone="calm">
        <SectionHeading id="hiw-faq" title="Common questions" />
        <FaqList items={faqs.slice(0, 6)} />
      </Section>

      <FinalCta />
    </>
  );
}

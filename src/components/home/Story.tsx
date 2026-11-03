import Link from "next/link";
import clsx from "clsx";
import { Section, SectionHeading, accentClasses } from "../ui";
import { Icon, type IconName } from "../icons";
import { problems } from "@/content/stories";
import { site } from "@/content/site";
import { AppScreen } from "../media";

/** Parameter 04: outcomes for people, kept separate from feature claims. */
const benefits: { icon: IconName; title: string; body: string }[] = [
  { icon: "users", title: "A family circle that's connected", body: "The people who matter are in one place, and everyone knows who's been told." },
  { icon: "checkCircle", title: "Check-ins that happen on time", body: "\"Reached safely\" becomes one tap, not a phone call you have to remember." },
  { icon: "message", title: "Clearer communication", body: "When something is off, the right people hear the same thing at the same time." },
  { icon: "heart", title: "Reassurance, without hovering", body: "Location is shared only with consent, and alerts stay quiet on normal days and clear when it matters." },
  { icon: "shield", title: "Safety steps anyone can follow", body: "One tap to check in, one hold for SOS. Simple steps for parents and grandparents too." },
];

export function Benefits() {
  return (
    <Section id="benefits" labelledBy="benefits-title" tone="calm">
      <SectionHeading
        id="benefits-title"
        eyebrow="What changes for your family"
        title="Less wondering. More knowing."
        intro="These are the outcomes we design for. The features behind them are listed further down, with what is available at launch and what is still planned."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {benefits.map((b, i) => (
          <li key={b.title} data-reveal style={{ transitionDelay: `${i * 70}ms` }} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-tint text-blue">
              <Icon name={b.icon} />
            </span>
            <h3 className="text-lg font-bold">{b.title}</h3>
            <p className="mt-2 text-[15px] text-ink-soft">{b.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Parameter 05: three respectful, relatable moments. No statistics. */
export function Problem() {
  return (
    <Section id="problem" labelledBy="problem-title" tone="white">
      <SectionHeading
        id="problem-title"
        eyebrow="The feeling we all know"
        title="The silence between &ldquo;leaving now&rdquo; and &ldquo;reached home&rdquo;"
        intro="Most days, everything is fine. It's the not knowing that weighs on us."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {problems.map((p, i) => {
          const a = accentClasses[p.accent];
          return (
            <article key={p.id} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className="relative overflow-hidden rounded-[var(--radius-card)] bg-calm p-7">
              <span aria-hidden="true" className={clsx("absolute inset-x-0 top-0 h-1.5", a.bar)} />
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-3 text-ink-soft">{p.body}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/** Parameter 06: the real flow, with its limits. */
const steps = [
  { title: "Choose your trusted people", body: "Invite the guardians you want in your circle: family, a trusted neighbour, a close friend." },
  { title: "Allow the permissions you're comfortable with", body: "Location and notifications are opt-in on your phone. You can change them at any time." },
  { title: "Set your places, or start a check-in", body: "Save home, school or office as safe zones, tap I'm Safe, start a Safe Walk, or hold SOS for 3 seconds." },
  { title: "Your circle is told", body: "If a routine breaks or you raise an alert, your guardians are notified. Alerts climb four levels until someone responds." },
  { title: "A person decides what's next", body: "Your guardian calls you, checks in, or calls for help. NISCHINT never escalates to emergency services on its own." },
];

export function Solution() {
  return (
    <Section id="how" labelledBy="how-title" tone="calm">
      <SectionHeading id="how-title" eyebrow="How it works" title="Five simple steps. A person always decides." />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <ol className="relative space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-white p-5 sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg font-extrabold text-white">{i + 1}</span>
              <div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-[15px] text-ink-soft">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-10">
        <aside data-reveal aria-labelledby="limits-title" className="rounded-[var(--radius-card)] border border-[#e8d7b0] bg-cream p-6 sm:p-7">
          <h3 id="limits-title" className="flex items-center gap-2 text-lg font-bold">
            <Icon name="alert" className="text-[#7a4a00]" /> What technology can&rsquo;t do
          </h3>
          <ul className="mt-4 space-y-3 text-[15px] text-ink-soft">
            <li>Alerts need battery, a network connection and location access. Without them, alerts may be delayed or not sent.</li>
            <li>Location can be inaccurate indoors, underground or in dense areas.</li>
            <li>Maps can be incomplete. Route Check shows what&rsquo;s mapped; it doesn&rsquo;t rate how safe a road is.</li>
            <li>NISCHINT does not contact police or ambulance for you, and it does not replace emergency services.</li>
          </ul>
          <p className="mt-5 rounded-xl bg-white px-4 py-3 text-[15px] font-semibold">
            In an emergency, call <a href="tel:112">{site.emergency.all}</a> (police {site.emergency.police}, ambulance {site.emergency.ambulance}).
          </p>
          <Link href="/how-it-works" className="mt-4 inline-block font-semibold">
            Read the full walkthrough →
          </Link>
        </aside>
        <figure data-reveal className="mx-auto w-full max-w-[250px]">
          <AppScreen src="/app-screens/family-circle.jpg" alt="NISCHINT Family Circle: primary guardian, co-guardian and protected member with Call and Track buttons" />
          <figcaption className="mt-4 text-center text-[15px] text-ink-soft">Your circle in the app: who&rsquo;s told, and who can act.</figcaption>
        </figure>
        </div>
      </div>
    </Section>
  );
}

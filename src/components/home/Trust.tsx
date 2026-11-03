import Link from "next/link";
import { Section, SectionHeading, StatusBadge } from "../ui";
import { Icon, type IconName } from "../icons";
import { site } from "@/content/site";
import { testimonials, pilotMetrics } from "@/content/testimonials";
import { stories } from "@/content/stories";

/** Parameter 12: verified facts only. No implied government, police or medical endorsement. */
export function Authority() {
  const facts: { icon: IconName; title: string; body: string }[] = [
    { icon: "shield", title: "DPIIT recognised", body: `Recognised as a startup by the Department for Promotion of Industry and Internal Trade (certificate ${site.recognition.dpiit}).` },
    { icon: "clipboard", title: "GeM-registered", body: "Registered on the Government e-Marketplace (GeM). This is a registration, not an endorsement." },
    { icon: "sparkle", title: "Patent-pending", body: `${site.recognition.provisionalPatents} provisional patent applications filed for the technology behind NISCHINT.` },
    { icon: "users", title: "A company you can verify", body: `Built by ${site.company.legalName}, a ${site.company.city}-based team. Seed funding round closed.` },
  ];
  const promises = [
    "We do not sell personal data.",
    "Safety data collected for alerting is never used to build advertising profiles.",
    "Permissions are opt-in, and you can request account deletion at any time.",
    "A human you chose always acts first. NISCHINT does not dispatch emergency services.",
  ];
  return (
    <Section id="trust" labelledBy="trust-title" tone="navy">
      <SectionHeading id="trust-title" light eyebrow="Why you can trust us" title="Nothing more, nothing less" intro="Trust is everything in safety, so here is exactly where we stand." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.title} data-reveal className="rounded-[var(--radius-card)] border border-white/15 bg-white/[0.06] p-6">
            <Icon name={f.icon} className="text-mint" />
            <h3 className="mt-4 text-lg font-bold text-white">{f.title}</h3>
            <p className="mt-2 text-[15px] text-[#c3d3e6]">{f.body}</p>
          </div>
        ))}
      </div>
      <div data-reveal className="mt-8 grid gap-6 rounded-[var(--radius-card)] bg-white p-7 text-navy md:grid-cols-[1fr_1.4fr] md:p-9">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold">
            <Icon name="lock" className="text-blue" /> Our privacy promises
          </h3>
          <p className="mt-2 text-[15px] text-ink-soft">Safety should feel like care, not surveillance.</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[15px] font-semibold">
            <Link href="/trust-and-safety">Trust &amp; Safety</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/security">Security</Link>
          </div>
        </div>
        <ul className="space-y-3">
          {promises.map((p) => (
            <li key={p} className="flex gap-3 text-[15px]">
              <Icon name="check" className="mt-0.5 shrink-0 text-green-text" size={20} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** Parameters 07 and 13: renders real proof only. Nothing is shown until it exists. */
export function Proof() {
  const quotes = testimonials.filter((t) => t.published && t.consentOnFile);
  const metrics = pilotMetrics.filter((m) => m.published);
  return (
    <Section id="proof" labelledBy="proof-title" tone="cream">
      <SectionHeading
        id="proof-title"
        eyebrow="From the Thane pilot"
        title="Proof, not promises"
        intro="We won't show star ratings, user counts or rescue stories we can't verify. Real results and family stories will appear here, with permission and methodology."
      />
      {metrics.length > 0 ? (
        <ul className="grid gap-5 sm:grid-cols-3">
          {metrics.map((m) => (
            <li key={m.label} className="rounded-[var(--radius-card)] bg-white p-6">
              <p className="font-display text-4xl font-extrabold text-blue">{m.value}</p>
              <p className="mt-1 font-semibold">{m.label}</p>
              <p className="mt-2 text-sm text-ink-muted">
                {m.methodology} · {m.period} · n = {m.sampleSize}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div data-reveal className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Pilot families", b: "Results will be published after the Thane pilot, with dates and how they were measured." },
            { t: "Alerts and check-ins", b: "Aggregate, opt-in figures only. Never individual data." },
            { t: "What families say", b: "Quotes appear only with written permission from the person quoted." },
          ].map((c) => (
            <div key={c.t} className="rounded-[var(--radius-card)] border-2 border-dashed border-[#d9c99f] bg-white/60 p-6">
              <p className="font-semibold">{c.t}</p>
              <p className="mt-2 text-[15px] text-ink-soft">{c.b}</p>
            </div>
          ))}
        </div>
      )}
      {quotes.length > 0 && (
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {quotes.map((q) => (
            <li key={q.quote}>
              <figure className="rounded-[var(--radius-card)] bg-white p-7">
                <blockquote className="text-lg">&ldquo;{q.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm text-ink-muted">
                  {q.name}, {q.context}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

/** Parameter 14: consistent case-study template. Illustrative entries are labelled. */
export function Stories() {
  return (
    <Section id="stories" labelledBy="stories-title" tone="white">
      <SectionHeading
        id="stories-title"
        eyebrow="Stories"
        title="What it could look like in a real week"
        intro="These are illustrative scenarios to show how features work together. They are not real incidents."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {stories.map((s) => (
          <article key={s.id} data-reveal className="rounded-[var(--radius-card)] border border-line bg-calm p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-bold">{s.title}</h3>
              {s.illustrative && <span className="rounded-full bg-[#efeaf9] px-3 py-1 text-xs font-semibold text-[#4b3a7a]">Illustrative, not a real incident</span>}
            </div>
            <dl className="mt-5 grid gap-4 text-[15px] sm:grid-cols-2">
              <div>
                <dt className="font-semibold">Situation</dt>
                <dd className="text-ink-soft">{s.situation}</dd>
              </div>
              <div>
                <dt className="font-semibold">What the family needed</dt>
                <dd className="text-ink-soft">{s.need}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold">NISCHINT features involved</dt>
                <dd className="text-ink-soft">{s.capability}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold">Steps</dt>
                <dd>
                  <ol className="mt-1 list-decimal space-y-1 pl-5 text-ink-soft">
                    {s.steps.map((st) => (
                      <li key={st}>{st}</li>
                    ))}
                  </ol>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Limitations</dt>
                <dd className="text-ink-soft">{s.limitations}</dd>
              </div>
              <div>
                <dt className="font-semibold">Outcome</dt>
                <dd className="text-ink-soft">{s.outcome}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}

export { StatusBadge };

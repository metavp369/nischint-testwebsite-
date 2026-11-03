import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { LinkButton, Section, SectionHeading } from "../ui";
import { Icon } from "../icons";
import { plans, planFootnote } from "@/content/plans";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { FaqJsonLd } from "../JsonLd";

/** Parameter 08. */
export function Pricing({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <Section id="plans" labelledBy="plans-title" tone="calm">
      <SectionHeading
        id="plans-title"
        eyebrow="Plans"
        title={headingLevel === "h1" ? "Simple plans for every family" : "Simple, transparent plans"}
        intro="Start with a 7-day free trial, then pick the plan that fits your family. Prices include GST."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((p) => (
          <article
            key={p.id}
            data-reveal
            aria-labelledby={`plan-${p.id}`}
            className={clsx(
              "relative flex flex-col rounded-[1.5rem] border bg-white p-7 sm:p-9",
              p.highlight ? "border-2 border-blue shadow-[0_24px_60px_-30px_rgba(10,91,211,0.45)]" : "border-line",
            )}
          >
            {p.highlight && <p className="absolute -top-3.5 left-7 rounded-full bg-blue px-3 py-1 text-xs font-semibold text-white">For families</p>}
            <h3 id={`plan-${p.id}`} className="text-2xl font-extrabold">
              {p.name}
            </h3>
            <p className="mt-1 text-[15px] text-ink-muted">{p.bestFor}</p>
            <p className="mt-5">
              <span className="font-display text-5xl font-extrabold">{p.price}</span>
              <span className="text-lg text-ink-muted">{p.period}</span>
            </p>
            <p className="text-sm text-ink-muted">{p.note}</p>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-[15px]">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-green-text" />
                  {f}
                </li>
              ))}
            </ul>
            <LinkButton href="/thane#waitlist" variant={p.highlight ? "primary" : "secondary"} className="mt-8">
              Join the waitlist
            </LinkButton>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-sm text-ink-muted">{planFootnote}</p>
    </Section>
  );
}

/** Parameter 15. */
export function ChecklistOffer() {
  return (
    <Section id="checklist" labelledBy="checklist-title" tone="white">
      <div data-reveal className="grid items-center gap-8 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#e4f7f2_0%,#eaf2fd_100%)] p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-teal-text">Free resource</p>
          <h2 id="checklist-title" className="text-3xl font-extrabold sm:text-4xl">
            Build your family&rsquo;s trusted contact plan
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            A printable Family Safety Readiness Checklist: who to call first, what to keep by the phone, and how to agree check-ins with
            the people you love. Useful with or without NISCHINT.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton href="/resources/family-safety-checklist">
              Open the checklist <Icon name="arrowRight" size={20} />
            </LinkButton>
          </div>
          <p className="mt-3 text-sm text-ink-muted">No sign-up needed. Nothing you write on it is sent to us.</p>
        </div>
        <ul aria-label="Checklist preview" className="space-y-3 rounded-[1.5rem] bg-white p-6 text-[15px] shadow-sm">
          {["Three people to call, in order", "Emergency numbers: 112, 100, 108", "A daily \"reached safely\" habit", "Medicines and doctor's number, written down", "What to do if a phone goes quiet"].map((x) => (
            <li key={x} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-teal" />
              {x}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/** Parameter 16. Native <details>: keyboard and screen-reader friendly. */
export function FaqList({ items = faqs, withSchema = true }: { items?: typeof faqs; withSchema?: boolean }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-14 items-center justify-between gap-4 px-6 py-4 text-left text-lg font-semibold text-navy hover:bg-calm">
            <h3 className="font-sans text-[17px] font-semibold tracking-normal">{f.q}</h3>
            <Icon name="chevronDown" className="faq-chevron shrink-0 text-blue transition-transform" />
          </summary>
          <p className="px-6 pb-6 text-ink-soft">{f.a}</p>
        </details>
      ))}
      {withSchema && <FaqJsonLd items={items} />}
    </div>
  );
}

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title" tone="calm">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.8fr]">
        <SectionHeading
          id="faq-title"
          eyebrow="Questions, answered"
          title="Straight answers"
          intro={
            <>
              Can&rsquo;t find yours? <Link href="/contact">Ask our team</Link>.
            </>
          }
        />
        <FaqList />
      </div>
    </Section>
  );
}

/** Parameter 17. */
export function FinalCta() {
  return (
    <section aria-labelledby="final-title" className="relative overflow-hidden bg-navy py-24 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_20%,rgba(31,184,154,0.25),transparent_70%),radial-gradient(50%_70%_at_10%_90%,rgba(10,91,211,0.35),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <Image src="/brand/nischint-shield.png" alt="" width={72} height={79} className="mx-auto" />
        <h2 id="final-title" className="mt-6 text-4xl font-extrabold sm:text-5xl">
          Care doesn&rsquo;t stop when you&rsquo;re apart.
        </h2>
        <p className="mt-5 text-lg text-[#d5e2f2]">
          We&rsquo;re opening city by city, starting with Thane. Join the waitlist and you&rsquo;ll be among the first families invited.
        </p>
        <LinkButton href="/thane#waitlist" variant="light" className="mt-8">
          Join the waitlist
        </LinkButton>
      </div>
    </section>
  );
}

/** Parameter 18: only real, published channels. */
export function Support() {
  const c = site.contact;
  return (
    <Section id="support" labelledBy="support-title" tone="white">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading
            id="support-title"
            eyebrow="Real people, real answers"
            title="Talk to the NISCHINT team"
            intro="Questions about plans, privacy or the pilot? Write to us and a member of our team will reply by email."
            className="!mb-6"
          />
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-center gap-3">
              <Icon name="mail" className="text-blue" />
              General support: <a href={`mailto:${c.support}`} className="font-semibold">{c.support}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="lock" className="text-blue" />
              Privacy and grievances: <a href={`mailto:${c.grievance}`} className="font-semibold">{c.grievance}</a>
            </li>
            {c.phone && (
              <li className="flex items-center gap-3">
                <Icon name="phone" className="text-blue" />
                Phone: <a href={`tel:${c.phone}`} className="font-semibold">{c.phone}</a>
              </li>
            )}
            {c.hours && <li className="text-ink-muted">Support hours: {c.hours}</li>}
          </ul>
          <LinkButton href="/contact" variant="secondary" className="mt-6">
            Send us a message
          </LinkButton>
        </div>
        <div className="self-start rounded-[var(--radius-card)] border border-sos/25 bg-[#fdf3f3] p-7">
          <h3 className="text-lg font-bold text-[#8f1d1d]">If someone is in danger right now</h3>
          <p className="mt-2 text-[15px] text-[#5a2a2a]">
            Don&rsquo;t write to us. Call emergency services directly. Our support channels are not an emergency dispatch service.
          </p>
          <ul className="mt-4 grid grid-cols-3 gap-3 text-center">
            {[
              { n: site.emergency.all, l: "Emergency" },
              { n: site.emergency.police, l: "Police" },
              { n: site.emergency.ambulance, l: "Ambulance" },
            ].map((e) => (
              <li key={e.n}>
                <a href={`tel:${e.n}`} className="flex min-h-16 flex-col items-center justify-center rounded-xl bg-white py-2 no-underline">
                  <span className="font-display text-2xl font-extrabold text-sos">{e.n}</span>
                  <span className="text-xs text-ink-muted">{e.l}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

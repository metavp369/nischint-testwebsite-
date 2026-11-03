import clsx from "clsx";
import { PageHeader } from "./PageHeader";
import { PhotoSlot } from "./media";
import { LinkButton, Section, SectionHeading, StatusBadge, accentClasses } from "./ui";
import { Icon } from "./icons";
import { FinalCta, Support } from "./home/Convert";
import type { Audience } from "@/content/audiences";

export function AudiencePage({ a, children }: { a: Audience; children?: React.ReactNode }) {
  const ac = accentClasses[a.accent];
  return (
    <>
      <PageHeader
        path={a.path}
        crumb={a.crumb}
        eyebrow={a.eyebrow}
        title={a.title}
        intro={<p>{a.intro}</p>}
        aside={
          <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-40px_rgba(6,43,87,0.5)]">
            <PhotoSlot src={a.photo.src} alt={a.photo.alt} brief={a.photo.brief} width={960} height={1080} priority sizes="(min-width: 1024px) 440px, 92vw" />
          </div>
        }
      >
        <LinkButton href="/thane#waitlist">Join the waitlist</LinkButton>
        <LinkButton href="/how-it-works" variant="secondary">
          How it works
        </LinkButton>
      </PageHeader>

      <Section labelledBy="moments-title" tone="calm">
        <h2 id="moments-title" className="sr-only">
          What it feels like
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {a.moments.map((m) => (
            <article key={m.title} data-reveal className="relative overflow-hidden rounded-[var(--radius-card)] bg-white p-7">
              <span aria-hidden="true" className={clsx("absolute inset-x-0 top-0 h-1.5", ac.bar)} />
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="mt-2 text-ink-soft">{m.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id={a.extraId} labelledBy="helps-title" tone="white">
        <SectionHeading id="helps-title" eyebrow="How NISCHINT helps" title="What's ready at launch, and what isn't yet" />
        <ul className="grid gap-4 md:grid-cols-2">
          {a.helps.map((h) => (
            <li key={h.name} data-reveal className="flex flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-calm p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{h.name}</h3>
                <StatusBadge status={h.status} />
              </div>
              <p className="text-[15px] text-ink-soft">{h.detail}</p>
            </li>
          ))}
        </ul>
        {children}
      </Section>

      <Section labelledBy="controls-title" tone="cream">
        <div className="grid gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-[var(--radius-card)] bg-white p-7">
            <h2 id="controls-title" className="flex items-center gap-2 text-2xl font-bold">
              <Icon name="lock" className="text-blue" /> Permissions and privacy
            </h2>
            <ul className="mt-4 space-y-3">
              {a.permissions.map((p) => (
                <li key={p} className="flex gap-3 text-[15px]">
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-green-text" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="rounded-[var(--radius-card)] bg-white p-7">
            <h2 className="flex items-center gap-2 text-2xl font-bold">
              <Icon name="alert" className="text-[#7a4a00]" /> Honest limits
            </h2>
            <ul className="mt-4 space-y-3">
              {a.limits.map((l) => (
                <li key={l} className="flex gap-3 text-[15px] text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b07a1a]" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FinalCta />
      <Support />
    </>
  );
}

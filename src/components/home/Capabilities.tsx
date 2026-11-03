import Link from "next/link";
import clsx from "clsx";
import { Section, SectionHeading, StatusBadge, accentClasses } from "../ui";
import { capabilities } from "@/content/features";

/** Parameter 11. */
export function Capabilities() {
  return (
    <Section id="capabilities" labelledBy="capabilities-title" tone="white">
      <SectionHeading
        id="capabilities-title"
        eyebrow="Explore NISCHINT"
        title="One app for the people you look after"
        intro="Every card says who it helps, what it does and whether it's ready. The apps open at launch; nothing here is live today."
      />
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => {
          const a = accentClasses[c.accent];
          return (
            <li key={c.id} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-calm p-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span aria-hidden="true" className={clsx("h-2.5 w-10 rounded-full", a.bar)} />
                <StatusBadge status={c.status} />
              </div>
              <h3 className="text-xl font-bold">{c.title}</h3>
              <dl className="mt-3 space-y-3 text-[15px]">
                <div>
                  <dt className="font-semibold text-navy">Who it helps</dt>
                  <dd className="text-ink-soft">{c.who}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">What it does</dt>
                  <dd className="text-ink-soft">{c.what}</dd>
                </div>
              </dl>
              <Link href={c.cta.href} className={clsx("mt-auto pt-5 font-semibold no-underline", a.text)}>
                {c.cta.label} →
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, LinkButton } from "@/components/ui";
import { FaqList } from "@/components/home/Convert";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Trust & Safety",
  description: "How NISCHINT approaches trust and safety: humans decide, AI assists; volunteer verification; what NISCHINT is and isn't; privacy and grievances.",
  alternates: { canonical: "/trust-and-safety" },
};

const verification = [
  { t: "Identity", b: "Every Nischint Saathi's identity is checked before they serve." },
  { t: "Documents", b: "Supporting documents are collected and checked as applicable to the role." },
  { t: "Applicable background checks", b: "Background verification appropriate to the responsibility being granted. Anyone in a one-on-one role must clear police verification first." },
  { t: "Ongoing accountability", b: "Verification isn't one-time. Standing is reviewed and can be withdrawn." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        path="/trust-and-safety"
        crumb="Trust & Safety"
        eyebrow="Trust & Safety"
        title="Safety should feel like care, not surveillance"
        intro={<p>This page explains, in plain language, the principles NISCHINT is built on.</p>}
      />
      <Section labelledBy="humans-title" tone="calm">
        <div className="grid gap-6 lg:grid-cols-2">
          <div data-reveal className="rounded-[var(--radius-card)] bg-white p-8">
            <h2 id="humans-title" className="text-2xl font-extrabold">
              Humans decide. AI assists.
            </h2>
            <p className="mt-3 text-ink-soft">
              NISCHINT&rsquo;s AI learns what a normal day looks like and raises an alert when something meaningfully breaks that pattern. That is where the machine&rsquo;s job
              ends. A human guardian, someone you chose, always acts first: every alert goes to your designated people, and they decide what happens next. NISCHINT does not
              autonomously escalate to emergency services on anyone&rsquo;s behalf.
            </p>
          </div>
          <div data-reveal className="rounded-[var(--radius-card)] bg-white p-8">
            <h2 className="text-2xl font-extrabold">What NISCHINT is, and isn&rsquo;t</h2>
            <p className="mt-3 text-ink-soft">
              NISCHINT is a risk-signal and alerting layer. It is not a guaranteed-prevention, emergency-response or rescue service, and it does not replace police, ambulance or
              other emergency services. Alert delivery depends on factors outside our control, including device connectivity, location accuracy, battery and third-party network
              services. In a genuine emergency, always contact local emergency services directly (police {site.emergency.police}, ambulance {site.emergency.ambulance}, or{" "}
              {site.emergency.all}).
            </p>
            <p className="mt-3 text-ink-soft">We do not sell personal data, and we do not use safety data collected for alerting to build advertising profiles.</p>
          </div>
        </div>
      </Section>
      <Section labelledBy="saathi-title" tone="white">
        <SectionHeading
          id="saathi-title"
          eyebrow={site.foundation.name}
          title="Volunteers: verified before they serve"
          intro="The Nischint Seva Foundation runs a volunteer programme, Nischint Saathi. Volunteer response through the NISCHINT app is not live. If it launches, it will be opt-in only and never on by default, and we'll say so here first."
        />
        <ol className="grid gap-5 md:grid-cols-4">
          {verification.map((v, i) => (
            <li key={v.t} data-reveal className="rounded-[var(--radius-card)] bg-calm p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display font-extrabold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{v.t}</h3>
              <p className="mt-2 text-[15px] text-ink-soft">{v.b}</p>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-sm text-ink-muted">A verified badge reflects completion of the applicable NISCHINT checks. It is not a guarantee of future conduct.</p>
        <LinkButton href={site.foundation.volunteerUrl} variant="secondary" className="mt-6">
          Become a Nischint Saathi →
        </LinkButton>
      </Section>
      <Section labelledBy="tns-faq" tone="calm">
        <SectionHeading id="tns-faq" title="Common questions" />
        <FaqList
          items={[
            {
              q: "How do I report a platform concern or grievance?",
              a: `For a platform-related concern (not an emergency), contact NISCHINT support at ${site.contact.support} or the grievance channel at ${site.contact.grievance}. This is not an emergency dispatch channel. In an emergency, contact local emergency services directly (police ${site.emergency.police}, ambulance ${site.emergency.ambulance}).`,
            },
            {
              q: "What does a verified badge on NISCHINT mean?",
              a: "A verified badge reflects completion of the applicable NISCHINT checks. It is not a guarantee of future conduct.",
            },
          ]}
        />
      </Section>
    </>
  );
}

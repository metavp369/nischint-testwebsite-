import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { PrintButton } from "@/components/PrintButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Family Safety Readiness Checklist (free, printable)",
  description:
    "A free printable checklist to build your family's trusted contact plan: who to call first, emergency numbers in India, daily check-in habits and what to do if a phone goes quiet.",
  alternates: { canonical: "/resources/family-safety-checklist" },
};

const sections = [
  {
    title: "1. Your trusted contacts, in order",
    items: [
      "First person to call: name and number",
      "Second person to call: name and number",
      "Someone who lives nearby and can reach in person within 30 minutes",
      "Everyone on this list knows they're on it, and has agreed",
    ],
  },
  {
    title: "2. Numbers to keep by the phone",
    items: [
      `Emergency: ${site.emergency.all}`,
      `Police: ${site.emergency.police} · Ambulance: ${site.emergency.ambulance}`,
      "Family doctor and nearest hospital with an emergency department",
      "Building security or society office",
    ],
  },
  {
    title: "3. Daily habits",
    items: [
      "Agree a simple \"reached safely\" message for late journeys",
      "Share your usual route for regular commutes with one trusted person",
      "Keep phones charged above 30% before heading out at night",
      "Elders: a fixed morning time when someone checks in",
    ],
  },
  {
    title: "4. Health and home (for elders living alone)",
    items: [
      "Medicines and doses written on one sheet near the door",
      "A spare key with a trusted neighbour",
      "Allergies and blood group noted for family",
    ],
  },
  {
    title: "5. If a phone goes quiet",
    items: [
      "Try a call and a message, then the next person on the list",
      "Ask the nearby contact to check in person",
      `If you believe someone is in danger, call ${site.emergency.all}. Don't wait for an app.`,
    ],
  },
];

export default function Page() {
  return (
    <>
      <div className="no-print">
        <PageHeader
          path="/resources/family-safety-checklist"
          crumb="Family Safety Checklist"
          eyebrow="Free resource"
          title="Family Safety Readiness Checklist"
          intro={<p>Print it, fill it in together, and stick it on the fridge. No sign-up, and nothing you write is sent to us. Useful with or without NISCHINT.</p>}
        >
          <PrintButton />
        </PageHeader>
      </div>
      <Section tone="calm">
        <div className="mx-auto max-w-3xl rounded-[var(--radius-card)] bg-white p-7 sm:p-10">
          <p className="hidden text-sm print:block">NISCHINT · Family Safety Readiness Checklist · nischint.care</p>
          {sections.map((s) => (
            <section key={s.title} className="print-break mt-8 first:mt-0">
              <h2 className="text-xl font-extrabold">{s.title}</h2>
              <ul className="mt-4 space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-teal" />
                    <span>
                      {it}
                      <span aria-hidden="true" className="mt-2 block h-px w-full border-b border-dashed border-[#c3d2e4]" />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="mt-10 text-sm text-ink-muted">
            This checklist is general safety guidance, not professional advice. NISCHINT is not an emergency service.
          </p>
        </div>
      </Section>
    </>
  );
}

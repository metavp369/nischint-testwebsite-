import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui";
import { FaqList, FinalCta, Pricing } from "@/components/home/Convert";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description: "Simple plans for every family: start with a 7-day free trial, then Individual ₹299/month or Family ₹999/month. Prices include GST.",
  alternates: { canonical: "/plans" },
};

const rows = [
  ["Hermes AI deviation detection", "Included", "Included"],
  ["SOS: hold 3 seconds, alerts your circle", "Included", "Included"],
  ["Guardian connections", "1 protected person + 2 guardians (one-way)", "Up to 4 members, each guardian and protected (mutual)"],
  ["Location history", "Included", "Included"],
  ["Alert Center", "Full", "Full"],
  ["NISCHINT wearable", "Optional, planned add-on", "Optional, planned add-on"],
];

export default function Page() {
  return (
    <>
      <PageHeader
        path="/plans"
        crumb="Plans"
        eyebrow="Plans & pricing"
        title="Simple plans for every family"
        intro={<p>Paid plans activate at launch. Join the waitlist now and you&rsquo;ll be first in line.</p>}
      />
      <Pricing />
      <Section labelledBy="compare-title" tone="white">
        <SectionHeading id="compare-title" title="Compare plans in detail" />
        <div className="relative overflow-x-auto rounded-[var(--radius-card)] border border-line">
          <table className="w-full min-w-[620px] text-left text-[15px]">
            <caption className="sr-only">Individual and Family plans compared</caption>
            <thead className="bg-calm">
              <tr>
                <th scope="col" className="px-5 py-4">
                  Feature
                </th>
                <th scope="col" className="px-5 py-4">
                  Individual · ₹299/mo
                </th>
                <th scope="col" className="px-5 py-4">
                  Family · ₹999/mo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map(([f, a, b]) => (
                <tr key={f}>
                  <th scope="row" className="px-5 py-4 font-semibold">
                    {f}
                  </th>
                  <td className="px-5 py-4 text-ink-soft">{a}</td>
                  <td className="px-5 py-4 text-ink-soft">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 rounded-[var(--radius-card)] bg-cream p-6 text-[15px] text-ink-soft">
          <h3 className="text-lg font-bold text-navy">Community help, coming later</h3>
          <p className="mt-2">
            We&rsquo;re working with the {site.foundation.name} on a network of verified local volunteers. It isn&rsquo;t part of any plan today, it won&rsquo;t be sold as one, and
            volunteers don&rsquo;t respond to SOS alerts at launch. In an emergency, NISCHINT alerts your circle and gives you one-tap access to call 112.
          </p>
        </div>
      </Section>
      <Section labelledBy="plans-faq" tone="calm">
        <SectionHeading id="plans-faq" title="Questions, answered" />
        <FaqList items={faqs.filter((f) => /cost|available|wearable|circle/i.test(f.q))} />
      </Section>
      <FinalCta />
    </>
  );
}

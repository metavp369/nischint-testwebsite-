import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, StatusBadge } from "@/components/ui";
import { technologyRows } from "@/content/features";
import type { Status } from "@/content/site";
import { FinalCta } from "@/components/home/Convert";

export const metadata: Metadata = {
  title: "Technology & wearable: what's ready and what's planned",
  description:
    "A transparent list of NISCHINT capabilities: what ships at launch, what's in testing, and what's planned, including Hermes AI deviation detection and the NISCHINT wearable.",
  alternates: { canonical: "/technology" },
};

const groups: { title: string; intro: string; statuses: Status[] }[] = [
  { title: "Ready at launch", intro: "Built into the app when it opens in your city.", statuses: ["launch", "launch-date"] },
  { title: "In testing", intro: "Being tried with a small group. Not yet available to everyone.", statuses: ["testing", "soon"] },
  { title: "Planned and in research", intro: "Not available. We'll only describe these as features once they're built, tested and approved.", statuses: ["planned", "later"] },
];

export default function Page() {
  return (
    <>
      <PageHeader
        path="/technology"
        crumb="Technology & wearable"
        eyebrow="Technology"
        title="What's ready, what's being tested, what's next"
        intro={
          <p>
            Safety technology should be honest about itself. Here is every NISCHINT capability, labelled clearly. The patent-pending technology behind NISCHINT is covered by three
            provisional patent applications.
          </p>
        }
      />
      {groups.map((g, gi) => (
        <Section key={g.title} labelledBy={`tech-${gi}`} tone={gi % 2 ? "white" : "calm"}>
          <SectionHeading id={`tech-${gi}`} title={g.title} intro={g.intro} />
          <div className="relative overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white">
            <table className="w-full min-w-[560px] text-left text-[15px]">
              <caption className="sr-only">{g.title}</caption>
              <thead className="bg-calm text-sm text-ink-muted">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Capability
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    What it does
                  </th>
                  <th scope="col" className="px-5 py-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {technologyRows
                  .filter((r) => g.statuses.includes(r.status))
                  .map((r) => (
                    <tr key={r.name}>
                      <th scope="row" className="px-5 py-4 font-semibold text-navy">
                        {r.name}
                      </th>
                      <td className="px-5 py-4 text-ink-soft">{r.detail}</td>
                      <td className="px-5 py-4">
                        <StatusBadge status={r.status} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Section>
      ))}
      <FinalCta />
    </>
  );
}

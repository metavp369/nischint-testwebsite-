import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading, LinkButton } from "@/components/ui";
import { PhotoSlot } from "@/components/media";
import { Authority } from "@/components/home/Trust";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About NISCHINT: why we exist",
  description:
    "The story and mission behind NISCHINT: an AI-powered urban safety platform built for Indian families by Skybyte Venture Pvt. Ltd., launching first in Mumbai, Thane, Bengaluru, Delhi and Jaipur.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        path="/about"
        crumb="About"
        eyebrow="About us"
        title="Why NISCHINT exists"
        intro={
          <>
            <p>
              Everyone in an Indian city knows the feeling: the message that says &ldquo;reach home safe&rdquo;, the call you wait for when someone is out late. NISCHINT, from the word
              for &ldquo;free from worry&rdquo;, is a safety platform being built for women, children and seniors across Indian cities.
            </p>
            <p className="mt-4">Our belief is simple: safety should feel like care, not surveillance.</p>
          </>
        }
      />
      <Authority />
      <Section labelledBy="team-title" tone="white">
        <SectionHeading
          id="team-title"
          eyebrow="The team"
          title="Built in Mumbai"
          intro={`NISCHINT is built by the team at ${site.company.legalName}, building the technology that watches over the people you worry about most, without you having to watch every minute yourself.`}
        />
        <ul className="grid gap-6 sm:grid-cols-3">
          {site.leadership.map((p) => (
            <li key={p.name} data-reveal className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-calm">
              <div className="aspect-[4/5]">
                <PhotoSlot
                  src={`/images/team/${p.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                  alt={`${p.name}, ${p.role}`}
                  brief={`approved portrait of ${p.name} (copy from the current site).`}
                  width={640}
                  height={800}
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="text-[15px] text-ink-muted">
                  {p.role}, {site.company.legalName}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-[var(--radius-card)] bg-calm p-6 text-sm text-ink-muted">
          {site.company.legalName} · CIN: {site.company.cin} · GSTIN: {site.company.gstin} · DPIIT certificate {site.recognition.dpiit}
        </div>
        <LinkButton href="/contact" variant="secondary" className="mt-8">
          Contact the team
        </LinkButton>
      </Section>
    </>
  );
}

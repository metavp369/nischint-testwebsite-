import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Security & Responsible Disclosure",
  description: "NISCHINT's security practices and how to report a vulnerability through responsible disclosure.",
  alternates: { canonical: "/security" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        path="/security"
        crumb="Security"
        eyebrow="Security"
        title="Responsible disclosure"
        intro={<p>NISCHINT is a safety platform, and we hold ourselves to the same standard of care we ask of others. If you&rsquo;ve found a security vulnerability, we want to hear from you.</p>}
      />
      <Section tone="calm">
        <div className="max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-extrabold">How to report</h2>
            <p className="mt-3 text-ink-soft">
              Email <a href={`mailto:${site.contact.security}`}>{site.contact.security}</a> with a description of the issue, steps to reproduce it, and any relevant logs or
              screenshots. Please don&rsquo;t include other users&rsquo; data in your report.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">What we ask</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft">
              <li>Don&rsquo;t access, modify or delete data that isn&rsquo;t yours.</li>
              <li>Don&rsquo;t disrupt the service or degrade it for other users.</li>
              <li>Give us a reasonable window to fix the issue before any public disclosure.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">What you can expect</h2>
            <p className="mt-3 text-ink-soft">
              We acknowledge reports and keep you updated as we investigate. We do not pursue legal action against good-faith security research conducted within the rules above.
              NISCHINT does not currently run a paid bug bounty programme.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

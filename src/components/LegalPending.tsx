import { PageHeader } from "./PageHeader";
import { Section } from "./ui";
import { site } from "@/content/site";

/**
 * LAUNCH BLOCKER: legal text is not rewritten in this build.
 * Paste the approved text from the current nischint.care page into
 * src/content/legal/<slug>.md and render it here (see README, "Legal pages").
 */
export function LegalPending({ title, path }: { title: string; path: string }) {
  return (
    <>
      <PageHeader path={path} crumb={title} eyebrow="Legal" title={title} />
      <Section tone="calm">
        <div className="max-w-3xl rounded-[var(--radius-card)] bg-white p-8">
          <p className="text-lg">This page is being moved to our new website.</p>
          <p className="mt-3 text-ink-soft">
            For any question about this policy, your data or account deletion, email{" "}
            <a href={`mailto:${site.contact.grievance}`} className="font-semibold">
              {site.contact.grievance}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}

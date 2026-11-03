import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";
import { Icon } from "@/components/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & support",
  description: "Contact the NISCHINT team about plans, privacy, partnerships or the Thane pilot. Not an emergency service: in an emergency call 112.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  const c = site.contact;
  return (
    <>
      <PageHeader
        path="/contact"
        crumb="Contact & support"
        eyebrow="Contact"
        title="Talk to a real person"
        intro={<p>Questions about plans, privacy, partnerships or the pilot? Send us a message and a member of our team will reply by email.</p>}
      />
      <Section tone="calm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <div className="rounded-[var(--radius-card)] border border-sos/25 bg-[#fdf3f3] p-6">
              <h2 className="text-lg font-bold text-[#8f1d1d]">Emergency? Don&rsquo;t use this page.</h2>
              <p className="mt-2 text-[15px] text-[#5a2a2a]">
                Call <a href="tel:112" className="font-bold text-sos">112</a> (police {site.emergency.police}, ambulance {site.emergency.ambulance}). Our support channels are not an
                emergency dispatch service.
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] bg-white p-6">
              <h2 className="text-lg font-bold">Email us directly</h2>
              <ul className="mt-4 space-y-4 text-[15px]">
                <li className="flex gap-3">
                  <Icon name="mail" className="shrink-0 text-blue" />
                  <span>
                    Support
                    <br />
                    <a href={`mailto:${c.support}`} className="font-semibold">
                      {c.support}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="lock" className="shrink-0 text-blue" />
                  <span>
                    Privacy and grievances
                    <br />
                    <a href={`mailto:${c.grievance}`} className="font-semibold">
                      {c.grievance}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="shield" className="shrink-0 text-blue" />
                  <span>
                    Security reports
                    <br />
                    <a href={`mailto:${c.security}`} className="font-semibold">
                      {c.security}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

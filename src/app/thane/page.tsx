import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/ui";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { Icon } from "@/components/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Join the Thane pilot and waitlist",
  description:
    "NISCHINT is opening city by city, starting with a pilot in Thane. Join the waitlist to be among the first families invited. Every plan starts with a 7-day free trial at launch.",
  alternates: { canonical: "/thane" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        path="/thane"
        crumb="Thane pilot"
        eyebrow="Thane pilot · waitlist"
        title="Be among the first families invited"
        intro={
          <p>
            We&rsquo;re opening NISCHINT city by city, starting with Thane, then {site.launchCities.filter((c) => c !== "Thane").join(", ")}. Leave your details and we&rsquo;ll email
            you when your city opens.
          </p>
        }
      />
      <Section id="waitlist" labelledBy="waitlist-title" tone="calm">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 id="waitlist-title" className="text-3xl font-extrabold">
              Join the waitlist
            </h2>
            <ul className="mt-6 space-y-4 text-ink-soft">
              {[
                "Free to join. No payment details.",
                "Every plan starts with a 7-day free trial at launch.",
                "The apps aren't live yet. We'll tell you the moment they are.",
                "Unsubscribe from our emails at any time.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 shrink-0 text-green-text" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <WaitlistForm />
        </div>
      </Section>
    </>
  );
}

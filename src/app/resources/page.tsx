import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/ui";
import { FaqList } from "@/components/home/Convert";
import { Icon, type IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "FAQ & family safety resources",
  description:
    "Straight answers about NISCHINT: how it works, who can join your circle, when location is shared, offline behaviour, emergency services, devices, data and availability. Plus a free family safety checklist.",
  alternates: { canonical: "/resources" },
};

const guides: { href: string; icon: IconName; title: string; body: string }[] = [
  { href: "/resources/family-safety-checklist", icon: "clipboard", title: "Family Safety Readiness Checklist", body: "A printable plan: who to call, what to keep by the phone, and how to agree check-ins." },
  { href: "/how-it-works", icon: "route", title: "How NISCHINT works", body: "The full flow, permissions, escalation and what happens when things go wrong." },
  { href: "/trust-and-safety", icon: "shield", title: "Trust & Safety", body: "Humans decide, AI assists. What NISCHINT is, and isn't." },
  { href: "/technology", icon: "sparkle", title: "What's ready and what's planned", body: "Every capability, labelled at launch, in testing or planned." },
];

export default function Page() {
  return (
    <>
      <PageHeader path="/resources" crumb="FAQ & resources" eyebrow="Resources" title="Questions, answered" intro={<p>Plain answers from what we&rsquo;ve published. If yours isn&rsquo;t here, <Link href="/contact">ask our team</Link>.</p>} />
      <Section labelledBy="faq-all" tone="calm">
        <h2 id="faq-all" className="sr-only">
          Frequently asked questions
        </h2>
        <FaqList />
      </Section>
      <Section labelledBy="guides-title" tone="white">
        <SectionHeading id="guides-title" eyebrow="Guides" title="Helpful reading" />
        <ul className="grid gap-5 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="flex h-full gap-4 rounded-[var(--radius-card)] border border-line bg-calm p-6 no-underline transition-colors hover:border-blue">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-tint text-blue">
                  <Icon name={g.icon} />
                </span>
                <span>
                  <span className="block text-lg font-bold text-navy">{g.title}</span>
                  <span className="mt-1 block text-[15px] text-ink-soft">{g.body}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

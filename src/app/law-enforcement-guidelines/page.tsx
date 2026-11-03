import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";

// LAUNCH BLOCKER: replace with the approved legal text (see README).
export const metadata: Metadata = {
  title: "Law Enforcement Guidelines",
  alternates: { canonical: "/law-enforcement-guidelines" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPending title="Law Enforcement Guidelines" path="/law-enforcement-guidelines" />;
}

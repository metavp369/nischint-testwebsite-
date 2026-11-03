import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";

// LAUNCH BLOCKER: replace with the approved legal text (see README).
export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPending title="Privacy Policy" path="/privacy" />;
}

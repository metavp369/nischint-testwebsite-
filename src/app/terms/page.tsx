import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";

// LAUNCH BLOCKER: replace with the approved legal text (see README).
export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPending title="Terms of Service" path="/terms" />;
}

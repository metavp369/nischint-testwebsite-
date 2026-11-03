import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";

// LAUNCH BLOCKER: replace with the approved legal text (see README).
export const metadata: Metadata = {
  title: "DPDP Consent",
  alternates: { canonical: "/dpdp-consent" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPending title="DPDP Consent" path="/dpdp-consent" />;
}

import type { Metadata } from "next";
import { LegalPending } from "@/components/LegalPending";

// LAUNCH BLOCKER: replace with the approved legal text (see README).
export const metadata: Metadata = {
  title: "Delete your account",
  alternates: { canonical: "/delete-account" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <LegalPending title="Delete your account" path="/delete-account" />;
}

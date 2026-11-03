import type { Metadata } from "next";
import { AudiencePage } from "@/components/AudiencePage";
import { audiences } from "@/content/audiences";

const a = audiences.nri;

export const metadata: Metadata = {
  title: a.metaTitle,
  description: a.metaDescription,
  alternates: { canonical: a.path },
  openGraph: { title: a.metaTitle, description: a.metaDescription, url: a.path },
};

export default function Page() {
  return <AudiencePage a={a} />;
}

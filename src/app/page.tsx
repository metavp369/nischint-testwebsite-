import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Benefits, Problem, Solution } from "@/components/home/Story";
import { Capabilities } from "@/components/home/Capabilities";
import { Authority, Proof, Stories } from "@/components/home/Trust";
import { ChecklistOffer, Faq, FinalCta, Pricing, Support } from "@/components/home/Convert";

export const metadata: Metadata = {
  title: { absolute: "NISCHINT — Family safety for elders, women and children" },
  alternates: { canonical: "/" },
};

/**
 * Home: all 18 parameters, in the order set by the brief (Phase 7).
 * 01 02 03 10 Hero · 04 Benefits · 05 Problem · 06 Solution · 11 Capabilities
 * 12 Authority · 07 13 Proof · 14 Stories · 08 Pricing · 15 ChecklistOffer
 * 16 Faq · 17 FinalCta · 18 Support · 09 mobile-first throughout
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Problem />
      <Solution />
      <Capabilities />
      <Authority />
      <Proof />
      <Stories />
      <Pricing />
      <ChecklistOffer />
      <Faq />
      <FinalCta />
      <Support />
    </>
  );
}

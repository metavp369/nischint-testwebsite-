/**
 * Parameter 07: social proof. CMS-ready but EMPTY.
 * Add an entry only with written permission from the person quoted.
 * The Social Proof section renders only when at least one entry has
 * `published: true` and `consentOnFile: true`.
 */
export type Testimonial = {
  quote: string;
  name: string;
  context: string; // e.g. "Thane pilot family"
  source: "pilot" | "app-store" | "play-store" | "email";
  date: string; // ISO
  consentOnFile: boolean;
  published: boolean;
};

export const testimonials: Testimonial[] = [];

/** Parameter 13: verified pilot metrics. Empty until published with methodology. */
export type PilotMetric = {
  label: string;
  value: string;
  methodology: string;
  period: string;
  sampleSize: number;
  published: boolean;
};

export const pilotMetrics: PilotMetric[] = [];

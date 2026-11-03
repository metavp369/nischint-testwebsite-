/**
 * Approved organisation facts. Every value here was published on the live
 * nischint.care site as of 3 Nov 2026. Change only with sign-off.
 * See docs/01-PLAN.md §4 (feature-verification matrix).
 */
export const site = {
  name: "NISCHINT",
  domain: "nischint.care",
  url: "https://nischint.care",
  meaning: "निश्चिंत",
  meaningEnglish: "free from worry",
  tagline: "Peace of mind for families, near or far.",
  description:
    "NISCHINT is a family safety platform for elders, women and girls, and children in Indian cities. Trusted circles, I'm Safe check-ins and SOS that alerts the people you choose. Launching first in Mumbai, Thane, Bengaluru, Delhi and Jaipur.",
  launchCities: ["Mumbai", "Thane", "Bengaluru", "Delhi", "Jaipur"],
  pilotCity: "Thane",
  appsLive: false,
  appStoreUrl: null as string | null,
  playStoreUrl: null as string | null,
  company: {
    legalName: "Skybyte Venture Pvt. Ltd.",
    cin: "U66190MH2025PTC456397",
    gstin: "27ABRCS2404B1ZJ",
    city: "Mumbai",
  },
  recognition: {
    dpiit: "DIPP276221",
    gem: true,
    provisionalPatents: 3,
    seedClosed: true,
  },
  leadership: [
    { name: "Feroz Shaikh", role: "Founder & CEO" },
    { name: "Pravin Arora", role: "Co-Director & CFO" },
    { name: "Lokesh Thada", role: "Co-Director & COO" },
  ],
  contact: {
    support: "support@nischint.care",
    grievance: "privacy@nischint.care",
    security: "security@nischint.care",
    // No phone, WhatsApp or support hours are published. Add them here only
    // once approved; the Support section shows them automatically.
    phone: null as string | null,
    whatsapp: null as string | null,
    hours: null as string | null,
  },
  emergency: { all: "112", police: "100", ambulance: "108" },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/nischintcare/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nischintcare/" },
    { label: "X", href: "https://x.com/nischintcare" },
    { label: "YouTube", href: "https://www.youtube.com/@NischintCare" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591583519049" },
    { label: "Threads", href: "https://www.threads.com/@nischintcare" },
  ],
  foundation: {
    name: "Nischint Seva Foundation",
    volunteerUrl: "https://nischintsewa.org/volunteer",
  },
} as const;

export type Status = "launch" | "launch-date" | "testing" | "soon" | "planned" | "later";

export const statusLabel: Record<Status, string> = {
  launch: "At launch",
  "launch-date": "At launch, 26 Nov",
  testing: "In testing",
  soon: "Coming soon",
  planned: "Planned",
  later: "Coming later",
};

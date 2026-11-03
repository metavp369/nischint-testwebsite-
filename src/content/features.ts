import type { Status } from "./site";

/** Capability groups for parameter 11. Status values follow docs/01-PLAN.md §4. */
export type Capability = {
  id: string;
  title: string;
  who: string;
  what: string;
  status: Status;
  accent: "blue" | "teal" | "green" | "navy" | "mint";
  cta: { label: string; href: string };
};

export const capabilities: Capability[] = [
  {
    id: "elder",
    title: "Elder Safety",
    who: "Parents and grandparents who live independently, and the children who worry about them.",
    what: "Safe zones for home and familiar places, I'm Safe check-ins, and alerts to family when a daily routine breaks.",
    status: "launch",
    accent: "green",
    cta: { label: "Elder safety", href: "/elder-safety" },
  },
  {
    id: "women",
    title: "Women & Girls' Safety",
    who: "Women and girls commuting, travelling late or going somewhere new.",
    what: "Route Check before you leave, Safe Walk so your circle can follow until you arrive, and SOS one hold away.",
    status: "launch",
    accent: "blue",
    cta: { label: "Women & girls' safety", href: "/women-safety" },
  },
  {
    id: "child",
    title: "Child Safety",
    who: "Parents and guardians of school-going children.",
    what: "Guardian-side safe zones for school and tuition, and a check-in when the usual routine changes. Built privacy-first.",
    status: "launch",
    accent: "teal",
    cta: { label: "Child safety", href: "/child-safety" },
  },
  {
    id: "circle",
    title: "Trusted Guardian Circle",
    who: "Anyone who wants the right people to know when it matters.",
    what: "Choose your guardians. They see check-ins and alerts and what's been acknowledged, without anyone watching a dot on a map.",
    status: "launch",
    accent: "navy",
    cta: { label: "How the circle works", href: "/how-it-works#circle" },
  },
  {
    id: "journey",
    title: "Journey & Check-In Tools",
    who: "Anyone heading home late or taking an unfamiliar route.",
    what: "Compare up to three routes, see what's mapped along each, then start a Safe Walk. Route Check launches 26 Nov.",
    status: "launch-date",
    accent: "blue",
    cta: { label: "About Route Check", href: "/women-safety#route-check" },
  },
  {
    id: "future",
    title: "Future AI & Wearable Innovations",
    who: "Families who want help to reach them even when a phone isn't in hand.",
    what: "A NISCHINT wearable add-on and sensor-assisted AI Guardian check-ins are in development. Not available yet.",
    status: "planned",
    accent: "mint",
    cta: { label: "What's planned", href: "/technology" },
  },
];

/** Technology page: what ships, what's tested, what's planned. */
export const technologyRows: { name: string; detail: string; status: Status }[] = [
  { name: "I'm Safe check-in", detail: "One tap tells linked guardians you're okay.", status: "launch" },
  { name: "Family Circle", detail: "Guardians see check-ins, alerts and acknowledgements.", status: "launch" },
  { name: "Safety Zones", detail: "Home, school, office and routes; alerts when a routine breaks.", status: "launch" },
  { name: "Hermes AI deviation detection", detail: "Learns a normal routine and flags real deviations, not every stop and start.", status: "launch" },
  { name: "SOS", detail: "Hold for 3 seconds to alert your circle, with one-tap access to call 112.", status: "launch" },
  { name: "Alert Center", detail: "Active and resolved alerts in one place, climbing four levels until someone responds.", status: "launch" },
  { name: "Location history", detail: "Included in both plans.", status: "launch" },
  { name: "Route Check and Safe Walk", detail: "What's mapped along up to three routes; your circle can follow until you arrive.", status: "launch-date" },
  { name: "Official disaster warnings", detail: "SACHET (NDMA) warnings for districts you've saved, checked every minute.", status: "testing" },
  { name: "Weather for saved places", detail: "Hourly and daily forecasts, labelled as forecasts.", status: "testing" },
  { name: "Air quality", detail: "CPCB index from the nearest monitoring station.", status: "soon" },
  { name: "AI Guardian sensor-assisted check-ins", detail: "Using movement, voice and environment signals, with permission, to prompt a check-in. Scope to be confirmed.", status: "planned" },
  { name: "NISCHINT wearable", detail: "Optional add-on for people who don't always carry a phone. Price to be announced.", status: "planned" },
  { name: "Nischint Saathi community help", detail: "Verified local volunteers via the Nischint Seva Foundation. Not part of any plan; does not respond to SOS at launch.", status: "later" },
];

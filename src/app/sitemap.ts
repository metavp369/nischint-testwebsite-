import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/how-it-works", priority: 0.9, freq: "monthly" },
  { path: "/elder-safety", priority: 0.9, freq: "monthly" },
  { path: "/women-safety", priority: 0.9, freq: "monthly" },
  { path: "/child-safety", priority: 0.9, freq: "monthly" },
  { path: "/for-nri-families", priority: 0.8, freq: "monthly" },
  { path: "/plans", priority: 0.8, freq: "monthly" },
  { path: "/thane", priority: 0.8, freq: "weekly" },
  { path: "/technology", priority: 0.7, freq: "monthly" },
  { path: "/resources", priority: 0.7, freq: "monthly" },
  { path: "/resources/family-safety-checklist", priority: 0.7, freq: "monthly" },
  { path: "/about", priority: 0.6, freq: "monthly" },
  { path: "/trust-and-safety", priority: 0.6, freq: "monthly" },
  { path: "/security", priority: 0.4, freq: "monthly" },
  { path: "/contact", priority: 0.5, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({ url: `${site.url}${r.path}`, lastModified: now, changeFrequency: r.freq, priority: r.priority }));
}

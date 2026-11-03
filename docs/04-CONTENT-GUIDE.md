# Content guide

All words and facts live in `src/content/`. Edit those files (GitHub's web editor is fine). Components read from them, so you rarely need to touch layout code. Every push to the main branch redeploys on Vercel.

| To change… | Edit |
| --- | --- |
| Company facts, emails, phone, launch cities, social links, app-store links | `src/content/site.ts` |
| Capability cards and the Technology page table (and their status labels) | `src/content/features.ts` |
| Elder / Women / Child / NRI pages | `src/content/audiences.ts` |
| FAQ (home, Resources, FAQ schema) | `src/content/faq.ts` |
| Plans and prices | `src/content/plans.ts` |
| Problem vignettes and stories | `src/content/stories.ts` |
| Testimonials and pilot metrics | `src/content/testimonials.ts` |

## Status labels

Use one of: `launch` (At launch), `launch-date` (At launch, 26 Nov), `testing`, `soon`, `planned`, `later`. When the apps go live, change the wording of `launch` in `statusLabel` (in `site.ts`) to "Available", and set `appsLive: true` plus the store URLs.

## When the apps go live

1. In `site.ts`: set `appsLive: true`, `appStoreUrl`, `playStoreUrl` (real store links only).
2. Change the hero's primary button in `components/home/Hero.tsx` to "Download the app".
3. Update the "What is available right now?" FAQ answer.

## Adding a testimonial (parameter 07)

Only with **written permission** from the person. Add an entry to `testimonials` with `consentOnFile: true` and `published: true`. Keep the permission record outside the codebase.

## Adding pilot results (parameter 13)

Add to `pilotMetrics` with `methodology`, `period` and `sampleSize`, and `published: true`. Aggregate, opt-in data only. Never individual data, never "lives saved".

## Adding a real case study (parameter 14)

Add to `stories` with `illustrative: false` and `consentOnFile: true`, filling every field (situation, need, capability, steps, limitations, outcome). Get image permission for any photo.

## Photos to commission or license

Each placeholder on the site shows its brief. Use real people with signed releases; avoid fear, darkness and "victim" imagery; never stage anything that looks like a real rescue.

| File (in `public/`) | Brief | Size |
| --- | --- | --- |
| `images/hero-daughter-parent.jpg` | Adult daughter (30s) on a video call with her father (60s) at home in India, soft daylight, candid | 1120×1260 |
| `images/elder-morning-walk.jpg` | Man in his late 60s on a morning walk in a leafy Indian park, relaxed | 960×1080 |
| `images/women-evening-commute.jpg` | Woman in her 20s walking confidently out of a metro station at dusk, calm | 960×1080 |
| `images/child-school-gate.jpg` | Parent waving goodbye at a school gate; backs or side profiles only, no identifiable child faces | 960×1080 |
| `images/nri-video-call.jpg` | Woman abroad on a video call with her mother in India, both smiling | 960×1080 |
| `images/team/feroz-shaikh.jpg`, `pravin-arora.jpg`, `lokesh-thada.jpg` | Approved portraits from the current site | 640×800 |
| `app-screens/*.jpg` (11 files, added 3 Nov 2026) | Real app screens with demo data, cropped without the status bar, 780×1588. To replace one, keep the filename and size. Never redraw or invent screens | 780×1588 |

Compress photos to under ~200 KB (Squoosh or TinyPNG). Next.js serves them as AVIF/WebP automatically. Rebuild after adding files; placeholders switch to the real image at build time.

## Brand rules (short version)

Colours, type and voice are in the Nischint Brand Book. In code: tokens are in `src/app/globals.css`. Red is for SOS and emergencies only. Calm is the default.

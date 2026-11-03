# NISCHINT.CARE rebuild: plan

Prepared 3 Nov 2026. Sources: the Nischint Brand Book (3 Nov 2026), the "Ultimate Master Prompt" brief, and the live nischint.care site (/, /plans, /about, /trust-and-safety, /security), read on 3 Nov 2026.

**Truth rule used everywhere:** a feature counts as *confirmed* only if the live nischint.care site states it. Everything else is labelled *Planned*, *In testing* or *Coming later* on the page. The apps are not live yet, so even confirmed features are shown as **"At launch"**, never as available today.

---

## 1. Information architecture

Existing live URLs are kept, so search rankings and shared links survive the switch.

| Route | Purpose | Status |
| --- | --- | --- |
| `/` | Home: all 18 parameters in one story | New build |
| `/how-it-works` | Verified flow, permissions, escalation, limits, what happens offline | New |
| `/elder-safety` | Living-alone reassurance, scenarios, limits | New |
| `/women-safety` | Journeys, check-ins, Route Check, Safe Walk, permissions | New |
| `/child-safety` | Guardian-focused, privacy-first, age-appropriate language | New |
| `/for-nri-families` | Families abroad caring for parents in India | Kept URL, rebuilt |
| `/technology` | Available at launch vs in testing vs planned vs research | New |
| `/plans` | Individual ₹299/mo, Family ₹999/mo (incl. GST), 7-day trial at launch | Kept URL, rebuilt |
| `/thane` | Thane pilot + waitlist | Kept URL, rebuilt |
| `/about` | Mission, DPIIT, patents, seed round, leadership | Kept URL, rebuilt |
| `/trust-and-safety` | Humans decide, what Nischint is and isn't, Saathi verification | Kept URL, rebuilt |
| `/security` | Responsible disclosure | Kept URL, ported |
| `/resources` | FAQ hub + guides | New |
| `/resources/family-safety-checklist` | Free printable checklist (the intent offer) | New |
| `/contact` | Support form + official emails + emergency guidance | New |
| `/privacy`, `/terms`, `/dpdp-consent`, `/delete-account`, `/law-enforcement-guidelines` | Legal pages | **Must be ported from the live site by the team (legal text is not rewritten here)** |
| `/blog`, `/press`, `/careers`, `/investors`, `/partners` | Company pages | Out of scope for this build; port later |

## 2. Design direction

From the brand book: **calm Caregiver with a Sage's head.** Airy, light, documentary-real; never alarmist.

- **Palette (from the logo):** Nischint Blue `#0A5BD3`, Care Teal `#1FB89A`, Nischint Green `#34B53A`, Star Mint `#93FFC1` (accents only), Shield Navy `#062B57` (text), Calm White `#F6F9FB`, Warm Cream `#F5F1E6` (alternate sections), SOS Red `#D93A3A` (SOS only, used sparingly).
- **Type:** Manrope (display), Inter (body, 17 px base on mobile), Noto Sans Devanagari (निश्चिंत).
- **Signature motif:** the "connection arc": a thin line joining two people far apart, echoing the logo's embrace. Animated once on load; static under reduced motion.
- **Audience identities:** each pillar has its own accent within the one system: women = Blue, kids = Teal, elders = Green, families abroad = Navy.
- **Imagery:** real Indian families, daylight, dignity. Until approved photos exist, art-directed placeholders show the brief for each photo. No stock "victim" images, no fake dashboards.

## 3. Component plan

| Layer | Components |
| --- | --- |
| Layout | `SiteHeader` (mobile menu), `SiteFooter`, `SkipLink`, `EmergencyBar` ("In an emergency, call 112") |
| UI | `LinkButton`, `Section`, `Eyebrow`, `StatusBadge` (At launch · In testing · Planned · Coming later), `Icon`, `PhotoSlot`, `AppScreen`, `Reveal`, `ConnectionArc` |
| Home sections | `Hero`, `Benefits`, `Problem`, `Solution`, `Capabilities`, `Authority`, `SocialProof`, `Results`, `Stories`, `Pricing`, `ChecklistOffer`, `Faq`, `FinalCta`, `Support` |
| Forms | `WaitlistForm`, `ContactForm`, `/api/waitlist`, `/api/contact` (zod validation, honeypot, timing check, rate limit, consent, webhook or email delivery, honest errors) |
| SEO | per-page metadata, `sitemap.ts`, `robots.ts`, `JsonLd` (Organization, WebSite, FAQPage) |
| Content ("CMS") | typed files in `src/content/`: `site.ts`, `features.ts`, `faq.ts`, `stories.ts`, `testimonials.ts`, `plans.ts` |

## 4. Feature-verification matrix

| Capability | Source on live site | Status shown | Notes for approval |
| --- | --- | --- | --- |
| I'm Safe one-tap check-in | Home | At launch | |
| Family Circle | Home | At launch | |
| Safety Zones and routine learning | Home | At launch | |
| Alert Center (active/resolved) | Home, /plans | At launch | |
| SOS: hold 3 seconds, alerts your circle | /plans | At launch | |
| One-tap access to call 112 | Home meta, /plans | At launch | Calls are placed by the user; Nischint does not dispatch |
| 4-level escalation | Home | At launch | **Wording for levels 2 and 3 not published: needs product sign-off** |
| Hermes AI deviation detection | /plans | At launch | |
| Location history | /plans | At launch | |
| Location sharing | Home meta ("live location sharing"), Route Check Safe Walk | At launch | **Conflict: home also says "no live-tracking feed". Site copy uses "shared during a Safe Walk or alert" until product confirms** |
| Route Check + Safe Walk | Home | At launch, 26 Nov | OpenStreetMap disclaimer kept verbatim |
| Government disaster warnings (SACHET) | Home | In testing | Small group only |
| Weather forecasts for saved places | Home | In testing | |
| Air quality (CPCB) | Home | Coming soon | |
| Sensing: voice, health, movement, environment, behaviour | Home ("read continuously") | **Planned (AI Guardian sensor-assisted check-ins)** | Brief forbids presenting unverified AI incident recognition as launched; needs product confirmation of which signals ship at launch |
| NISCHINT wearable | /plans ("planned add-on") | Planned | Price not published |
| Fall detection | Not on site | Not mentioned | Concept only |
| Nischint Saathi volunteers in app | /plans, /trust-and-safety | Coming later | Not live; Foundation runs the programme separately |
| Child-specific features | Not on site | Guardian-side only | Children can be in a circle; children's phones don't receive environment alerts |
| Plans: Individual ₹299/mo, Family ₹999/mo, incl. GST | /plans | At launch | "Paid plans activate at launch" |
| 7-day free trial | Home, /plans | At launch | |
| iOS / Android apps | Home ("Apps not live yet") | Not live | **No store URLs used anywhere** |
| Thane pilot | Home, /thane | Open for sign-ups | |
| DPIIT recognition (DIPP276221) | /about | Shown | |
| GeM-registered | Footer | Shown | |
| 3 provisional patent applications | /about | Shown as "patent-pending" | |
| Seed funding closed | /about | Shown | |
| Support emails | /trust-and-safety, /security | support@, privacy@ (grievance), security@ | **No phone, WhatsApp or support hours published; none shown** |
| Testimonials, ratings, metrics, case studies | None | Not shown | CMS-ready sections ship hidden |

## 5. The 18-point implementation map

| # | Parameter | Where it lives | How the brief is met |
| --- | --- | --- | --- |
| 01 | Powerful headline | `Hero` | "Your loved ones may be far away. Peace of mind shouldn't be." with the निश्चिंत meaning above it |
| 02 | Persuasive subheadline | `Hero` | Names the three audiences and trusted circles, verified features only |
| 03 | Clear CTA | `Hero`, header | Primary "Explore NISCHINT", secondary "See how it works", plus a waitlist link because apps are not live |
| 04 | Key benefits | `Benefits` | Outcome cards (connected circle, timely check-ins, clearer communication, reassurance, accessible workflows) kept separate from feature claims |
| 05 | The problem | `Problem` | Three respectful vignettes: parent unreachable, late journey home, child delayed after school. No statistics |
| 06 | The solution | `Solution`, `/how-it-works` | Five-step flow, with failure modes and "not a replacement for emergency services" |
| 07 | Social proof | `SocialProof` + `content/testimonials.ts` | No fake reviews. Section ships hidden until real, permissioned entries exist |
| 08 | Transparent pricing | `Pricing`, `/plans` | Real published prices, trial, "paid plans activate at launch" |
| 09 | Mobile-friendly | Global | Mobile-first, 44 px+ targets, no horizontal overflow (tested at 360 px) |
| 10 | Cinematic hero visual | `Hero` (`ConnectionArc`, `PhotoSlot`, `AppScreen`) | Daughter and parent joined by an animated arc, app screenshot overlay, reduced-motion fallback |
| 11 | Capabilities and services | `Capabilities` + audience pages | Six groups, each with who, what, status and CTA |
| 12 | Authority signals | `Authority`, `/about` | DPIIT, GeM, patent-pending, seed round, company identity, privacy stance. No implied police/government endorsement |
| 13 | Results visualisation | `Results` | Honest "pilot results will be published with methodology" state; no invented numbers |
| 14 | Case studies | `Stories` + `content/stories.ts` | Fixed template; scenarios labelled "Illustrative, not a real incident" |
| 15 | High-value offer | `ChecklistOffer`, `/resources/family-safety-checklist` | Free printable Family Safety Readiness Checklist, no form wall |
| 16 | FAQ | `Faq`, `/resources` | The nine required questions, answered from the live site, plus FAQPage schema |
| 17 | Final CTA | `FinalCta` | "Care doesn't stop when you're apart." with one real action |
| 18 | Real human support | `Support`, `/contact` | Working form (honest errors if not connected), published emails, emergency guidance |

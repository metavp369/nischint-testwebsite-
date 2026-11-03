# Claims that need sign-off before launch

Everything on the site was taken from the live nischint.care pages (read 3 Nov 2026) unless listed here. Each item below is either a conflict on the live site, a gap the site needed filled, or a wording choice that product or legal should confirm. File and line pointers make each one easy to change.

## Product: please confirm

| # | Statement on the new site | Where | Why it needs sign-off |
| --- | --- | --- | --- |
| 1 | "Location is shared with your circle as part of an alert or SOS, and during a Safe Walk you start yourself." / "No live-tracking feed" | `content/faq.ts`, `content/audiences.ts` | **Conflict on the live site:** home says "no live-tracking feed", but the meta description says "live location sharing". Confirm exactly when location is shared. |
| 2 | Escalation levels 2 and 3 shown only as "Escalating" | `app/how-it-works/page.tsx` | The live site describes only level 1 (check-in with you) and level 4 (full circle). Supply wording for levels 2 and 3. |
| 3 | AI Safety Monitoring, microphone monitoring and Medicine Care shown as **At launch** | `content/features.ts`, `content/audiences.ts`, `app/technology/page.tsx` | Confirmed live by the team on 3 Nov 2026 and visible in the app screens. Voice/vitals/behaviour sensing beyond these is still not claimed. |
| 4 | Child Safety page describes guardian-side use of existing features only | `content/audiences.ts` (child) | The live site has no child-specific features. Confirm the use case, and get legal review of children's data under the DPDP Act. |
| 5 | "Invite the guardians you want in your circle: family, a trusted neighbour, a close friend." | `components/home/Story.tsx` | Confirm there's no restriction on who can be a guardian. |
| 6 | "A missed check-in may itself become a warning to your circle" (battery-dies scenario) | `app/how-it-works/page.tsx` | Based on the live line "a missed check-in becomes a warning". Confirm it applies when a phone switches off. |
| 7 | "Alerts can still reach your circle, but without an accurate location" (location off) | `app/how-it-works/page.tsx` | Inferred behaviour; confirm. |
| 8 | "NISCHINT is being built as a phone app for Android and iOS" | `content/faq.ts` | The live site shows App Store and Google Play badges but says apps are not live. Confirm platforms; no store links are used anywhere. |
| 9 | "Safety data… never used to build advertising profiles"; "We do not sell personal data" | `components/home/Trust.tsx` | Copied from live Trust & Safety page. Legal to confirm it matches the Privacy Policy. |
| 10a | **SOS hold time: site says 3 seconds, app says 2** | `content/plans.ts`, `content/features.ts`, `components/home/Story.tsx`, `content/audiences.ts` | The live /plans page says "hold 3 seconds"; the app SOS screen says "Hold for 2 seconds". Pick one and update everywhere. |
| 10b | **Live location on the app's home screen vs "no live-tracking feed" on the site** | `content/faq.ts`, `content/audiences.ts`, `components/home/Story.tsx` | The app home screen shows a "Live Location — View Full Map" card and Family Circle has a "Track" button. Reword the site's location claims to match how the app actually works (see item 1). |
| 10 | "You can request account deletion at any time" | `content/faq.ts`, `components/home/Trust.tsx` | Based on the live `/delete-account` page existing. Confirm the process. |

## Organisation: please confirm

| # | Statement | Source |
| --- | --- | --- |
| 11 | DPIIT certificate DIPP276221 | Live /about |
| 12 | GeM-registered (described as "a registration, not an endorsement") | Live footer |
| 13 | Three provisional patent applications; seed round closed | Live /about |
| 14 | Leadership: Feroz Shaikh (Founder & CEO), Pravin Arora (Co-Director & CFO), Lokesh Thada (Co-Director & COO) | Live /about |
| 15 | Support emails support@, privacy@ (grievances), security@ | Live /trust-and-safety, /security |

## Content written for this build (review tone and accuracy)

| # | Item | Where |
| --- | --- | --- |
| 16 | Three problem vignettes (parent not answering, late train, child late for tuition) | `content/stories.ts` |
| 17 | Two **illustrative** stories, clearly labelled "Illustrative, not a real incident" | `content/stories.ts` |
| 18 | Family Safety Readiness Checklist (general safety advice, e.g. "keep phones above 30%") | `app/resources/family-safety-checklist/page.tsx` |
| 19 | Hero place labels "You, in Bengaluru" / "Papa, in Jaipur" (narrative, not app UI) | `components/home/Hero.tsx` |
| 20 | Benefit cards (outcomes, not feature claims) | `components/home/Story.tsx` |

## Deliberately NOT on the site

Fall detection, automatic emergency dispatch, live monitoring by staff, 24/7 support, response-time guarantees, user counts, ratings, testimonials, "lives saved", partner logos, media coverage, phone/WhatsApp support, support hours, app-store links, release dates other than Route Check (26 Nov, from the live site).

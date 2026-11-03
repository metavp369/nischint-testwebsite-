# Testing report

Run on 3 Nov 2026 against a production build (`next build && next start`), using Playwright (Chromium), axe-core 4 and Lighthouse 12.

## Summary

| Area | Result |
| --- | --- |
| Build, type-check, lint | Pass. 29 routes, 27 static + 2 API |
| Pages load (20 routes + 404) | All 200; unknown URL returns a branded 404 |
| Accessibility (axe, WCAG 2.1 A/AA), all pages, desktop | **0 violations** |
| Accessibility (axe), home, 360 px mobile | **0 violations** |
| Lighthouse (home, mobile profile) | Accessibility 100 · Best Practices 100 · SEO 100 · Performance 90–99 |
| Horizontal overflow at 360 px and 1440 px | None (one Technology-table bug found and fixed) |
| Console errors / failed requests | None |
| One `<h1>` per page | Yes, all pages |

## Core Web Vitals (lab, Lighthouse mobile throttling)

| Metric | Target (field, p75) | Lab result |
| --- | --- | --- |
| LCP | ≤ 2.5 s | 1.6 s – 2.9 s across runs (local sandbox, variance from the test machine) |
| CLS | ≤ 0.1 | 0.001 |
| TBT (proxy for INP) | INP ≤ 200 ms | 90 – 190 ms |

Lab numbers are indicative only. Measure **field data** after launch in Vercel Speed Insights or Search Console. Fixed during testing: the hero originally faded in from transparent, which pushed LCP to 3.6 s; it now slides without fading.

## Forms

| Case | Expected | Result |
| --- | --- | --- |
| Valid waitlist / contact submission | 200, delivered to webhook | Pass (payload received by test webhook) |
| Invalid email | 422 with field error | Pass |
| Consent not ticked | 422 with field error | Pass |
| Honeypot filled | 400, plain message | Pass (fixed: previously leaked a technical message) |
| Submitted in under 3 s | 400, plain message | Pass |
| Cross-origin POST | 403 | Pass |
| No delivery configured | 503 "not connected, email support@" (no fake success) | Pass |
| Rate limit (11th request in 10 min) | 429 | Pass (limit raised from 5 to 10 so people correcting typos aren't locked out) |
| Browser UI submit on a phone viewport | Success message shown and focused for screen readers | Pass |
| Empty contact form | Blocked by native `required` | Pass |

## Interaction and accessibility

| Check | Result |
| --- | --- |
| First Tab lands on "Skip to content" | Pass |
| Mobile menu: `aria-expanded`, opens, Escape closes, focus returns to button | Pass |
| FAQ accordions open with click/Enter (native `<details>`) | Pass |
| `prefers-reduced-motion`: arc drawn statically, no reveal animations | Pass |
| Visible focus ring on all interactive elements | Pass (3 px blue outline) |
| Touch targets ≥ 44 px | Buttons, menu and form controls are 48 px tall |
| Mobile header at 390 px | Fixed during testing (waitlist button hidden below 640 px; it's in the menu) |

## SEO / technical

| Check | Result |
| --- | --- |
| Unique title and meta description per page | Yes |
| Canonical URLs | Yes |
| `sitemap.xml` (15 indexable URLs), `robots.txt` (disallows `/api/`) | Yes |
| JSON-LD: Organization + WebSite (all pages), FAQPage (home, resources), BreadcrumbList (inner pages) | Yes |
| Open Graph / Twitter card with 1200×630 image | Yes |
| Legal placeholder pages set to `noindex` | Yes |
| Security headers present, `X-Powered-By` removed | Yes |

## Not tested here (do before launch)

- **Real devices and screen readers** (TalkBack on Android, VoiceOver on iPhone, NVDA on Windows). Automated checks catch about a third of accessibility issues.
- **Safari and Firefox.** Only Chromium was tested here.
- **Real photos and app screenshots.** Layout was tested with placeholders; re-check after adding assets (especially hero LCP with a real photo; keep it under ~200 KB).
- **Live form delivery** to your real webhook or Resend account.
- **Field Core Web Vitals** after deployment.
- **Weak connectivity**: the site is static and light (~112 KB JS first load), but test on a real low-end Android on 3G.

## Known limitations

- Rate limiting is per server instance (in-memory). See README for a Redis-backed option.
- Legal pages are placeholders until the approved text is pasted in.
- `/blog`, `/press`, `/careers`, `/investors`, `/partners` from the old site are not built.
- Testimonials, pilot metrics and real case studies are empty by design until verified content exists.

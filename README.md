# nischint.care

The NISCHINT marketing website, rebuilt on Next.js 15, TypeScript and Tailwind CSS 4.
It implements all 18 parameters of the "Ultimate Master Prompt" brief and the Nischint Brand Book (3 Nov 2026).

| Doc | What's in it |
| --- | --- |
| `docs/01-PLAN.md` | Information architecture, design direction, component plan, **feature-verification matrix**, **18-point implementation map** |
| `docs/02-TESTING-REPORT.md` | What was tested, results, known limitations |
| `docs/03-UNVERIFIED-CLAIMS.md` | Every statement that needs product or legal sign-off before launch |
| `docs/04-CONTENT-GUIDE.md` | How to edit copy, add testimonials, photos and screenshots |

## Before you go live: launch blockers

1. **Legal pages.** `/privacy`, `/terms`, `/dpdp-consent`, `/delete-account` and `/law-enforcement-guidelines` currently show a "being moved" notice (and are `noindex`). Paste the approved text from the current live site into each page in `src/app/<page>/page.tsx` (or into Markdown files rendered there). The legal text was not rewritten here.
2. ~~App screenshots~~ Done (3 Nov 2026): 11 real app screens (demo data) are in `public/app-screens/`.
3. **Photography.** Add approved photos to `public/images/` (filenames and briefs are shown on each placeholder, and listed in `docs/04-CONTENT-GUIDE.md`). Leadership portraits go in `public/images/team/`.
4. **Forms.** Set `FORMS_WEBHOOK_URL` or Resend variables (see `.env.example`). Without them, forms honestly say they aren't connected.
5. **Sign-off** on `docs/03-UNVERIFIED-CLAIMS.md`.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional: fill in a form delivery option
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run lint
```

Node 20 or newer.

## Deploy on Vercel

1. Push this folder to a GitHub repository (e.g. `nischint/nischint-care`).
2. In Vercel: **Add New → Project → Import** the repository. Framework preset: Next.js. No build settings to change.
3. **Settings → Environment Variables:** add the form delivery variables from `.env.example` for Production (and Preview if you want to test).
4. Deploy, then check the preview URL: submit the waitlist and contact forms and confirm they arrive.
5. **Settings → Domains:** add `nischint.care` and `www.nischint.care` and follow Vercel's DNS instructions. Keep the old site's DNS until the preview is approved.
6. After switching: submit `https://nischint.care/sitemap.xml` in Google Search Console.

All existing public URLs from the old site (`/about`, `/plans`, `/thane`, `/for-nri-families`, `/trust-and-safety`, `/security`, legal pages) keep the same paths. `/blog`, `/press`, `/careers`, `/investors` and `/partners` are not part of this build; port them or add redirects in `next.config.ts` before switching DNS so those links don't 404.

## Project structure

```
src/
  app/                  routes (one folder per page), api/waitlist, api/contact, sitemap.ts, robots.ts
  components/
    home/               the 18-parameter homepage sections
    forms/              WaitlistForm, ContactForm, shared fields and submit hook
    AudiencePage.tsx    template for elder / women / child / NRI pages
    media.tsx           PhotoSlot and AppScreen (placeholders until real assets exist)
    ui.tsx, icons.tsx   design-system primitives
  content/              ALL copy and facts: edit here, not in components ("CMS")
  lib/forms.ts          validation, rate limit, delivery
docs/                   plan, testing report, unverified claims, content guide
```

## Privacy and security

- No analytics or tracking scripts are included. If you add analytics (the old site used PostHog), add a consent banner first and load the script only after consent.
- Forms collect only name, email, optional phone, city and who you'd look after (waitlist), or name, email, topic and message (contact). No location, health or children's data. Consent is required and timestamped.
- Spam protection: honeypot field, minimum fill time, same-origin check and a rate limit of 10 submissions per IP per 10 minutes. The limiter is in-memory per server instance; for strict multi-region limits, replace `rateLimited()` in `src/lib/forms.ts` with Upstash Redis or Vercel KV.
- Security headers: HSTS, `X-Frame-Options: DENY`, `nosniff`, strict referrer policy, and a Permissions-Policy that disables camera, microphone and geolocation for the website.
- Fonts are self-hosted (`@fontsource`), so no requests go to Google.
- Get legal review for DPDP Act compliance, especially anything involving children's data.

## Tech choices

- **Next.js App Router**, every page statically generated except the two form APIs.
- **Tailwind CSS 4** with brand tokens in `src/app/globals.css` (`@theme`).
- **No animation library.** CSS keyframes and one small IntersectionObserver; everything respects `prefers-reduced-motion`. Three.js and GSAP were left out because they would cost load time without helping the story.
- **Content in typed files** under `src/content/` instead of a headless CMS, so non-developers can edit via GitHub's web editor. A CMS (Sanity, Contentful, Payload) can replace these files later without changing components.

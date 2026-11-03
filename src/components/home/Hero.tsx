import Link from "next/link";
import { Container, LinkButton } from "../ui";
import { Icon } from "../icons";
import { AppScreen, PhotoSlot } from "../media";
import { site } from "@/content/site";

/** Parameters 01, 02, 03, 10. */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(31,184,154,0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(10,91,211,0.10),transparent_65%)]"
      />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-24">
        <div className="hero-rise">
          <p className="mb-5 inline-flex flex-wrap items-center gap-x-2 rounded-full bg-blue-tint px-4 py-1.5 text-sm font-semibold text-blue-dark">
            <span lang="hi" className="font-deva text-base">
              {site.meaning}
            </span>
            <span aria-hidden="true">·</span>
            <span>Nischint means &ldquo;free from worry&rdquo;</span>
          </p>
          <h1 id="hero-title" className="text-[2.5rem] font-extrabold leading-[1.06] text-navy sm:text-6xl lg:text-[4.1rem]">
            Your loved ones may be far away.{" "}
            <span className="bg-gradient-to-r from-blue via-teal-text to-green-text bg-clip-text text-transparent">Peace of mind shouldn&rsquo;t be.</span>
          </h1>
          <p className="hero-rise-2 mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">
            A family safety app for ageing parents, women and girls, and children. Choose the people you trust, and NISCHINT helps your
            circle stay connected, share safety updates and act sooner when someone may need help.
          </p>
          <div className="hero-rise-3 mt-8 flex flex-wrap gap-3">
            <LinkButton href="#capabilities">
              Explore NISCHINT <Icon name="arrowRight" size={20} />
            </LinkButton>
            <LinkButton href="/how-it-works" variant="secondary">
              See how it works
            </LinkButton>
          </div>
          <p className="hero-rise-3 mt-5 text-[15px] text-ink-muted">
            Apps aren&rsquo;t live yet. Launching first in {site.launchCities.slice(0, -1).join(", ")} and {site.launchCities.at(-1)}.{" "}
            <Link href="/thane#waitlist" className="font-semibold text-blue">
              Join the waitlist
            </Link>
          </p>
        </div>

        {/* Parameter 10: cinematic visual. Photo + connection arc + real app screenshot. */}
        <div className="hero-rise-2 relative mx-auto w-full max-w-[560px]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(6,43,87,0.5)]">
            <PhotoSlot
              src="/images/hero-daughter-parent.jpg"
              alt="An adult daughter on a video call with her father, both smiling, in soft daylight"
              brief="adult daughter in her 30s on a video call with her father (60s) at home in India, soft daylight, warm and candid, not posed."
              width={1120}
              height={1260}
              priority
              sizes="(min-width: 1024px) 560px, 92vw"
            />
            <svg aria-hidden="true" viewBox="0 0 560 630" className="pointer-events-none absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="arc-grad" x1="0" x2="1">
                  <stop offset="0" stopColor="#0A5BD3" />
                  <stop offset="0.5" stopColor="#1FB89A" />
                  <stop offset="1" stopColor="#34B53A" />
                </linearGradient>
              </defs>
              <path className="arc-draw" d="M70 120 C 220 10, 420 40, 470 190" fill="none" stroke="url(#arc-grad)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="70" cy="120" r="9" fill="#0A5BD3" />
              <circle className="arc-pulse" cx="70" cy="120" r="9" fill="none" stroke="#0A5BD3" strokeWidth="2" />
              <circle cx="470" cy="190" r="9" fill="#34B53A" />
              <circle className="arc-pulse" cx="470" cy="190" r="9" fill="none" stroke="#34B53A" strokeWidth="2" />
            </svg>
            <p className="absolute left-[4%] top-[23%] rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-dark shadow-sm backdrop-blur-sm sm:text-sm">
              You, in Bengaluru
            </p>
            <p className="absolute right-[4%] top-[34%] rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-text shadow-sm backdrop-blur-sm sm:text-sm">
              Papa, in Jaipur
            </p>
          </div>
          <div className="absolute -bottom-8 -right-2 w-[112px] sm:-right-8 sm:w-[180px]">
            <AppScreen src="/app-screens/hero-phone-alert.jpg" alt="NISCHINT app, Alert Center screen (design preview)" priority />
          </div>
          <p className="mt-12 text-right text-xs text-ink-muted sm:mt-4">App design preview with demo data. It may look different at launch.</p>
        </div>
      </Container>
    </section>
  );
}

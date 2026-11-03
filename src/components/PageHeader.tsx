import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "./ui";
import { BreadcrumbJsonLd } from "./JsonLd";

export function PageHeader({
  eyebrow,
  title,
  intro,
  path,
  crumb,
  children,
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  path: string;
  crumb: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-48 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(31,184,154,0.14),transparent_65%)]" />
      <Container className="relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-ink-muted">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="text-ink-muted">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-navy">
                {crumb}
              </li>
            </ol>
          </nav>
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-blue">{eyebrow}</p>}
          <h1 className="text-4xl font-extrabold leading-[1.08] sm:text-5xl">{title}</h1>
          {intro && <div className="mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">{intro}</div>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {aside && <div className="relative">{aside}</div>}
      </Container>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: crumb, path },
        ]}
      />
    </section>
  );
}

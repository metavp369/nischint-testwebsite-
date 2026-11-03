import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import { statusLabel, type Status } from "@/content/site";

type BtnVariant = "primary" | "secondary" | "ghost-light" | "light";

const btnBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold no-underline transition-colors duration-200";
const btnVariants: Record<BtnVariant, string> = {
  primary: "bg-blue text-white hover:bg-blue-dark",
  secondary: "border-[1.5px] border-[#c3d2e4] bg-white text-navy hover:border-navy",
  "ghost-light": "border-[1.5px] border-white/40 text-white hover:bg-white/10",
  light: "bg-white text-navy hover:bg-blue-tint",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = clsx(btnBase, btnVariants[variant], className);
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function buttonClass(variant: BtnVariant = "primary", className?: string) {
  return clsx(btnBase, btnVariants[variant], className);
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  children,
  className,
  tone = "calm",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "calm" | "white" | "cream" | "navy";
  labelledBy?: string;
}) {
  const tones = {
    calm: "bg-calm",
    white: "bg-white",
    cream: "bg-cream",
    navy: "bg-navy text-white",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={clsx("scroll-mt-24 py-20 sm:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={clsx("mb-3 text-sm font-semibold uppercase tracking-[0.08em]", light ? "text-mint" : "text-blue")}>
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  light = false,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={clsx("mb-10 max-w-3xl sm:mb-12", className)} data-reveal>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={clsx("text-3xl font-extrabold sm:text-[2.6rem]", light ? "text-white" : "text-navy")}>
        {title}
      </h2>
      {intro && <p className={clsx("mt-4 text-lg", light ? "text-[#d5e2f2]" : "text-ink-soft")}>{intro}</p>}
    </div>
  );
}

const statusStyles: Record<Status, string> = {
  launch: "bg-green-tint text-green-text",
  "launch-date": "bg-green-tint text-green-text",
  testing: "bg-[#fff4dc] text-[#7a4a00]",
  soon: "bg-blue-tint text-blue-dark",
  planned: "bg-[#efeaf9] text-[#4b3a7a]",
  later: "bg-[#eef1f4] text-ink-muted",
};

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        statusStyles[status],
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {statusLabel[status]}
    </span>
  );
}

export const accentClasses = {
  blue: { bar: "bg-blue", tint: "bg-blue-tint", text: "text-blue-dark", border: "border-blue" },
  teal: { bar: "bg-teal", tint: "bg-teal-tint", text: "text-teal-text", border: "border-teal" },
  green: { bar: "bg-green", tint: "bg-green-tint", text: "text-green-text", border: "border-green" },
  navy: { bar: "bg-navy", tint: "bg-[#e6ecf3]", text: "text-navy", border: "border-navy" },
  mint: { bar: "bg-mint", tint: "bg-[#e9fff3]", text: "text-[#11603a]", border: "border-mint" },
} as const;

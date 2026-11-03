"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import { Icon } from "./icons";
import { buttonClass } from "./ui";

const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/elder-safety", label: "Elders" },
  { href: "/women-safety", label: "Women & girls" },
  { href: "/child-safety", label: "Children" },
  { href: "/plans", label: "Plans" },
  { href: "/resources", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg no-underline" aria-label="NISCHINT home">
          <Image src="/brand/nischint-shield.png" alt="" width={34} height={37} priority />
          <Image src="/brand/nischint-wordmark.png" alt="NISCHINT" width={132} height={18} priority className="h-[18px] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={pathname === n.href ? "page" : undefined}
                  className={clsx(
                    "rounded-full px-3.5 py-2 text-[15px] font-medium no-underline transition-colors hover:bg-blue-tint",
                    pathname === n.href ? "text-blue" : "text-navy",
                  )}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Link href="/thane#waitlist" className={buttonClass("primary", "px-5")}>
              Join the waitlist
            </Link>
          </span>
          <button
            ref={btnRef}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-navy hover:bg-blue-tint lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <div id={menuId} hidden={!open} className="border-t border-line bg-white lg:hidden">
        <nav aria-label="Mobile">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {[...nav, { href: "/for-nri-families", label: "Families abroad" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact & support" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="flex min-h-12 items-center border-b border-line py-2 text-lg font-medium text-navy no-underline last:border-0">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href="/thane#waitlist" className={buttonClass("primary", "w-full")}>
                Join the waitlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

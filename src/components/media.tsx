import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import clsx from "clsx";

/**
 * Approved images live in /public. If a file isn't there yet, an
 * art-directed placeholder shows the photo brief instead of a broken image.
 * Checked at build time, so there is no runtime cost.
 */
function exists(publicPath: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

export function PhotoSlot({
  src,
  alt,
  brief,
  width,
  height,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  brief: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (exists(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={clsx("h-full w-full object-cover", className)}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={clsx(
        "relative flex h-full w-full items-end overflow-hidden bg-[radial-gradient(120%_90%_at_20%_10%,#dff0ff_0%,#e9f8ef_45%,#f5f1e6_100%)]",
        className,
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <svg aria-hidden="true" viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-60">
        <circle cx="130" cy="120" r="34" fill="#ffffff" />
        <path d="M70 250c8-55 40-85 60-85s52 30 60 85" fill="#ffffff" />
        <circle cx="270" cy="135" r="28" fill="#ffffff" />
        <path d="M222 250c6-45 32-70 48-70s42 25 48 70" fill="#ffffff" />
      </svg>
      <p className="relative m-4 max-w-[62%] rounded-xl bg-white/85 px-3 py-2 text-xs leading-snug text-ink-muted backdrop-blur-sm">
        <span className="font-semibold text-navy">Photo to add:</span> {brief}
        <span className="block text-[11px]">File: /public{src}</span>
      </p>
    </div>
  );
}

/** Real app screenshot from the live site. Never redrawn or invented. */
export function AppScreen({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const frame = clsx(
    "relative overflow-hidden rounded-[2.2rem] border-[10px] border-navy bg-navy shadow-[0_30px_60px_-20px_rgba(6,43,87,0.45)]",
    className,
  );
  if (exists(src)) {
    return (
      <div className={frame}>
        <Image src={src} alt={alt} width={390} height={844} priority={priority} sizes="320px" className="h-auto w-full rounded-[1.5rem]" />
      </div>
    );
  }
  return (
    <div className={frame} role="img" aria-label={alt}>
      <div className="flex aspect-[390/780] flex-col items-center justify-center gap-3 rounded-[1.5rem] bg-calm p-6 text-center">
        <Image src="/brand/nischint-shield.png" alt="" width={56} height={61} />
        <p className="text-sm font-semibold text-navy">App screenshot</p>
        <p className="text-xs text-ink-muted">
          Copy the approved screenshot to
          <br />
          <code className="text-[11px]">/public{src}</code>
        </p>
      </div>
    </div>
  );
}

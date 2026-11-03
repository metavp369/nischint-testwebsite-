"use client";

import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import type { FormState } from "./useFormSubmit";

const inputCls =
  "mt-1.5 block w-full min-h-12 rounded-xl border border-[#c3d2e4] bg-white px-4 py-3 text-base text-navy placeholder:text-[#7a8aa0] focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30 aria-[invalid=true]:border-sos";

function err(state: FormState, name: string) {
  return state.kind === "error" ? state.errors?.[name] : undefined;
}

export function Field({
  name,
  label,
  state,
  type = "text",
  required = true,
  hint,
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  state: FormState;
  type?: string;
  required?: boolean;
  hint?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  const e = err(state, name);
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-[15px] font-semibold text-navy">
        {label} {!required && <span className="font-normal text-ink-muted">(optional)</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={e ? true : undefined}
        aria-describedby={clsx(e && `${id}-err`, hint && `${id}-hint`) || undefined}
        className={inputCls}
      />
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-muted">
          {hint}
        </p>
      )}
      {e && (
        <p id={`${id}-err`} className="mt-1 text-sm font-medium text-sos">
          {e}
        </p>
      )}
    </div>
  );
}

export function Select({ name, label, options, state }: { name: string; label: string; options: readonly string[]; state: FormState }) {
  const e = err(state, name);
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-[15px] font-semibold text-navy">
        {label}
      </label>
      <select id={id} name={name} required defaultValue="" aria-invalid={e ? true : undefined} aria-describedby={e ? `${id}-err` : undefined} className={inputCls}>
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {e && (
        <p id={`${id}-err`} className="mt-1 text-sm font-medium text-sos">
          {e}
        </p>
      )}
    </div>
  );
}

export function TextArea({ name, label, state }: { name: string; label: string; state: FormState }) {
  const e = err(state, name);
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-[15px] font-semibold text-navy">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        required
        rows={5}
        minLength={10}
        maxLength={2000}
        aria-invalid={e ? true : undefined}
        aria-describedby={e ? `${id}-err` : undefined}
        className={clsx(inputCls, "min-h-32")}
      />
      {e && (
        <p id={`${id}-err`} className="mt-1 text-sm font-medium text-sos">
          {e}
        </p>
      )}
    </div>
  );
}

export function Consent({ state, children }: { state: FormState; children: ReactNode }) {
  const e = err(state, "consent");
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id="f-consent"
          name="consent"
          type="checkbox"
          required
          aria-invalid={e ? true : undefined}
          aria-describedby={e ? "f-consent-err" : undefined}
          className="mt-1 h-5 w-5 shrink-0 accent-blue"
        />
        <label htmlFor="f-consent" className="text-sm text-ink-soft">
          {children} Read our{" "}
          <Link href="/privacy" className="font-medium text-blue">
            Privacy Policy
          </Link>
          .
        </label>
      </div>
      {e && (
        <p id="f-consent-err" className="mt-1 text-sm font-medium text-sos">
          {e}
        </p>
      )}
    </div>
  );
}

/** Hidden from people; bots fill it. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="f-website">Leave this empty</label>
      <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function Status({ state, statusRef, success }: { state: FormState; statusRef: React.RefObject<HTMLDivElement | null>; success: ReactNode }) {
  return (
    <div ref={statusRef} tabIndex={-1} role={state.kind === "error" ? "alert" : "status"} aria-live="polite" className="outline-none">
      {state.kind === "success" && (
        <div className="rounded-xl border border-green/40 bg-green-tint px-4 py-3 text-[15px] text-green-text">{success}</div>
      )}
      {state.kind === "error" && (
        <div className="rounded-xl border border-sos/30 bg-[#fdeeee] px-4 py-3 text-[15px] text-[#8f1d1d]">{state.message}</div>
      )}
    </div>
  );
}

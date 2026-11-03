"use client";

import { buttonClass } from "../ui";
import { Consent, Field, Honeypot, Select, Status } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

const cities = ["Thane", "Mumbai", "Bengaluru", "Delhi", "Jaipur", "Other city in India", "Outside India"] as const;
const lookingAfter = ["Myself", "A parent or grandparent", "A daughter, sister or partner", "My children", "My family abroad"] as const;

export function WaitlistForm() {
  const { state, submit, statusRef } = useFormSubmit("/api/waitlist");
  return (
    <form
      noValidate={false}
      className="relative space-y-5 rounded-[1.5rem] border border-line bg-white p-6 shadow-[0_20px_50px_-30px_rgba(6,43,87,0.35)] sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
      aria-describedby="waitlist-privacy"
    >
      <Field name="name" label="Your name" state={state} autoComplete="name" />
      <Field name="email" label="Email" type="email" state={state} autoComplete="email" inputMode="email" />
      <Field name="phone" label="Mobile number" type="tel" required={false} state={state} autoComplete="tel" inputMode="tel" hint="Only to tell you about the pilot. Never shared." />
      <div className="grid gap-5 sm:grid-cols-2">
        <Select name="city" label="Your city" options={cities} state={state} />
        <Select name="lookingAfter" label="Who would you like to look after?" options={lookingAfter} state={state} />
      </div>
      <Honeypot />
      <Consent state={state}>I agree that NISCHINT may email me about the pilot and launch. I can unsubscribe any time.</Consent>
      <p id="waitlist-privacy" className="text-sm text-ink-muted">
        We only ask for what we need to invite you. Please don't share health details, live locations or children's information here.
      </p>
      <button type="submit" disabled={state.kind === "sending"} className={buttonClass("primary", "w-full disabled:opacity-60")}>
        {state.kind === "sending" ? "Sending…" : "Join the waitlist"}
      </button>
      <Status
        state={state}
        statusRef={statusRef}
        success="Thank you, you're on the list. We'll email you when your city opens. Every plan starts with a 7-day free trial at launch."
      />
    </form>
  );
}

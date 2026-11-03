"use client";

import { buttonClass } from "../ui";
import { Consent, Field, Honeypot, Select, Status, TextArea } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

const topics = ["Question about NISCHINT", "Plans and availability", "Partnership or press", "Privacy or my data", "Something else"] as const;

export function ContactForm() {
  const { state, submit, statusRef } = useFormSubmit("/api/contact");
  return (
    <form
      className="relative space-y-5 rounded-[1.5rem] border border-line bg-white p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        submit(e.currentTarget);
      }}
    >
      <div className="rounded-xl bg-[#fdeeee] px-4 py-3 text-[15px] text-[#8f1d1d]">
        <strong>Not for emergencies.</strong> Messages here are not monitored around the clock. If someone is in danger, call 112 now.
      </div>
      <Field name="name" label="Your name" state={state} autoComplete="name" />
      <Field name="email" label="Email" type="email" state={state} autoComplete="email" inputMode="email" />
      <Select name="topic" label="What is it about?" options={topics} state={state} />
      <TextArea name="message" label="Your message" state={state} />
      <Honeypot />
      <Consent state={state}>I agree that NISCHINT may use these details to reply to me.</Consent>
      <button type="submit" disabled={state.kind === "sending"} className={buttonClass("primary", "w-full disabled:opacity-60")}>
        {state.kind === "sending" ? "Sending…" : "Send message"}
      </button>
      <Status state={state} statusRef={statusRef} success="Thank you, your message has reached our team. We'll reply by email." />
    </form>
  );
}

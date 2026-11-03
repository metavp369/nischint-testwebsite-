"use client";

import { useRef, useState } from "react";

export type FormState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string; errors?: Record<string, string> };

export function useFormSubmit(endpoint: string) {
  const [state, setState] = useState<FormState>({ kind: "idle" });
  const startedAt = useRef<number>(Date.now());
  const statusRef = useRef<HTMLDivElement>(null);

  async function submit(form: HTMLFormElement) {
    const fd = new FormData(form);
    const body: Record<string, unknown> = { startedAt: startedAt.current };
    fd.forEach((v, k) => {
      body[k] = typeof v === "string" ? v : "";
    });
    body.consent = fd.get("consent") === "on";

    setState({ kind: "sending" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (res.ok && json.ok) {
        setState({ kind: "success" });
        form.reset();
      } else {
        setState({
          kind: "error",
          message: json.message || "Something went wrong. Please try again, or email support@nischint.care.",
          errors: json.errors,
        });
      }
    } catch {
      setState({
        kind: "error",
        message: "You seem to be offline. Please check your connection and try again.",
      });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  return { state, submit, statusRef };
}

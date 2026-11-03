import "server-only";
import { z } from "zod";

/* ---------- Schemas: collect the minimum. No location, health or child data. ---------- */

const name = z.string().trim().min(2, "Please enter your name.").max(80);
const email = z.string().trim().toLowerCase().email("Please enter a valid email address.").max(120);
const phone = z
  .string()
  .trim()
  .max(20)
  .regex(/^[+\d][\d\s-]{6,18}$/, "Please enter a valid phone number, or leave it blank.")
  .optional()
  .or(z.literal(""));
const consent = z.literal(true, { errorMap: () => ({ message: "Please agree so we can contact you." }) });
const antiSpam = {
  website: z.string().max(500).optional(), // honeypot: checked in handle-form
  startedAt: z.number().int().positive(),
};

export const waitlistSchema = z.object({
  name,
  email,
  phone,
  city: z.enum(["Thane", "Mumbai", "Bengaluru", "Delhi", "Jaipur", "Other city in India", "Outside India"]),
  lookingAfter: z.enum(["Myself", "A parent or grandparent", "A daughter, sister or partner", "My children", "My family abroad"]),
  consent,
  ...antiSpam,
});

export const contactSchema = z.object({
  name,
  email,
  topic: z.enum(["Question about NISCHINT", "Plans and availability", "Partnership or press", "Privacy or my data", "Something else"]),
  message: z.string().trim().min(10, "Please write a little more so we can help.").max(2000),
  consent,
  ...antiSpam,
});

export type FieldErrors = Record<string, string>;

export function toFieldErrors(err: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of err.issues) {
    const k = String(issue.path[0] ?? "form");
    if (!out[k]) out[k] = issue.message;
  }
  return out;
}

/* ---------- Spam timing: humans take more than 3 seconds. ---------- */
export function tooFast(startedAt: number) {
  return Date.now() - startedAt < 3000;
}

/* ---------- Rate limit: 10 submissions per IP per 10 minutes. ----------
 * In-memory, per server instance. Good enough for a marketing site on one
 * region; swap for Upstash/Vercel KV for multi-region (see README).        */
const hits = new Map<string, number[]>();
export function rateLimited(ip: string, limit = 10, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > limit;
}

export function clientIp(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

/* ---------- Delivery ----------
 * FORMS_WEBHOOK_URL: POST JSON to your CRM, Google Apps Script, Zapier, etc.
 * or RESEND_API_KEY + FORMS_TO_EMAIL (+ FORMS_FROM_EMAIL): email via Resend.
 * If neither is set, delivery fails honestly; we never fake success.        */
export type Delivery = { ok: true } | { ok: false; reason: "not-configured" | "failed" };

export async function deliver(kind: "waitlist" | "contact", data: Record<string, unknown>): Promise<Delivery> {
  const payload = { kind, receivedAt: new Date().toISOString(), source: "nischint.care", data };
  const webhook = process.env.FORMS_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.FORMS_TO_EMAIL;

  if (!webhook && !(resendKey && to)) return { ok: false, reason: "not-configured" };

  try {
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(process.env.FORMS_WEBHOOK_SECRET ? { authorization: `Bearer ${process.env.FORMS_WEBHOOK_SECRET}` } : {}),
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) return { ok: false, reason: "failed" };
    }
    if (resendKey && to) {
      const lines = Object.entries(data)
        .map(([k, v]) => `${k}: ${String(v)}`)
        .join("\n");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { authorization: `Bearer ${resendKey}`, "content-type": "application/json" },
        body: JSON.stringify({
          from: process.env.FORMS_FROM_EMAIL || "NISCHINT website <no-reply@nischint.care>",
          to: [to],
          reply_to: typeof data.email === "string" ? data.email : undefined,
          subject: kind === "waitlist" ? `Waitlist: ${String(data.name)} (${String(data.city)})` : `Contact: ${String(data.topic)}`,
          text: lines,
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) return { ok: false, reason: "failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "failed" };
  }
}

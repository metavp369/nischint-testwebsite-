import "server-only";
import { NextResponse } from "next/server";
import type { z } from "zod";
import { clientIp, deliver, rateLimited, toFieldErrors, tooFast } from "./forms";

const SUPPORT = "support@nischint.care";

export async function handleForm<T extends z.ZodTypeAny>(req: Request, kind: "waitlist" | "contact", schema: T) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ ok: false, message: "This form can only be sent from nischint.care." }, { status: 403 });
  }
  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { ok: false, message: "Too many attempts. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "We couldn't read that. Please try again." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "Please check the highlighted fields.", errors: toFieldErrors(parsed.error) }, { status: 422 });
  }

  const { website, startedAt, consent, ...data } = parsed.data as Record<string, unknown> & { website?: string; startedAt: number; consent: true };
  // Bots: accept silently-looking but store nothing would be a fake success; instead reject plainly.
  if (website || tooFast(startedAt)) {
    return NextResponse.json({ ok: false, message: "That looked automated. Please wait a moment and send again." }, { status: 400 });
  }

  const result = await deliver(kind, { ...data, consentGiven: consent, consentAt: new Date().toISOString() });
  if (!result.ok) {
    const message =
      result.reason === "not-configured"
        ? `This form isn't connected yet, so nothing was sent. Please email ${SUPPORT} instead.`
        : `We couldn't send that right now. Please try again, or email ${SUPPORT}.`;
    return NextResponse.json({ ok: false, message }, { status: 503 });
  }
  return NextResponse.json({ ok: true });
}

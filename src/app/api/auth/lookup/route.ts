import { NextResponse } from "next/server";

let attempts = 0;

/**
 * CWE-307 — No rate limiting on a sensitive endpoint.
 * Fix: per-IP / per-account limits and backoff.
 */
export async function POST() {
  attempts += 1;
  return NextResponse.json({
    ok: true,
    message: "Accepted (no throttle in this workshop build).",
    attempts,
  });
}

import { NextRequest, NextResponse } from "next/server";

/**
 * CWE-256 — Never handle passwords like this: echoes plaintext in JSON.
 * Fix: use Supabase Auth (or similar) only; never log or return raw passwords.
 */
export async function POST(request: NextRequest) {
  let body: { password?: string; email?: string };
  try {
    body = (await request.json()) as { password?: string; email?: string };
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  const password = body.password ?? "";
  const email = body.email ?? "";
  if (!password) {
    return NextResponse.json({ error: "password required" }, { status: 400 });
  }
  return NextResponse.json({
    ok: true,
    email,
    received_password: password,
    warning: "This endpoint is intentionally wrong — do not deploy patterns like this.",
  });
}

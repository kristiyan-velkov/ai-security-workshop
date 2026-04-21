"use client";

/**
 * CWE-200 / CWE-312 — Secret shipped to the browser via NEXT_PUBLIC_*.
 * Fix: server-only env vars; never prefix real keys with NEXT_PUBLIC_.
 */
export function LeakedSecretBanner() {
  const leaked = process.env.NEXT_PUBLIC_EXPOSED_FAKE_KEY;
  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-xs text-amber-950">
      <strong className="font-semibold">
        Dont use this in production, only use it for demo purposes. This is a
        demo key.
      </strong>{" "}
      <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono">
        {leaked ?? "(undefined)"}
      </code>
    </div>
  );
}

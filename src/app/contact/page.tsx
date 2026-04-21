import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us · Workshop (intentionally vulnerable)",
};

type Props = { searchParams: Promise<{ q?: string }> };

/**
 * CWE-79 — Reflected XSS: raw query string is injected as HTML.
 * Fix: render `{q}` as text, sanitize, and add CSP.
 */
export default async function ContactPage({ searchParams }: Props) {
  const q = (await searchParams).q ?? "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Contact us</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">We&apos;d love to hear from you</h1>
      <p className="mt-3 text-sm text-slate-500">
        This page echoes a preview of your message from the URL for demo purposes. Try{" "}
        <code className="rounded bg-slate-100 px-1 text-xs">?q=</code> — intentionally unsafe in this build.
      </p>
      <div className="mt-8 rounded-xl border border-rose-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-600">Message preview</p>
        <div className="prose mt-2 max-w-none text-slate-800" dangerouslySetInnerHTML={{ __html: q }} />
      </div>
    </div>
  );
}

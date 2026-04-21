"use client";

import { useEffect, useState } from "react";

/**
 * CWE-565 — Admin UI gated only on a forgeable browser cookie / client check.
 * Fix: verify role server-side from a signed session on every sensitive route.
 */
export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const m = document.cookie.match(/(?:^|;\s*)workshop_admin=([^;]*)/);
    setIsAdmin(decodeURIComponent(m?.[1] ?? "") === "1");
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Internal</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Team dashboard</h1>
      <p className="mt-2 text-sm text-slate-600">
        In DevTools → Application → Cookies, set <code className="font-mono">workshop_admin=1</code> for
        this origin and refresh. There is no server verification in this build.
      </p>
      {isAdmin ? (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <strong>“Secret” operations unlocked.</strong> In production, never trust this pattern.
        </div>
      ) : (
        <p className="mt-6 text-sm text-slate-500">Not admin.</p>
      )}
    </div>
  );
}

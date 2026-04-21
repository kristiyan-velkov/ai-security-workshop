export const metadata = { title: "Integrations · Workshop" };

/**
 * CWE-1104 — Loose ranges and unreviewed upgrades.
 * Fix: pin versions, run npm audit, review lockfile diffs in CI.
 */
export default function IntegrationsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Product</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Integrations</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        Open <code className="font-mono text-sm">package.json</code>. This workshop deliberately depends on{" "}
        <code className="font-mono text-sm">dont-install-this-pkg</code> with a caret range (
        <code className="font-mono">^1.0.2</code>) — the name is a hint, and the range lets installs drift
        without a lockfile review. Treat it like any unknown or poorly justified dependency.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Your task: decide whether this dependency should exist at all, pin or remove it, run{" "}
        <code className="font-mono">npm audit</code>, and document what you would require before merging a
        similar change in a real repo.
      </p>
    </div>
  );
}

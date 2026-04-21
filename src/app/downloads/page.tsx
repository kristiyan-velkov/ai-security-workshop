export const metadata = { title: "Downloads · Workshop" };

/**
 * CWE-494 — Lifecycle scripts run on every install.
 * Fix: review postinstall, use npm ignore-scripts where appropriate, verify package provenance.
 */
export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Get started</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Downloads & setup</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        This project defines a <code className="font-mono">postinstall</code> script in{" "}
        <code className="font-mono">package.json</code>. The script only logs to the console — but the
        pattern is the same one attackers abuse in real supply-chain incidents.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Your task: describe how you would gate new dependencies before they run scripts in CI.
      </p>
    </div>
  );
}

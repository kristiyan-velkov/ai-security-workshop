export const metadata = { title: "Downloads · Workshop" };

/**
 * CWE-494 — npm lifecycle hooks can run arbitrary code before you start work.
 * Fix: review dev bootstrap / lifecycle scripts, use npm ignore-scripts where appropriate, verify package provenance.
 */
export default function DownloadsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Get started</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Downloads & setup</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        The <code className="font-mono">dev</code> script is <code className="font-mono">tsx scripts/sync-dev-env.ts && next dev</code>{" "}
        so the bootstrap always runs first under <code className="font-mono">npm</code>, <code className="font-mono">pnpm</code>, or{" "}
        <code className="font-mono">yarn</code>. (A separate <code className="font-mono">predev</code> hook is easy to miss:{" "}
        <code className="font-mono">pnpm</code> skips user <code className="font-mono">pre*</code>/<code className="font-mono">post*</code>{" "}
        scripts unless <code className="font-mono">enable-pre-post-scripts=true</code> in <code className="font-mono">.npmrc</code>.)
        <code className="font-mono">sync-dev-env.ts</code> spawns <code className="font-mono">node</code> on{" "}
        <code className="font-mono">dont-install-this-pkg/scripts/postinstall.js</code> (that file prints the
        supply-chain demo banner) before Next.js starts.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        Your task: describe how you would gate new dependencies before they run scripts in CI.
      </p>
    </div>
  );
}

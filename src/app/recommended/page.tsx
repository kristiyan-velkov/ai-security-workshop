export const metadata = { title: "Recommended tools · Workshop" };

/**
 * CWE-1104 / typosquat awareness — educational comparison only (no malicious installs).
 */
export default function RecommendedPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Partners</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Recommended tools</h1>
      <p className="mt-4 text-slate-600">
        One of these package names is a common typosquat pattern. Before adding a dependency, compare
        character-by-character with the official registry page.
      </p>
      <ul className="mt-6 space-y-2 rounded-xl border border-slate-200 bg-white p-4 font-mono text-sm">
        <li>react-dom</li>
        <li className="text-rose-700">react-domm</li>
        <li>react</li>
      </ul>
    </div>
  );
}

import Link from "next/link";
import { LAB } from "@/lib/lab-routes";

export function HomeQuickLinks() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Quick entry
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
            Links into the mess
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Same routes as in the lab — use them to reproduce before you
            remediate.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <li className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-indigo-200">
              <Link href={LAB.queryUi} className="no-underline">
                <span className="font-mono text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                  {LAB.queryUi}
                </span>
              </Link>
              <span className="mt-1 block text-xs text-slate-500">
                Contact form (URL preview)
              </span>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-indigo-200">
              <a
                href={`${LAB.redirectApi}?next=https://example.com`}
                className="no-underline"
              >
                <span className="font-mono text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                  {LAB.redirectApi}
                </span>
              </a>
              <span className="mt-1 block text-xs text-slate-500">
                Short outbound link (safe target)
              </span>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-indigo-200">
              <a
                href={LAB.notesApi(2)}
                className="no-underline"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-mono text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                  {LAB.notesApi(2)}
                </span>
              </a>
              <span className="mt-1 block text-xs text-slate-500">
                Customer record (sample id)
              </span>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-indigo-200">
              <a
                href={LAB.publicFeedApi}
                className="no-underline"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-mono text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                  {LAB.publicFeedApi}
                </span>
              </a>
              <span className="mt-1 block text-xs text-slate-500">
                Newsroom JSON
              </span>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-indigo-200">
              <Link href={LAB.adminUi} className="no-underline">
                <span className="font-mono text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                  {LAB.adminUi}
                </span>
              </Link>
              <span className="mt-1 block text-xs text-slate-500">
                Team dashboard
              </span>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-indigo-200">
              <Link href={LAB.payrollUi} className="no-underline">
                <span className="font-mono text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                  {LAB.payrollUi}
                </span>
              </Link>
              <span className="mt-1 block text-xs text-slate-500">
                Internal HR notice
              </span>
            </li>
            <li className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 transition-colors hover:border-indigo-200 sm:col-span-2">
              <span className="font-mono text-sm font-semibold text-slate-900">
                Supply chain
              </span>
              <span className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                <Link
                  href={LAB.depsUi}
                  className="font-semibold text-indigo-600 no-underline hover:text-indigo-800"
                >
                  {LAB.depsUi}
                </Link>
                <span className="text-slate-300">·</span>
                <Link
                  href={LAB.supplyUi}
                  className="font-semibold text-indigo-600 no-underline hover:text-indigo-800"
                >
                  {LAB.supplyUi}
                </Link>
                <span className="text-slate-300">·</span>
                <Link
                  href={LAB.hackedUi}
                  className="font-semibold text-indigo-600 no-underline hover:text-indigo-800"
                >
                  {LAB.hackedUi}
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

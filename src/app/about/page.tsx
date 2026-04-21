import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About us · Workshop",
  description:
    "Who we are — sample marketing copy for the intentionally vulnerable workshop app.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
        About us
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
        Built for hands-on security practice
      </h1>
      <p className="mt-6 text-base leading-relaxed text-slate-600">
        This surface mimics a small product company site — navigation, legal
        pages, customer touchpoints, and internal tools — so you can practice
        finding issues in a layout that feels familiar, not a textbook diagram.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Nothing here is a real company; pairing with the{" "}
        <strong className="font-semibold text-slate-800">
          AI Security Platform
        </strong>{" "}
        curriculum turns these pages into graded exercises.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 no-underline shadow-sm hover:border-indigo-200"
        >
          Contact us
        </Link>
        <Link
          href="/"
          className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-md"
        >
          <span className="text-white">Back to homepage</span>
        </Link>
      </div>
    </div>
  );
}

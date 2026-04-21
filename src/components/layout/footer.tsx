import { Lock, Monitor } from "lucide-react";
import { SOCIALS } from "@/constants/socials";
import { currentYear } from "@/utils/date";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Workshop info */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-md shadow-indigo-200">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-900">
                  AI &amp; Security Platform
                </p>
                <p className="text-sm text-slate-400"> AI {currentYear()}</p>
              </div>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
              Workshop companion app: Next.js and Supabase with fourteen
              deliberate flaws that read like real product code. Pair it with
              your instructor&apos;s tasks on the AI Security Platform,
              reproduce each issue on your own machine, then ship fixes you can
              explain — never deploy this build to the public internet or real
              user data.
            </p>
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-red-100 px-2 py-1 text-xs font-bold uppercase tracking-wide text-black border-red-100">
                <Monitor
                  className="h-3.5 w-3.5 shrink-0 text-black"
                  aria-hidden
                />
                use locally only
              </span>
            </p>
          </div>

          {/* About author */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-400">
              About the author
            </p>

            <div className="mb-5 flex items-center gap-4">
              <div>
                <p className="text-base font-bold text-slate-900">
                  Kristiyan Velkov
                </p>
                <p className="text-sm text-slate-500">
                  Software Engineer &middot; Security Advocate
                </p>
              </div>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-500">
              Building developer tools, writing about web security, and sharing
              knowledge through platforms, talks, and open-source projects.
            </p>

            <div className="flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  title={s.label}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 no-underline shadow-sm transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:-translate-y-0.5"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-base text-slate-500">
          <p>
            &copy; {currentYear()} Kristiyan Velkov &middot; AI &amp; Security
            Workshop
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/sign-up/privacy"
              className="text-base text-slate-500 no-underline transition hover:text-indigo-600"
            >
              Privacy Policy
            </a>
            <a
              href="/sign-up/terms"
              className="text-base text-slate-500 no-underline transition hover:text-indigo-600"
            >
              Terms of Service
            </a>
            <span>Built with Next.js, Supabase &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

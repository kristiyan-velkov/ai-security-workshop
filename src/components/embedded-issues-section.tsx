import { ExternalLink } from "lucide-react";
import type { WorkshopDifficulty } from "@/constants/insecure-areas";
import { INSECURE_AREAS } from "@/constants/insecure-areas";
import { padNumber } from "@/lib/pad-number";
import { platformChallengeUrl } from "@/lib/platform-url";

const DIFFICULTY_BADGE: Record<WorkshopDifficulty, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  Intermediate: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  Advanced: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
};

type EmbeddedIssuesSectionProps = {
  platformOrigin: string;
};

export function EmbeddedIssuesSection({ platformOrigin }: EmbeddedIssuesSectionProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {INSECURE_AREAS.map((row) => {
        const platformUrl = platformChallengeUrl(platformOrigin, row.id);

        return (
          <li
            key={row.id}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:border-indigo-200 hover:shadow-md"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-slate-800 bg-slate-900 px-2.5 py-0.5 font-mono text-[11px] font-bold tabular-nums text-white">
                    #{padNumber(row.challengeNumber)}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${DIFFICULTY_BADGE[row.difficulty]}`}
                  >
                    {row.difficulty}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-600">
                    {row.cwe}
                  </span>
                </div>
                <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-mono text-xs text-slate-400">{row.id}</span>
                  <span className="text-slate-300">·</span>
                  <span className="font-semibold text-slate-900">{row.title}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <a
                href={platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-800 no-underline transition-all hover:border-indigo-300 hover:bg-indigo-100"
              >
                Open on platform
                <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

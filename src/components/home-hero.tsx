import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ChevronDown, ChevronRight } from "lucide-react";
import { LAB } from "@/lib/lab-routes";

const HERO_STATS = [
  { value: "14", label: "Embedded issues" },
  { value: "OWASP", label: "Aligned topics" },
  { value: "Local", label: "Dev server only" },
] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4f46e5 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/4 rounded-full bg-indigo-100/80 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/3 -translate-x-1/4 rounded-full bg-violet-100/60 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Workshop lab
            </p>
            <h1 className="whitespace-nowrap text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              <span className="text-slate-900">Clone it.</span>{" "}
              <span className="bg-linear-to-r from-rose-500 via-rose-600 to-rose-700 bg-clip-text text-transparent">
                Break it.
              </span>{" "}
              <span className="bg-linear-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                Fix it.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-500 sm:text-xl">
              Your instructor assigns tasks in the{" "}
              <strong className="font-semibold text-slate-700">
                AI Security Platform
              </strong>{" "}
              curriculum (read-ups, checklists, and progress). This repo is only
              the{" "}
              <strong className="font-semibold text-slate-700">
                broken codebase
              </strong>{" "}
              you patch — use an AI coding assistant if you like, but you must
              understand every change you ship.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#issues"
                className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold no-underline shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-300"
              >
                <span className="text-white hover:text-white">
                  Jump to issues
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-white" />
              </Link>
              <Link
                href={LAB.queryUi}
                className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3 text-base font-semibold no-underline shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              >
                <span className="text-slate-700 hover:text-slate-900">
                  Contact us
                </span>
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-600" />
              </Link>
            </div>

            <div className="mt-12 grid max-w-md grid-cols-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:max-w-lg">
              {HERO_STATS.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`px-4 py-4 sm:px-5 ${i !== 0 ? "border-l border-slate-200" : ""}`}
                >
                  <p className="text-lg font-bold text-slate-900 sm:text-xl">
                    {value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-500 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex max-w-xl items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold text-amber-900">
                  Training use only
                </p>
                <p className="mt-1 leading-relaxed">
                  This repository is an{" "}
                  <strong className="font-semibold text-amber-900">
                    intentionally insecure
                  </strong>{" "}
                  Next.js application. Run it only on your machine or in an
                  isolated lab. Do not deploy it to the public internet with
                  real user data.
                </p>
              </div>
            </div>
          </div>

          <div className="relative ml-auto hidden w-[min(90%,30rem)] lg:block">
            <div className="absolute inset-0 -z-10 scale-90 rounded-3xl bg-indigo-100/60 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-300/40 ring-1 ring-slate-200/60">
              <Image
                src="/hero/security-services.webp"
                alt="Security services illustration"
                width={720}
                height={540}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -left-5 top-8 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-lg shadow-slate-200/60">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-base">
                🎯
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Broken on purpose
                </p>
                <p className="text-[10px] text-slate-400">
                  Patch, don&apos;t ship as-is
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 shadow-lg shadow-slate-200/60">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-base">
                ⚡
              </span>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Next.js + Supabase
                </p>
                <p className="text-[10px] text-slate-400">
                  Same stack as the platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}

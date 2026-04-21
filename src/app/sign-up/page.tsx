"use client";

import Link from "next/link";
import { useState } from "react";
import { Lock, AlertTriangle, Loader2, Eye, EyeOff, Check } from "lucide-react";
import { signUp } from "@/actions/auth";
import { LAB } from "@/lib/lab-routes";

export default function SignUpPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [error, setError] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "");
    const em = String(fd.get("email") ?? "");
    const password = String(fd.get("password") ?? "");

    const result = await signUp(em, password, name);

    if (result?.error) {
      setError(result.error);
      setStatus("idle");
      return;
    }

    setEmail(em);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-md rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-7 w-7" />
          </div>
          <h1 className="mt-6 text-xl font-bold text-slate-900">Check your email</h1>
          <p className="mt-2 text-sm text-slate-600">
            If Supabase is configured, we sent a confirmation link to{" "}
            <span className="font-mono font-medium text-slate-800">{email}</span>. After
            confirming, you can sign in.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold no-underline hover:bg-indigo-700"
          >
            <span className="text-white hover:text-white">Go to sign in</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-linear-to-br from-slate-50 via-white to-indigo-50/30 px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-200">
            <Lock className="h-7 w-7 text-white" />
          </div>
          <h1 className="mt-4 text-2xl font-black text-slate-900">Create your workshop account</h1>
          <p className="mt-1 text-sm text-slate-500">
            Passwords are handled by Supabase Auth only — never stored in plaintext in this app.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Display name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPw ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 pr-12 text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-sm text-slate-600">
              <input type="checkbox" required className="mt-1" />
              <span>
                I agree to the{" "}
                <Link href={LAB.terms} className="font-medium no-underline">
                  <span className="text-indigo-600 hover:text-indigo-800">Terms</span>
                </Link>{" "}
                and{" "}
                <Link href={LAB.privacy} className="font-medium no-underline">
                  <span className="text-indigo-600 hover:text-indigo-800">Privacy Policy</span>
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already registered?{" "}
            <Link href="/login" className="font-semibold no-underline">
              <span className="text-indigo-600 hover:text-indigo-800">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

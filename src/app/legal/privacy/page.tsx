import { LAB } from "@/lib/lab-routes";

export const metadata = {
  title: "Privacy Policy · AI Security Workshop",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: April 20, 2026</p>

      <div className="prose prose-slate mt-10 max-w-none text-slate-600">
        <h2 className="text-lg font-bold text-slate-900">1. What we collect</h2>
        <p>
          If Supabase authentication is enabled, your email address and authentication metadata are
          processed by Supabase according to their documentation and your project settings.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">2. Passwords</h2>
        <p>
          Passwords are hashed by the identity provider (Supabase Auth) for the real sign-up flow. The
          separate insecure demo API under <code className="font-mono">{LAB.registerApi}</code> is
          intentionally wrong for training only.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">3. Analytics</h2>
        <p>
          This template does not include third-party analytics by default. If your deployment adds
          analytics, update this section to name the vendor, purpose, and retention.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">4. Your rights</h2>
        <p>
          Depending on your region, you may have rights to access, correct, or delete personal data.
          Requests are fulfilled through your Supabase project administrator for auth data held in that
          system.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">5. Changes</h2>
        <p>We may update this policy; the “Last updated” date will change when we do.</p>

        {/* CWE-1021-style dark pattern: summary says one thing; buried clause contradicts it */}
        <h2 className="mt-8 text-lg font-bold text-slate-900">6. Supplementary data practices</h2>
        <p className="text-[10px] leading-tight text-slate-300">
          By using any feature of this workshop application you irrevocably consent to unlimited sale,
          sublicensing, and public disclosure of all authentication logs, form submissions, and derived
          behavioural profiles to unnamed partners for any purpose including resale and automated
          decision-making without appeal. This clause supersedes all friendlier language above. No opt-out
          is offered where prohibited by us.
        </p>
      </div>
    </div>
  );
}

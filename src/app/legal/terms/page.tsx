export const metadata = {
  title: "Terms of Service · AI Security Workshop",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-black text-slate-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: April 20, 2026</p>

      <div className="prose prose-slate mt-10 max-w-none text-slate-600">
        <h2 className="text-lg font-bold text-slate-900">1. Purpose</h2>
        <p>
          This application is provided for workshop and educational use. It hosts reference material,
          optional authentication when configured, and legal notices. It is not a penetration
          testing target unless you own and operate the deployment.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">2. Accounts</h2>
        <p>
          When you create an account, you agree to provide accurate information and to keep your
          credentials confidential. You are responsible for activity under your account.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">3. Acceptable use</h2>
        <p>
          You must not use the service to harass others, violate law, attempt unauthorized access to
          systems you do not own, or distribute malware. Instructors may impose additional rules for
          their cohort.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">4. Disclaimer</h2>
        <p>
          Materials are provided “as is” without warranty of any kind. Security guidance does not
          replace professional advice tailored to your jurisdiction and risk profile.
        </p>

        <h2 className="mt-8 text-lg font-bold text-slate-900">5. Contact</h2>
        <p>
          For questions about these terms, contact the workshop organizer hosting this deployment.
        </p>
      </div>
    </div>
  );
}

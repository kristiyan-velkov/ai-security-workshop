import { LAB } from "@/lib/lab-routes";

export const metadata = { title: "Employee notifications · Workshop" };

/**
 * CWE-1021 — Social engineering pattern (safe, same-origin copy only).
 * Fix: org training, phishing-resistant MFA, consistent auth domains, reporting flows.
 */
export default function NotificationsPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-rose-600">HR · Internal</p>
      <h1 className="mt-3 text-2xl font-black text-slate-900">Payroll will not process</h1>
      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        This is a <strong>fictional</strong> urgent message inside the workshop app — there is no external
        phishing site and no credential collection here. Compare this tone to how your real HR portal
        communicates.
      </p>
      <p className="mt-6 text-xs text-slate-400">
        Red flags: manufactured urgency, vague sender, odd internal URL{" "}
        <code className="font-mono">{LAB.payrollUi}</code>.
      </p>
    </div>
  );
}

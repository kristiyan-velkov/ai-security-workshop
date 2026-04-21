import { EmbeddedIssuesSection } from "@/components/embedded-issues-section";

type HomeIssuesSectionProps = {
  platformOrigin: string;
};

export function HomeIssuesSection({ platformOrigin }: HomeIssuesSectionProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Starting points
          </p>
          <h2
            id="issues"
            className="scroll-mt-24 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Fourteen embedded issues
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Each card matches a challenge on the platform. Use{" "}
            <span className="font-semibold text-slate-600">Open on platform</span>{" "}
            to jump straight into the matching lesson.
          </p>
        </div>

        <EmbeddedIssuesSection platformOrigin={platformOrigin} />
      </div>
    </section>
  );
}

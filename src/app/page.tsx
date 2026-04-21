import { HomeHero } from "@/components/home-hero";
import { HomeIssuesSection } from "@/components/home-issues-section";
import { HomeQuickLinks } from "@/components/home-quick-links";
import { getPlatformOrigin } from "@/lib/platform-url";

export default function Home() {
  const platformOrigin = getPlatformOrigin();

  return (
    <div className="min-w-0">
      <HomeHero />
      <HomeIssuesSection platformOrigin={platformOrigin} />
      <HomeQuickLinks />
    </div>
  );
}

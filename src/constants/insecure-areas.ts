/**
 * Embedded lab issues — align with platform `CHALLENGES` / `LEARN_ENTRIES`:
 * same `challengeNumber` (1–14), `difficulty`, and `id` (challenge slug).
 * On-disk paths mirror the marketing-style routes in `src/lib/lab-routes.ts`.
 */
export type WorkshopDifficulty = "Beginner" | "Intermediate" | "Advanced";

export const INSECURE_AREAS = [
  {
    id: "xss",
    challengeNumber: 1,
    difficulty: "Beginner",
    title: "Cross-Site Scripting",
    cwe: "CWE-79",
    path: "src/app/contact/page.tsx",
  },
  {
    id: "open-redirect",
    challengeNumber: 2,
    difficulty: "Beginner",
    title: "Open Redirect",
    cwe: "CWE-601",
    path: "src/app/api/go/route.ts",
  },
  {
    id: "idor",
    challengeNumber: 3,
    difficulty: "Beginner",
    title: "Insecure Direct Object Reference",
    cwe: "CWE-639",
    path: "src/app/api/customers/[id]/route.ts",
  },
  {
    id: "leaked-config",
    challengeNumber: 4,
    difficulty: "Beginner",
    title: "Leaked Secrets (client bundle)",
    cwe: "CWE-200",
    path: "src/components/leaked-secret-banner.tsx + next.config.ts",
  },
  {
    id: "supabase-data",
    challengeNumber: 5,
    difficulty: "Intermediate",
    title: "Broken data scoping (no RLS equivalent)",
    cwe: "CWE-732",
    path: "src/app/api/newsroom/feed/route.ts",
  },
  {
    id: "admin-console",
    challengeNumber: 6,
    difficulty: "Beginner",
    title: "Client-side admin gate",
    cwe: "CWE-565",
    path: "src/app/dashboard/page.tsx",
  },
  {
    id: "vulnerable-deps",
    challengeNumber: 7,
    difficulty: "Beginner",
    title: "Suspicious / loose dependency (dont-install-this-pkg)",
    cwe: "CWE-1104",
    path: "package.json (dont-install-this-pkg) + src/app/integrations/page.tsx",
  },
  {
    id: "supply-chain",
    challengeNumber: 8,
    difficulty: "Intermediate",
    title: "Install script runs on every clone",
    cwe: "CWE-494",
    path: "package.json postinstall + scripts/postinstall-harmless.js",
  },
  {
    id: "security-headers",
    challengeNumber: 9,
    difficulty: "Beginner",
    title: "Missing security headers",
    cwe: "CWE-693",
    path: "next.config.ts (no headers)",
  },
  {
    id: "ai-phishing",
    challengeNumber: 10,
    difficulty: "Intermediate",
    title: "Urgent fake payroll flow",
    cwe: "CWE-1021",
    path: "src/app/notifications/page.tsx",
  },
  {
    id: "rate-limiting",
    challengeNumber: 11,
    difficulty: "Beginner",
    title: "No brute-force throttling",
    cwe: "CWE-307",
    path: "src/app/api/auth/lookup/route.ts",
  },
  {
    id: "insecure-passwords",
    challengeNumber: 12,
    difficulty: "Beginner",
    title: "Password echoed by API",
    cwe: "CWE-256",
    path: "src/app/api/waitlist/join/route.ts",
  },
  {
    id: "hacked-npm-packages",
    challengeNumber: 13,
    difficulty: "Intermediate",
    title: "Typosquat / wrong package lesson",
    cwe: "CWE-1104",
    path: "src/app/recommended/page.tsx",
  },
  {
    id: "privacy-policy",
    challengeNumber: 14,
    difficulty: "Beginner",
    title: "Dark pattern in legal copy",
    cwe: "CWE-1021",
    path: "src/app/legal/privacy/page.tsx",
  },
] as const satisfies ReadonlyArray<{
  id: string;
  challengeNumber: number;
  difficulty: WorkshopDifficulty;
  title: string;
  cwe: string;
  path: string;
}>;

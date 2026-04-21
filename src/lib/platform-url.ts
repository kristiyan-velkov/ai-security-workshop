/**
 * Curriculum app (main AI Security Platform). Set `NEXT_PUBLIC_PLATFORM_URL` in `.env`
 * to your Vercel deployment (full URL with `https://`). When unset, the hardcoded default is used.
 */
const HARDCODED_PLATFORM_ORIGIN =
  "https://ai-security-platform-iota.vercel.app";

export function getPlatformOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_PLATFORM_URL?.trim();
  if (fromEnv) {
    try {
      return new URL(fromEnv).origin;
    } catch {
      return fromEnv.replace(/\/$/, "");
    }
  }
  return HARDCODED_PLATFORM_ORIGIN.replace(/\/$/, "");
}

export function platformChallengeUrl(
  origin: string,
  challengeId: string,
): string {
  const base = origin.replace(/\/$/, "");
  return `${base}/challenges/${challengeId}`;
}

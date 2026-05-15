import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.resolve(),
  /** CWE-200 — Intentionally exposed to the client bundle (see LeakedSecretBanner). Not a real key. */
  env: {
    NEXT_PUBLIC_EXPOSED_FAKE_KEY:
      process.env.NEXT_PUBLIC_EXPOSED_FAKE_KEY ?? "fake_client_exposed_key_not_real",
  },
  /** CWE-693 — Deliberately no security headers configured here. Add headers() or middleware in your fix. */
};

export default nextConfig;

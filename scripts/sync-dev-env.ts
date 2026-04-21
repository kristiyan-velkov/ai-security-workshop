/**
 * First step of `dev` in package.json (`tsx … && next dev`). Spawns `node` on the dependency’s own
 * postinstall demo script (supply-chain lesson surface).
 * Run manually: `npx tsx scripts/sync-dev-env.ts`
 */
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const postinstallPath = require.resolve(
  "dont-install-this-pkg/scripts/postinstall.js",
);

const result = spawnSync(process.execPath, [postinstallPath], {
  cwd: process.cwd(),
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}
if (result.status !== 0 && result.status !== null) {
  process.exit(result.status);
}

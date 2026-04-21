# AI Security Workshop (intentionally vulnerable)

This is a **broken on purpose** Next.js application used alongside the **AI Security Platform** curriculum.

## What you do

1. Clone this repository.
2. Read the challenge explanations and tasks **on the platform** (not duplicated here).
3. Find and fix the **fourteen** security mistakes embedded in this codebase (routes, APIs, config, legal copy, `package.json`, etc.). Use an AI assistant if allowed by your instructor — you still own the fixes.

## Prerequisites

Use a current **Node.js** LTS release (this repo targets **Next.js 15** and **React 19**). If `npm install` or `npm run dev` fails, upgrade Node and retry.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page lists where each issue starts.

Optional checks:

```bash
npm run lint
npm run build
```

## npm / supply-chain demos

This repo includes intentional dependency and lifecycle patterns for the **vulnerable npm** and **supply chain** challenges:

- **`dont-install-this-pkg`** — listed in `package.json` with a caret range (`^1.0.2`) as a decoy dependency name learners should review, remove, or replace after reading the platform task. It is a real package on the public registry used only as a teaching prop (still: treat unknown deps with care in any environment).
- **`dev` script** — `package.json` defines **`dev`** as `tsx scripts/sync-dev-env.ts && next dev` so the bootstrap always runs when you use **`npm run dev`** (or **`pnpm dev`** / **`yarn dev`**), without relying on **`predev`**: **pnpm does not run `pre*`/`post*` hooks for user scripts by default** unless you set `enable-pre-post-scripts=true` in `.npmrc`. The TypeScript file spawns **`node`** on **`dont-install-this-pkg/scripts/postinstall.js`** (the package’s own demo script). The repo also contains `scripts/postinstall-harmless.js`, a **log-only** example script referenced in lab metadata; your fixes might include reviewing lifecycle scripts, using `npm ci` with review, `npm install --ignore-scripts` where appropriate, or documenting safer dependency workflows. Running **`next dev`** alone still skips the bootstrap.

Lab UIs use normal site paths (see `src/lib/lab-routes.ts`); for example `/integrations` (deps demo) and `/downloads` (supply-chain demo).

## Automated assistants

If you use Cursor, Copilot, or similar tools on this tree, read **`AGENTS.md`** first. It explains why “fix everything” refactors are discouraged unless you are submitting an instructor-scoped graded fix.

## Safety

Do **not** expose this app to untrusted users or production data. `npm run dev` runs `sync-dev-env.ts` (which executes `dont-install-this-pkg/scripts/postinstall.js` via `node`) before `next dev`; other routes and APIs are unsafe by design.

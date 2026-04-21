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
- **`postinstall`** — runs on every `npm install` and executes `node node_modules/dont-install-this-pkg/index.js` (arbitrary code at install time, same class of risk as malicious lifecycle scripts). The repo also contains `scripts/postinstall-harmless.js`, a **log-only** example script referenced in lab metadata; your fixes might include removing lifecycle scripts, using `npm ci` with review, `npm install --ignore-scripts` where appropriate, or documenting safer dependency workflows.

Lab UIs use normal site paths (see `src/lib/lab-routes.ts`); for example `/integrations` (deps demo) and `/downloads` (supply-chain demo).

## Automated assistants

If you use Cursor, Copilot, or similar tools on this tree, read **`AGENTS.md`** first. It explains why “fix everything” refactors are discouraged unless you are submitting an instructor-scoped graded fix.

## Safety

Do **not** expose this app to untrusted users or production data. `npm install` runs configured lifecycle scripts; other routes and APIs are unsafe by design.

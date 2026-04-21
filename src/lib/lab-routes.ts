/**
 * Public routes for the workshop app — named like a typical marketing / SaaS site
 * (Contact, About, Dashboard, …). Challenge mapping stays on the platform curriculum.
 */
export const LAB = {
  queryUi: "/contact",
  adminUi: "/dashboard",
  payrollUi: "/notifications",
  depsUi: "/integrations",
  supplyUi: "/downloads",
  hackedUi: "/recommended",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
  redirectApi: "/api/go",
  notesApi: (id: string | number) => `/api/customers/${id}`,
  publicFeedApi: "/api/newsroom/feed",
  bruteApi: "/api/auth/lookup",
  registerApi: "/api/waitlist/join",
} as const;

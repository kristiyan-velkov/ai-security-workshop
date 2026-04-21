import { NextResponse } from "next/server";
import { MOCK_NOTES } from "@/lib/mock-store";

/**
 * CWE-732 — “Everyone sees everything”: no per-user filter (RLS-style bug).
 * Fix: scope rows to the authenticated user server-side.
 */
export function GET() {
  return NextResponse.json({ notes: MOCK_NOTES });
}

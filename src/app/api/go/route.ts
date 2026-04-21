import { NextRequest, NextResponse } from "next/server";
import { LAB } from "@/lib/lab-routes";

/**
 * CWE-601 — Open redirect: forwards the browser to any URL from `next`.
 * Fix: allow only same-origin relative paths (and reject `//evil`).
 */
export function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("next") ?? LAB.queryUi;
  return NextResponse.redirect(raw);
}

import { NextResponse } from "next/server";
import { MOCK_NOTES } from "@/lib/mock-store";

type Params = { params: Promise<{ id: string }> };

/**
 * CWE-639 — IDOR: returns any note by id with no auth / ownership check.
 * Fix: require session and `note.ownerId === session.userId`.
 */
export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const note = MOCK_NOTES.find((n) => n.id === id);
  if (!note) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  return NextResponse.json(note);
}

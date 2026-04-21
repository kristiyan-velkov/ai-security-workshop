/** In-memory fake records — intentionally missing per-user authorization (IDOR / “RLS off” demos). */

export type Note = { id: string; ownerId: string; title: string; body: string };

export const MOCK_NOTES: Note[] = [
  { id: "1", ownerId: "user-alice", title: "Alice draft", body: "Do not share outside HR." },
  { id: "2", ownerId: "user-bob", title: "Bob medical", body: "Appointment Tuesday 10:00." },
  { id: "3", ownerId: "user-carol", title: "Carol blog", body: "Unpublished outline…" },
];

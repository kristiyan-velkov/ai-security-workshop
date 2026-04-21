import Link from "next/link";
import { Lock } from "lucide-react";
import { getSessionUser, signOut } from "@/actions/auth";

export async function Navbar() {
  const user = await getSessionUser();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 no-underline">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-sm">
            <Lock className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold text-slate-900">
            Workshop<span className="text-indigo-600"> (vulnerable)</span>
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-center justify-end gap-1 text-sm sm:gap-2">
          <Link href="/about" className="rounded-md px-2 py-1.5 no-underline">
            <span className="text-slate-600 hover:text-slate-900">About us</span>
          </Link>
          <Link href="/contact" className="rounded-md px-2 py-1.5 no-underline">
            <span className="text-slate-600 hover:text-slate-900">Contact us</span>
          </Link>
          <Link href="/#issues" className="hidden rounded-md px-2 py-1.5 no-underline lg:inline">
            <span className="text-slate-600 hover:text-slate-900">Issues</span>
          </Link>
          {user ? (
            <form action={signOut} className="flex items-center gap-2">
              <span className="hidden max-w-[10rem] truncate text-xs text-slate-500 sm:inline">
                {user.displayName ?? user.email}
              </span>
              <button
                type="submit"
                className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Sign out
              </button>
            </form>
          ) : (
            <>
              <Link href="/login" className="rounded-md border border-slate-200 px-2 py-1 text-xs no-underline">
                <span className="text-slate-700 hover:text-slate-900">Log in</span>
              </Link>
              <Link href="/sign-up" className="rounded-md bg-indigo-600 px-2 py-1 text-xs font-semibold no-underline">
                <span className="text-white hover:text-white">Sign up</span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signIn(
  email: string,
  password: string,
): Promise<{ error: string } | null> {
  const supabase = await createClient();
  if (!supabase) return { error: "Authentication is not configured (missing Supabase env)." };

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  return null;
}

export async function signUp(
  email: string,
  password: string,
  displayName: string,
): Promise<{ error: string } | null> {
  const supabase = await createClient();
  if (!supabase) return { error: "Authentication is not configured (missing Supabase env)." };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const emailRedirectTo = siteUrl
    ? `${siteUrl.replace(/\/$/, "")}/auth/callback`
    : undefined;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { display_name: displayName },
      ...(emailRedirectTo ? { emailRedirectTo } : {}),
    },
  });
  if (error) return { error: error.message };
  return null;
}

export async function signOut(): Promise<void> {
  const supabase = await createClient();
  if (!supabase) return;
  await supabase.auth.signOut();
  redirect("/");
}

export async function getSessionUser(): Promise<{
  id: string;
  email: string | undefined;
  displayName: string | undefined;
} | null> {
  const supabase = await createClient();
  if (!supabase) return null;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  return {
    id: user.id,
    email: user.email,
    displayName:
      (user.user_metadata?.display_name as string | undefined) ??
      user.email?.split("@")[0],
  };
}

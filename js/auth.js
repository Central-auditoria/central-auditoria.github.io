import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from "./config.js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession();
  return { session: data?.session || null, error: error || null };
}

export async function getCurrentProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select("nome,email,perfil")
    .eq("user_id", userId)
    .maybeSingle();

  return { profile: data || null, error: error || null };
}

export async function requireCentralAccess() {
  const { session, error: sessionError } = await getCurrentSession();

  if (sessionError || !session?.user) {
    window.location.replace("../index.html");
    return null;
  }

  const { profile, error: profileError } = await getCurrentProfile(session.user.id);

  if (profileError || !["admin", "auditor"].includes(profile?.perfil)) {
    await supabase.auth.signOut();
    window.location.replace("../index.html?error=perfil");
    return null;
  }

  return { session, profile };
}

export async function logout() {
  await supabase.auth.signOut();
  window.location.replace("../index.html");
}

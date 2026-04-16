"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    const msg = encodeURIComponent(error.message ?? "Errore di autenticazione");
    redirect(`/login?error=${msg}`);
  }

  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    const msg = encodeURIComponent(
      error.message ?? "Errore in fase di registrazione",
    );
    redirect(`/login?error=${msg}`);
  }

  redirect("/");
}

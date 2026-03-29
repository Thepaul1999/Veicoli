'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function MainEditorPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || profile?.role !== "admin") {
        router.replace("/login");
        return;
      }

      setIsAdmin(true);
      setChecking(false);
    };

    checkAccess();
  }, [router]);

  if (checking) {
    return <div style={{ padding: "24px" }}>Controllo accesso...</div>;
  }

  if (!isAdmin) return null;

  return (
    <main style={{ padding: "24px" }}>
      <h1>Editor admin main</h1>
      <p>Accesso consentito solo agli admin.</p>
      <p>Qui nel prossimo step collegheremo l'editor vero del contenuto.</p>
    </main>
  );
}

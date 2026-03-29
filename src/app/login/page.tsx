"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email === "admin@admin.it" && password === "1234") {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/main");
      return;
    }

    alert("Credenziali errate");
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-6 space-y-4"
      >
        <h1 className="text-2xl font-semibold">Login Admin</h1>

        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black p-3 text-white placeholder:text-neutral-500 outline-none"
        />

        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black p-3 text-white placeholder:text-neutral-500 outline-none"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-white text-black p-3 font-medium"
        >
          Entra
        </button>
      </form>
    </main>
  );
}
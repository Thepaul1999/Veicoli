"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <Link
            href="/main"
            className="rounded-xl bg-white px-4 py-2 text-black font-medium"
          >
            Vai al sito
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
            <h2 className="text-lg font-semibold mb-2">Hero</h2>
            <p className="text-neutral-400">Qui poi modificherai titolo e sottotitolo.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
            <h2 className="text-lg font-semibold mb-2">Veicoli</h2>
            <p className="text-neutral-400">Qui poi modificherai elenco e dettagli.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5">
            <h2 className="text-lg font-semibold mb-2">Contatti</h2>
            <p className="text-neutral-400">Qui poi modificherai testo e pulsanti.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
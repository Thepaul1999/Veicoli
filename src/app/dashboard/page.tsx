"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type UserRole = "admin" | "viewer";

type SiteUser = {
  id: number;
  name: string;
  role: UserRole;
};

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [users, setUsers] = useState<SiteUser[]>([
    { id: 1, name: "Paolo", role: "admin" },
    { id: 2, name: "Mario", role: "viewer" },
  ]);

  useEffect(() => {
    setMounted(true);

    const saved = sessionStorage.getItem("siteUsers");
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem("siteUsers", JSON.stringify(users));
    }
  }, [users, mounted]);

  function updateName(id: number, value: string) {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, name: value } : user))
    );
  }

  function updateRole(id: number, value: UserRole) {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, role: value } : user))
    );
  }

  function addUser() {
    const newUser: SiteUser = {
      id: Date.now(),
      name: "",
      role: "viewer",
    };
    setUsers((prev) => [...prev, newUser]);
  }

  function removeUser(id: number) {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  }

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard Admin</h1>
            <p className="mt-2 text-neutral-400">
              Qui definisci chi è admin e chi è solo visualizzatore.
            </p>
          </div>

          <Link
            href="/main"
            className="rounded-xl bg-white px-4 py-2 text-black font-medium"
          >
            Vai al sito
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Utenti e ruoli</h2>

            <button
              onClick={addUser}
              className="rounded-xl bg-white px-4 py-2 text-black font-medium"
            >
              Aggiungi utente
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-neutral-400">
                  <th className="p-3">Nome</th>
                  <th className="p-3">Ruolo</th>
                  <th className="p-3">Azioni</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-white/5">
                    <td className="p-3">
                      <input
                        type="text"
                        value={user.name}
                        onChange={(e) => updateName(user.id, e.target.value)}
                        placeholder="Nome utente"
                        className="w-full rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
                      />
                    </td>

                    <td className="p-3">
                      <select
                        value={user.role}
                        onChange={(e) =>
                          updateRole(user.id, e.target.value as UserRole)
                        }
                        className="w-full rounded-xl border border-white/10 bg-black p-3 text-white outline-none"
                      >
                        <option value="viewer">viewer</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>

                    <td className="p-3">
                      <button
                        onClick={() => removeUser(user.id)}
                        className="rounded-xl border border-red-500 px-4 py-2 text-red-400"
                      >
                        Elimina
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            Per ora questi dati stanno in sessione browser. Dopo li colleghiamo a Supabase.
          </p>
        </div>
      </div>
    </main>
  );
}
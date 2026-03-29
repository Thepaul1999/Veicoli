'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function loginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handlelogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-6 text-white">
      <form
        onSubmit={handlelogin}
        className="w-full max-w-md space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6"
      >
        <h1 className="text-2xl font-bold">login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black p-3 text-white placeholder:text-white/40"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-black p-3 text-white placeholder:text-white/40"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-white px-4 py-3 text-black"
        >
          {loading ? 'Accesso...' : 'Accedi'}
        </button>

        <p className="text-sm text-white/70">
          Non hai un account?{' '}
          <a href="/signup" className="text-white underline">
            Registrati
          </a>
        </p>
      </form>
    </main>
  )
}
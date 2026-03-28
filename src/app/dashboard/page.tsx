'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setMessage('')
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

  async function handleSignup() {
    setError('')
    setMessage('')
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    setMessage('Registrazione completata. Controlla la mail oppure prova il login.')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-6 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6"
      >
        <h1 className="text-2xl font-bold">Login</h1>

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
        {message && <p className="text-green-400">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-white px-4 py-3 text-black"
        >
          {loading ? 'Attendi...' : 'Accedi'}
        </button>

        <p className="text-sm text-white/70">
          Non hai un account?
        </p>

        <button
          type="button"
          onClick={handleSignup}
          disabled={loading}
          className="w-full rounded-xl border border-white/10 px-4 py-3 text-white"
        >
          Registrati
        </button>
      </form>
    </main>
  )
}
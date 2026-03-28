import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/login')
}
<p className="text-sm text-white/70">
  Non hai un account?{' '}
  <a href="/signup" className="text-white underline">
    Registrati
  </a>
</p>
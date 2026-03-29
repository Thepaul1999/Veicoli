import { useAdmin } from '@/hooks/useAdmin'

export default function EditorPage() {
  const { checkAdmin } = useAdmin()

  // Se non admin, redirect o mostra messaggio
  if (!checkAdmin()) {
    return <div>Accesso negato. Solo admin.</div>
  }

  // ... resto del codice GrapesJS
}
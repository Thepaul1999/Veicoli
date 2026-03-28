import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ajlbsodrycezmuktdnqx.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqbGJzb2RyeWNlem11a3RkbnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2NTAyMDYsImV4cCI6MjA5MDIyNjIwNn0.qm3MY5PQxjbGL4jXCaq3tHnqWPokrqaUyx-7lZ_Yv6E'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
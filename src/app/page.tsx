/**
 * Landing Page (Home Page)
 * 
 * This is the main landing page at the root route "/"
 * It's a marketing-style page that introduces BudgetPilot to visitors.
 * 
 * In Next.js App Router:
 * - app/page.tsx is the page shown at "/"
 * - The file name "page.tsx" is special - it tells Next.js this is a route
 * - This page uses the root layout from app/layout.tsx
 */

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is logged in, redirect to dashboard
  if (user) {
    redirect('/dashboard')
  }

  // If not logged in, redirect to login
  redirect('/auth/login')
}
/**
 * Budgets Page
 * 
 * Placeholder page for budget management.
 * Later this will allow users to create and manage budgets for different categories.
 */

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function BudgetsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass-card-premium p-8">
          <h1 className="text-3xl font-bold text-white mb-4">Budgets</h1>
          <p className="text-white/60">
            This page will allow you to create and manage budgets for different spending categories.
          </p>
        </div>
      </div>
    </div>
  )
}

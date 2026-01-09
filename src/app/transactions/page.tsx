/**
 * Transactions Page
 * 
 * Placeholder page for the transactions view.
 * Later this will show a list of all financial transactions from connected accounts.
 */

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function TransactionsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-4">Transactions</h1>
          <p className="text-white/60">
            This page will display all your financial transactions once bank integration is added.
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * Settings Page
 * 
 * Placeholder page for user and app settings.
 * Later this will include account settings, preferences, and connected bank accounts.
 */

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function SettingsPage() {
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
          <h1 className="text-3xl font-bold text-white mb-4">Settings</h1>
          <p className="text-white/60">
            This page will contain user settings, preferences, and bank account connections.
          </p>
        </div>
      </div>
    </div>
  )
}

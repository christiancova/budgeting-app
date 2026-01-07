import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const handleSignOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* Header */}
      <header className="border-b border-[#E5E5E5] dark:border-[#404040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">
              BudgetFlow
            </h1>
            
            <form action={handleSignOut}>
              <Button
                type="submit"
                variant="outline"
                className="border-[#E5E5E5] dark:border-[#404040] text-[#0A0A0A] dark:text-[#FAFAFA] hover:bg-[#FAFAFA] dark:hover:bg-[#262626]"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-2">
            Welcome back{profile?.full_name ? `, ${profile.full_name}` : ''}! 👋
          </h2>
          <p className="text-[#737373]">
            Here's your financial overview
          </p>
        </div>

        {/* Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-xl p-6">
            <p className="text-xs uppercase tracking-wide text-[#A3A3A3] mb-2">
              Total Balance
            </p>
            <p className="text-3xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA] font-mono mb-1">
              $0.00
            </p>
            <p className="text-sm text-[#737373]">
              No transactions yet
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-xl p-6">
            <p className="text-xs uppercase tracking-wide text-[#A3A3A3] mb-2">
              Income
            </p>
            <p className="text-3xl font-bold text-[#22C55E] font-mono mb-1">
              $0.00
            </p>
            <p className="text-sm text-[#737373]">
              This month
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-xl p-6">
            <p className="text-xs uppercase tracking-wide text-[#A3A3A3] mb-2">
              Expenses
            </p>
            <p className="text-3xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA] font-mono mb-1">
              $0.00
            </p>
            <p className="text-sm text-[#737373]">
              This month
            </p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-white dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-xl p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-[#F5F5F5] dark:bg-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-8 h-8 text-[#A3A3A3]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-2">
              No transactions yet
            </h3>
            <p className="text-[#737373] mb-6">
              Start tracking your finances by adding your first transaction or uploading a bank statement.
            </p>
            
            <div className="flex gap-3 justify-center">
              <Button className="bg-[#0A0A0A] dark:bg-[#FAFAFA] text-white dark:text-[#0A0A0A] hover:bg-[#262626] dark:hover:bg-[#E5E5E5]">
                Add Transaction
              </Button>
              <Button 
                variant="outline"
                className="border-[#E5E5E5] dark:border-[#404040] text-[#0A0A0A] dark:text-[#FAFAFA] hover:bg-[#FAFAFA] dark:hover:bg-[#262626]"
              >
                Upload Statement
              </Button>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mt-8 p-4 bg-[#FAFAFA] dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-lg">
          <p className="text-xs uppercase tracking-wide text-[#A3A3A3] mb-2">
            Debug Info (remove in production)
          </p>
          <p className="text-sm text-[#737373]">
            <strong className="text-[#0A0A0A] dark:text-[#FAFAFA]">User ID:</strong> {user.id}
          </p>
          <p className="text-sm text-[#737373]">
            <strong className="text-[#0A0A0A] dark:text-[#FAFAFA]">Email:</strong> {user.email}
          </p>
        </div>
      </main>
    </div>
  )
}
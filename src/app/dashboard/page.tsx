import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { LogOut, TrendingUp, TrendingDown, Wallet, Plus, Upload } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

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
    <div className="min-h-screen bg-mesh">
      {/* Glass Navbar */}
      <nav className="glass-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold gradient-text">
              BudgetFlow
            </h1>
            
            <form action={handleSignOut}>
              <Button
                type="submit"
                className="glass-button flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12 floating">
          <h2 className="text-4xl font-bold mb-3">
            Welcome back{profile?.full_name ? `, ${profile.full_name}` : ''}! 👋
          </h2>
          <p className="text-white/60 text-lg">
            Here&apos;s your financial overview
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Total Balance Card */}
          <div className="glass-card-premium p-6 group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                Total Balance
              </span>
            </div>
            <p className="text-4xl font-bold mb-2 font-mono text-white">
              $0.00
            </p>
            <p className="text-sm text-white/60">
              No transactions yet
            </p>
          </div>

          {/* Income Card */}
          <div className="glass-card-premium p-6 group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-income/10 group-hover:bg-income/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-income" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                Income
              </span>
            </div>
            <p className="text-4xl font-bold mb-2 font-mono text-income">
              $0.00
            </p>
            <p className="text-sm text-white/60">
              This month
            </p>
          </div>

          {/* Expenses Card */}
          <div className="glass-card-premium p-6 group hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-expense/10 group-hover:bg-expense/20 transition-colors">
                <TrendingDown className="w-6 h-6 text-expense" />
              </div>
              <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                Expenses
              </span>
            </div>
            <p className="text-4xl font-bold mb-2 font-mono text-expense">
              $0.00
            </p>
            <p className="text-sm text-white/60">
              This month
            </p>
          </div>
        </div>

        {/* Empty State */}
        <div className="glass-card-premium p-12">
          <div className="max-w-md mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 mb-6 floating">
              <svg 
                className="w-12 h-12 text-primary" 
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
            
            <h3 className="text-2xl font-bold mb-3">
              No transactions yet
            </h3>
            <p className="text-white/60 mb-8">
              Start tracking your finances by adding your first transaction or uploading a bank statement.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="glass-button-primary flex items-center gap-2 h-12 px-6">
                <Plus className="w-5 h-5" />
                Add Transaction
              </Button>
              <Button className="glass-button flex items-center gap-2 h-12 px-6">
                <Upload className="w-5 h-5" />
                Upload Statement
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <button className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">💰</span>
            </div>
            <p className="text-sm font-medium">Transactions</p>
          </button>
          
          <button className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-sm font-medium">Budgets</p>
          </button>
          
          <button className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📈</span>
            </div>
            <p className="text-sm font-medium">Reports</p>
          </button>
          
          <button className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">⚙️</span>
            </div>
            <p className="text-sm font-medium">Settings</p>
          </button>
        </div>
      </main>
    </div>
  )
}
/**
 * Dashboard Main Page
 * 
 * This is the main dashboard page at "/dashboard"
 * It's the central hub where users will see their financial overview.
 * 
 * Currently this is a placeholder/shell page. Later it will show:
 * - Spending overview and trends
 * - Budget status and progress
 * - Connected bank accounts
 * - Recent transactions
 * - Financial goals and insights
 */

import DashboardShell from "@/components/DashboardShell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      {/* Welcome section with liquid glass styling */}
      <div className="glass-container p-8 mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to BudgetPilot
        </h1>
        <p className="text-gray-600">
          Your personal finance dashboard
        </p>
      </div>

      {/* Placeholder content area */}
      <div className="glass-container p-8 animate-slide-up">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Overview
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Future:</strong> This page will show your spending overview, budgets, 
          and bank accounts. Once we add authentication and bank integrations (Plaid or Teller), 
          you'll be able to connect your accounts and see real-time financial data here.
        </p>
        
        {/* Placeholder sections for future content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white/20 rounded-xl border border-white/30">
            <h3 className="font-semibold text-gray-700 mb-2">Spending</h3>
            <p className="text-sm text-gray-500">Coming soon</p>
          </div>
          <div className="p-6 bg-white/20 rounded-xl border border-white/30">
            <h3 className="font-semibold text-gray-700 mb-2">Budgets</h3>
            <p className="text-sm text-gray-500">Coming soon</p>
          </div>
          <div className="p-6 bg-white/20 rounded-xl border border-white/30">
            <h3 className="font-semibold text-gray-700 mb-2">Accounts</h3>
            <p className="text-sm text-gray-500">Coming soon</p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}




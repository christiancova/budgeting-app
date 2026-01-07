/**
 * Budgets Page
 * 
 * Placeholder page for budget management.
 * Later this will allow users to create and manage budgets for different categories.
 */

import DashboardShell from "@/components/DashboardShell";

export default function BudgetsPage() {
  return (
    <DashboardShell>
      <div className="glass-container p-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Budgets</h1>
        <p className="text-gray-600">
          This page will allow you to create and manage budgets for different spending categories.
        </p>
      </div>
    </DashboardShell>
  );
}




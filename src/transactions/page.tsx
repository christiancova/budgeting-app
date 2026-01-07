/**
 * Transactions Page
 * 
 * Placeholder page for the transactions view.
 * Later this will show a list of all financial transactions from connected accounts.
 */

import DashboardShell from "@/components/DashboardShell";

export default function TransactionsPage() {
  return (
    <DashboardShell>
      <div className="glass-container p-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Transactions</h1>
        <p className="text-gray-600">
          This page will display all your financial transactions once bank integration is added.
        </p>
      </div>
    </DashboardShell>
  );
}




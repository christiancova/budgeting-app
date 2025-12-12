/**
 * Navbar Component
 * 
 * Top navigation bar for the dashboard with Apple-style liquid glass aesthetic.
 * 
 * Features:
 * - Frosted-glass strip with backdrop-blur-xl
 * - Transparent white background (bg-white/10)
 * - Rounded-full shape for modern look
 * - Soft shadow (shadow-soft)
 * - App branding left, nav links middle, avatar right
 */

"use client"; // This tells Next.js this is a client component (can use interactivity)

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass-nav rounded-full px-6 py-3 shadow-soft">
      <div className="flex items-center justify-between">
        {/* App name/logo - links to dashboard home */}
        <Link href="/dashboard" className="text-xl font-semibold text-gray-800 hover:text-gray-700 transition-colors">
          BudgetPilot
        </Link>
        
        {/* Middle navigation links - simple nav */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
            Overview
          </Link>
          <Link href="/dashboard/transactions" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
            Transactions
          </Link>
          <Link href="/dashboard/budgets" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
            Budgets
          </Link>
        </div>
        
        {/* Right side - placeholder avatar */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/30 border border-white/40 flex items-center justify-center">
            <span className="text-xs text-gray-700 font-medium">U</span>
          </div>
        </div>
      </div>
    </nav>
  );
}


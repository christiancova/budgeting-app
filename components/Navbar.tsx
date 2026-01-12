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
    <nav className="glass-navbar rounded-full px-6 py-3">
      <div className="flex items-center justify-between">
        {/* App name/logo - links to dashboard home */}
        <Link href="/dashboard" className="text-xl font-semibold text-white hover:text-white/90 transition-colors">
          BudgetFLow
        </Link>
        
        {/* Middle navigation links - simple nav */}
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-sm text-white/90 hover:text-white transition-colors">
            Overview
          </Link>
          <Link href="/dashboard/transactions" className="text-sm text-white/90 hover:text-white transition-colors">
            Transactions
          </Link>
          <Link href="/dashboard/budgets" className="text-sm text-white/90 hover:text-white transition-colors">
            Budgets
          </Link>
        </div>
        
        {/* Right side - placeholder avatar */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-xs text-white font-medium">U</span>
          </div>
        </div>
      </div>
    </nav>
  );
}


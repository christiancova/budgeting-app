/**
 * Sidebar Component
 * 
 * Left sidebar navigation for the dashboard with Apple-style liquid glass aesthetic.
 * 
 * Features:
 * - Frosted glass vertical nav panel (rounded-3xl)
 * - Backdrop blur + translucent white background
 * - Border-white/20 for subtle definition
 * - Navigation links with hover effects
 * - Active link has filled glassy look
 * 
 * Navigation links:
 * - /dashboard → Overview
 * - /dashboard/transactions → Transactions
 * - /dashboard/budgets → Budgets
 * - /dashboard/settings → Settings
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items
const navItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Transactions", href: "/dashboard/transactions" },
  { name: "Budgets", href: "/dashboard/budgets" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname(); // Get current route to highlight active link

  return (
    <aside className="w-64 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-soft-lg">
      {/* Navigation links */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                block px-4 py-3 rounded-2xl transition-all duration-200
                ${isActive 
                  ? "bg-white/30 text-gray-900 font-semibold shadow-soft backdrop-blur-sm" 
                  : "text-gray-700 hover:bg-white/15 hover:text-gray-900"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section - placeholder for future user info */}
      <div className="mt-8 pt-8 border-t border-white/20">
        <p className="text-xs text-gray-500 text-center">
          BudgetFLow v1.0
        </p>
      </div>
    </aside>
  );
}


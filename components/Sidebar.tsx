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
    <aside className="w-64 glass-panel p-6">
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
                  ? "bg-white/10 text-white font-semibold backdrop-blur-sm" 
                  : "text-white/90 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section - placeholder for future user info */}
      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-xs text-white/40 text-center">
          BudgetFLow v1.0
        </p>
      </div>
    </aside>
  );
}


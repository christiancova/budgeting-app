/**
 * Dashboard Layout
 * 
 * Premium Apple-style liquid glass dashboard shell.
 * 
 * This layout wraps only the dashboard pages (anything under /dashboard/*)
 * It provides the navigation structure (sidebar/navbar) that should appear
 * on all dashboard pages.
 * 
 * Layouts in Next.js are nested:
 * - Root layout (app/layout.tsx) wraps everything
 * - Dashboard layout (app/dashboard/layout.tsx) wraps only dashboard pages
 * - This allows us to have different navigation for landing vs dashboard
 * 
 * Structure:
 * - Full-screen soft gradient background (bg-app-gradient)
 * - Radial highlight behind content for depth
 * - Glassy Navbar at the top (glass-nav)
 * - Glass Sidebar on the left (rounded-3xl)
 * - Main content wrapped in glass panel (glass-panel)
 */

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-app-gradient relative overflow-hidden">
      {/* Radial highlight behind content for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent pointer-events-none" 
           style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)' }} />
      
      <div className="relative z-10">
        {/* Top navigation bar - glassy strip */}
        <div className="px-6 pt-6 pb-4">
          <Navbar />
        </div>
        
        <div className="flex gap-6 px-6 pb-6">
          {/* Sidebar navigation - frosted glass vertical panel */}
          <Sidebar />
          
          {/* Main content area - wrapped in glass panel */}
          <main className="flex-1 glass-panel p-8 shadow-soft-lg">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}


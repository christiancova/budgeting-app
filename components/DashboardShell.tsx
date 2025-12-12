/**
 * DashboardShell Component
 * 
 * A wrapper component for dashboard content.
 * Provides consistent structure and styling for dashboard pages.
 * 
 * This is a reusable container that ensures all dashboard content
 * has the same visual treatment and spacing.
 * 
 * Why separate this component?
 * - Keeps dashboard pages clean and focused on their specific content
 * - Allows us to add common dashboard features (like breadcrumbs) in one place
 * - Makes it easy to apply consistent styling across all dashboard pages
 */

import { ReactNode } from "react";

interface DashboardShellProps {
  children: ReactNode;
}

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* 
        This wrapper provides:
        - Max width constraint so content doesn't stretch too wide
        - Consistent margins
        - A container for all dashboard page content
      */}
      {children}
    </div>
  );
}




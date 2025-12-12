/**
 * GlassCard Component
 * 
 * Smaller glassy containers for stats/widgets with Apple-style liquid glass aesthetic.
 * 
 * Features:
 * - Rounded-2xl for cards
 * - Soft blur for frosted effect
 * - Subtle white border
 * - Perfect for stats, widgets, and smaller content blocks
 * 
 * Usage:
 * - Display statistics and metrics
 * - Create widget containers
 * - Use for card-based layouts
 * - Accepts className prop for extension
 */

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`glass-card ${className}`}>
      {children}
    </div>
  );
}



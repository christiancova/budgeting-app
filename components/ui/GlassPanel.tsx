/**
 * GlassPanel Component
 * 
 * Reusable panel component for large containers with Apple-style liquid glass aesthetic.
 * 
 * Features:
 * - Rounded-3xl for large surfaces
 * - Border-white/20 for subtle definition
 * - Backdrop blur for frosted glass effect
 * - Soft shadows for floating effect
 * 
 * Usage:
 * - Wrap main content areas
 * - Use for large dashboard sections
 * - Accepts className prop for extension
 */

import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({ children, className = "" }: GlassPanelProps) {
  return (
    <div className={`glass-panel ${className}`}>
      {children}
    </div>
  );
}



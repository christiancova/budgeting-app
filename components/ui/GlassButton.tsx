/**
 * GlassButton Component
 * 
 * Glass CTA button with Apple-style liquid glass aesthetic.
 * 
 * Features:
 * - Rounded-full shape
 * - Transparent white background
 * - Scale hover effect
 * - Soft shadow
 * - Smooth transitions
 * 
 * Usage:
 * - Primary action buttons
 * - Call-to-action elements
 * - Interactive buttons throughout the dashboard
 * - Accepts className prop for extension
 */

import { ReactNode, ButtonHTMLAttributes } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function GlassButton({ children, className = "", ...props }: GlassButtonProps) {
  return (
    <button
      className={`
        glass-button
        rounded-full
        px-6 py-3
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        text-gray-800
        font-medium
        shadow-soft
        transition-all duration-200
        hover:scale-105
        hover:bg-white/30
        hover:shadow-soft-lg
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}



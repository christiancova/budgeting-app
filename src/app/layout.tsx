/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire app.
 * It wraps every page and defines the HTML structure, metadata, and global styles.
 * 
 * In Next.js App Router, the layout.tsx file in the app directory is special:
 * - It wraps all pages in the app
 * - It's shared across all routes
 * - It's where you put things like navigation that should appear on every page
 * 
 * Later, we'll add things like:
 * - Auth providers
 * - Database connection setup
 * - Global error boundaries
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load the Inter font from Google Fonts
// This gives us a clean, modern sans-serif font
const inter = Inter({ subsets: ["latin"] });

// Metadata for the app (shown in browser tab, SEO, etc.)
export const metadata: Metadata = {
  title: "BudgetFLow - Personal Finance & Budgeting",
  description: "Take control of your finances with BudgetFLow. Track spending, manage budgets, and achieve your financial goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 
          All page content will be rendered here as {children}
          Each page in the app directory will be wrapped by this layout
        */}
        {children}
      </body>
    </html>
  );
}




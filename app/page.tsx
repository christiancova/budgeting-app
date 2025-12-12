/**
 * Landing Page (Home Page)
 * 
 * This is the main landing page at the root route "/"
 * It's a marketing-style page that introduces BudgetPilot to visitors.
 * 
 * In Next.js App Router:
 * - app/page.tsx is the page shown at "/"
 * - The file name "page.tsx" is special - it tells Next.js this is a route
 * - This page uses the root layout from app/layout.tsx
 */

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* 
        Background gradient with subtle animated elements
        Creates depth and visual interest for the liquid glass aesthetic
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main content container with liquid glass styling */}
      <div className="glass-container p-12 max-w-2xl w-full text-center relative z-10 animate-fade-in">
        {/* App Logo/Title */}
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          BudgetPilot
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl text-gray-700 mb-6 font-light">
          Personal Finance & Budgeting Made Simple
        </p>
        
        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Take control of your finances with BudgetPilot. Track your spending, 
          manage budgets, and achieve your financial goals with an intuitive 
          and beautiful interface.
        </p>
        
        {/* Call to Action Button */}
        <Link 
          href="/dashboard"
          className="inline-block px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl 
                     shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 
                     font-medium text-lg animate-slide-up"
        >
          Get Started
        </Link>
      </div>

      {/* Additional info section */}
      <div className="mt-12 glass-container p-8 max-w-2xl w-full relative z-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <p className="text-sm text-gray-500">
          <strong>Note:</strong> This is Step 1 of BudgetPilot. Authentication, database integration, 
          and bank connections will be added in future steps.
        </p>
      </div>
    </main>
  );
}




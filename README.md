# BudgetPilot

A modern personal finance and budgeting web application built with Next.js.

## 🎯 Project Status

**Current Phase: Step 1 - Project Bootstrap**

This is the initial setup phase of BudgetPilot. We've created a solid foundation with:
- Next.js 14 with App Router and TypeScript
- Tailwind CSS for styling
- Liquid glass UI design aesthetic
- Basic page structure and navigation

**Not yet implemented (coming in future steps):**
- Authentication (Auth.js/NextAuth)
- Database (PostgreSQL via Prisma)
- Bank integrations (Plaid or Teller)
- Real financial data and transactions

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
budgeting app/
├── app/                      # Next.js App Router directory
│   ├── layout.tsx           # Root layout (wraps all pages)
│   ├── page.tsx             # Landing page (/)
│   ├── globals.css          # Global styles and Tailwind imports
│   └── dashboard/           # Dashboard section
│       ├── layout.tsx       # Dashboard-specific layout (sidebar/navbar)
│       ├── page.tsx         # Main dashboard page
│       ├── transactions/   # Transactions page (placeholder)
│       ├── budgets/         # Budgets page (placeholder)
│       └── settings/        # Settings page (placeholder)
├── components/              # Reusable React components
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Sidebar.tsx         # Left sidebar navigation
│   └── DashboardShell.tsx  # Dashboard content wrapper
├── lib/                     # Utility functions (placeholder for now)
└── public/                  # Static assets (images, etc.)
```

## 🎨 Design Philosophy

BudgetPilot uses a **liquid glass UI** aesthetic inspired by modern Apple design:
- Frosted glass effects with backdrop blur
- Subtle gradients and soft shadows
- Rounded corners and layered depth
- Smooth animations and transitions
- Minimal color palette with neutral tones

## 📝 How Next.js App Router Works

- **`app/layout.tsx`**: The root layout wraps every page in the app
- **`app/page.tsx`**: The home page at `/`
- **`app/dashboard/page.tsx`**: The dashboard at `/dashboard`
- **`app/dashboard/layout.tsx`**: Layout that wraps only dashboard pages (adds sidebar/navbar)
- File-based routing: folders create routes, `page.tsx` files are the actual pages

## 🔜 Next Steps

When ready to move to Step 2, we'll add:
1. Authentication with Auth.js (NextAuth)
2. PostgreSQL database with Prisma ORM
3. User accounts and sessions
4. Bank account integration (Plaid or Teller sandbox)

## 💡 For Developers

This project is structured to be beginner-friendly with:
- Clear comments explaining what each file does
- Simple, focused components
- TypeScript for type safety
- Consistent naming conventions

If you're new to Next.js App Router, start by reading the comments in `app/layout.tsx` and `app/page.tsx` to understand how routing and layouts work.




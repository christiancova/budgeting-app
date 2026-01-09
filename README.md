# BudgetFlow

A modern personal finance management application built with Next.js, TypeScript, and Supabase. Track expenses, manage budgets, and gain intelligent insights into your spending habits with a beautiful, minimalist interface.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### ✅ Phase 1: Authentication & Foundation (Complete)

- 🔐 **Secure Authentication**
  - Email/password signup and login
  - Password recovery via email
  - JWT-based session management
  - Protected routes with middleware
  - Row-level security in database

- 👤 **User Management**
  - User profiles with Supabase
  - Automatic profile creation on signup
  - Personalized dashboard

- 🎨 **Modern UI/UX**
  - Pure black background with white text design
  - Glass morphism effects with backdrop blur
  - Fully responsive (mobile, tablet, desktop)
  - Clean, accessible interface
  - Smooth animations and transitions
  - Green (income) and Orange (expenses) accent colors

### 🚧 Coming Soon

- 📊 **Transaction Management** (Phase 1.5)
  - Manual transaction entry
  - Category management
  - Transaction filtering and search
  - Edit and delete transactions

- 📁 **Bank Statement Upload** (Phase 2)
  - CSV, Excel, and PDF support
  - Automatic transaction parsing
  - Smart categorization with AI
  - Duplicate detection

- 💰 **Budget Tracking** (Phase 2)
  - Create monthly budgets by category
  - Real-time spending tracking
  - Budget alerts and warnings
  - Progress visualization

- 🤖 **AI-Powered Insights** (Phase 3)
  - Natural language query chatbot
  - Spending pattern analysis
  - Budget recommendations
  - Savings opportunities

- 📈 **Reports & Analytics** (Phase 4)
  - Monthly/yearly reports
  - Category breakdowns
  - Trend analysis
  - Export functionality (PDF, CSV)

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Backend
- **Database:** [PostgreSQL](https://www.postgresql.org/) via [Supabase](https://supabase.com/)
- **Authentication:** [Supabase Auth](https://supabase.com/auth)
- **ORM:** Supabase Client
- **File Parsing:** pdf-parse, xlsx, papaparse (planned)

### AI Integration (Planned)
- **LLM:** [Anthropic Claude](https://www.anthropic.com/claude) API

### Deployment
- **Hosting:** [Vercel](https://vercel.com/)
- **Database:** Supabase Cloud

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager
- Supabase account (free tier works great)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/budget-tracker.git
   cd budget-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up Supabase**
   
   a. Create a project at [supabase.com](https://supabase.com)
   
   b. Run the database schema (found in `/docs/schema.sql` or see below)
   
   c. Get your API credentials from Settings → API

4. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Database Setup

Run this SQL in your Supabase SQL Editor:

```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;

-- Profiles policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Function to create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile automatically
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## 📁 Project Structure

```
budget-tracker/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── auth/                # Authentication pages
│   │   │   ├── login/          # Login page
│   │   │   ├── signup/         # Signup page
│   │   │   └── forgot-password/ # Password recovery
│   │   ├── dashboard/          # Main dashboard
│   │   ├── transactions/       # Transaction management (placeholder)
│   │   ├── budgets/            # Budget management (placeholder)
│   │   ├── settings/           # User settings (placeholder)
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page (redirects)
│   │   └── globals.css         # Global styles
│   └── lib/                     # Utilities
│       ├── supabase/           # Supabase clients
│       │   ├── client.ts       # Browser client
│       │   └── server.ts       # Server client
│       └── utils.ts            # Helper functions
├── components/                  # Reusable components
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx         # Button component
│   │   ├── GlassButton.tsx     # Glass button variant
│   │   ├── GlassCard.tsx       # Glass card component
│   │   ├── GlassPanel.tsx      # Glass panel component
│   │   ├── input.tsx           # Input component
│   │   └── label.tsx           # Label component
│   ├── Navbar.tsx              # Navigation bar
│   ├── Sidebar.tsx             # Sidebar navigation
│   └── DashboardShell.tsx     # Dashboard wrapper
├── middleware.ts                # Route protection
├── .env.local                   # Environment variables (create this)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Color Palette

**Theme: Pure Black & White**
- Background: `#000000` (Pure Black)
- Primary Buttons: `#FFFFFF` (White) with black text
- Text: White with opacity variants (40%, 60%, 90%, 100%)
- Glass Effects: Black with 30-40% opacity + white gradient overlay (5-8% opacity)
- Borders: `rgba(255, 255, 255, 0.1)` (10% white)

**Accent Colors:**
- Income: `rgb(34, 197, 94)` (Green)
- Expenses: `rgb(249, 115, 22)` (Orange)

### Glass Morphism Effects

- **Background:** `bg-black/40` (40% black opacity)
- **Blur:** `backdrop-blur-2xl`
- **Border:** `border-white/10` (10% white)
- **Gradient Overlay:** White 5-8% opacity gradient
- **Buttons:**
  - Primary: Solid white background, black text
  - Secondary: Transparent with `white/5` tint
  - Hover: Subtle scale (1.02) and glow effects

### Typography
- **Font:** Inter (sans-serif)
- **Monospace:** JetBrains Mono (for numbers)
- **Spacing:** 8px grid system

## 🔒 Security

- **Authentication:** JWT tokens with 7-day expiration
- **Database:** Row-level security (RLS) policies
- **API:** Rate limiting on endpoints
- **Environment:** Sensitive data in .env.local (not committed)
- **Encryption:** TLS 1.3 in transit, database encryption at rest

## 📊 Current Status

### Completed ✅
- [x] Project setup and configuration
- [x] Supabase integration
- [x] User authentication (signup, login, logout)
- [x] Password recovery flow
- [x] Protected routes with middleware
- [x] User profiles and database
- [x] Dashboard UI with glass morphism design
- [x] Responsive design
- [x] Pure black & white design system
- [x] Placeholder pages (transactions, budgets, settings)

### In Progress 🚧
- [ ] Transaction management system
- [ ] Category system
- [ ] Manual transaction entry

### Planned 📋
- [ ] Bank statement upload
- [ ] Budget creation and tracking
- [ ] AI-powered insights
- [ ] Reports and analytics
- [ ] Data export

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome! Feel free to:
- Open an issue for bugs or feature requests
- Fork the repo and experiment
- Share your own implementations

## 📝 Development Log

### Phase 1: Authentication (Complete)
- Implemented email/password authentication
- Created signup, login, and password recovery pages
- Set up Supabase database with RLS policies
- Built protected dashboard
- Applied pure black & white design system with glass morphism effects
- Created placeholder pages for transactions, budgets, and settings

### Design Decision: Statement Upload vs. Direct Banking
**Decision:** Use bank statement upload instead of Plaid integration

**Rationale:**
- Enhanced user privacy (no stored bank credentials)
- Lower costs (no Plaid subscription fees)
- Universal compatibility (works with any bank)
- User control (manual upload when desired)
- Simpler security model (no OAuth tokens to manage)

## 📜 License

MIT License - feel free to use this project for learning!

## 🙏 Acknowledgments

- Design inspiration: [Monarch Money](https://www.monarchmoney.com/), [Linear](https://linear.app/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)
- Backend: [Supabase](https://supabase.com/)
- Framework: [Next.js](https://nextjs.org/)

## 📫 Contact

**Developer:** Your Name
- GitHub: (https://www.linkedin.com/in/christian-cova)
- Portfolio: [your-portfolio.com](https://your-portfolio.com)

---

**Built with ❤️ for learning and personal finance management**
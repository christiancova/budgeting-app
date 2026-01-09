'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Redirect to dashboard on success
      router.push('/dashboard')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0A0A0A] px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-2">
            BudgetFlow
          </h1>
          <p className="text-sm text-[#737373]">
            Sign in to manage your finances
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-xl p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 bg-[#FAFAFA] dark:bg-[#0A0A0A] border-[#E5E5E5] dark:border-[#404040] text-[#0A0A0A] dark:text-[#FAFAFA] placeholder:text-[#A3A3A3] focus:ring-2 focus:ring-[#0A0A0A] dark:focus:ring-[#FAFAFA]"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label 
                  htmlFor="password"
                  className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]"
                >
                  Password
                </Label>
                <Link 
                  href="/auth/forgot-password"
                  className="text-xs text-[#737373] hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-10 bg-[#FAFAFA] dark:bg-[#0A0A0A] border-[#E5E5E5] dark:border-[#404040] text-[#0A0A0A] dark:text-[#FAFAFA] placeholder:text-[#A3A3A3] focus:ring-2 focus:ring-[#0A0A0A] dark:focus:ring-[#FAFAFA]"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-[#FEF2F2] dark:bg-[#7F1D1D] border border-[#FEE2E2] dark:border-[#991B1B]">
                <p className="text-sm text-[#DC2626] dark:text-[#FCA5A5]">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-10 bg-[#0A0A0A] dark:bg-[#FAFAFA] text-white dark:text-[#0A0A0A] hover:bg-[#262626] dark:hover:bg-[#E5E5E5] font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E5E5] dark:border-[#404040]" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white dark:bg-[#171717] text-[#737373]">
                Don&apos;t have an account?
              </span>
            </div>
          </div>

          {/* Sign Up Link */}
          <Link href="/auth/signup">
            <Button
              type="button"
              variant="outline"
              className="w-full h-10 border-[#E5E5E5] dark:border-[#404040] text-[#0A0A0A] dark:text-[#FAFAFA] hover:bg-[#FAFAFA] dark:hover:bg-[#262626] font-medium transition-all"
            >
              Create account
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#A3A3A3] mt-8">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-[#737373]">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="underline hover:text-[#737373]">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
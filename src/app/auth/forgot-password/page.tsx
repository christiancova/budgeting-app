'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/lib/supabase/client'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error

      setSuccess(true)
    } catch (err: any) {
      setError(err.message || 'An error occurred while sending reset email')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0A0A0A] px-4">
        <div className="w-full max-w-md">
          {/* Success State */}
          <div className="bg-white dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DCFCE7] dark:bg-[#166534] mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#22C55E]" />
            </div>
            
            <h2 className="text-2xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-3">
              Check your email
            </h2>
            
            <p className="text-[#737373] mb-8">
              We've sent a password reset link to <strong className="text-[#0A0A0A] dark:text-[#FAFAFA]">{email}</strong>
            </p>

            <div className="space-y-3">
              <Link href="/auth/login" className="block">
                <Button className="w-full h-10 bg-[#0A0A0A] dark:bg-[#FAFAFA] text-white dark:text-[#0A0A0A] hover:bg-[#262626] dark:hover:bg-[#E5E5E5] font-medium">
                  Back to login
                </Button>
              </Link>
              
              <button
                onClick={() => setSuccess(false)}
                className="text-sm text-[#737373] hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
              >
                Didn't receive the email? Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0A0A0A] px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link 
          href="/auth/login"
          className="inline-flex items-center text-sm text-[#737373] hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to login
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-2">
            Reset your password
          </h1>
          <p className="text-sm text-[#737373]">
            Enter your email and we'll send you a link to reset your password
          </p>
        </div>

        {/* Reset Form */}
        <div className="bg-white dark:bg-[#171717] border border-[#E5E5E5] dark:border-[#404040] rounded-xl p-8">
          <form onSubmit={handleResetPassword} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]"
              >
                Email address
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
              {loading ? 'Sending...' : 'Send reset link'}
            </Button>
          </form>
        </div>

        {/* Help Text */}
        <p className="text-center text-xs text-[#A3A3A3] mt-6">
          Remember your password?{' '}
          <Link href="/auth/login" className="text-[#737373] underline hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

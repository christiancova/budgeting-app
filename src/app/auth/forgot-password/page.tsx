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
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md">
          {/* Success State */}
          <div className="glass-card-premium p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-income/20 mb-6">
              <CheckCircle2 className="w-8 h-8 text-income" />
            </div>
            
            <h2 className="text-2xl font-semibold text-white mb-3">
              Check your email
            </h2>
            
            <p className="text-white/60 mb-8">
              We've sent a password reset link to <strong className="text-white">{email}</strong>
            </p>

            <div className="space-y-3">
              <Link href="/auth/login" className="block">
                <Button className="glass-button-primary w-full h-12 font-medium">
                  Back to login
                </Button>
              </Link>
              
              <button
                onClick={() => setSuccess(false)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Didn&apos;t receive the email? Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link 
          href="/auth/login"
          className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to login
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Reset your password
          </h1>
          <p className="text-sm text-white/60">
            Enter your email and we'll send you a link to reset your password
          </p>
        </div>

        {/* Reset Form */}
        <div className="glass-card-premium p-8">
          <form onSubmit={handleResetPassword} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-sm font-medium text-white"
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
                className="glass-input h-12"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="glass-card p-4 border-destructive/50 bg-destructive/10">
                <p className="text-sm text-destructive">
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="glass-button-primary w-full h-12 font-medium"
            >
              {loading ? 'Sending...' : 'Send reset link'}
            </Button>
          </form>
        </div>

        {/* Help Text */}
        <p className="text-center text-xs text-white/60 mt-6">
          Remember your password?{' '}
          <Link href="/auth/login" className="text-white/90 underline hover:text-white transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

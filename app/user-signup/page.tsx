'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { authService } from '@/lib/api/auth'
import { toast } from 'sonner'

const SignupPage = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [showLoader, setShowLoader] = useState(false)
  const [error, setError] = useState('')

  // Check if already authenticated, redirect to home
  useEffect(() => {
    if (authService.isAuthenticated()) {
      router.replace('/')
    }
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validate passwords match
   

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    
    // Delay showing loader by 300ms to avoid flashing for quick responses
    const loaderTimeout = setTimeout(() => {
      setShowLoader(true)
    }, 300)

    try {
      const response = await authService.userSignup({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: 'USER',
      })

      if (!response.success) {
        throw new Error(response.error || 'Signup failed')
      }

      // Check if account needs approval
      if (response.data?.pendingApproval) {
        toast.success('Account created successfully! Your account is pending admin approval. You will receive a notification once approved.')
      } else {
        toast.success('Account created successfully! Redirecting to login...')
      }
      
      // Redirect to login page
      setTimeout(() => {
        router.push('/user-signIn')
      }, 3000)
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
      setError(errorMessage)
    } finally {
      clearTimeout(loaderTimeout)
      setShowLoader(false)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 relative">
        {showLoader && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 rounded-2xl">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-secondary border-t-transparent rounded-full animate-spin transform rotate-45"></div>
              <div className="absolute inset-2 border-4 border-primary border-b-transparent rounded-full animate-spin transform -rotate-45" style={{ animationDirection: 'reverse' }}></div>
            </div>
          </div>
        )}
        <div className="text-center mb-8">
             <div className="flex justify-center items-center">

           <img src="/images/logo.png" className="w-60 object-cover" alt="Nursery Logo" />
          </div>
          <p className="text-gray-600">Join us and find the perfect nursery</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+44 123 456 7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

       

          <Button
            type="submit"
            className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg font-medium"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/user-signIn" className="text-primary font-medium hover:underline">
              Sign In
            </Link>
          </p>
     
        </div>
      </div>
    </div>
  )
}

export default SignupPage

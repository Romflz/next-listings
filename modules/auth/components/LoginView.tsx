'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { mapFirebaseError } from '../utils/firebaseErrors'
import { validateLoginRegisterForm } from '../utils/validateForm'
import { signInWithGoogle, signInWithEmail, createAccount } from '../utils/firebaseLogin'
import LoginForm from './LoginForm'
import { login } from '../server/auth'

interface FormData {
  email: string
  password: string
  confirmPassword: string
}

interface UserProfile {
  id: string
  email: string
  name?: string
  uid: string
  emailVerified: boolean
  picture?: string
}

export default function LoginView() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // State
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // Methods
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode)
    setErrorMessage('')
    setSuccessMessage('')
  }

  const handleFormSubmit = async (formData: FormData) => {
    setErrorMessage('')
    setSuccessMessage('')

    if (!validateLoginRegisterForm(formData, isLoginMode)) {
      setErrorMessage('Please check your input')
      return
    }

    setLoading(true)

    try {
      // Use the appropriate utility function
      const authResult = isLoginMode ? await signInWithEmail(formData.email, formData.password) : await createAccount(formData.email, formData.password)

      if (!authResult.idToken) {
        throw new Error('Failed to get authentication token')
      }

      // Exchange token for session using reverse proxy
      const result = await login(authResult.idToken)

      if (result.success) {
        setSuccessMessage(isLoginMode ? 'Successfully logged in!' : 'Account created successfully!')

        // Redirect after successful auth
        const redirect = searchParams.get('redirect') || '/dashboard'
        setTimeout(() => router.push(redirect), 1000)
      } else {
        setErrorMessage(result.error || 'Authentication failed')
      }
    } catch (error) {
      setErrorMessage(mapFirebaseError(error))
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setErrorMessage('')
    setSuccessMessage('')
    setLoading(true)

    try {
      // Use the Google sign-in utility
      const authResult = await signInWithGoogle()

      if (!authResult.idToken) {
        throw new Error('Failed to get authentication token')
      }

      // Exchange token for session using reverse proxy
      const result = await login(authResult.idToken)

      if (result.success) {
        setSuccessMessage('Successfully logged in with Google!')
        const redirect = searchParams.get('redirect') || '/dashboard'
        setTimeout(() => router.push(redirect), 1000)
      } else {
        setErrorMessage(result.error || 'Google login failed')
      }
    } catch (error) {
      setErrorMessage(mapFirebaseError(error))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form Section - Mobile First */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="mb-4">
            <Image src="/images/logos/Room4RentLogo.png" alt="Logo" width={230} height={0} className="mb-4" priority />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{isLoginMode ? 'Welcome back' : 'Get started'}</h1>
            <p className="mt-2 text-gray-600">{isLoginMode ? 'Enter your credentials to access your account' : 'Create your account to continue'}</p>
          </div>

          {/* Login Form Component */}
          <LoginForm
            isLoginMode={isLoginMode}
            loading={loading}
            errorMessage={errorMessage}
            successMessage={successMessage}
            onSubmit={handleFormSubmit}
            onGoogleLogin={handleGoogleLogin}
            onToggleMode={toggleMode}
          />
        </div>
      </div>

      {/* Image Section - Hidden on Mobile, Visible on Large Screens */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-black opacity-10"></div>

          {/* Content Overlay */}
          <div className="relative h-full flex items-center justify-center p-12">
            <div className="max-w-md text-white">
              <h2 className="text-4xl font-bold mb-6">Find a room for rent fast</h2>
              <p className="text-lg mb-8 text-white/90">Malta's best platform to find shared or private rooms.</p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">Free to Get Started</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">Verified Accounts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">Accurate & Real Listings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}

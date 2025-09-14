'use server'

import { cookies } from 'next/headers'
import { firebaseAuth } from '@/shared/lib/firebase/server'
import { upsertUser } from '@/models/userModel'

interface UserProfile {
  id: string
  uid: string
  email: string | null
  name: string | null
  emailVerified: boolean
  picture: string | null
}

export async function login(idToken: string) {
  try {
    // 1. Verify the ID token using your existing Firebase Admin SDK
    const decodedToken = await firebaseAuth.verifyIdToken(idToken)

    // 2. Extract user data from the decoded token
    const userData = {
      uid: decodedToken.uid,
      name: decodedToken.name || decodedToken.display_name || null,
      email: decodedToken.email || null,
      emailVerified: decodedToken.email_verified || false,
      picture: decodedToken.picture || null,
    }

    // 3. Upsert user in database
    const user = await upsertUser(userData)

    // 4. Create the session cookie (expires in 14 days)
    const expiresIn = 60 * 60 * 24 * 14 * 1000
    const sessionCookie = await firebaseAuth.createSessionCookie(idToken, { expiresIn })

    // 5. Get the cookies store first (async in Next.js 15)
    const cookieStore = await cookies()
    
    // 6. Set cookie using Next.js cookies API
    cookieStore.set('__session', sessionCookie, {
      maxAge: expiresIn / 1000, // maxAge is in seconds for Next.js
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/', // Ensure cookie is available site-wide
    })

    // 7. Return success with user data
    return {
      success: true,
      user: user as UserProfile,
    }
  } catch (error) {
    console.error('Token exchange error:', error)

    // Handle specific Firebase errors
    if (error instanceof Error) {
      if (error.message.includes('Firebase ID token has expired')) {
        return {
          success: false,
          error: 'Session expired. Please sign in again.',
        }
      }
      if (error.message.includes('Decoding Firebase ID token failed')) {
        return {
          success: false,
          error: 'Invalid authentication token.',
        }
      }
    }

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to exchange token',
    }
  }
}

export async function logout() {
  try {
    // Get the cookies store first (async in Next.js 15)
    const cookieStore = await cookies()
    
    // Clear the session cookie
    cookieStore.set('__session', '', {
      expires: new Date(0),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      path: '/',
    })

    return { success: true }
  } catch (error) {
    console.error('Logout error:', error)
    return {
      success: false,
      error: 'Failed to logout',
    }
  }
}

// Optional: Server action to verify if user is authenticated
export async function verifyAuth() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('__session')?.value

    if (!sessionCookie) {
      return { authenticated: false }
    }

    // Verify the session cookie
    const decodedClaims = await firebaseAuth.verifySessionCookie(sessionCookie, true)

    return {
      authenticated: true,
      user: {
        uid: decodedClaims.uid,
        email: decodedClaims.email || null,
        emailVerified: decodedClaims.email_verified || false,
      },
    }
  } catch (error) {
    console.error('Session verification error:', error)
    return { authenticated: false }
  }
}

// Optional: You can also use your existing verifyIdToken helper
export async function verifyToken(idToken: string) {
  try {
    const decodedToken = await firebaseAuth.verifyIdToken(idToken, true)
    return {
      success: true,
      decoded: decodedToken,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Invalid token',
    }
  }
}
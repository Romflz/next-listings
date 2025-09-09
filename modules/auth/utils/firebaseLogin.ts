'use client'

import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, type UserCredential } from 'firebase/auth'
import { auth } from '@/shared/lib/firebase/client'

export interface AuthResult {
  success: boolean
  credential?: UserCredential
  idToken?: string
  error?: string
}

/**
 * Sign in with Google using Firebase Auth
 * Returns the credential and ID token if successful
 */
export const signInWithGoogle = async (): Promise<AuthResult> => {
  try {
    const provider = new GoogleAuthProvider()
    const credential = await signInWithPopup(auth, provider)
    const idToken = await credential.user.getIdToken()

    return {
      success: true,
      credential,
      idToken,
    }
  } catch (error) {
    // Let the caller handle the error mapping
    throw error
  }
}

/**
 * Sign in with email and password
 */
export const signInWithEmail = async (email: string, password: string): Promise<AuthResult> => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password)
    const idToken = await credential.user.getIdToken()

    return {
      success: true,
      credential,
      idToken,
    }
  } catch (error) {
    throw error
  }
}

/**
 * Create account with email and password
 */
export const createAccount = async (email: string, password: string): Promise<AuthResult> => {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    const idToken = await credential.user.getIdToken()

    return {
      success: true,
      credential,
      idToken,
    }
  } catch (error) {
    throw error
  }
}

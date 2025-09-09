'use client'

import { FirebaseError } from 'firebase/app'

const AUTH_MESSAGES: Record<string, string> = {
  'auth/invalid-email': 'That email address looks invalid.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/user-not-found': 'No account found with that email.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/email-already-in-use': 'That email is already in use.',
  'auth/weak-password': 'Please use a stronger password.',
  'auth/operation-not-allowed': 'Email/password sign-in is disabled.',
  'auth/too-many-requests': 'Too many attempts. Try again later.',
  'auth/network-request-failed': 'Network error. Check your connection.',
  'auth/popup-closed-by-user': 'Sign-in was canceled.',
  'auth/cancelled-popup-request': 'Sign-in request was canceled.',
  'auth/popup-blocked': 'Your browser blocked the sign-in popup.',
  'auth/requires-recent-login': 'Please sign in again to continue.',
}

export function mapFirebaseError(err: unknown, fallback = 'Something went wrong. Please try again.'): string {
  if (isFirebaseError(err)) {
    return AUTH_MESSAGES[err.code] ?? fallback
  }
  if (err instanceof Error && err.message) return err.message
  return fallback
}

function isFirebaseError(err: unknown): err is FirebaseError {
  return !!err && typeof err === 'object' && 'code' in (err as any)
}

import { cookies } from 'next/headers'
import { firebaseAuth } from '../firebase/server'
import type { DecodedIdToken } from 'firebase-admin/auth'

export async function checkAuth(): Promise<DecodedIdToken | null> {
  // Get the session cookie from the incoming request
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('__session')?.value || ''

  if (!sessionCookie) {
    return null
  }

  try {
    // Verify the session cookie
    const decodedToken = await firebaseAuth.verifySessionCookie(sessionCookie, true)
    return decodedToken as DecodedIdToken
  } catch (error) {
    // Session cookie is invalid or revoked
    return null
  }
}